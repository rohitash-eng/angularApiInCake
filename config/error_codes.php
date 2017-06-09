<?php
$config['Message']['200'] = array(
    'status' => true,
    'message' => 'The request is OK', 
    'data' => 'None', 
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['201'] = array(
    'status' => true,
    'message' => 'Data saved successfully',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['202'] = array(
    'status' => true,
    'message' => 'The request has been accepted for processing, but the processing has not been completed', //success
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['204'] = array(
    'status' => true,
    'message' => 'The request has been successfully processed, but is not returning any content',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['400'] = array(
    'status' => false,
    'message' => 'Requested Parameter is not correct',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['401'] = array(
    'status' => false,  
    'message' => 'Invalid Token or Unauthorised user',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['403'] = array(
    'status' => false,
    'message' => 'Access forbidden',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['404'] = array(
    'status' => false,
    'message' => 'Page Not Found',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['405'] = array(
    'status' => false,
    'message' => 'Request method not supported',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);

$config['Message']['504'] = array(
    'status' => false,
    'message' => 'Gateway Timeout',
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);

$config['Message']['code'] = array(
    '1' => '200',
    '2' => '201',
    '3' => '202',
    '4' => '204',
    '5' => '400',
    '6' => '401',
    '7' => '404',
    '8' => '405'
);
$config['Message']['status'] = array(
    '1' => 'Ok',
    '2' => 'Saved',
    '3' => 'Accepted',
    '4' => 'Data Not Found',
    '5' => 'Bad Request', // if parameter is not correct
    '6' => 'Unauthorized', //if token is empty and not correct
    '7' => 'Page Not Found',
    '8' => 'Method not Allowed' //used when request method(GET,POST,PUT etc) is not correct. 
);

$config['Message']['message'] = array(
    '1' => 'The request is OK',
    '2' => 'Data saved successfully',
    '3' => 'The request has been accepted for processing, but the processing has not been completed',
    '4' => 'The request has been successfully processed, but is not returning any content',
    '5' => 'Requested Parameter is not correct',
    '6' => 'Invalid Token or Unauthorised user',
    '7' => 'Page Not Found',
    '8' => 'Request method not supported'
);
/*Zoom Error*/
$config['Message']['1010'] = array(
    'status' => true,
    'message' => 'User does not belong to this account.', //success
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);
$config['Message']['1005'] = array(
    'status' => true,
    'message' => "User already in the account",
    'data' => 'None',
    '_serialize' => array('code', 'status', 'message', 'data')
);