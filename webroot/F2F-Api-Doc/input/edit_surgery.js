/**
 * @api {put} patientMedicalHistories/editSurgery?id=42 Edit Surgery
 * @apiName editSurgery
 * @apiGroup Medical History
 *
 * @apiDescription Edit surgery of Patient.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} patient_id        * Id of Patient
 * @apiParam {String} title             * Title of issue
 * @apiParam {String} issue_name        * Name of issue
 * @apiParam {String} summary           * Summary of issue
 * @apiParam {Date}   begin_date        * Begin date
 * @apiParam {Date}   end_date          * End Date
 * @apiParam {Number} occurance         * Occurance of issue
 * @apiParam {String} outcome           * Outcome
 * @apiParam {String} referred_by       * Referred By
 * @apiParam {String} destination       * Destination
 *
 * 
 * @apiExample Example usage:
 {
    "issue_type_id": 3,
    "title": "surgery",
    "issue_name": "XYZ",
    "summary": "XYZS",
    "begin_date": "2016-02-02",
    "end_date": "2016-02-02",
    "occurance": "12",
    "outcome": "12",
    "referred_by": "XYZ",
    "destination": "XYZ"
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
 */

