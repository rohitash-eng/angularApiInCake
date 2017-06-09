/**
* @api {post} /ProviderSettings/saveProviderSettings Save/edit Provider Account Settings Details like charges per hour and availability 
* @apiName Save/Edit Provider Account Settings Details
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Save/Edit Provider Account Settings Details
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {Number} on_demand_insurance_charges  	* Required on_demand_insurance_charges in body.
* @apiParam {Number} on_demand_non_insurance_charges    * Required on_demand_non_insurance_charges in body.
* @apiParam {Number} off_hours_charges       		* Required off_hours_charges in body.
* @apiParam {Number} after_hours_charges   		* Required after_hours_charges in body .
* @apiParam {String} same_as_on_demand                  * Required same_as_on_demand "Y" or "N" value in body 
* @apiParam {Number} scheduled_insurance_charges        * Optional scheduled_insurance_charges in body if "Y" in same_as_on_demand and required if "N" in same_as_on_demand						        * .
* @apiParam {Number} scheduled_non_insurance_charges    * Optional scheduled_non_insurance_charges in body if "Y in same_as_on_demand and required if "N" in same_as_on_demand 
* @apiParam {String} is_temporary_available   		* Required is_temporary_available "Y" or "N" value in body .
* @apiParam {String} on_demand_appointment    	        * Required on_demand_appointment "Y" or "N" value in body.
* @apiParam {String} multiprovider_scheduled_appointment  * Required multiprovider_scheduled_appointment "Y" or "N" in body .
* @apiParam {String} concierge_service                  * Required concierge_service "Y" or "N" value in body
* @apiParam {String} phone_call   			* Required phone_call "Y" or "N" value in body .
* @apiParam {String} video_call   			* Required video_call "Y" or "N" value in body .
* @apiParam {number} id   			        * Required id taken from API "get provider account settings" to edit the same record.
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Provider Account Setting details with charges and availabiltiy

* @apiExample Example usage:
*
*{
*	"on_demand_insurance_charges":30,
*	"on_demand_non_insurance_charges":20.5,
*	"off_hours_charges":10,
*	"after_hours_charges":5,
*	"same_as_on_demand":"Y",
*	"scheduled_insurance_charges":45,
*	"scheduled_non_insurance_charges":30.5,
*	"is_temporary_available":"N",
*	"on_demand_appointment":"Y",
*	"multiprovider_scheduled_appointment":"N",
*	"concierge_service":"Y",
*	"phone_call":"Y",
*	"video_call":"N",
*	"id":23
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

