<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Model\Behavior;

use Cake\ORM\Behavior;

/**
 * CakePHP CustomErrorBehavior
 * @author kiwitech
 */
class ErrorBehavior extends Behavior {

    public function fieldError($errors) {
        if (empty($errors)) {
            return;
        }
        foreach ($errors as $ekey => $row) {
            foreach ($row as $ikey => $ival) {
                return $ival;
            }
        }
    }

}
