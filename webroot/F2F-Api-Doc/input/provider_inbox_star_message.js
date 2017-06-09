/**
* @api {get} /ProviderSettings/setMessageStar?id=:id Set Message Status to star
* @apiName Set Message Status to star
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Set Message Status to star
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiExample Example usage:
*
/ProviderSettings/setMessageStar?id=8
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} set message as star with message details
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 8,
      "user_id": 91,
      "from_email": null,
      "to_email": "f2f_prov_30@yopmail.com",
      "subject": "verify provider",
      "message": "Welcome Face2Face Provider.",
      "is_read": "Y",
      "status": "Active",
      "mail_type": "Important",
      "star": "Y",
      "deleted_date": null,
      "created": "2016-11-18T09:48:00+00:00",
      "modified": "2016-11-18T09:48:00+00:00"
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

