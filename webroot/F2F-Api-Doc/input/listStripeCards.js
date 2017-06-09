/**
 * @api {get} /subscriptionPlans/listStripeCards Card list
 * @apiName listStripeCards
 * @apiGroup Stripe
 *
 * @apiDescription Get all card list from stripe
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
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
  "stripe_card_id": "card_196GCiFspN4AvLfboWxdCZuD",
  "data": [
    {
      "id": "card_196GCiFspN4AvLfboWxdCZuD",
      "object": "card",
      "address_city": "city",
      "address_country": null,
      "address_line1": "dhiru added",
      "address_line1_check": "pass",
      "address_line2": "how are you",
      "address_state": "state",
      "address_zip": "123456",
      "address_zip_check": "pass",
      "brand": "Visa",
      "country": "US",
      "customer": "cus_9P4L6fYRdxjUGn",
      "cvc_check": "pass",
      "dynamic_last4": null,
      "exp_month": 10,
      "exp_year": 2024,
      "fingerprint": "XNDZ0OJ9pXiBdK3J",
      "funding": "credit",
      "last4": "4242",
      "metadata": [],
      "name": null,
      "tokenization_method": null
    },
    {
      "id": "card_196GCtFspN4AvLfbyTO3MjqU",
      "object": "card",
      "address_city": "city",
      "address_country": null,
      "address_line1": "address1",
      "address_line1_check": "pass",
      "address_line2": "address2",
      "address_state": "state",
      "address_zip": "123456",
      "address_zip_check": "pass",
      "brand": "Visa",
      "country": "US",
      "customer": "cus_9P4L6fYRdxjUGn",
      "cvc_check": "pass",
      "dynamic_last4": null,
      "exp_month": 8,
      "exp_year": 2020,
      "fingerprint": "XNDZ0OJ9pXiBdK3J",
      "funding": "credit",
      "last4": "4242",
      "metadata": [],
      "name": null,
      "tokenization_method": null
    }
  ]
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