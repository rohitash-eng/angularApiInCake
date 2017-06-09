/**
* @api {get} Calendar/getscheduleAppointment  Get schedule appointment
* @apiVersion 0.0.1
* @apiName getscheduleAppointment
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Get schedule appointment for calander availability.
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
* 
*
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data None.
*
*
* 
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [None]
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

