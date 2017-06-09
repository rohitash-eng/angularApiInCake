/**
 * @api {post} patientMedicalHistories/addMedicalProblems Add Medical Problems
 * @apiName addMedicalProblems
 * @apiGroup Medical History
 *
 * @apiDescription Add medical problem of Patient.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} patient_id        * Id of Patient
 * @apiParam {Number} issue_id          * Id of Issue
 * @apiParam {Number} issue_type_id     * Id of issue type
 * @apiParam {String} title             * Title of medical problem
 * @apiParam {String} inquiry           * Inquiry
 * @apiParam {String} inquiry_type      * Type of Inquiry
 * @apiParam {Date} begin_date          * Begin date
 * @apiParam {Date} end_date            * End Date
 * @apiParam {Number} occurance         * Occurance of medical problem
 * @apiParam {String} outcome           * Outcome
 * @apiParam {String} referred_by       * Referred By
 * @apiParam {String} destination       * Destination
 * @apiParam {String} comments          * Comments
 *
 * 
 * @apiExample Example usage:
 {
    "patient_id": 33,
    "issue_id": 1,
    "issue_type_id": 1,
    "title": "Medical problem",
    "inquiry": "XYZ",
    "inquiry_type": "XYZS",
    "begin_date": "2016-02-02",
    "end_date": "2016-02-02",
    "occurance": "12",
    "outcome": "12",
    "referred_by": "nicole",
    "destination": "xyz",
    "comments": "xyz"
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

