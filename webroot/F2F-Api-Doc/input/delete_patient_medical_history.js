/**
 * @api {put} patientMedicalHistories/deleteMedicalHistory?id=33 Delete Patient Medical History
 * @apiName deleteMedicalHistory
 * @apiGroup Medical History
 *
 * @apiDescription Delete medical history of Patient.
 * 
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
 *
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message Record has been deleted.
 * @apiSuccess {Object} data None.
 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
 {
    "status": true,
    "message": "Record has been deleted",
    "data": "None"
 }
 *
 
 * @apiError {Object} Error-Response Returns a json Object.
 * @apiError (Error-Response Object){Boolean} status Status.
 * @apiError (Error-Response Object){String} message Message.
 * @apiErrorExample Sample Error-Response:
 *   
 {
    "status": false,
    "message": "Method not allowed on resource."
 }
 {
    "status": false,
    "message": "Invalid request",
 }
 {
    "status": false,
    "message": "Requested Parameter is not correct"
 }
 */

