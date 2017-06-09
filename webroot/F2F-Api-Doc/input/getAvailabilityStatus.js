/**
* @api {get} /ProviderSettings/getAvailabilityStatus Get Availability Status
* @apiName getAvailabilityStatus
* @apiGroup Provider
*
* @apiDescription Get Patient Details.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
* 
*
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data None.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "on_demand_appointment": "N"
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
	"message": "Request method not supported"
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

