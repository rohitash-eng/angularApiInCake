/**
* @api {post} /users/login Provider Signin
* @apiVersion 0.0.1
* @apiName login
* @apiGroup Authentication
* @apiPermission None
*
* @apiDescription Signin provider with Face2Face Health system to authenticate.
* 
* @apiParam {String} username        * Username registered username|email requried in body
* @apiParam {String} password        * Password is required in body.
* @apiParam {String} timezone        * Local time zone.

*
*
* @apiSuccess {Boolean} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about provider.
*
* @apiExample Example usage:
*
*{
*   "username": "username|email",
*   "password" : "YourP@ssword",
*   "timezone" : "Asia/Kolkata"
*}
*
*
* 
* @apiSuccessExample {json} Success-Response: 
*        HTTP/1.1 success
*        {
*
* 		"status": true,
* 		"message": "The request is OK",
* 		"data": {
*   			"id": 3,
*   			"user_type_id": 1,
*   			"title": "Mr.",
*   			"fname": "Ravi",
*   			"lname": "kumar",
*   			"email": "ravi.kumar1@kiwitech.com",
*   			"username": "ravi1",
*   			"newsletter_subsciption_status": "Y",
*   			"provider_type_id": 1,
*   			"photo": "Abs.jpeg",
*   			"ssn_no": "1123211",
*   			"guid": null,
*   			"forgot_password_request_time": null,
*   			"dob": "1988-04-07T00:00:00+00:00",
*   			"gender": "Male",
*   			"timezone" : "Asia/Kolkata",
*   			"terms_of_use": true,
*   			"activate_key": null,
*   			"created": "2016-09-01T11:01:05+00:00",
*   			"modified": null,
*   			"token": "a13d7666-dc6d-47b7-a3ed-9823f8f3be1b"
*		}
*        }
*
*
*
* @apiError {Object} Error-Response Returns a json Object.
* @apiError (Error-Response Object){Boolean} status Status.
* @apiError (Error-Response Object){String} message Message.
* @apiErrorExample Sample Error-Response:

*   
*  {
"status": false,
"message": "Method not allowed on resource."
}
{
"status": false,
"message": "Resource not found."
}
{
"status": false,
"message": "Requested Parameter is not correct"
}
*/


