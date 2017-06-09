/**
* @api {post} /ProviderSettings/changeAvailabilityStatus Change Availability Status
* @apiName changeAvailabilityStatus
* @apiGroup Provider
*
* @apiDescription Get Patient Details.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
* 
* @apiParam {String} on_demand_appointment                  * Set on demand appointment Yes and No.
*
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data None.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
 "on_demand_appointment":"Y"
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

