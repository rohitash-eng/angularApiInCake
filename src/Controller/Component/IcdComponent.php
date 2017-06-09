<?php

namespace App\Controller\Component;
require_once(ROOT . DS . 'vendor' . DS . "aquaio" .DS."aqua".DS."lib".DS."AquaIo". DS . "init.php");


use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
use AquaIo\Client;
use AquaIo\HttpClient\HttpClient;


/**
 * Icd Component
 *
 */

class IcdComponent extends Component
{
    /**
     * The ICD Url
     *
     * @var string
     */
    private $url = '';

    /**
     * The ICD Client Id
     *
     * @var string
     */
    private $client_id = '';

    /**
     * The ICD Client Secret
     *
     * @var string
     */
    private $client_secret = '';

    public function initialize(array $config)
    {
        parent::initialize($config);
        $this->config = Configure::read('ICD');  

        $url = $this->config['BASE_URL'];
        if ($url) {
            $this->url = $url;
        } 

        $client_id = $this->config['CLIENT_ID'];
        if ($client_id) {
            $this->client_id = $client_id;
        } 

        $client_secret = $this->config['SECRET'];
        if ($client_secret) {
            $this->client_secret = $client_secret;
        } 
    }


     public function search($icd_type ,$data){

        $response =array();

        if(isset($icd_type)&& isset($data)){
            $auth = array('client_id' => $this->client_id, 'client_secret' => $this->client_secret);

            $clientOptions= array('base' => $this->url);

            $this->ICDClient = new Client($auth, $clientOptions);
           
            $token = $this->ICDClient->accessToken()->retrieve()->body['access_token'];
            $this->ICDClient2 = new Client($token, $clientOptions);
            
            $icd9 = $this->ICDClient2->icd9();
            $icd10 = $this->ICDClient2->icd10();
            $options =array('token'=>$token);
            if($icd_type =="icd9"){
                    $response = $icd9->searchByNameOrDescription($data,$options);    
            }elseif($icd_type =="icd10"){
                    $response = $icd10->searchByNameOrDescription($data,$options);
            }
                return $response->body;
        }else{
                return $response;
        }   
     }
}
