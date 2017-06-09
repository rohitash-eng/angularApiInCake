/**
 * @api {post} ProvidersRatings/add Add Ratings
 * @apiName Add Ratings
 * @apiGroup Ratings
 *
 * @apiDescription Add Ratings by consumer.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} provider_id                         * Provider id
 * @apiParam {Number} rating                              * Ratings
 * @apiParam {String} comment                             * Comments
 *
 * 
 * @apiExample Example usage:
[{

	"provider_id": "2",
	"rating": "2",
	"comment": "hi this is for testing"
}, {

	"provider_id": "2",
	"rating": "2",
	"comment": "hi this is for testing"
}]
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
 * 
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
 {
  "status": true,
  "message": "Data saved successfully",
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
 */