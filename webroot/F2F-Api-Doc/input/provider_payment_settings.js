/**
* @api {post} /ProviderPayments/saveProviderPayment Save/Edit Provider Payment Method "Banking" or "cheque" Settings Details.
* @apiName Save/Edit Provider Payment Method "Banking" or "cheque" Settings Details.
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Save/Edit Provider Payment Method "Banking" or "cheque" Settings Details.
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {string} payment_method  			* Required payment_method value should be either "bank" or "cheque" in body.
* @apiParam {string} bank_name    			* Required bank_name if payment_method is bank and optional if cheque in body.
* @apiParam {Number} account_number       		* Required account_number if payment_method is bank and optional if cheque in body.
* @apiParam {Number} routing_number   			* Required routing_number if payment_method is bank and optional if cheque in body .
* @apiParam {String} account_type                 	* Required account_type if payment_method is bank and optional if cheque in body 
* @apiParam {string} branch_address        		* Required branch_address if payment_method is bank and optional if cheque in body
* @apiParam {string} cheque_in_favor_off    		* Required cheque_in_favor_off if payment_method is cheque and optional if bank in body 
* @apiParam {String} mailing_address  			* Required mailing_address if payment_method is cheque and optional if bank in body .
* @apiParam {number} id   			        * Required if edit records of same provider and optional if added new record.
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Provider Account Setting details with charges and availabiltiy
*
* @apiExample Example usage:
*
*{
*    "payment_method": "bank",
*    "bank_name": "abc",
*    "account_number": 689368264,
*    "routing_number": 648682653,
*    "account_type": "saving",
*    "branch_address": "noida",
*    "cheque_in_favor_off":"my cheque",
*    "mailing_address":"noida"   
*}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{ "status": true, 
  "message": "The request is OK", 
  "data": "None" 
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

