/**
* @api {post} /ProviderSettings/inbox/:page_number Provider Inbox details with messages of email sent to provider from F2F Health
* @apiName Provider Inbox
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Provider Inbox, trash , important, social, promotions details with messages of email sent to provider from F2F Health with page limit or pagination
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {string} status        * Required status field in the body with either of the values "Important","Social","Promotions","Deleted"
* @apiParam {number} limit         * Required limit field in the body by default it is 20 
* @apiExample Example usage:
*
/ProviderSettings/inbox/:1
*{
*	"status":"Important",
*	"limit":20
*}
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Provider Inbox details with messages of email sent to provider F2F Health
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "inbox": [
      {
        "id": 67,
        "user_id": 104,
        "from_name": "Face2Face Health",
        "from_email": "support@face2face.com",
        "to_email": "f2f_prov_dec9@yopmail.com",
        "subject": "verify provider",
        "message": "Welcome Face2Face Provider.",
        "is_read": "N",
        "status": "Active",
        "mail_type": "Important",
        "star": "N",
        "deleted_date": null,
        "invited": "N",
        "created": "Dec 08",
        "modified": "2016-12-09T06:49:45+00:00"
      }
    ],
    "count": 1,
    "page": {
      "finder": "all",
      "page": 1,
      "current": 1,
      "count": 1,
      "perPage": 20,
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

