/**
 * @api {get} Consultations/getSpecialityPrice/:consultationId/:minutes Get Speciality Price
 * @apiName getSpecialityPrice
 * @apiGroup Consumer
 *
 * @apiDescription Get Speciality Price
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN is optional
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
  "data": {
    "specialityPrice": 100
  }
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
