<?php

namespace App\Mailer;

use Cake\Mailer\Mailer;
use \Cake\Core\Configure;
use Cake\ORM\TableRegistry;

class UserMailer extends Mailer {

     /**
     * sendEmail function
     * used to send email from f2f plateform
     * 
     * @param array $data
     * @return \Cake\Network\Response|null return boolean
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function sendEmail($data=null) {
        $f2f_email = Configure::read('F2F_email');
        $f2f_name = Configure::read('F2F_name');
        $contents = TableRegistry::get('EmailContents');
        $emailContents = $contents->find('all', [
            'conditions' => ['slug' => $data['slug']]
        ]);
        $template = str_replace('-','_',$data['slug']);
        if ($emailContents->count() > 0) {
            $emailContents = $emailContents->first()->toArray();
            if($data['slug']=='forgot-password'){
            $link = '<a href="' . BASE_URL . '#/main/resetPass/' . $data['guid'] . '">' . BASE_URL . '#/main/resetPass/' . $data['guid'] . '</a>';        $domain = '<a href="' . BASE_URL . '">' . BASE_URL . '</a>';
            $mailBody = str_replace('< link >', $link, $emailContents['contents']);
            $contents = str_replace('< domain >', $domain, $mailBody);
            } else {
            $contents = $emailContents['contents'];
            }
            $this->viewVars(array('contents' => $contents,'data'=>$data));
            $this->template($template)
                    ->emailFormat($emailContents['template_type'])
                    ->to($data['to_email'])
                    ->from([$f2f_email => $f2f_name])
                    ->subject($emailContents['subject']);
        }
    }
    
    /**
     * inviteEmail function
     * used to send email to invite provider from provider Inbox
     * @param array $data
     * @return \Cake\Network\Response|null return boolean
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function inviteEmail($data=null) {
        $f2f_email = Configure::read('F2F_email');
        $f2f_name = Configure::read('F2F_name');
        $contents = TableRegistry::get('EmailContents');
        $emailContents = $contents->find('all', [
            'conditions' => ['slug' => $data['slug']]
        ]);
        $template = str_replace('-','_',$data['slug']);
        if ($emailContents->count() > 0) {
            $emailContents = $emailContents->first()->toArray();
            $contents = $emailContents['contents'];
            $this->viewVars(array('contents' => $contents,'data'=>$data));
            $this->template($template)
                    ->emailFormat($emailContents['template_type'])
                    ->to($data['to_email'])
                    ->from([$f2f_email=>$f2f_name])
                    ->subject($emailContents['subject']);
        }
    }
  
}
