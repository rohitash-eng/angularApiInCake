/**
* @api {get} /users/getUsernameAndEmail Get Username And Email
* @apiName getUsernameAndEmail
* @apiGroup Provider
*
* @apiDescription Get Username And Email.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Appointment Object contain details about patient appointment.
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "username": "nikum.kunj27",
    "email": "nikum.kunj27@kiwitech.com",
    "community_username": "nikum.kunj11111"
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

