/**
 * @api {post} Orders/purchageCourse Purchage Course
 * @apiName purchageCourse
 * @apiGroup Buy Courses
 *
 * @apiDescription Purchage Course
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} course_id        * Id of courses(Comma seperated)
 * @apiParam {String} stripe_card_id        * Stripe card id
 * @apiParam {String} coupon_code        * Coupon code
 *
 * 
 * @apiExample Example usage:
{
	"course_ids" : "1,2,3",
	"stripe_card_id" : "2s4df5sd4f5s4d",
	"coupon_code" : "TEST0001"
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
  "data": {
    "discount": 100,
    "coupon_code": null,
    "status": "Failed",
    "user_id": 280,
    "total_amount": 60,
    "discount_type": "F",
    "subtotal": 60,
    "created": "2017-02-10T13:21:48+00:00",
    "modified": "2017-02-10T13:21:48+00:00",
    "id": 24
  }
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