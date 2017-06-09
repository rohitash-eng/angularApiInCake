/**
* @api {post} /SubscriptionPlans/updatePlanOrders Subscribe a Plan and Make Payment
* @apiName Subscribe Plan and Make Payment
* @apiGroup Subscription
* @apiPermission Consumer
*
* @apiDescription Subscribe a Plan , coupon code may be applied and make payment by consumer 
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {Number} plan_id       * Required Subsciption Plan ID chosen by consumer 1-free plan, 2-paid plan,3-paid plan.
* @apiParam {String} coupon_code   * Optional Coupon Code in body .
* @apiParam {String} newsletter_subsciption_status    * Required consumer Newsletter Subcription status field accepted as 'Y' in body.
* @apiParam {String} terms_use    * Required consumer Terms and condition status field accepted as 'Y' in body.
* @apiParam {object} card           * Card object with token and billing details generated dynamically from stripe server.
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Plan Object contain details about consumer billing and card details.

* @apiExample Example usage:
*
*{
*"plan_id":2,
*"coupon_code":"ffpaid",
*"newsletter_subsciption_status":"Y",
*"terms_use":"Y",
*"card":{
*  "id": "tok_18yNTFA5U5jedLShrRkO4oXB",
*  "object": "token",
*  "card": {}
*}
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "Order generated",
  "data": {
    "paymentStatus": success,
    "order_id": 1   
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

