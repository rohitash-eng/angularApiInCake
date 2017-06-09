/**
* @api {get} /ProviderPayments/getProviderPayment Display Provider Payment Method Settings Details Banking or Cheque 
* @apiName Display Provider Payment Method Settings Details
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Display Provider Payment method Settings Details Banking or cheque
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Provider Payment Method Setting details Banking or cheque

* @apiExample Example usage:
*
*ProviderPayments/getProviderPayment
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 1,
    "user_id": 3,
    "payment_method": "bank",
    "bank_name": "abc",
    "account_number": "689368264",
    "routing_number": "648682653",
    "account_type": "saving",
    "branch_address": "noida",
    "cheque_in_favor_off": null,
    "mailing_address": null
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

