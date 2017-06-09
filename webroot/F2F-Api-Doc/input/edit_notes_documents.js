/**
 * @api {put} patientNotesAndDocument/edit/:id Edit Notes And Documents
 * @apiName edit
 * @apiGroup Notes And Documents
 *
 * @apiDescription Edit Notes And Documents.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} patient_id        * Id of Patient 
 * @apiParam {Number} issue_type_id     * Id of issue type
 * @apiParam {Number} issue_id          * Id of issue
 * @apiParam {String} doc_title         * Document Title
 *
 * 
 * @apiExample Example usage:
 {
	"patient_id": "1",
        "issue_type_id":"2",
	"issue_id":"2",
	"doc_title":"Alegery Doc Title"
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