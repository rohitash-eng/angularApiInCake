/**
* @api {post} /SubscriptionPlans/checkCouponCode Check Coupon Code based on Plan ID
* @apiName Check Coupon Code based on Plan ID
* @apiGroup Subscription
* @apiPermission Consumer
*
* @apiDescription Check Coupon Code based on Plan ID
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {Number} plan_id       * Required Subsciption Plan ID chosen by consumer 1-free plan 2-paid plan 3- paid plan.
* @apiParam {String} coupon_code   * Required Coupon Code in body .
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Plan Object contain details Plan ID and Coupon Details.

* @apiExample Example usage:
*
*{
*"plan_id":2,
*"coupon_code":"ffpaid"
*}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "data": {
    "planID": 2,
    "couponCode": "ffpaid",
    "discount":5,
    "discountType":"P"
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

