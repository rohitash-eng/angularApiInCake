/**
* @api {put} /Forums/edit:1 Edit forum
* @apiVersion 0.0.1
* @apiName Edit forum
* @apiGroup Forums
* @apiPermission Consumer
*
* @apiDescription Edit forum.
*
* @apiHeader {String} TOKEN                             * A token send by header as TOKEN
* 
* @apiParam {Number} /:24                               * Forum id requried field in url query string
* 
* @apiParam {String} title                              * Title
* @apiParam {String} description                        * Description
* @apiParam {number} provider_type_id                   * Provider type id
* @apiParam {number} age_group_id                       * Age group id
*

*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.
*
* @apiExample Example usage:
*
*
{
	"title":"Fever",
	"description":"Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum "
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
*  
{
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
