/**
 * @api {post} PatientAddress/add Add patient address
 * @apiName PatientAddress-add
 * @apiGroup Patient
 *
 * @apiDescription Add patient address.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} patient_id        * Patient id is required field in body.
 * @apiParam {Number} state_id          * State id is required field in body.
 * @apiParam {String} city              * Patient city is required field in body.
 * @apiParam {String} address_name      * Address name is required field in body.
 * @apiParam {String} address1          * Address 1 is required field in body.
 * @apiParam {String} address2          * Address 2 is optional field in body.
 * @apiParam {Date}   zip_code          * Zip-code is required field in body.
 *
 * 
 * @apiExample Example usage:
{
    "patient_id":"1",
    "state_id":"2",
    "city":"alld",
    "address_name":"dhirendra",
    "address1":"new delhi",
    "address2":"noida",
    "zip_code":"43456"
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