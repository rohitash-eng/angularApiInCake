/**
 * @api {post} BuyCourses/addToCart Add To Cart
 * @apiName addToCart
 * @apiGroup Buy Courses
 *
 * @apiDescription Add To Cart.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} course_id        * Id of courses(Comma seperated)
 *
 * 
 * @apiExample Example usage:
{
	"course_ids" : "1,2,3"
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
 */