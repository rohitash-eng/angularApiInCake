/**
* @api {put} /ProviderSettings/undoMessage Undo the deleted email
* @apiName undoMessage
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Undo the deleted email its moved again in to inbox 
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {array} deleted_ids    * Required an array with ids of messages to delete in the body
* @apiExample Example usage:
*
/ProviderSettings/deleteMessage
*{
*	"deleted_ids":[2,3,4]
*}
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} None 
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": "None"
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

