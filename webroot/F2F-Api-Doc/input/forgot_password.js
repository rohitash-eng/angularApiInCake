/**
* @api {post} /users/forgotPassword Forgot Password
* @apiVersion 0.0.1
* @apiName forgotPassword
* @apiGroup Authentication
* @apiPermission None
*
* @apiDescription sent resent password link, if f2f user forgot password.
*
* @apiParam {String} username    * Registered username/email is required as username in body.
 *
*
 * @apiSuccess {Boolean} status true.
 * @apiSuccess {String} message The request is OK.
*
* @apiExample Example usage:
*
*{
*    "username" : "test@test.com"
*}
*

* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
	"status": true
	"message": "The request is OK"
	"data":  ['None']
}
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

