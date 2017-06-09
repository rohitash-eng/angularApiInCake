/**
* @api {post} /Consultations/scheduleFollowUp Schedule Follow up an Appointment with single or multi provider by consumer/provider
* @apiName scheduleFollowUp
* @apiGroup Consumer
* @apiPermission Consumer/Provider
*
* @apiDescription Schedule Follow up an Appointment.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} consult_id    * consult_id  is required field in body.
* @apiParam {Date} consultation_start_date * Consultation start date is required field in body.
* @apiParam {Time} consultation_start_time * Consultation start time is required field in body.
* @apiParam {Time} consultation_end_time * Consultation end time is required field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data none.

* @apiExample Example usage:
*
*
*{
*  "consult_id":"48",
*  "consultation_start_date":"01/18/2017",
*  "consultation_start_time":"15:00:00",
*  "consultation_end_time":"15:15:00"
*}
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

