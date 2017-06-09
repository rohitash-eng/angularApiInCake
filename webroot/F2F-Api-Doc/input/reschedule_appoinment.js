/**
 * @api {put} Consultations/reScheduleConsultByConsumer Reschedule Consult By Consumer
 * @apiName reScheduleConsultByConsumer
 * @apiGroup Consumer
 *
 * @apiDescription Reschedule Consult By Consumer
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} consult_id              * Id of Patient
 * @apiParam {Date} consultation_start_date   * Consultation start date
 * @apiParam {Date} consultation_start_time   * Consultation start time
 * @apiParam {Date} consultation_end_time     * Consultation end time
 *
 * 
 * @apiExample Example usage:
 {
	"consult_id": 1,
	"consultation_start_date": "2016-10-18",
	"consultation_start_time": "06:50:00",
	"consultation_end_time": "07:00:00"
 }
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
 * 
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
 {
  "status": true,
  "message": "Data saved successfully",
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
 {
 "status": false,
 "message": "Consult not re-scheduled, Please try again"
 }
 {
 "status": false,
 "message": "Appoinment not available for selected date and time"
 }
 */