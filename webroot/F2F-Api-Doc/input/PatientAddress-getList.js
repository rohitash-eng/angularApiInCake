/**
 * @api {get} PatientAddress/getList/:patientId Get patient address
 * @apiName PatientAddress-getList
 * @apiGroup Patient
 *
 * @apiDescription Add patient address list.
 * 
 * @apiHeader {String} TOKEN           * A token send by header as TOKEN
 * 
 * @apiParam {Number} patientId        * Patient id is required field in url query string.
 *
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
      "id": 1,
      "patient_id": 1,
      "state_id": 2,
      "city": "alld",
      "address_name": "dhirendra",
      "address1": "new delhi",
      "address2": "noida",
      "zip_code": 43456,
      "created": "2016-12-16T06:38:55+00:00",
      "modified": "2016-12-16T06:38:55+00:00"
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