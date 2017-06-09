/**
 * @api {get} Consultations/getConciergeAddress/:consultId Get patient address
 * @apiName getConciergeAddress
 * @apiGroup Consumer
 *
 * @apiDescription Add patient address list.
 * 
 * @apiHeader {String} TOKEN           * A token send by header as TOKEN
 * 
 * @apiParam {Number} consultId        * Consultation id is required field in url query string.
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
  "data": {
    "concierge_address_name": "asdfasfd",
    "concierge_address1": "asdf",
    "concierge_address2": "asdf",
    "concierge_zip_code": 352525,
    "concierge_state_id": 1,
    "concierge_city": "asdf",
    "state": {
      "name": "Alaska"
    }
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