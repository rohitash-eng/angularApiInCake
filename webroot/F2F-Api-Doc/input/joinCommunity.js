/**
 * @api {post} /Community/joinCommunity Join community
 * @apiName joinCommunity
 * @apiGroup Community
 *
 * @apiDescription To join community
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} provider_type_id    * Provider type id is required in body.

*
* @apiExample Example usage:
*
*{
*	"provider_type_id":"1"
*}
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": "None"
}
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
{
  "status": false,
  "message": "Unauthorised, You have already joined"
}
 */
