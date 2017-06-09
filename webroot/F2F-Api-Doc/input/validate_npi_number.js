/**
* @api {get} /ProviderSettings/verifyNpi/:npi Verify Npi Number
* @apiName verifyNpi
* @apiGroup Authentication
*
* @apiDescription Verify Npi Number.
* 
* 
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Insurance Object contain details about insurance.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "Valid NPI number.",
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

