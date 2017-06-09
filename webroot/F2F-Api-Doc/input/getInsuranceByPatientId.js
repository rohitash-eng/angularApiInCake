/**
 * @api {get} /patients/getInsuranceByPatientId/:1 Get patient insurance dropdown
 * @apiName getInsuranceByPatientId
 * @apiGroup Insurance
 *
 * @apiDescription Get patient isurance for dropdown
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
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
  "data": [
    {
      "InsurancePlans": {
        "id": 1,
        "name": "Capital Distict Physician Health"
      }
    }
  ]
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
