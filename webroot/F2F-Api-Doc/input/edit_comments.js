/**
* @api {put} /Comments/edit:1 Edit comment
* @apiVersion 0.0.1
* @apiName Edit comment
* @apiGroup Forums
* @apiPermission Consumer
*
* @apiDescription Edit comments
*
* @apiHeader {String} TOKEN                                             * A token send by header as TOKEN
* 
* @apiParam {Number} /:24                                               * Comment id requried field in url query string
* 
* @apiParam {String} description                                        * Description of comment.
*
*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Patient Object contain details about patient.
*
* @apiExample Example usage:
*
{
	"description":"Test"
}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
	"status": true
	"message": "The request is OK"
	"data":  "None"
}
*
* @apiError (Error-Response Object){Boolean} status Status.
* @apiError (Error-Response Object){String} message Message.
* @apiError {Object} Error-Response Returns a json Object.
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
