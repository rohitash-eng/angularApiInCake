<?php

namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;

/**
 * Zoom Component
 *
 */
class ZoomComponent extends Component {

    /**
     * The Zoom API Key
     *
     * @var string
     */
    private $api_key = '';

    /**
     * The Zoom API Secret Key
     *
     * @var string
     */
    private $api_secret = '';

    /**
     * The Zoom API URL
     *
     * @var string
     */
    private $api_url = '';

    public function initialize(array $config) {
        parent::initialize($config);

        $this->config = Configure::read('ZOOM');

        $api_url = $this->config['URL'];
        if ($api_url) {
            $this->api_url = $api_url;
        }

        $api_key = $this->config['KEY'];
        if ($api_key) {
            $this->api_key = $api_key;
        }

        $api_secret = $this->config['SECRET'];
        if ($api_secret) {
            $this->api_secret = $api_secret;
        }
    }

    /**
     * sendRequest method
     * Used by every function below to make HTTP POST call
     *
     * @param array $data
     * @param string $calledFunction
     * @return array
     *
     */
    public function sendRequest($calledFunction, $data) {
        /* Creates the endpoint URL */
        $request_url = $this->api_url . $calledFunction;

        /* Adds the Key, Secret, & Datatype to the passed array */
        $data['api_key'] = $this->api_key;
        $data['api_secret'] = $this->api_secret;
        $data['data_type'] = 'json';
        $postFields = http_build_query($data);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $request_url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);

        curl_close($ch);

        /* if(!$response){
          return false;
          } */
        /* Return the data in JSON format */
        return $response;
    }

    /**
     * createAUser method
     * Function to create user
     */
    public function createAUser($data) {
        $createAUserArray = array();
        $createAUserArray['email'] = $data['email'];
        $createAUserArray['type'] = $data['type'];
        return $this->sendRequest('user/create', $createAUserArray);
    }

    /**
     * autoCreateAUser method
     * Function to auto create user
     */
    public function autoCreateAUser($data) {
        $autoCreateAUserArray = array();
        $autoCreateAUserArray['email'] = $data['userEmail'];
        $autoCreateAUserArray['type'] = $data['userType'];
        $autoCreateAUserArray['password'] = $data['userPassword'];
        return $this->sendRequest('user/autocreate', $autoCreateAUserArray);
    }

    /**
     * custCreateAUser method
     * Function to create customer user
     */
    public function custCreateAUser($data) {
        $custCreateAUserArray = array();
        $custCreateAUserArray['email'] = $data['userEmail'];
        $custCreateAUserArray['type'] = $data['userType'];
        $custCreateAUserArray['meeting_capacity'] = $data['userCapacity'];
        $custCreateAUserArray['disable_jbh_reminder'] = true;
        $custCreateAUserArray['disable_chat'] = true;
        return $this->sendRequest('user/custcreate', $custCreateAUserArray);
    }

    /**
     * deleteAUser method
     * Function to delete user
     */
    public function deleteAUser($data) {
        $deleteAUserArray = array();
        $deleteAUserArray['id'] = $data['userId'];
        return $this->sendRequest('user/delete', $deleteUserArray);
    }

    /**
     * listUsers method
     * Function to list users
     */
    public function listUsers() {
        $listUsersArray = array();
        return $this->sendRequest('user/list', $listUsersArray);
    }

    /**
     * listPendingUsers method
     * Function to list pending users
     */
    public function listPendingUsers() {
        $listPendingUsersArray = array();
        return $this->sendRequest('user/pending', $listPendingUsersArray);
    }

    /**
     * getUserInfo method
     * Function to get user info
     */
    public function getUserInfo($data) {
        $getUserInfoArray = array();
        $getUserInfoArray['id'] = $data['userId'];
        return $this->sendRequest('user/get', $getUserInfoArray);
    }

    /**
     * getUserInfoByEmail method
     * Function to get user info by Email
     */
    public function getUserInfoByEmail($data) {
        $getUserInfoByEmailArray = array();
        $getUserInfoByEmailArray['email'] = $data['userEmail'];
        $getUserInfoByEmailArray['login_type'] = $data['userLoginType'];
        return $this->sendRequest('user/getbyemail', $getUserInfoByEmailArray);
    }

    /**
     * updateUserInfo method
     * Function to update user info
     */
    public function updateUserInfo($data) {
        $updateUserInfoArray = array();
        $updateUserInfoArray['id'] = $data['userId'];
        return $this->sendRequest('user/update', $updateUserInfoArray);
    }

    /**
     * updateUserInfo method
     * Function to update user password
     */
    public function updateUserPassword($data) {
        $updateUserPasswordArray = array();
        $updateUserPasswordArray['id'] = $data['userId'];
        $updateUserPasswordArray['password'] = $data['userNewPassword'];
        return $this->sendRequest('user/updatepassword', $updateUserPasswordArray);
    }

    /**
     * setUserAssistant method
     * Function to set user assistant
     */
    public function setUserAssistant($data) {
        $setUserAssistantArray = array();
        $setUserAssistantArray['id'] = $data['userId'];
        $setUserAssistantArray['host_email'] = $data['userEmail'];
        $setUserAssistantArray['assistant_email'] = $data['assistantEmail'];
        return $this->sendRequest('user/assistant/set', $setUserAssistantArray);
    }

    /**
     * setUserAssistant method
     * Function to delete user assistant
     */
    public function deleteUserAssistant($data) {
        $deleteUserAssistantArray = array();
        $deleteUserAssistantArray['id'] = $data['userId'];
        $deleteUserAssistantArray['host_email'] = $data['userEmail'];
        $deleteUserAssistantArray['assistant_email'] = $data['assistantEmail'];
        return $this->sendRequest('user/assistant/delete', $deleteUserAssistantArray);
    }

    /**
     * revokeSSOToken method
     * Function to revoke user token
     */
    public function revokeSSOToken($data) {
        $revokeSSOTokenArray = array();
        $revokeSSOTokenArray['id'] = $data['userId'];
        $revokeSSOTokenArray['email'] = $data['userEmail'];
        return $this->sendRequest('user/revoketoken', $revokeSSOTokenArray);
    }

    /**
     * deleteUserPermanently method
     * Function to delete user permanently
     */
    public function deleteUserPermanently($data) {
        $deleteUserPermanentlyArray = array();
        $deleteUserPermanentlyArray['id'] = $data['userId'];
        $deleteUserPermanentlyArray['email'] = $data['userEmail'];
        return $this->sendRequest('user/permanentdelete', $deleteUserPermanentlyArray);
    }

    /**
     * createAMeeting method
     * Function to create meeting
     */
    public function createAMeeting($data) {
        $createAMeetingArray = array();
        $createAMeetingArray['host_id'] = $data['userId'];
        $createAMeetingArray['topic'] = $data['meetingTopic'];
        $createAMeetingArray['type'] = $data['meetingType'];
        $createAMeetingArray['duration'] = $data['duration'];
        $createAMeetingArray['option_jbh'] = false;
        $createAMeetingArray['option_audio'] = $data['optionAudio'];
        $createAMeetingArray['password'] = $data['meeting_password'];
        $createAMeetingArray['start_time'] = $data['meeting_start_time'];
        return $this->sendRequest('meeting/create', $createAMeetingArray);
    }

    /**
     * deleteAMeeting method
     * Function to delete meeting
     */
    public function deleteAMeeting($data) {
        $deleteAMeetingArray = array();
        $deleteAMeetingArray['id'] = $data['meetingId'];
        $deleteAMeetingArray['host_id'] = $data['userId'];
        return $this->sendRequest('meeting/delete', $deleteAMeetingArray);
    }

    /**
     * listMeetings method
     * Function to list meetings
     */
    public function listMeetings($data) {
        $listMeetingsArray = array();
        $listMeetingsArray['host_id'] = $data['userId'];
        return $this->sendRequest('meeting/list', $listMeetingsArray);
    }

    /**
     * getMeetingInfo method
     * Function to get meeting info
     */
    public function getMeetingInfo($data) {
        $getMeetingInfoArray = array();
        $getMeetingInfoArray['id'] = $data['meetingId'];
        $getMeetingInfoArray['host_id'] = $data['userId'];
        return $this->sendRequest('meeting/get', $getMeetingInfoArray);
    }

    /**
     * updateMeetingInfo method
     * Function to update meeting info
     */
    public function updateMeetingInfo($data) {
        $updateMeetingInfoArray = array();
        $updateMeetingInfoArray['id'] = $data['meetingId'];
        $updateMeetingInfoArray['host_id'] = $data['userId'];
        $updateMeetingInfoArray['duration'] = $data['duration'];
        return $this->sendRequest('meeting/update', $updateMeetingInfoArray);
    }

    /**
     * endAMeeting method
     * Function to end meeting
     */
    public function endAMeeting($data) {
        $endAMeetingArray = array();
        $endAMeetingArray['id'] = $data['meetingId'];
        $endAMeetingArray['host_id'] = $data['userId'];
        return $this->sendRequest('meeting/end', $endAMeetingArray);
    }

    /**
     * listRecording method
     * Function to list recording
     */
    public function listRecording($data) {
        $listRecordingArray = array();
        $listRecordingArray['host_id'] = $data['userId'];
        return $this->sendRequest('recording/list', $listRecordingArray);
    }

    /**
     * getDailyReport method
     * Function to get daily report
     */
    public function getDailyReport($data) {
        $getDailyReportArray = array();
        $getDailyReportArray['year'] = $data['year'];
        $getDailyReportArray['month'] = $data['month'];
        return $this->sendRequest('report/getdailyreport', $getDailyReportArray);
    }

    /**
     * getAccountReport method
     * Function to get account report
     */
    public function getAccountReport($data) {
        $getAccountReportArray = array();
        $getAccountReportArray['from'] = $data['from'];
        $getAccountReportArray['to'] = $data['to'];
        return $this->sendRequest('report/getaccountreport', $getAccountReportArray);
    }

    /**
     * getUserReport method
     * Function to get user report
     */
    public function getUserReport($data) {
        $getUserReportArray = array();
        $getUserReportArray['user_id'] = $data['userId'];
        $getUserReportArray['from'] = $data['from'];
        $getUserReportArray['to'] = $data['to'];
        return $this->sendRequest('report/getuserreport', $getUserReportArray);
    }

    /**
     * createAWebinar method
     * Function to create webinar
     */
    public function createAWebinar($data) {
        return $this->sendRequest('webinar/create', $data);
    }

    /**
     * deleteAWebinar method
     * Function to delete webinar
     */
    public function deleteAWebinar($data) {
        return $this->sendRequest('webinar/delete', $data);
    }

    /**
     * listWebinars method
     * Function to list webinars
     */
    public function listWebinars($data) {
        $listWebinarsArray = array();
        $listWebinarsArray['host_id'] = $data['userId'];
        return $this->sendRequest('webinar/list', $listWebinarsArray);
    }

    /**
     * getWebinarInfo method
     * Function to get webinar info
     */
    public function getWebinarInfo($data) {
        $getWebinarInfoArray = array();
        $getWebinarInfoArray['id'] = $data['webinarId'];
        $getWebinarInfoArray['host_id'] = $data['userId'];
        return $this->sendRequest('webinar/get', $getWebinarInfoArray);
    }

    /**
     * updateWebinarInfo method
     * Function to update webinar info
     */
    public function updateWebinarInfo($data) {
        return $this->sendRequest('webinar/update', $data);
    }

    /**
     * endAWebinar method
     * Function to end webinar
     */
    public function endAWebinar($data) {
        $endAWebinarArray = array();
        $endAWebinarArray['id'] = $data['webinarId'];
        $endAWebinarArray['host_id'] = $data['userId'];
        return $this->sendRequest('webinar/end', $endAWebinarArray);
    }

}
