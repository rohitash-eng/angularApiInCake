/**
* @api {post} /users/resetPassword/:securitykey   Reset Password
* @apiVersion 0.0.1
* @apiName resetPassword
* @apiGroup Authentication
* @apiPermission None
*
* @apiDescription Reset your password by forgot password link sent on your registerd email.
* 
* @apiParam {String} password        		* Password field is required in body
* @apiParam {String} confirm_password 		* Confirm password field is required in body
*
*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.
*
* @apiExample Example usage:
*
*{
*	"password": "myclick06$",
*	"confirm_password": "nyclick06$"
*}
*
*
* 
* @apiSuccessExample {json} Success-Response: 
*        HTTP/1.1 success
*        {
*            	"status": 	true,
*		"message": 	"The request is OK"
*        }
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

