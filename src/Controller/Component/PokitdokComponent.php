<?php
/*namespace CakephpStripe\Controller\Component;*/
namespace App\Controller\Component;
//require_once(ROOT . DS . 'vendor' . DS . "pokitdok" .DS."pokitdok_php".DS. "init.php");
require_once(ROOT . DS .'vendor/autoload.php');

use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;

use \PokitDok\Platform\PlatformClient;

/**
 * Stripe Component
 *
 */

class PokitdokComponent extends Component
{
    public $client_id = '';
    public $secret = '';


    public function initialize(array $config)
    {
        parent::initialize($config); 
        $this->config = Configure::read('POKITDOK');  

        $this->client_id = $this->config['CLIENT_ID'];
        $this->secret = $this->config['SECRET'];  
    }
   
    public function getPlans($plan_params=array()){
        $client = new PlatformClient($this->client_id,$this->secret);
        $allplans = $client->plans($plan_params);
        $response_body = $allplans->body();
        $response = json_decode(json_encode($response_body), true);
        return $response;
   }
    
}
