/**
 * @api {get} /subscriptionPlans/addStripeCard Save card on stripe
 * @apiName addStripeCard
 * @apiGroup Stripe
 *
 * @apiDescription Consumer can add new card
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Object} stripe_token    * Stripe token returned by stripe.js
*
* @apiExample Example usage:
*
*{
*	"id": "tok_18z359A5U5jedLSh7LRPO86n",
*	"object": "token",
*	"card": {
*  		"id": "card_18z359A5U5jedLSh70zppYTF",
* 		"object": "card",
*  		"address_city": "tyutyu",
*  		"address_country": null,
*  		"address_line1": "mumbai",
*  		"address_line1_check": "unchecked",
*  		"address_line2": "tyu",
*  		"address_state": "CA",
*  		"address_zip": "12123",
*  		"address_zip_check": "unchecked",
*  		"brand": "MasterCard",
*  		"country": "US",
*  		"cvc_check": "unchecked",
*  		"dynamic_last4": null,
*  		"exp_month": 8,
* 		"exp_year": 2016,
*  		"funding": "credit",
*  		"last4": "4444",
*  		"metadata": {},
*  		"name": "tyut",
*  		"tokenization_method": null
*	},
*	"client_ip": "61.16.232.242",
*	"created": 1475149927,
*	"livemode": false,
*	"type": "card",
*	"used": false
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
    "data":None
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
