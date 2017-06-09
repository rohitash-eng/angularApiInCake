/**
* @api {get} /consultations/isConsultStarted/:consultId To check consultation start or not
 * @apiName isConsultStarted
 * @apiGroup Consumer
*
* @apiDescription To check consultation start or not
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} consultId    * Consult id is required field in query string.
 *
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
    "join_url": "https://zoom.us/j/729811243?pwd=tWzAHHXJzXQ%3D",
    "endMeeting":"1213131",
    "speciality_id":"2",
    "consumer": {
      "fname": "dhirendra",
      "lname": "singh",
      "email": "dhirendra.singh@kiwitech.com",
      "id": 213
    },
    "provider": {
      "id": 213,
      "email": "dhirendra.singh@kiwitech.com",
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

