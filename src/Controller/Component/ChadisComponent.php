<?php

namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
use Stripe\Customer;
use Stripe\Error\Card;
use Stripe\Error\InvalidRequest;
use Stripe\Error\Authentication;
use Stripe\Error\ApiConnection;
use Stripe\Error\Base;
use Stripe\Charge;
use Stripe\Plan;
use Stripe\Coupon;
use Stripe\Event;

/**
 * Stripe Component
 *
 */
class ChadisComponent extends Component {

    /**
     * Stripe mode, can be 'Live' or 'Test'
     *
     * @var string
     */
    private $mode = '';

    /**
     * Stripe API Secret key
     *
     * @var string
     */
    public $key = null;

    /**
     * Stripe currency, default is 'usd'
     *
     * @var string
     */
    private $currency = '';

    /**
     *
     * If provided, statuses will be saved in that file, default is false
     * if enabled, log should be added in bootstrap, e.g. if log file should be in tmp/logs/stripe.log
     *
     * @var string
     */
    public $logFile = false;

    /**
     * Can be 'both', 'success' or 'error', to what results to save, default is 'error'
     *
     * @var string
     */
    public $logType = 'error';

    /**
     *  For saving the reflection class, to use in the loop
     *
     * @var array
     */
    protected $reflectionClass = [];

    /**
     *  For saving the chadis key and secrets
     *
     * @var array
     */
    public $config = [];
   
    /**
     * initialize method
     * returns null
     * 
     * @param array $config
     * @return null
     */
    public function initialize(array $config) {
        parent::initialize($config);
        $this->config = Configure::read('CHADIS');
    }

     /**
     * registerPatient method
     *
     * function used to register patient on chadis
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function registerPatient($request = []) {
        $url = $this->config['URL'].'register';
        $key = hex2bin($this->config['SECRET']);
        $gender = ($request['gender']=='Male')?'M':'F';
        $input = '<?xml version="1.0" encoding="UTF-8"?><chadis:register xmlns:chadis="http://www.chadis.com/schema/registration">
<chadis:info>
    <chadis:sendingapplication>f2f</chadis:sendingapplication>
    <chadis:sendingfacility>f2f</chadis:sendingfacility>
    <chadis:creationdate>'.date('Y-m-d').'</chadis:creationdate>
    <chadis:transmissiondate>'.date('Y-m-d').'</chadis:transmissiondate>
</chadis:info>
<chadis:patient action="create" mrn="'.$request['id'].'" gender="'.$gender.'">
<chadis:dob>'.$request['dob'].'</chadis:dob>
<chadis:first-name>'.$request['fname'].'</chadis:first-name>
<chadis:middle-name></chadis:middle-name>
<chadis:last-name>'.$request['lname'].'</chadis:last-name>
<chadis:primary-telephone>'.$request['patient_parent']['primary_work_phone_no'].'</chadis:primary-telephone>
<chadis:respondent external-id = "'.$request['user_id'].'" relation="'.$request['patient_authorization_form']['relationship_to_patient'].'">
<chadis:username>'.$request['consumer_username'].'</chadis:username>
<chadis:email-address>'.$request['consumer_email'].'</chadis:email-address>
<chadis:first-name>'.$request['consumer_firstname'].'</chadis:first-name>
<chadis:last-name>'.$request['consumer_lastname'].'</chadis:last-name>
</chadis:respondent>
</chadis:patient>
</chadis:register>';
        $signature = hash_hmac($this->config['ALGORITHM'], $input, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($input),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
        $data = curl_exec($ch);
        return $data;
    }

     /**
     * registerProvider method
     *
     * function used to register provider on chadis
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function registerProvider($request = []) {
        $url = $this->config['URL'].'register';
        $key = hex2bin($this->config['SECRET']);
        $input = '<?xml version="1.0" encoding="UTF-8"?><chadis:register xmlns:chadis="http://www.chadis.com/schema/registration">
<chadis:info>
    <chadis:sendingapplication>F2F Provider</chadis:sendingapplication>
    <chadis:sendingfacility>provider</chadis:sendingfacility>
    <chadis:creationdate>'.date('Y-m-d').'</chadis:creationdate>
    <chadis:transmissiondate>'.date('Y-m-d').'</chadis:transmissiondate>
</chadis:info>
<chadis:user action="create" type="doctor">
<chadis:username>'.$request['username'].'</chadis:username>
<chadis:first-name>'.$request['firstname'].'</chadis:first-name>
<chadis:last-name>'.$request['lastname'].'</chadis:last-name>
<chadis:email-address>'.$request['email'].'</chadis:email-address>
<chadis:office id="239" />
</chadis:user>
</chadis:register>';
        $signature = hash_hmac($this->config['ALGORITHM'], $input, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($input),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
        $data = curl_exec($ch);
        return $data;
    }

     /**
     * getPatient method
     *
     * function used to get patient details
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function getPatient($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/patient/get-patient";
        $url = $this->config['URL'].'get-patient';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?><chadis:request xmlns:chadis="http://www.chadis.com/schema/api/patient/get-patient"><chadis:patient mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'" ></chadis:patient>
</chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

     /**
     * getPatientResult method
     *
     * function used to get patient result with access url
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function getPatientResult($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/patient-request";
        $url = $this->config['URL'].'patient-request';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?><chadis:request xmlns:chadis="http://www.chadis.com/schema/patient-request"><chadis:patient-request type="respondent-access" mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'"/></chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

     /**
     * assignQuestionnaires method
     *
     * function used to assign questionnaires
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    function assignQuestionnaires($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/assign";
        $url = $this->config['URL'].'assign';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?>
            <chadis:request xmlns:chadis="http://www.chadis.com/schema/api/assign-questionnaires"><chadis:assign mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'" order-id="'.$request['order_id'].'"><chadis:questionnaire id="540" /></chadis:assign></chadis:request>';

        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

     /**
     * cancelQuestionnaires method
     *
     * function used to cancel questionnaires
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    function cancelQuestionnaires($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/assign";
        $url = $this->config['URL'].'assign';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?>
            <chadis:request xmlns:chadis="http://www.chadis.com/schema/api/assign-questionnaires"><chadis:cancel mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'" order-id="'.$request['order_id'].'" /></chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

     /**
     * cancelQuestionnairesIndividually method
     *
     * function used to cancel questionnairs individually
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    function cancelQuestionnairesIndividually($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/assign";
        $url = $this->config['URL'].'assign';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?>
            <chadis:request xmlns:chadis="http://www.chadis.com/schema/api/assign-questionnaires"><chadis:assign mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'"><chadis:questionnaire id="362" /><chadis:questionnaire id="540" /></chadis:assign></chadis:request>';

        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

    /**
     * getAssignedQuestionnaires method
     *
     * function used to get assigned questionnaires
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    function getAssignedQuestionnaires($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/respondent/questionnaire-request";
        $url = $this->config['URL'].'questionnaire-request';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?>
            <chadis:request xmlns:chadis="http://www.chadis.com/schema/api/respondent/questionnaire-request">
            <chadis:questionnaire-request mrn="'.$request['patient_mrn'].'" lang="en" respondent-id="12345000" requesting-user="'.$request['provider_username'].'" /></chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

    /**
     * changePatientIdentifiers method
     *
     * function used to change patient identifiers or mrn
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    function changePatientIdentifiers($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/change-identifier";
        $url = $this->config['URL'].'change-identifier';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?>
            <chadis:request xmlns:chadis="http://www.chadis.com/schema/api/change-patient-identifier">
            <chadis:change-identifier mrn="'.$request['patient_mrn'].'" new-mrn="'.$request['patient_new_mrn'].'" requesting-user="'.$request['provider_username'].'" /></chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

    /**
     * getClinicalAccess method
     *
     * function used to get clinical access from chadis
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function getClinicalAccess($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/patient-request";
        $url = $this->config['URL'].'patient-request';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?><chadis:request xmlns:chadis="http://www.chadis.com/schema/patient-request"><chadis:patient-request type="summary" mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'" generate-view-patient-urls="true" /></chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }

    /**
     * getRespondentAccess method
     *
     * function used to get respondent access from chadis
     * 
     * @param Array $request requried mrn, respondent id and requesting user
     * @return \Cake\Network\Response|null return Array
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
    */
    public function getRespondentAccess($request = []) {
        //$url = "https://dev.chadis.com/cschultz-chadis-api/patient-request";
        $url = $this->config['URL'].'patient-request';
        $key = hex2bin($this->config['SECRET']);
        $xml = '<?xml version="1.0" encoding="utf-8" ?><chadis:request xmlns:chadis="http://www.chadis.com/schema/patient-request"><chadis:patient-request type="respondent-entry" mrn="'.$request['patient_mrn'].'" requesting-user="'.$request['provider_username'].'" respondent-id="5506" />
</chadis:request>';
        $signature = hash_hmac($this->config['ALGORITHM'], $xml, $key);
        $headers = array(
            "Content-type: application/xml;charset=\"utf-8\"",
            "Accept:application/xml",
            "Cache-Control:no-cache",
            "Pragma:no-cache",
            "Content-length:" . strlen($xml),
            "X-Requesting-Site:" . $this->config['SITEID'],
            "X-HMAC-Algorithm:HmacSHA256",
            "X-HMAC-Digest:" . $signature,
            "X-Whitespace:expand",
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        //curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 60);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        $data = curl_exec($ch);
        return $data;
    }
}
