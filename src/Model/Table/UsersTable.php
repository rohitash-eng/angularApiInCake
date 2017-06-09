<?php

namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\ORM\TableRegistry;
use Cake\Core\Configure;
use Cake\Datasource\ConnectionManager;
use Cake\Event\Event;
use Cake\Auth\DefaultPasswordHasher;
use Cake\Mailer\Email;
use Cake\Routing\Router;
use Cake\Utility\Text;
use Cake\Utility\Security;
use App\Controller\Component;
use App\Model\Validation;

//require_once(ROOT . DS . 'vendor' . DS . 'aws' . DS . 'aws-autoloader.php');

/**
 * Users Model
 *
 * @property \Cake\ORM\Association\BelongsTo $UserTypes
 * @property \Cake\ORM\Association\BelongsTo $Specialities
 *
 * @method \App\Model\Entity\User get($primaryKey, $options = [])
 * @method \App\Model\Entity\User newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\User[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\User|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\User patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\User[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\User findOrCreate($search, callable $callback = null)
 *
 * @mixin \Cake\ORM\Behavior\TimestampBehavior
 */
class UsersTable extends Table {

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public $customValidator;
    public $config;
    public $configS3;

    public function initialize(array $config) {
        parent::initialize($config);
        $this->customValidator = new Validation\CustomValidator();
        $this->table('users');
        $this->primaryKey('id');
        $this->config = Configure::read('Message');
        $this->addBehavior('Timestamp', [
            'events' => [
                'Model.beforeSave' => [
                    'created' => 'new',
                    'modified' => 'always'
                ]
            ]
        ]);

        //$this->configS3 = Configure::read('S3');
        /*$this->S3Client = \Aws\S3\S3Client::factory(array(
                    'base_url' => $this->configS3['URL'],
                    'key' => $this->configS3['KEY'],
                    'secret' => $this->configS3['SECRET']
        ));*/
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator) {

        $validator->provider('Custom', $this->customValidator);

        $validator
                ->requirePresence('title', true, __('This field is required.'))
                ->allowEmpty('title', __('This field is required.'))
                ->add('title', [
                    'length' => [
                        'rule' => ['maxLength', 16],
                        'message' => 'Title cannot be too long.',
                    ]
        ]);

        $validator
                ->requirePresence('fname', true, __('This field is required.'))
                ->notEmpty('fname', __('This field is required.'))
                ->add('fname', [
                    'length' => [
                        'rule' => ['maxLength', 128],
                        'message' => __('First name cannot be too long.'),
                    ]
        ]);
        $validator->add('fname', 'fname', [
            'rule' => 'validText',
            'provider' => 'Custom',
        ]);

        $validator
                ->requirePresence('lname', true, __('This field is required.'))
                ->notEmpty('lname', __('This field is required.'))
                ->add('lname', [
                    'length' => [
                        'rule' => ['maxLength', 128],
                        'message' => __('Last name cannot be too long.'),
                    ]
        ]);

        $validator->add('lname', 'lname', [
            'rule' => 'validText',
            'provider' => 'Custom',
        ]);

        $validator
                ->email('email')
                ->requirePresence('email', 'create', __('This field is required.'))
                ->notEmpty('email', __('This field is required.'))
                ->add('email', [
                    'length' => [
                        'rule' => ['maxLength', 128],
                        'message' => __('Email cannot be too long.'),
                    ]
        ]);

        $validator
                ->requirePresence('username', 'create', __('This field is required.'))
                ->notEmpty('username', __('This field is required.'))
                ->add('username', [
                    'length' => [
                        'rule' => ['maxLength', 128],
                        'message' => __('Username cannot be too long.'),
                    ]
        ]);

        $validator
                ->requirePresence('password', 'create', __('This field is required.'))
                ->notEmpty('password', __('This field is required.'))
                ->add('password', [
                    'minLength' => [
                        'rule' => ['minLength', 8],
                        'message' => __('Passwords must be at least 8 characters long.')
                    ],
                    'maxLength' => [
                        'rule' => ['maxLength', 20],
                        'message' => __('Password cannot be too long.')
                    ]
        ]);

        $validator->add('password', 'password', [
            'rule' => function ($value, $provider) {
                if (!empty($value)) {

                    $uppercase = preg_match('@[A-Z]@', $value);
                    $lowercase = preg_match('@[a-z]@', $value);
                    $number = preg_match('@[0-9]@', $value);
                    $special = preg_match('@[\W]{1,}@', $value);

                    if (!$uppercase || !$lowercase || !$number) {
                        return false;
                    }
                }
                return true;
            },
            'message' => __('Password must have (A-Z), (a-z), (0-9).')
        ]);

        $validator->add('password', 'passwordRule', [
            'rule' => function ($value, $provider) {
                if ($value == $provider['data']['username']) {
                    return false;
                }
                if ($value == $provider['data']['email']) {
                    return false;
                }
                return true;
            },
            'message' => __('Username and email cannot be your password.')
        ]);

        $validator
                ->requirePresence('confirm_password', 'create', __('This field is required.'))
                ->add('confirm_password', 'match_password', [
                    'rule' => ['compareWith', 'password'],
                    'message' => ('Passwords are not equal'),
        ]);

        $validator
                ->requirePresence('photo', __('This field is required.'))
                ->allowEmpty('photo')
                ->add('photo', [
                    'length' => [
                        'rule' => ['maxLength', 255],
                        'message' => __('Photo cannot be too long.'),
                    ]
        ]);

        $validator
                ->requirePresence('ssn_no', true, __('This field is required.'))
                ->notEmpty('ssn_no', __('This field is required.'))
                ->add('ssn_no', 'ssn', [
                    'rule' => 'ssn',
                    'provider' => 'Custom',
                    'message' => __('Please enter a valid SSN No.')
        ]);


        $validator
                ->requirePresence('dob', true, __('This field is required.'))
                ->notEmpty('dob', __('This field is required.'));

        $validator
                ->requirePresence('gender', true, __('This field is required.'))
                ->notEmpty('gender', __('This field is required.'));


        $validator
                ->boolean('terms_of_use')
                ->requirePresence('terms_of_use', 'create', __('This field is required.'))
                ->notEmpty('terms_of_use', __('This field is required.'), 'create');

        return $validator;
    }
    /**
     * Returns a rules checker object that will be used for validating
     * application integrity.
     *
     * @param \Cake\ORM\RulesChecker $rules The rules object to be modified.
     * @return \Cake\ORM\RulesChecker
     */
    public function buildRules(RulesChecker $rules) {
        $rules->add($rules->isUnique(['email'], __('Email already exist.')));
        $rules->add($rules->existsIn(['user_type_id'], 'UserTypes'));
        $rules->add($rules->existsIn(['group_id'], 'Groups'));
        return $rules;
    }

    /**
     * addUser method
     *
     * function used for user sign up
     * 
     * @param string|null $userDetails Users details.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function addUser($userDetails) {
        //Check request is null
        if (!$userDetails) {
            return $this->config['400'];
        }
        //$userDetails = $this->prepareDataFormat($userDetails);
        //upload Image on server
        $user = $this->newEntity();
        $userDetails['user_type_id'] = PROVIDER;
        $userDetails['provider_setting'] = $this->defaultUserSettings();

        $user = $this->patchEntity($user, $userDetails, ['associated' => ['ProviderProfiles', 'ProviderLicenseAndInsurances', 'ProviderSettings']]);

        if (empty($user->errors())) {
            if ($this->save($user)) {
                $activateKey = Text::uuid();
                $query = $this->query();
                $query->update()->set(['activate_key' => $activateKey])->where(['id' => $user->id])->execute();
                $emailData = array(
                    'slug' => 'verify-provider',
                    'user_id' => $user->id,
                    'to_email' => $userDetails['email']
                );
                $mailbox = TableRegistry::get('UserMailboxes');
                $resultmail = $mailbox->saveInbox($emailData);
                $result = $this->config['200'];
                if(!empty($chadis)) {
                    $record['username'] = $user->username;
                    $record['email'] = $user->email;
                    $record['firstname'] = $user->fname;
                    $record['lastname'] = $user->lname;
                    $chadisRes = $chadis->registerProvider($record);
                }
            } else {
                $result = $this->config['400'];
                $result['message'] = $user->errors();
            }
        } else {
            $result = $this->config['400'];
            $result['message'] = $user->errors();
        }

        return $result;
    }

    /**
     * getUser method
     *
     * function used to get user details from token
     * 
     * @param string|null $token token.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function getUser($token) {
        $hasher = new DefaultPasswordHasher();
        $apitoken = $this->token = $token;
        $query = $this->UserLogs->findByToken_plain_keyAndLoginstatus($apitoken, 1)->contain('Users'); //->toArray();

        if ($query->isEmpty()) {
            return false;
        }

        $row = $query->first();
        if ($hasher->check($token, $row->token_key)) {
            return $row;
        } else {
            return false;
        }
    }

    /**
     * validUser method
     *
     * function used for user signin
     * 
     * @param string|null $request login parameters.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function validUser($request) {
        //Check request is null
        if (!$request) {
            return $this->config['400'];
        }
        
        $timezone = !empty($request['timezone'])?$request['timezone']: date_default_timezone_get();
        //check username and password validations with custom validation function
        $validator = $this->validationLogin(new Validator());
        $empty = $validator->errors($request);
        
        if (count($empty) > 0) {
            $result = $this->config['400'];
            $result['message'] = $empty;
            return $result;
        }


        $query = $this->find('all')
                ->where(['username' => $request['username'], 'status !=' => 'Deleted']);
        
        if ($query->isEmpty()) {
            $query = $this->find('all')
                ->where(['email' => $request['username'], 'status !=' => 'Deleted']);
            
            if ($query->isEmpty()) {
                return $this->config['401'];
            }
        }

        $row = $query->first();
        $hasher = new DefaultPasswordHasher();
        if (!$hasher->check($request['password'], $row->password)) {
            return $this->config['401'];
        }
        
        if(!empty($request['course_ids'])){
           $cartItems = TableRegistry::get('CartItems');
           $cartItems->addToCart($request['course_ids'], $row->id);
        }
        
        return $this->tokenGenerate($row, $timezone);
    }

    /**
     * validationLogin method
     *
     * function used to validate login form
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function validationLogin(Validator $validator) {
        $validator
                ->requirePresence('username')
                ->notEmpty('username')
                ->requirePresence('password')
                ->notEmpty('password')
                ->requirePresence('course_ids', false);
        return $validator;
    }

    /**
     * validationUsernameOrEmail method
     *
     * function used to check valid email and username
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function validationUsernameOrEmail(Validator $validator) {

        $validator
                ->requirePresence('username')
                ->notEmpty('username')
                ->add('username', 'username', [
                    'rule' => function($value) {
                        $getUsername = $this->findByUsername($value)->toArray();
                        if (count($getUsername) <= 0) {
                            $getEmail = $this->findByEmail($value)->toArray();
                            if (count($getEmail) <= 0) {
                                return false;
                            }
                        }
                        return true;
                    },
                    'message' => 'Username or email does not exists.'
        ]);

        return $validator;
    }

    /**
     * validationForgotPassword method
     *
     * function used to validate forgot password section
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function validationForgotPassword(Validator $validator) {
        $validator->provider('Custom', $this->customValidator);
        $validator
                ->requirePresence('password', true, __('This field is required.'))
                ->notEmpty('password', __('This field is required.'))
                ->add('password', [
                    'minLength' => [
                        'rule' => ['minLength', 8],
                        'message' => 'Passwords must be at least 8 characters long.'
                    ],
                    'maxLength' => [
                        'rule' => ['maxLength', 20],
                        'message' => 'Password cannot be too long.'
                    ]
        ]);

        $validator
                ->requirePresence('confirm_password', true, __('This field is required.'))
                ->notEmpty('confirm_password', __('This field is required.'));

        $validator->add('password', 'password', [
            'rule' => function ($value, $provider) {
                if (!empty($value)) {
                    $uppercase = preg_match('@[A-Z]@', $value);
                    $lowercase = preg_match('@[a-z]@', $value);
                    $number = preg_match('@[0-9]@', $value);
                    $special = preg_match('@[\W]{1,}@', $value);
                    if (!$uppercase || !$lowercase || !$number) {
                        return false;
                    }
                }
                return true;
            },
            'message' => __('Password must have (A-Z), (a-z), (0-9).')
        ]);


        $validator->add('confirm_password', 'match_password', [
            'rule' => ['compareWith', 'password'],
            'message' => 'Passwords are not equal',
        ]);
        $validator
                ->requirePresence('confirm_password', 'create', __('This field is required.'))
                ->add('confirm_password', 'match_password', [
                    'rule' => ['compareWith', 'password'],
                    'message' => ('Passwords are not equal'),
        ]);

        return $validator;
    }

    /**
     * tokenGenerate method
     *
     * function used to generate token
     * 
     * @param string|null $user, $timezone  object of user class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function tokenGenerate($user, $timezone = null) {
        $hasher = new DefaultPasswordHasher();
        $token = \Cake\Utility\Text::uuid();
        $userLogsTable = TableRegistry::get('UserLogs');
        $userLogs = $userLogsTable->newEntity();
        //delete token//
        $count = $userLogsTable->find("all")->where(['UserLogs.user_id' => $user->id]);
        if($count->count()>1) {
            $userLogsTable->deleteAll(['UserLogs.user_id' => $user->id]);
        } else if($count->count()==1) {
            $logs = $count->first()->toArray();
            $userLogs->id = $logs['id'];
        }
        

        $userLogs->user_id = $user->id;
        $userLogs->last_login = \Cake\I18n\Time::now();
        $userLogs->token_key = $hasher->hash($token);
        $userLogs->token_plain_key = $token;
        $userLogs->loginstatus = 1;
        $userItems = $user->toArray();
        $userItems['token'] = $userLogs->token_plain_key;
        $userItems['notifications'] = TableRegistry::get('Consultations')->paymentNotificationPopUps($userItems['id']);
        
        //update provider account status if he has 3 strikes
        $strikeResult = TableRegistry::get('ProviderStrike')->getProviderStrike($userItems['id']);
        if($strikeResult){
            $userItems['status'] = $strikeResult;
        }
        
        if ($userLogsTable->save($userLogs)) {
            $result = $this->config['200'];
            $result['data'] = $userItems;
            $this->updateAll(['timezone'=> $timezone], ['id'=>$userItems['id']]); 
            $result['data']['timezone'] = $timezone;
            return $result;
        } else {
            $result = $this->config['400'];
        }
    }

    /**
     * forgotPassword method
     *
     * function used to consumer signup
     * 
     * @param string|null $request request paramaters.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function forgotPassword($request) {
        if (!$request) {
            return $this->config['400'];
        }
        $checkValidation = $this->validationUsernameOrEmail(new Validator());
        $errors = $checkValidation->errors($request);
        if (count($errors) > 0) {
            $result = $this->config['400'];
            $result['message'] = $errors;
            return $result;
        }

        $userDetails = $this->findByUsername($request['username']);
        if ($userDetails->count()) {
            $userDetails = $userDetails->first()->toArray();
            $sendEmail = $userDetails['email'];
        } else {
            $sendEmail = $request['username'];
            $userDetails = $this->findByEmail($request['username']);
            if ($userDetails->count()) {
                $userDetails = $userDetails->first()->toArray();
            }
        }
        $guid = Text::uuid();
        $emailData = array(
            'slug' => 'forgot-password',
            'guid' => $guid,
            'user_id' => $userDetails['id'],
            'to_email' => $userDetails['email']
        );
        $mailbox = TableRegistry::get('UserMailboxes');
        $resultmail = $mailbox->saveInbox($emailData);

        $result = $this->config['200'];
        $result['data'] = array("username" => $userDetails['username'], "email" => $userDetails['email']);
        $query = $this->query();
        $query->update()->set(['guid' => $guid, 'forgot_password_request_time' => time()])->where(['username' => $userDetails['username']])->execute();


        return $result;
    }

    /**
     * resetPassword method
     *
     * function used to reset password of user
     * 
     * @param string|null $key, $request request parameters.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function resetPassword($key = null, $request = null) {
        //Check request is null
        if (!$request) {
            return $this->config['400'];
        }
        $newPassword = $request['password'];
        $user = $this->newEntity();
        $userUpdate = $this->patchEntity($user, $request, ['validate' => 'ForgotPassword']);
        if (empty($user->errors())) {
            $query = $this->findByGuid($key);
            if ($query->count() == 0) {
                $result = $this->config['400'];
                $result['message'] = "Something went wrong, please try again.";
            } else {
                $user = $query->first()->toArray();
                $time = strtotime('+24 hours', time());
                if ($user['forgot_password_request_time'] > $time) {
                    $result = $this->config['400'];
                    $result['message'] = "Your link is expired, please try again.";
                } else {
                    $qry = $this->findByUsername($user['username']);
                    if ($qry->isEmpty()) {
                        $result = $this->config['400'];
                        $result['message'] = 'Username not found';
                    }
                    $row = $qry->first();
                    $hasher = new DefaultPasswordHasher();
                    if ($hasher->check($newPassword, $row->password)) {
                        $result = $this->config['400'];
                        $result['message'] = 'Old and New password cannot be same';
                    } else {
                        $query = $this->query();
                        $query->update()->set(['guid' => null, 'forgot_password_request_time' => null, 'password' => $userUpdate->password])->where(['username' => $user['username']])->execute();
                        $result = $this->config['200'];
                    }
                }
            }
        } else {
            $result = $this->config['400'];
            $result['message'] = $user->errors();
        }
        return $result;
    }

    /**
     * ChangePassword.
     *
     * Validate all the paramaeters 
     * On Successful Vaidation it will update logged in user password
     * 
     * @param int $userId used to update the record 
     * @param array $request post request by API 
     * 
     * @return Success or faliiure message
     */
    public function changePassword($userId, $request) {
        //Check if request is null
        if (!$request) {
            return $this->config['400'];
        }

        $user = $this->newEntity();
        $userUpdate = $this->patchEntity($user, $request, ['validate' => 'ChangePassword']);
        if (empty($user->errors())) {
            $query = $this->findById($userId);
            if ($query->isEmpty()) {
                return $this->config['401'];
            }
            $row = $query->first();
            $hasher = new DefaultPasswordHasher();
            if (!$hasher->check($userUpdate->old_password, $row->password)) {
                return $this->config['401'];
            }
            $query = $this->query();
            $query->update()->set(['password' => $userUpdate->password])->where(['id' => $userId])->execute();
            $result = $this->config['200'];
        } else {
            $result = $this->config['400'];
            $result['message'] = $user->errors();
        }
        return $result;
    }

    /**
     * validationChangePassword.
     *
     * Validate all post paramaeters 
     *  
     * @return Validator Object
     */
    public function validationChangePassword(Validator $validator) {
        $validator->add('old_password', 'custom', [
            'rule' => function($value, $provider) {
                if ($value !== $provider['data']['password']) {
                    return true;
                }
                return false;
            },
            'message' => __('Passwords cannot be same to old password'),
        ]);

        $validator
                ->requirePresence('password', true, __('This field is required.'))
                ->notEmpty('password', __('This field is required.'))
                ->add('password', [
                    'minLength' => [
                        'rule' => ['minLength', 8],
                        'message' => __('Passwords must be at least 8 characters long.')
                    ],
                    'maxLength' => [
                        'rule' => ['maxLength', 128],
                        'message' => __('Password cannot be too long.')
        ]]);

        $validator
                ->requirePresence('confirm_password', true, __('This field is required.'))
                ->notEmpty('confirm_password', __('This field is required.'));

        $validator->add('password', 'password', [
            'rule' => function ($value, $provider) {
                if (!empty($value)) {
                    $uppercase = preg_match('@[A-Z]@', $value);
                    $lowercase = preg_match('@[a-z]@', $value);
                    $number = preg_match('@[0-9]@', $value);
                    $special = preg_match('@[\W]{1,}@', $value);
                    if (!$uppercase || !$lowercase || !$number) {
                        return false;
                    }
                }
                return true;
            },
            'message' => __('Password must have (A-Z), (a-z), (0-9).')
        ]);

        $validator->add('confirm_password', 'match_password', [
            'rule' => ['compareWith', 'password'],
            'message' => 'Passwords are not equal',
        ]);

        return $validator;
    }


    /**
     * checkUsernameAndEmail method
     *
     * function used to check valid email and username is unique or not
     * 
     * @param string|null $params array of users.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function checkUsernameAndEmail($params) {
        $errorDetails = $this->usernameAndEmailExists(new Validator());
        $errors = $errorDetails->errors($params);
        if (count($errors) > 0) {
            $result = $this->config['400'];
            $result['message'] = $errors;
        } else {
            $result = $this->config['200'];
            $result['message'] = __('Username and Email is unique.');
        }
        return $result;
    }

    /**
     * usernameAndEmailExists method
     *
     * function used to check valid email and username is unique or not
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function usernameAndEmailExists(Validator $validator) {
        $validator
                ->requirePresence('username')
                ->notEmpty('username')
                ->add('username', 'emailExists', [
                    'rule' => function($value) {
                        $getUsername = $this->exists(['username' => $value]);
                        if ($getUsername) {
                            return false;
                        }
                        return true;
                    },
                            'message' => 'Username already exists.'
                ]);
                $validator
                        ->requirePresence('email')
                        ->notEmpty('email')
                        ->email('email')
                        ->add('email', 'emailExists', [
                            'rule' => function($value) {
                                $getUsername = $this->exists(['email' => $value]);
                                if ($getUsername) {
                                    return false;
                                }
                                return true;
                            },
                            'message' => 'Email already exists.'
                        ]);
                        return $validator;
                    }

                    /**
                     * uploadImage method
                     *
                     * function upload an image
                     * 
                     * @param string|null $validator object of validator class.
                     * @return \Cake\Network\Response|null return json
                     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
                     */
                    public function uploadImage($dataOjb = null, $uploadfolder = null, $response = null) {

                        $response->type(['pdf' => ['application/pdf', 'application/x-pdf', 'application/x-download', 'application/download', 'binary/octet-stream']]);


                        $data = $dataOjb['photoObj'];
                        $dataExp = explode(';', $data);
                        $ext = $dataExp[0];

                        list($dataIdx, $contentType) = explode(':', $ext);


                        $ext = explode('/', $contentType);
                        $file_ext = $response->mapType($contentType); //$ext[1];
                        //$replaced_data =$ext[0].'/'.$file_ext.';base64,';
                        $replaced_data = $dataIdx . ':' . $contentType . ';base64,';
                        $data = str_replace($replaced_data, '', $data);
                        $data = str_replace(' ', '+', $data);
                        $data = base64_decode($data);


                        $filename = uniqid() . '.' . $file_ext;

                        $file = WWW_ROOT . $uploadfolder . DS . $filename;
                        if (!is_dir(WWW_ROOT . $uploadfolder)) {
                            mkdir(WWW_ROOT . $uploadfolder, 777, true);
                        }
                        $success = file_put_contents($file, $data);
                        chmod($file, 777);
                        if ($success) {
                            $link = $this->uploadImageTOAWS($file, $uploadfolder . DS . $filename);

                            //change link sent from AWS
                            $link = str_replace("\/", "/", $link);
                            $result = $this->config['200'];
                            $result['message'] = "File uploaded successfully.";
                            $result['data'] = $link;
                        } else {
                            $result = $this->config['400'];
                            $result['message'] = "Upload Failed.";
                        }
                        return $result;
                    }

                    /**
                     * uploadImageTOAWS method
                     *
                     * function used to upload the image on s3
                     * 
                     * @param string|null $validator object of validator class.
                     * @return \Cake\Network\Response|null return json
                     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
                     */
                    public function uploadImageTOAWS($uploadedFilePath, $uploadfolder) {
                        $filename = $this->S3Client->upload($this->configS3['BUCKET'], $uploadfolder, fopen($uploadedFilePath, 'r'), "public-read");
                        unlink($uploadedFilePath);
                        $filePath = $filename->toArray();
                        return $filePath['ObjectURL'];
                    }

                    public function logout($userId) {
                        $userLogs = TableRegistry::get('UserLogs');
                        $result = $userLogs->removeUserLogs($userId);
                        if ($result) {
                            $result = $this->config['200'];
                            $result['message'] = __('User has been logout successfully.');
                        } else {
                            $result = $this->config['400'];
                        }
                        return $result;
                    }

                    /**
                     * getUsernameAndEmail method
                     *
                     * function used to change username and email of the current logged in user.
                     * 
                     * @param string|null $userId logged in user
                     * @return \Cake\Network\Response|null return json
                     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
                     */
                    public function getUsernameAndEmail($userId = null) {
                        if ($userId == null) {
                            return $this->config['400'];
                        }
                        $query = $this->find('all')
                                ->select(['username', 'email', 'community_username'])
                                ->where(['Users.id' => $userId])
                                ->first();
                        if ($query) {
                            $result = $this->config['200'];
                            $result['data'] = $query;
                        } else {
                            $result = $this->config['400'];
                        }
                        return $result;
                    }

                    /**
                     * changeUsernamAndEmail method
                     *
                     * function used to change username and email of the current logged in user.
                     * 
                     * @param string|null $userId logged in user
                     * @return \Cake\Network\Response|null return json
                     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
                     */
                    public function changeUsernameAndEmail($result = null, $userId = null) {
                        if ($result == null) {
                            return $this->config['400'];
                        }
                        //upload Image on server
                        $user = $this->get($userId);
                        $userDetails = $this->patchEntity($user, $result, ['validate' => 'UsernameAndEmail']);
                        if (empty($userDetails->errors())) {
                            if ($this->save($userDetails)) {
                                $result = $this->config['201'];
                            } else {
                                $result = $this->config['400'];
                                $result['message'] = $userDetails->errors();
                            }
                        } else {
                            $result = $this->config['400'];
                            $result['message'] = $userDetails->errors();
                        }
                        return $result;
                    }

                    /**
                     * validationUsernameAndEmail method
                     *
                     * function used to check valid email and username is unique or not
                     * 
                     * @param string|null $validator object of validator class.
                     * @return \Cake\Network\Response|null return json
                     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
                     */
                    public function validationUsernameAndEmail(Validator $validator) {
                        $validator
                                ->requirePresence('username')
                                ->notEmpty('username')
                                ->add('username', 'usernameExists', [
                                    'rule' => function ($value, $context) {
                                        if (isset($context['data']['id'])) {
                                            return !$this->exists(['username' => $value, 'id !=' => $context['data']['id']]);
                                        }
                                        return !$this->exists(['username' => $value]);
                                    },
                                            'message' => 'Username already exists.'
                                ]);
                                $validator
                                        ->requirePresence('email')
                                        ->notEmpty('email')
                                        ->email('email')
                                        ->add('email', 'emailExists', [
                                            'rule' => function ($value, $context) {
                                                if (isset($context['data']['id'])) {
                                                    return !$this->exists(['email' => $value, 'id !=' => $context['data']['id']]);
                                                }
                                                return !$this->exists(['email' => $value]);
                                            },
                                                    'message' => 'Email already exists.'
                                        ]);
                                        $validator
                                                ->requirePresence('community_username')
                                                ->notEmpty('community_username')
                                                ->add('community_username', 'communityUsernameExists', [
                                                    'rule' => function ($value, $context) {
                                                        if (isset($context['data']['id'])) {
                                                            return !$this->exists(['community_username' => $value, 'id !=' => $context['data']['id']]);
                                                        }
                                                        return !$this->exists(['community_username' => $value]);
                                                    },
                                                            'message' => 'Community username already exists.'
                                                ]);
                                                return $validator;
                                            }

                                            /**
                                             * prepareDataFormat method
                                             *
                                             * function used to get formatted data while saving provider data
                                             * 
                                             * @param string|null $request.
                                             * @return \Cake\Network\Response|null return Array
                                             * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
                                             */
                                            public function prepareDataFormat($request = array()) {
                                                $provider_license_and_insurances = $request['provider_license_and_insurances'];
                                                $i = 0;

                                                if (!count($provider_license_and_insurances)) {
                                                    return $request;
                                                }
                                                foreach ($provider_license_and_insurances as $key => $provider_license_and_insurance) {
                                                    if (is_array($provider_license_and_insurance['insurance_plan_id']) && count($provider_license_and_insurance['insurance_plan_id'])) {
                                                        foreach ($provider_license_and_insurance['insurance_plan_id'] as $plan_id) {
                                                            $newArray[$i]['state_id'] = $provider_license_and_insurance['state_id'];
                                                            $newArray[$i]['license_number'] = $provider_license_and_insurance['license_number'];
                                                            $newArray[$i]['insurance_plan_id'] = $plan_id;
                                                            $i++;
                                                        }
                                                    } else {
                                                        $newArray[$i]['state_id'] = $provider_license_and_insurance['state_id'];
                                                        $newArray[$i]['license_number'] = $provider_license_and_insurance['license_number'];
                                                        $newArray[$i]['insurance_plan_id'] = null;
                                                        $i++;
                                                    }
                                                }
                                                $request['provider_license_and_insurances'] = $newArray;
                                                return $request;
                                            }
                                            
                                            

                                        }
                                        