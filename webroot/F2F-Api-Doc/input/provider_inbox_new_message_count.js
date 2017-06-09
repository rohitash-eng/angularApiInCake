/**
* @api {get} /ProviderSettings/newMessagesCount New Messages count after last login
* @apiName New Messages count after last login
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription New Messages count after last login
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiExample Example usage:
*
/ProviderSettings/newMessagesCount
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} New message count
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": 3
}
*
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

