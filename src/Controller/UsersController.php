<?php

namespace App\Controller;

use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\Core\Configure;
use Cake\Core\App;

//use Cake\Core\Configure;


class UsersController extends AppController {

    private $userid;
    public $config;
    public $dropdowns;
    public $components = array('Stripe');

    public function initialize() {
        parent::initialize();
        $this->loadComponent('RequestHandler');
        //$this->loadComponent('Utils');
        //$this->loadComponent('Img');
        $this->config = Configure::read('Message');
        $this->dropdowns = Configure::read('DROPDOWN');
        $this->loadComponent('Chadis'); 
    }

    public function beforeFilter(\Cake\Event\Event $event) {
        parent::beforeFilter($event);
        $this->userid = $this->Auth->user('id');
    }

    /**
     * signUp method
     *
     * function used for user sign up
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function signUp() {
        $response = null;
        if ($this->request->is('post')) {
            $response = $this->Users->addUser($this->request->input('json_decode', true), $this->Chadis);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * login method
     *
     * function used for user sign up
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function login() {
        $response = null;
        if ($this->request->is('post')) {
            $response = $this->Users->validUser($this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * consumerSignUp method
     *
     * function used for consumner sign up
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function consumerSignUp() {
        if ($this->request->is('post')) {
            $response = $this->Users->consumerSignUp($this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * forgotPassword method
     *
     * function used for forgot password
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function forgotPassword() {
        if ($this->request->is('post')) {
            $response = $this->Users->forgotPassword($this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * resetPassword method
     *
     * function used for reseting password
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function resetPassword($key = null) {
        if ($this->request->is('post')) {
            $response = $this->Users->resetPassword($key, $this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * getProviderDetails method
     *
     * function used to get details of provider
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function getProviderDetails() {
        if ($this->request->is('get')) {
            $response = $this->Users->getProviderDetails();
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * updateProvidersProfile method
     *
     * function used for updating profile details of provider
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function updateProvidersProfile() {
        $response = null;

        if ($this->request->is(['post', 'put'])) {
            $response = $this->Users->updateProvidersProfile($this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }
    
    /**
     * updateProvidersProfileFromMobile method
     *
     * function used for updating profile details of provider from mobile
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function updateProvidersProfileFromMobile() {
        $response = null;

        if ($this->request->is(['post', 'put'])) {
            $response = $this->Users->updateProvidersProfileFromMobile($this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * updatePaymentDetails method
     *
     * function used for updating payment details of user
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function updatePaymentDetails() {

        if ($this->request->is('post')) {
            $userID = $this->userid;
            $response = $this->Users->updatePaymentDetails($userID, $this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($responese);
    }

    /**
     * getConsumerDetails method
     *
     * function used to get consumer details
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function getConsumerDetails() {
        if ($this->userid) {
            $response = $this->Users->getConsumerDetails($this->userid);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * updateConsumerProfile method
     *
     * function used for updating consumer profile details
     *
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function updateConsumerProfile() {
        $response = null;
        if ($this->request->is(['post', 'put'])) {
            $response = $this->Users->updateConsumerProfile($this->userid, $this->request->input('json_decode', true), $this->Stripe);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }
    
    /**
     * getUserName method
     *
     * function returns username of current login user
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function getUserName() {
        $data['username'] = $this->Auth->user('username');
        $this->set($data);
    }

    /**
     * changePassword method
     *
     * function used to change password of user
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function changePassword() {
        if ($this->request->is('post')) {
            $response = $this->Users->changePassword($this->userid, $this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * getDropDownsForSignup method
     *
     * function returns dropdown list for signup section
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function getDropDownsForSignup() {
        $response = $this->config['200'];
        $response['data'] = array($this->dropdowns);
        $this->set($response);
    }

    /**
     * getUsernameAndEmailByGuid method
     *
     * function returns username and email for reset password
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function getUsernameAndEmailByGuid($guid) {
        $response = null;
        if ($this->request->is(['post', 'put', 'get'])) {
            $response = $this->Users->getUsernameAndEmailByGuid($guid);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * checkUsernameAndEmail method
     *
     * function used to check valid email and username is unique or not
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function checkUsernameAndEmail() {
        $response = null;
        if ($this->request->is(['post'])) {
            $response = $this->Users->checkUsernameAndEmail($this->request->input('json_decode', true));
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * uploadProfileImage method
     *
     * function upload an image
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function uploadProfileImage() {
        $response = null;
        if ($this->request->is(['post'])) {
            $response = $this->Users->uploadImage($this->request->data, 'profileImage', $this->response);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }
    
     /**
     * uploadProfileImageFromMobile method
     *
     * function upload an image from mobile
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function uploadProfileImageFromMobile() {
        $response = null;
        if ($this->request->is(['post'])) {
            $response = $this->Users->uploadImage($this->request->data, 'profileImage', $this->response);
            if($response['status']) {
                $imgName = !empty($this->request->data['photo_name']) ? $this->request->data['photo_name']:'';
                $this->Users->updateProfileImageLink($response['data'], $imgName);
            }
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * uploadContractDocument method
     *
     * function upload a file for contact document
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    function uploadContractDocument() {
        $response = null;
        if ($this->request->is(['post'])) {
            $response = $this->Users->uploadImage($this->request->data, 'contractDocument', $this->response);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * downloadContractDocument method
     *
     * function used to download contract document
     * 
     * @param string|null 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function downloadContractDocument() {
        if ($this->request->is(['get'])) {
            $response = $this->config['200'];
            $response['data'] = 'https://face2face-dev.s3.amazonaws.com/contractDocument/580de28852077.pdf';
            $this->set($response);
        }
    }

    /**
     * logout method
     *
     * function used to logout
     * 
     * @param string|null 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function logout() {
        if ($this->request->is(['get'])) {
            $response = $this->Users->logout($this->userid);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * changeUsernameAndEmail method
     *
     * function used to change Username And Email of logged in user
     * 
     * @param string|null 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function changeUsernameAndEmail() {
        if ($this->request->is(['put'])) {
            $response = $this->Users->changeUsernameAndEmail($this->request->input('json_decode', true), $this->userid);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }

    /**
     * getUsernameAndEmail method
     *
     * function used to get Username And Email of logged in user
     * 
     * @param string|null 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function getUsernameAndEmail() {
        if ($this->request->is(['get'])) {
            $response = $this->Users->getUsernameAndEmail($this->userid);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }
    
    /**
     * signUp method
     *
     * function used for user sign up
     * 
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function addToFavourite() {
        $response = null;
        if ($this->request->is('post')) {
            $favourite = TableRegistry::get('ConsumerFavouriteProviders');
            $response = $favourite->addToFavourite($this->request->input('json_decode', true), $this->userid);
        } else {
            $response = $this->config['405'];
        }
        $this->set($response);
    }
    
    public function checkUrl() {
        echo \Cake\Routing\Router::url('/', true); die;
    }
}
