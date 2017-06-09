/**
* @api {get} Forums/getLastcommentedBy/:42 Get last commented by
* @apiName getLastcommentedBy
* @apiGroup Forums
* @apiPermission Consumer
*
* @apiDescription Get last commented by.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "created": "2016-12-23T14:25:36+00:00",
    "count": 6,
    "user": {
      "id": 280,
      "fname": "Ashutosh",
      "lname": "Agrawal",
      "community_username": null
    },
    "totalUsers": 1
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

