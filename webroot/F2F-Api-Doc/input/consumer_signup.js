/**
* @api {post} /users/consumerSignUp Consumer Signup
* @apiVersion 0.0.1
* @apiName consumerSignUp
* @apiGroup Authentication
* @apiPermission None
*
* @apiDescription Signup user with Face2Face Health system.
* 
* @apiParam {String} fname             * First Name.
* @apiParam {String} lname             * Last Name.
* @apiParam {String} username          * Username of the user (Must be unique).
* @apiParam {String} email             * Email Address of the user (Must be unique).
* @apiParam {String} password          * Password.
* @apiParam {String} confirm_password  * Confirm Password.
* @apiParam {String} timezone  * Local time zone.
*
*
* @apiSuccess {Boolean} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Consumer Object contain details about consumer.
*
* @apiExample Example usage:
*
*{
*   "fname": "Kannan",
*   "lname": "Ram",
*   "username": "kannan_kr",
*   "email": "kannan.k@kiwitech.com",
*   "password": "mypassword",
*   "confirm_password": "mypassword",
*   "timezone": "Asia/Kolkata"
*}
*
* 
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 21,
    "user_type_id": 2,
    "title": "",
    "fname": "dhirendra",
    "mname": null,
    "lname": "singh",
    "community_username": null,
    "email": "dhirendra5.singh@kiwitech.com",
    "username": "dhiru5",
    "newsletter_subsciption_status": "Y",
    "provider_type_id": 0,
    "photo": null,
    "ssn_no": "",
    "guid": null,
    "forgot_password_request_time": null,
    "dob": null,
    "gender": "",
    "terms_of_use": false,
    "activate_key": null,
    "status": "Active",
    "timezone": "Asia/Kolkata",
    "stripe_customer_id": "",
    "stripe_card_id": null,
    "created": "2016-09-26T14:46:40+00:00",
    "modified": null,
    "token": "5a41c9b5-dd34-4f27-93fd-1a48067fc08f"
  }
}
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



