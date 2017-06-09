<?php

namespace App\Controller\Component;

use Cake\Controller\Component;
use Cake\Core\Configure;
use Cake\Core\Exception\Exception;
use Cake\Network\Http\Client;

/**
 * Npi Component
 *
 */
class NpiComponent extends Component {

    /**
     * The NPI Url
     *
     * @var string
     */
    private $url = '';

    public function initialize(array $config) {
        parent::initialize($config);
        $this->config = Configure::read('NPI');

        $url = $this->config['BASE_URL'];
        if ($url) {
            $this->url = $url;
        }
    }

    /**
     * verify method
     * Funtion to verify NPI Number
     *
     * @param number $npi
     * @return boolean
     */
    public function verify($npi) {
        $http = new Client();
        if (isset($npi)) {
            $data = ['number' => $npi];
            $responseData = $http->get($this->url, $data);
            $responseData = json_decode($responseData->body, true);
            if (isset($responseData['result_count'])) {
                $count = $responseData['result_count'];
                if ($count > 0)
                    return true;
                else
                    return false;
            }
        }else {
            return false;
        }
    }

}
