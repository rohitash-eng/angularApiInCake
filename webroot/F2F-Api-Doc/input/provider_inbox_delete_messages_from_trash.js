/**
* @api {put} /ProviderSettings/deleteMessagefromTrash Delete Messages from Trash on Provider Inbox
* @apiName Delete Messages from from Trash on Provider Inbox and change status to "PD" and deleted messages will not appear in trash
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Delete Messages from from Trash on Provider Inbox and change status to "PD" and deleted messages will not appear in trash
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {array} deleted_ids    * Required an array with ids of messages to delete in the body
* @apiExample Example usage:
*
/ProviderSettings/deleteMessagefromTrash
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

