/**
* @api {get} /ProviderSettings/getProviderAccount Display Provider Account Settings Details like charges per hour and availability 
* @apiName Display Provider Account Settings Details
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Display Provider Account Settings Details
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Provider Account Setting details with charges and availabiltiy

* @apiExample Example usage:
*
*ProviderSettings/getProviderAccount
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 1,
    "user_id": 3,
    "on_demand_insurance_charges": 30,
    "on_demand_non_insurance_charges": 20.5,
    "off_hours_charges": 10,
    "after_hours_charges": 5,
    "same_as_on_demand": "Y",
    "scheduled_insurance_charges": 30,
    "scheduled_non_insurance_charges": 20.5,
    "is_temporary_available": "N",
    "on_demand_appointment": "Y",
    "multiprovider_scheduled_appointment": "N",
    "concierge_service": "Y",
    "phone_call": "Y",
    "video_call": "N"
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

