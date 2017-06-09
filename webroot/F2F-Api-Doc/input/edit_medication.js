/**
 * @api {put} patientMedicalHistories/editMedication?id=10 Edit Medication
 * @apiName editMedication
 * @apiGroup Medical History
 *
 * @apiDescription Edit medication of Patient.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} issue_type_id     * Id of issue type
 * @apiParam {String} medication        * Medication
 * @apiParam {String} title             * Title of Issue
 * @apiParam {Date}   begin_date        * Begin date
 * @apiParam {Date}   end_date          * End Date
 * @apiParam {String} dosage            * Dosage
 * @apiParam {Number} dosage_occurance  * Dosage Occurance
 * @apiParam {Number} occurance         * Occurance of issue
 * @apiParam {String} outcome           * Outcome
 * @apiParam {String} referred_by       * Referred By
 * @apiParam {String} destination       * Destination
 *
 * 
 * @apiExample Example usage:
 {
    "issue_type_id": 5,
    "medication": "fever",
    "title": "Medication",
    "begin_date": "2016-02-02",
    "end_date": "2016-02-02",
    "dosage":"12",
    "dosage_occurance":"12",
    "occurance": "12",
    "outcome": "12",
    "referred_by": "nicole",
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

