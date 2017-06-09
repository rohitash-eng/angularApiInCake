/**
 * @api {put} ProvidersRatings/edit:1 Edit Ratings
 * @apiName Edit Ratings
 * @apiGroup Ratings
 *
 * @apiDescription Edit ratings by consumer.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} /:2    * Rating id requried field in url query string
 * 
 * @apiParam {Number} rating                              * Ratings
 * @apiParam {String} comment                             * Comments
 * 
 * @apiExample Example usage:
{

	"rating": "12",
	"comment": "hi th22is is for testing!!!!"
}
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