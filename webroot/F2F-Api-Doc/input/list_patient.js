/**
* @api {post} /patients/getList/:1 Patient List
 * @apiName getList
 * @apiGroup Consumer
*
* @apiDescription Patient list by consumer.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} /:1    * Send page number in url query string if use pagination
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Patient Object contain details about patient.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "list": [
      {
        "consult_type": "scheduled",
        "consultation_status": "Completed",
        "consultation_start_date_time": "2016-09-27T00:00:00+00:00",
        "consultation_end_date_time": "2016-09-27T05:23:34+00:00",
        "issue_type": {
          "name": "Dental"
        },
        "issue": {
          "name": "Dental-1"
        },
        "user": {
          "title": "Dr.",
          "fname": "gaurav",
          "lname": "Provider"
        },
        "speciality": {
          "title": "one"
        }
      }
    ],
    "Page": {
      "finder": "all",
      "page": 1,
      "current": 1,
      "count": 1,
      "perPage": 5,
      "prevPage": false,
      "nextPage": false,
      "pageCount": 1,
      "sort": null,
      "direction": false,
      "limit": null,
      "sortDefault": false,
      "directionDefault": false,
      "scope": null
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

