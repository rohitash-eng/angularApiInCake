/**
* @api {get} /ProviderSettings/setMessageStatus?id=19 Provider Inbox Read Message and change status from unread to read
* @apiName Read Message from Provider Inbox
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Provider Inbox Read Message and change status from unread to read where query string id is integer value of message id of provider inbox
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiExample Example usage:
*
/ProviderSettings/setMessageStatus?id=67
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Message Details from provider inbox with is_read status as "Y" means read 
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 67,
      "user_id": 104,
      "from_name": "Face2Face Health",
      "from_email": "support@face2face.com",
      "to_email": "f2f_prov_dec9@yopmail.com",
      "subject": "verify provider",
      "message": "Welcome Face2Face Provider.",
      "is_read": "Y",
      "status": "Active",
      "mail_type": "Important",
      "star": "N",
      "deleted_date": null,
      "invited": "N",
      "created": "Dec 08",
      "modified": "2016-12-09T06:49:45+00:00"
    }
  ]
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

