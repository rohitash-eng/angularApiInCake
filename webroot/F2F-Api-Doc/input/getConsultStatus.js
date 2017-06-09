/**
* @api {post} /consultations/getConsultStatus To check consultation accept status
 * @apiName getConsultStatus
 * @apiGroup Consumer
*
* @apiDescription When consumer initiat on demand consultation then on click on connect to provider button this api check provided accepted or not.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Array} consult_ids    * Consult ids is required field in body(its contain consultation ids).
 *
* @apiExample Example usage:
*
*{
*	"consult_ids":"1,2,3"
*}
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Contain consultation, provider and consumer details.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 148,
    "patient_authorization_form": {
      "relationship_to_patient": "Father"
    },
    "consumer": {
      "title": "",
      "fname": "dhirendra",
      "lname": "singh",
      "email": "singh@gmail.com",
      "id": 213
    },
    "provider": {
      "id": 213,
      "title": "",
      "email": "singh@gmail.com",
      "fname": "dhirendra",
      "lname": "singh"
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

