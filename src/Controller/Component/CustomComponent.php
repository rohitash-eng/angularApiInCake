<?php

/* namespace CakephpStripe\Controller\Component; */

namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
use Cake\Network\Http\Client;

/**
 * Stripe Component
 *
 */
class CustomComponent extends Component {

    public $NPI_BASE_URL = 'https://npiregistry.cms.hhs.gov/api';
    public $GOOGLE_GEOCODE_API = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=";

    /**
     * verify method
     * Verify NPI Number
     *
     * @param number $npi
     * @return boolean
     */
    public function npi_verify($npi) {

        $http = new Client();
        $data = ['number' => $npi];
        $response = $http->get('https://npiregistry.cms.hhs.gov/api', $data);
        $response = json_decode($response->body, true);
        $count = $response['result_count'];
        if ($count > 0)
            return true;
        else
            return false;
    }
    
   /**
     * getLnt method
     * function use to get lat long by zipcode
     * @param string|null $zip.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
    */
    function getLnt($zip) { 
        $url = $this->GOOGLE_GEOCODE_API.$zip;
        $http = new Client();
        $response = $http->get($url, ['type' => 'json']);
        if(!empty($response->json['results'][0]['geometry']['location'])) {
            return $response->json['results'][0]['geometry']['location'];
        } else {
            return false;
        }
    }
    
     /**
     * getStateByZipcode method
     * function use to get state by zipcode
     * @param string|null $zip.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
    */
    function getStateByZipcode($zip) { 
        $url = $this->GOOGLE_GEOCODE_API.$zip;
        $http = new Client();
        $response = $http->get($url, ['type' => 'json']);
        $state = array();
        if(!empty($response->json['results'][0]['address_components'])) { 
            foreach($response->json['results'][0]['address_components'] as $res) {
                if(!empty($res['types']) and $res['types'][0]=='administrative_area_level_1') {
                    $state['short_name'] = $res['short_name'];
                    $state['long_name'] = $res['long_name'];
                    break;
                }
            }
            return $state;
        } else {
            return false;
        }
    }
    
    /**
     * getDistance method
     * function use to get distance by zipcode
     * @param string|null $data.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
    */
    function getDistance($zip1 = null, $zip2 = null, $unit = null) {
        $first_lat = $this->getLnt($zip1);
        $next_lat = $this->getLnt($zip2);
        $lat1 = $first_lat['lat'];
        $lon1 = $first_lat['lng'];
        $lat2 = $next_lat['lat'];
        $lon2 = $next_lat['lng']; 
        $theta=$lon1-$lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +
        cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
        cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;
        $unit = strtoupper($unit);

        if ($unit == "K") {
            //return ($miles * 1.609344)." ".$unit;
            return ($miles * 1.609344);
        } else if ($unit =="N") {
            return ($miles * 0.8684)." ".$unit;
        }
        else{
            return $miles." ".$unit;
        }
    }

}
