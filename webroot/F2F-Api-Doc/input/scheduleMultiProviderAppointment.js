/**
* @api {post} /patients/scheduleMultiProviderAppointment Schedule multi provider appointment
* @apiName scheduleMultiProviderAppointment
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription schedule an appointment.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} patient_id    * Patient id is required field in body.
* @apiParam {Number} speciality_id * Speciality id is required field in body.
* @apiParam {Number} provider_id * Provider id is required field in body.
* @apiParam {Number} insurance_plan_id * Insurance plan id is optional field in body.
* @apiParam {String} consult_medium * Consult medium is optional field in body(Phone|Video).
* @apiParam {Number} inquiry_type_id * Inquiry type id is optional field in body.
* @apiParam {Number} inquiry_id * Inquiry id is optional field in body.
* @apiParam {String} problem_description * Problem description is optional field in body.
* @apiParam {Date} consultation_start_date * Consultation start date is required field in body.
* @apiParam {Time} consultation_start_time * Consultation start time is required field in body.
* @apiParam {Time} consultation_end_time * Consultation end time is required field in body.
* @apiParam {Numeric} zip_code * Zip code is optional field in body.
* @apiParam {String} consultation_name * Consultation end time is optional field in body.
* @apiParam {String} consultation_lname * Consultation end time is optional field in body.
* @apiParam {Date} consultation_dob * Consultation end time is optional field in body.
* @apiParam {String} coupon_code * Consultation end time is optional field in body.
* @apiParam {Number} consultation_charge * Consultation charge is optional field in body.\
* @apiParam {Number} speciality_charge * Consultation speciality charge is optional field in body.
* @apiParam {String} consult_type * Consultation type is required field in body.
* @apiParam {String} stripe_card_id * Stripe card id type is required field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about providers.

* @apiExample Example usage:
*
*
*{
*    "0":{
*	"patient_id":"1",
*	"speciality_id":"1",
*	"provider_id":"1",
*	"insurance_plan_id":"1",
*	"consult_medium":"Phone",
*	"inquiry_type_id":"1",
*	"inquiry_id":"1",
*	"consultation_start_date":"2016-11-03",
*	"consultation_start_time":"12:31:03",
*	"consultation_end_time":"00:31:03",
*	"zip_code":"456231",
*	"consultation_name":"dhi",
*	"consultation_lname":"si",
*	"consultation_dob":"2024-11-04",
*	"coupon_code":"CSdF",
*	"consultation_total_charge":"4000",
*	"speciality_unit_charge":"4500",
*	"consult_type":"Scheduled",
*	"stripe_card_id":"card_dafsf42234"
*    },
*  "1":{
*	"patient_id":"1",
*	"speciality_id":"1",
*	"provider_id":"1",
*	"insurance_plan_id":"1",
*	"consult_medium":"Phone",
*	"inquiry_type_id":"1",
*	"inquiry_id":"1",
*	"consultation_start_date":"2016-11-03",
*	"consultation_start_time":"12:31:03",
*	"consultation_end_time":"00:31:03",
*	"zip_code":"456231",
*	"consultation_name":"dhi",
*	"consultation_lname":"si",
*	"consultation_dob":"2024-11-04",
*	"coupon_code":"CSdF",
*	"consultation_total_charge":"4000",
*	"speciality_unit_charge":"4500",
*	"consult_type":"Scheduled",
*	"stripe_card_id":"card_dafsf42234"
*    },
*  "3":{
*	"patient_id":"1",
*	"speciality_id":"1",
*	"provider_id":"1",
*	"insurance_plan_id":"1",
*	"consult_medium":"Phone",
*	"inquiry_type_id":"1",
*	"inquiry_id":"1",
*	"consultation_start_date":"2016-11-03",
*	"consultation_start_time":"12:31:03",
*	"consultation_end_time":"00:31:03",
*	"zip_code":"456231",
*	"consultation_name":"dhi",
*	"consultation_lname":"si",
*	"consultation_dob":"2024-11-04",
*	"coupon_code":"CSdF",
*	"consultation_total_charge":"4000",
*	"speciality_unit_charge":"4500",
*	"consult_type":"Scheduled",
*	"stripe_card_id":"card_dafsf42234"
*    },
*    "provider_total_charge":"456231"
*}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
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

