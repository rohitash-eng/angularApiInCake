/**
 * @api {post} consultations/updateAppointmentById Update appointment by id
 * @apiName updateAppointmentById
 * @apiGroup Consumer
 *
 * @apiDescription Update appointment by id.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} id        * Appointment id is required field in body.
 * @apiParam {String} view_issue_type          *View issue type is required field in body (Yes|No).
 * @apiParam {String} view_patient_form     *View patient form is required field in body (Yes|No).
 * @apiParam {String} view_patient_history  *View patient history is required field in body (Yes|No).

 *
 * 
 * @apiExample Example usage:
{
    "id":"148",
    "view_issue_type":"Yes",
    "view_patient_form":"Yes",
    "view_patient_history":"Yes"
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