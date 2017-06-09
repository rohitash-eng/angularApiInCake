<?php

namespace App\Utility;

/**
 * Description of Utility
 *
 * @author Mr Subhash
 */
class Utils {

    private static $key = 'a1Ab2Bc3Cd4De5E';
    
    public static function inToArray($obj) {
        if(!is_object($obj) && !is_array($obj)){
            return $obj;
        }
        
        if (is_object($obj)) {
            // Gets the properties of the given object
            // with get_object_vars function
            $obj = get_object_vars($obj);
        }

        if (is_array($obj)) {
            /*
             * Return array converted to object
             * Using __CLASS__, __FUNCTION__ (Magic constant)
             * for recursive call
             */
            return array_map([__CLASS__,__FUNCTION__], $obj);
        } else {
            // Return array
            return $obj;
        }
    }
    
    public static function inToObject($array) {
        if (is_array($array)) {
            /*
             * Return array converted to object
             * Using __FUNCTION__ (Magic constant)
             * for recursive call
             */
            return (object) array_map(__FUNCTION__, $array);
        } else {
            // Return object
            return $array;
        }
    }

    // Generates the key 
    public static function getKey($key = '', $md5 = true) {
        if ($key == '') {
            $key = self::$key;
        }
        $key = str_split($md5 ? md5($key) : sha1($key), 1);
        $signal = false;
        $sum = 0;

        foreach ($key as $char) {
            if ($signal) {
                $sum -= ord($char);
                $signal = false;
            } else {
                $sum += ord($char);
                $signal = true;
            }
        }
        return abs($sum);
    }

  
    /**
     * encode method encode any string or integer
     * 
     * @param $string string to encode
     * @return string encoded string
     */    
    public static function encode($string) {
        $key = self::$key;
        $key = sha1($key);
        $strLen = strlen($string);
        $keyLen = strlen($key);
        $j = 0;
        $hash = '';
        for ($i = 0; $i < $strLen; $i++) {
            $ordStr = ord(substr($string, $i, 1));
            if ($j == $keyLen) {
                $j = 0;
            }
            $ordKey = ord(substr($key, $j, 1));
            $j++;
            $hash .= strrev(base_convert(dechex($ordStr + $ordKey), 16, 36));
        }
        return $hash;
    }

    /**
     * decode method to decode the encoded string
     * 
     * @param string $string encoded string to decode
     * @return string return decoded string.
     */
    public static function decode($string) {
        $key = self::$key;
        $key = sha1($key);
        $strLen = strlen($string);
        $keyLen = strlen($key);
        $j = 0;
        $hash = '';
        for ($i = 0; $i < $strLen; $i+=2) {
            $ordStr = hexdec(base_convert(strrev(substr($string, $i, 2)), 36, 16));
            if ($j == $keyLen) {
                $j = 0;
            }
            $ordKey = ord(substr($key, $j, 1));
            $j++;
            $hash .= chr($ordStr - $ordKey);
        }
        return $hash;
    }

    public static function getError($errors = []) {
        if (empty($errors)) {
            return;
        }
        foreach ($errors as $objKey => $objVal) {
            foreach ($objVal as $field => $value) {
                return $value;
            }
        }
    }

    public static function arrayToString($args = array()) {
        if (empty($args)) {
            return;
        }
        if (!is_array($args)) {
            return $args;
        }
        foreach ($args as $keys => $index) {
            foreach ($index as $ind => $str) {
                return $str;
            }
        }
    }

    public static function uniqueValue($length = 8) {
        $string = [range('a', 'z'), range('A', 'Z'), str_split('!@#_-$%&()*'), range(0, 9)];
        $strCount = count($string);
        $password = '';
        $j = 0;
        for ($i = 0; $i < $length; $i ++) {
            if ($j == $strCount) {
                $j = 0;
            }
            $password .= $string[$j][array_rand($string[$j])];
            $j++;
        }
        return $password;
    }
    
    /**
     * Strips scripts and stylesheets from output
     *
     * @param string $str String to sanitize
     * @return string String with <link>, <img>, <script>, <style> elements and html comments removed.
     */
    public static function stripScripts($str) {
        $regex = '/(<link[^>]+rel="[^"]*stylesheet"[^>]*>|' .
                '<img[^>]*>|style="[^"]*")|' .
                '<script[^>]*>.*?<\/script>|' .
                //'<style[^>]*>.*?<\/style>|' .
                '<!--.*?-->/is';
        return preg_replace($regex, '', $str);
    }

    /**
     * Sanitizes given array or value for safe input. Use the options to specify
     * the connection to use, and what filters should be applied (with a boolean
     * value). Valid filters:
     *
     * - odd_spaces - removes any non space whitespace characters
     * - encode - Encode any html entities. Encode must be true for the `remove_html` to work.
     * - dollar - Escape `$` with `\$`
     * - carriage - Remove `\r`
     * - unicode -
     * - escape - Should the string be SQL escaped.
     * - backslash -
     * - remove_html - Strip HTML with strip_tags. `encode` must be true for this option to work.
     *
     * @param string|array $data Data to sanitize
     * @param string|array $options If string, DB connection being used, otherwise set of options
     * @return mixed Sanitized data
     */
    public static function clean($data, $options = array()) {
        if (empty($data)) {
            return $data;
        }
        $options += array(
            'odd_spaces' => true,
            'dollar' => true,
            'carriage' => true,
            'unicode' => true,
            'escape' => true,
            'backslash' => true,
            'script' => true
        );

        if (is_array($data)) {
            foreach ($data as $key => $val) {
                if(($key=='description') || ($key =='content')){
                    continue;
                }else{
                    $data[$key] = Utils::clean($val, $options);
                }
            }
            return $data;
        }

        if ($options['odd_spaces']) {
            $data = str_replace(chr(0xCA), '', $data);
        }
        if ($options['dollar']) {
            $data = str_replace("\\\$", "$", $data);
        }
        if ($options['carriage']) {
            $data = str_replace("\r", "", $data);
        }
        if ($options['unicode']) {
            $data = preg_replace("/&amp;#([0-9]+);/s", "&#\\1;", $data);
        }
        if ($options['backslash']) {
            $data = preg_replace("/\\\(?!&amp;#|\?#)/", "\\", $data);
        }
        if ($options['script']) {
            $data = Utils::stripScripts($data);
        }
        
        return $data;
    }
    
    public static function exception($msg,$status=true, $code = 200) {
        $response = new \Cake\Network\Response();
        $response->type('json');
        $response->statusCode($code);
        $response->body(json_encode(['status'=>$status,'message'=>$msg]));
        $response->send();
        exit(0);
    }
    
    /**
     * filterArray method to filter the required array from multi array
     * @param array $data long array
     * @param array $required array which your want to filter.
     * @return array filtered array
     */
    public static function filterArray($data,$required){
        $validField = array_filter($data,function ($key) use ($required) {
                return in_array($key, $required);
            },
            ARRAY_FILTER_USE_KEY
        );
        return $validField;
    }
    
    /**
     * getVar method to set default value if variable has no value
     * 
     * @param string $var $variable value
     * @param string $default default value
     * @return string return required value
     */
    
    public static function getVar($var,$default=null){
        if(!empty($var)){
            return self::clean($var);
        }elseif(!empty($default)){
            return $default;
        }else{
            return null;
        }
    }

}
