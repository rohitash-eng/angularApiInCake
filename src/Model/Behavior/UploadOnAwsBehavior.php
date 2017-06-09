<?php

namespace App\Model\Behavior;

use Cake\Event\Event;
use Cake\Filesystem\File;
use Cake\Filesystem\Folder;
use Cake\ORM\Behavior;
use Cake\ORM\Entity;
use Cake\Core\Configure;

require_once(ROOT . DS . 'vendor' . DS . 'aws' . DS . 'aws-autoloader.php');

class UploadOnAwsBehavior extends Behavior {

    /**
     * Default config.
     *
     * @var array
     */
    public $config;
    
    /**
     * Aws S3 config.
     *
     * @var array
     */
    public $S3Client;

    /**
     * initializeS3 method
     *
     * function upload an image
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */

    public function initializeS3() {
        $this->config = Configure::read('Message');
        $this->config = Configure::read('S3');
        $this->S3Client = \Aws\S3\S3Client::factory(array(
                    'base_url' => $this->config['URL'],
                    'key' => $this->config['KEY'],
                    'secret' => $this->config['SECRET']
        ));
    }

    /**
     * upload method
     *
     * function upload an file
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function upload($dataOjb = null, $uploadfolder = null, $response = null) {
        //intialize S3 configration
        $this->initializeS3();
        $response->type(['pdf' => ['application/pdf', 'application/x-pdf', 'application/x-download', 'application/download', 'binary/octet-stream']]);

        $data = $dataOjb['fileObject'];
        $dataExp = explode(';', $data);
        $ext = $dataExp[0];

        list($dataIdx, $contentType) = explode(':', $ext);

        $ext = explode('/', $contentType);
        $file_ext = $response->mapType($contentType);
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
            $link = $this->uploadONAWS($file, $uploadfolder . DS . $filename);

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
    public function uploadONAWS($uploadedFilePath, $uploadfolder) {
        $filename = $this->S3Client->upload($this->configS3['BUCKET'], $uploadfolder, fopen($uploadedFilePath, 'r'), "public-read");
        unlink($uploadedFilePath);
        $filePath = $filename->toArray();
        return $filePath['ObjectURL'];
    }
    
    /**
     * deleteOldUpload method
     *
     * function used to delete the image on s3
     * 
     * @param string|null $validator object of validator class.
     * @return \Cake\Network\Response|null return json
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function deleteOldUpload(){
        if($filename==null){ 
             $filename = $entity->get($this->_config['field']);
        }
        
        $fileKey = str_replace('https://'.$this->_aws3['bucket'].'.s3.amazonaws.com/', '', $filename);
        try {
            $result = $this->aws3Obj->deleteObject([
                'Bucket' => $this->_aws3['bucket'],
                'Key'    => $fileKey
            ]);             
        } catch (S3Exception $ex) {
            die('File not found to delete.'.  print_r($ex, true));
        }
    }
            
}
