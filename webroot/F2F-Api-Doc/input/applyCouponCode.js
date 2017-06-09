/**
* @api {post} /coupons/applyCouponCode apply coupon code
* @apiName applyCouponCode
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Apply coupon code when consumer get appointment.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {String} coupon_code    * Coupon code is required field in body.
* @apiParam {String} consult_type * Consult type is required field in body(schedule|on-demand|).
* @apiParam {Array} speciality * Speciality is required field in body.
* @apiParam {Number} amount * Amount is required field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Coupon Object contain details about coupon.

* @apiExample Example usage:
*
*
{
    "coupon_code":"SCONS",
    "consult_type":"on-demand",
    "speciality":[6,7],
    "amount":"500"
}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 3,
    "discount": 10,
    "discount_type": "P",
    "product": {
      "id": 5
    },
    "specialities": [
      {
        "id": 6,
        "_joinData": {
          "coupon_id": 3,
          "speciality_id": 6
        }
      }
    ],
    "amount": 450
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

