/**
* @api {put} /consultations/consumerUpdateAppointmentStatus/:1/:Accept Update Appointment Status
 * @apiName consumerUpdateAppointmentStatus
 * @apiGroup Consumer
*
* @apiDescription Get patient appointment by provider authentication.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} /:1    * Patient id send in request by url qurey string.
* @apiParam {String} /:Accept    * Accept|Decline send in request by url qurey string.
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": "None"
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

