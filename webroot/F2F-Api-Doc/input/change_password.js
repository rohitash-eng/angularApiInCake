/**
* @api {post} /users/changePassword Change Password
* @apiVersion 0.0.1
* @apiName changePassword
* @apiGroup Authentication
* @apiPermission Consumer/Provider
*
* @apiDescription User can change password
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN

* @apiParam {String} old_password     * Old password required in body.
* @apiParam {String} password         * New password required in body.
* @apiParam {String} confirm_password * Confirm password required in body.

*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.

* @apiExample Example usage:
*
*{
*	"old_password":"Old Password",
*	"password": "New Password",
*	"confirm_password": "Confirm Password"
*}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
	"status": true,
	"message": "The request is OK",
	"data": {none}
}
 *
*
* @apiError {Object} Error-Response Returns a json Object.
* @apiError (Error-Response Object){Boolean} status false.
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

