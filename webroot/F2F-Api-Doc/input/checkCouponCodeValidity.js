/**
 * @api {post} BuyCourses/checkCouponCodeValidity Check Coupon Code Validity
 * @apiName checkCouponCodeValidity
 * @apiGroup Buy Courses
 *
 * @apiDescription Check Coupon Code Validity
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {String} amount            * Amount to be paid.
 * @apiParam {String} coupon_code       * Coupon code
 *
 * 
 * @apiExample Example usage:
{
	"coupon_code" : "TEST0001",
	"amount" : "25"
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
    "id": 1,
    "discount": 100,
    "discount_type": "F",
    "amount": 0
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