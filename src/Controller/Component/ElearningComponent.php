<?php

namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
use Cake\Network\Http\Client;
use App\Utility\Utils;
/**
 * Npi Component
 *
 */
class ElearningComponent extends Component {

    public $config = [];

    public function initialize(array $config) {
        parent::initialize($config);
        $this->loadMoodleConfig();
    }

    /**
     * moodleConfig check moodle default config
     * 
     * @param NULL
     * @return void nothing
     */
    public function loadMoodleConfig() {
        $moodleConfig = Configure::read('MOODLE');
        if (empty($moodleConfig)) {
            throw new Exception('Moodle config variable is not defined in config');
        }
        if (empty($moodleConfig['URL'])) {
            throw new Exception('Moodle url(URL) is not defined in config');
        }
        if (empty($moodleConfig['TOKEN'])) {
            throw new Exception('Moodle token(TOKEN) is not defined in config');
        }
        if (empty($moodleConfig['REST_FORMAT'])) {
            $moodleConfig['REST_FORMAT'] = 'json';
        }
        if (empty($moodleConfig['AUTHTOKEN'])) {
            throw new Exception('Moodle authtoken(AUTHTOKEN) is not defined in config');
        }

        $this->config = $moodleConfig;
        $this->api_url = $moodleConfig['URL'];
        $this->rest_format = $moodleConfig['REST_FORMAT'];
        $this->token = $moodleConfig['TOKEN'];
        $this->authtoken = $moodleConfig['AUTHTOKEN'];
    }
    
    /**
     * updateMoodleCategory to upate category on moodle with provider type
     * 
     * @param array|Object $data [id required,name optional,idnumber optional,parent optional,description optional]post var
     * @return json json object
     */
    
    public function updateMoodleCategory($data){
        $config = $this->config;
        $params = ['wstoken'=>$config['TOKEN'],'wsfunction'=>'core_course_update_categories','moodlewsrestformat'=>$config['REST_FORMAT']];
        $allowField = ['id','name','idnumber','parent','description'];
        $serverUrl = $config['URL'].'?'.http_build_query($params);
        $validFields = \App\Utility\Utils::filterArray($data,$allowField);
        $http = new \Cake\Http\Client();
        $httpResponse = $http->post($serverUrl,['categories'=>[$validFields]]);
        $responseData = json_decode($httpResponse->body,true);
        return $responseData;
    }
    
    /**
     * deleteCourse to delte the list of courses
     * 
     * @param array $coursids list course ids
     * @return json delte status
     */
    public function deleteCourse($courseids=[]){
        if(empty($courseids)){
            return;
        }        
        $config = $this->config;
        $params = ['wstoken'=>$config['TOKEN'],'wsfunction'=>'core_course_delete_courses','moodlewsrestformat'=>$config['REST_FORMAT']];
        $serverUrl = $config['URL'].'?'.http_build_query($params);
        $httpResponse = (new \Cake\Http\Client())->post($serverUrl, ['courseids'=>$courseids]);
        $responseData = json_decode($httpResponse->body,true);
        return $responseData;
    }
    
    
    

    /**
     * user_signup method
     * Funtion to signup user in moodle
     *
     * @param array $data
     * @return array
     */
    public function user_signup($data) {
        if (!empty($data)) {
            $functionName = 'core_user_create_users';
            $user1 = new \stdClass();
            $user1->username = $data['username'];
            $user1->password = $data['password'];
            $user1->firstname = $data['first_name'];
            $user1->lastname = $data['last_name'];
            $user1->email = $data['email'];
            $user1->auth = 'userkey';
            $user1->idnumber = '';
            $user1->lang = 'en';
            $user1->timezone = '0';
            $user1->mailformat = 0;
            $user1->description = '';
            $user1->city = 'Noida';
            $user1->country = 'IN';     //list of abrevations is in yourmoodle/lang/en/countries
            $preferencename1 = 'auth_forcepasswordchange';
            $user1->preferences = array(
                array('type' => $preferencename1, 'value' => 'false')
            );

            $users = array($user1);
            $params = array('users' => $users);
            $serverurl = $this->api_url . '?wstoken=' . $this->token . '&wsfunction=' . $functionName . '&moodlewsrestformat=' . $this->rest_format;
            $http = new Client();
            $resp = $http->post($serverurl, $params);
            $responseData = json_decode($resp->body, true);
            return $responseData;
        }
    }

    /**
     * user_signup method
     * Funtion to signup user in moodle
     *
     * @param array $data
     * @return array
     */
    public function categories($data) {
        if (!empty($data)) {


            $category = new \stdClass();
            if (!empty($data["id"])) {
                $category->id = $data['id'];
                $functionName = 'core_course_update_categories';
            } else {
                $functionName = 'core_course_create_categories';
            }
            $category->name = $data['name'];
            $category->parent = $data['parent'];
            $category->idnumber = $data['idnumber'];
            $category->description = $data['description'];
            $category->descriptionformat = $data['descriptionformat'];
            $categories = array($category);
            $params = array('categories' => $categories);
            $serverurl = $this->api_url . '?wstoken=' . $this->token . '&wsfunction=' . $functionName . '&moodlewsrestformat=' . $this->rest_format;

            $http = new Client();
            $resp = $http->post($serverurl, $params);

            return json_decode($resp->body, true);
        }
    }
    
    /**
     * couseList method to list the course from moodle and merge with core course
     * 
     * @param array $options optional example: page=>1,limit=>10,orderby=>'id',direction=>'desc'
     * @return array list of courses
     */
    
    public function courseList($options){
        $config = $this->config; 
        $params = ['wstoken'=>$config['TOKEN'],'wsfunction'=>'block_face2face_course_list','moodlewsrestformat'=>$config['REST_FORMAT']];
        $serverUrl = $config['URL'].'?'.http_build_query($params);
        $courses = \Cake\ORM\TableRegistry::get('Courses')->moodleCourse($options);
        if(empty($courses)){
            return ['message'=>'Record not found.','data'=>[]];
        }
        
        $ids = \Cake\Utility\Hash::extract($courses->toArray(), '{n}.course_id_on_moodle');
        $http = new \Cake\Http\Client();
        $httpResponse = $http->post($serverUrl,['page'=>$options['page'],'limit'=>$options['limit'],'courseids'=>$ids],['ssl_verify_host'=>false,'ssl_verify_peer'=>false]);
        $responseData = json_decode($httpResponse->body);
        if(empty($responseData->data)){
           return ['message'=>'Course not exist on moodle.','data'=>[]]; 
        }
        $result = [];
        foreach ($courses as $c) { 
            foreach ($responseData->data as $m) {
                if ($c->course_id_on_moodle == $m->moodle_course_id) {
                  $result[] = [
                       'course_id'=> Utils::encode($c->id),
                       'category_id'=>Utils::encode($c->provider_type_id),
                       'product_id'=>Utils::encode($c->product_id),
                       'age_group_id'=>Utils::encode($c->age_group_id),
                       'product'=>($c->has('product'))?$c->product->name:'',
                       'age_group'=>($c->has('age_group'))?$c->age_group->age:'',
                       'color'=>($c->has('provider_type'))?$c->provider_type->color:'',
                       'silo_title'=>($c->has('provider_type'))? ucwords(strtolower($c->provider_type->menu_title)):'',
                       'fullname'=>$c->fullname,
                       'image'=>$c->image,
                       'price'=>$c->price,
                       'gender'=>$c->gender,
                       'popular'=>$c->popular,
                       'status'=>$c->status,
                       'moodle_course_id'=>Utils::encode($m->moodle_course_id),
                       'lesson'=>$m->lesson,
                       'category'=>$m->category,
                       'description'=>$m->summary,
                       'tags'=>$m->tags,
                       'shortname'=>$m->shortname,
                       'visible'=>$m->visible,
                       ];
                   break;
                }
            }
        }
        return ['message'=>'List of courses.','totalCount'=>$courses->count(),'courses'=>$result];
    }

    /**
     * user_signup method
     * Funtion to signup user in moodle
     *
     * @param array $data
     * @return array
     */
    public function fetch_courses() {
        $http = new Client();
        $allcourses = $http->post($this->api_url, array(
            'wstoken' => $this->token,
            'wsfunction' => 'core_course_get_courses',
            'moodlewsrestformat' => 'json',
        ));

        $responseData = json_decode($allcourses->body, true);

        return $responseData;
    }

    /**
     * CourseByField method to get by field value
     * 
     * @param 
     */
    public function courseByField($field = []) {
        //$http = new Client(); 
        $http = new \Cake\Http\Client();
        $params = ['wstoken' => $this->token, 'wsfunction' => 'core_course_get_courses', 'moodlewsrestformat' => 'json'];
        $queryString = $this->api_url . '?' . http_build_query($params);
        if (empty($field)) {
            $allcourses = $http->post($queryString);
        } else {
            $allcourses = $http->post($queryString, ['options' => ['ids' => $field]]);
        }

        $responseData = json_decode($allcourses->body, true);
        pj($responseData);
        die;
        return $responseData;
    }

    public function courseContent($field = []) {
        //$http = new Client(); 
        $http = new \Cake\Http\Client();
        $params = ['wstoken' => $this->token, 'wsfunction' => 'core_course_get_contents', 'moodlewsrestformat' => 'json'];
        $queryString = $this->api_url . '?' . http_build_query($params);

        if (empty($field)) {
            $allcourses = $http->post($queryString, ['courseid' => 11]);
        } else {
            $allcourses = $http->post($queryString, ['courseid' => 11, 'options' => [['name' => 'modname', 'value' => 'lesson']]]);
        }

        $responseData = json_decode($allcourses->body, true);
        pj($responseData);
        die;
        return $responseData;
    }

    public function auth_userkey_login($username, $redirecturl) {
        $http = new Client();
        $function_name = 'auth_userkey_request_login_url';
        $serverurl = $this->api_url . '?wstoken=' . $this->authtoken . '&wsfunction=' . $function_name . '&moodlewsrestformat=' . $this->rest_format;
        $param = array();
        $param["user"]["username"] = $username;
        $userkey_logindata = $http->post($serverurl, $param);
        $responseData = json_decode($userkey_logindata->body, true);

        return $returnurl = $responseData["loginurl"] . '&wantsurl=' . $redirecturl;
    }

}
