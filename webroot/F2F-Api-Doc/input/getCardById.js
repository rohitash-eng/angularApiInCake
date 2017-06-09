/**
 * @api {get} /subscriptionPlans/getCardById/card_196GCiFspN4AvLfboWxdCZuD Get card by card id
 * @apiName getCardById
 * @apiGroup Stripe
 *
 * @apiDescription Get card details by stripe card id
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
  "status": "success",
  "message": "Success",
  "response": {
    "id": "card_196GCiFspN4AvLfboWxdCZuD",
    "object": "card",
    "address_city": "city",
    "address_country": null,
    "address_line1": "hi hellow",
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
