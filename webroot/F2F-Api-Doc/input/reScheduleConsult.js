/**
 * @api {post} /Consultations/reScheduleConsult Reschedule Consultation By Provider
 * @apiName reScheduleConsult
 * @apiGroup Provider
 *
 * @apiDescription To reschedule consultation by provider
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} consult_id    * Consult id is required in body.
* @apiParam {Number} re_schedule_date    * Consult id is required in body.
* @apiParam {Number} re_schedule_start_time    * Consult id is required in body.
* @apiParam {Number} re_schedule_end_time    * Consult id is required in body.


*
* @apiExample Example usage:
*
*{
*	"consult_id":"7",
*	"re_schedule_date":"2016-10-18",
*	"re_schedule_start_time":"06:50:00",
*	"re_schedule_end_time":"07:00:00"
*}
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
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
