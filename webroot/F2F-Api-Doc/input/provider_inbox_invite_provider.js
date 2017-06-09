/**
* @api {post} /ProviderSettings/inviteProvider Invite provider from provider Inbox
* @apiName Invite provider from provider Inbox
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Invite provider which is not registered on F2F Health by sending email from provider Inbox
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {string} email         * Required valid email of provider which is not registered on F2F Health
* @apiExample Example usage:
*
/ProviderSettings/inviteProvider
*{
*	"email":"gaurav.agrawal@kiwitech.com"
*}
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} set message as star with message details
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

