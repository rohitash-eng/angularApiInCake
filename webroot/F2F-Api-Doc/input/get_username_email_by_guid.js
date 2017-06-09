/**
* @api {get} /users/getUsernameAndEmailByGuid/XXXXXXXXXXXX Get Username, Email by Guid 
 * @apiName getUsernameAndEmailByGuid
 * @apiGroup Authentication
*
* @apiDescription Get username and email by guid send in forgot password email.
* 
*
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Patient Object contain details about patient.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "username": "ds11",
    "email": "test@gmail.com"
  }
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

