<?php

namespace App\Model\Validation;

use Cake\Validation\Validator;

class CustomValidator extends Validator {

    public function __construct() {
        parent::__construct();
    }

    public static function ssn($value, $context) {
        if (preg_match('/^\d{3}-?\d{2}-?\d{4}$/', $value, $value)) {
            return true;
        } else {
            return 'Please provide valid SSN No.';
        }
    }

    public static function validText($value, $context) {
        if (preg_match('/^[a-zA-Z .]+$/', $value)) {
            return true;
        } else {
            return 'Special characters and numbers not allowed';
        }
    }

    public static function phone($value) {
        if (preg_match('/^[0-9]{10}$/', $value)) {
            return true;
        } else {
            return 'Please provide valid phone no.';
        }
    }

    public static function fax($value) {
        if (preg_match('/^[0-9]{11}$/', $value)) {
            return true;
        } else {
            return 'Please provide valid fax no.';
        }
    }

    public static function zip($value) {
        if (preg_match('/^[0-9]{5,6}$/', $value)) {
            return true;
        } else {
            return 'Please provide valid zip code.';
        }
    }

    public static function enumValue($value) {
        if ($value == 'Y' || $value == 'N') {
            return true;
        } else {
            return 'Please provide valid Y or N value.';
        }
    }

    public static function paymentMethod($value) {
        if ($value == 'bank' || $value == 'cheque') {
            return true;
        } else {
            return 'Please provide valid  payment method bank or cheque value.';
        }
    }

    public static function validAddress($value) {
        if (preg_match('/^[a-z0-9 ]*$/i', $value)) {
            return true;
        } else {
            return 'Please provide valid  address.';
        }
    }

    public static function validThreeFourDigit($value) {
        if (preg_match('/^[0-9]{3,4}$/', $value)) {
            return true;
        } else {
            return 'Invalid cvc or cvv code.';
        }
    }

    public static function validFourDigit($value) {
        if (preg_match('/^[0-9]{4}$/', $value)) {
            return true;
        } else {
            return 'Invalid Card Number.';
        }
    }

    public static function futureMonth($value) {
        if ($value > date("m")) {
            return true;
        } else {
            return 'Invalid expiry date.';
        }
    }

    public static function futureYear($value) {
        if ($value > date("Y")) {
            return true;
        } else {
            return 'Invalid expiry date.';
        }
    }
    
    public static function expiryDate($value) {
        if ($value > date('m/Y',  time())) {
            return true;
        } else {
            return 'Invalid expiry date.';
        }
    }

}
