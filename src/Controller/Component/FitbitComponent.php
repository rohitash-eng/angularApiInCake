<?php
/*namespace CakephpStripe\Controller\Component;*/
namespace App\Controller\Component;

//require_once(ROOT . DS . 'vendor' . DS . "aquaio" .DS."aqua".DS."lib".DS."AquaIo". DS . "init.php");
require_once(ROOT . DS .'vendor/autoload.php');
use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
//use Cake\Network\Http\Client;
use Fabulator;
use Fabulator\Fitbit\Water;
use Fabulator\Fitbit\Activity;
use Fabulator\Fitbit\Profile;
use Fabulator\Fitbit\Body;
use Fabulator\Fitbit\Hearth;
use Fabulator\Fitbit\Sleep;
use Fabulator\Fitbit;

/**
 * Stripe Component
 *
 */

class FitbitComponent extends Component
{
    public $client_id = '';
    public $secret = '';


    public function initialize(array $config)
    {
        parent::initialize($config); 
        $this->config = Configure::read('FITBIT');  

        $this->client_id = $this->config['CLIENT_ID'];
        $this->secret = $this->config['SECRET'];  
    }
   
    public function getProfile(){
      $fitbit = new Fitbit($this->client_id,$this->secret);
      
      $response = $fitbit->getLoginUrl('http://localhost/f2f_test/articles/index', ['profile']);
      $code = "Y2xpZW50X2lkOmNsaWVudCBzZWNyZXQ=";
      echo $token = $fitbit->getToken($code, 'http://localhost/f2f_test/articles/index');die;
      return $response;
   }
   
}
