/**
* @api {post} /Comments/reply Reply
* @apiVersion 0.0.1
* @apiName Reply
* @apiGroup Forums
* @apiPermission Consumer
*
* @apiDescription Add reply by consumer.
*
* @apiHeader {String} TOKEN                                         * A token send by header as TOKEN
* 
* @apiParam {Number} forum_id                                      * Forum id
* @apiParam {Number} parent                                        * Comment id for reply
* @apiParam {String} description                                   * Description
*

*
 * @apiSuccess {Boolean} status true/false.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Patient Object contain details about patient.
*
* @apiExample Example usage:
*
{
	"forum_id":"42",
	"parent":"4",
	"description":"Testt"
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
