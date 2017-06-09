/**
* @api {post} /patients/searchProviderForOnDemandAppointment Search provider for on-demand appointment
* @apiName searchProviderForOnDemandAppointment
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Search provider for on-demand appointment.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} patient_id    * Patient id is required field in body.
* @apiParam {Number} speciality_id * Speciality id is required field in body.
* @apiParam {Number} provider_type_id * Provider type id is required field in body.
* @apiParam {String} video_call * Video call is optional field in body(Y|N).
* @apiParam {String} phone_call * Phone call is optional field in body(Y|N).
* @apiParam {String} concierge_service * Concierge service is optional field in body(Y|N).
* @apiParam {String} multi_video_consult * Multi video consult is optional field in body(Y|N).
* @apiParam {Number} insurance_plan_id * Insurance plan id is optional field in body.
* @apiParam {String} consult_medium * Consult medium is optional field in body(Phone|Video).
* @apiParam {Number} inquiry_type_id * Inquiry type id is optional field in body.
* @apiParam {Number} inquiry_id * Inquiry id is optional field in body.
* @apiParam {String} problem_description * Problem description is optional field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about provider.

* @apiExample Example usage:
*
*
*{
*	"patient_id":"1",
*	"speciality_id":"1",
*	"provider_type_id":"1",
*	"video_call":"N",
*	"phone_call":"N",
*	"concierge_service":"N",
*	"multi_video_consult":"N",
*	"insurance_plan_id":"1",
*	"consult_medium":"Phone",
*	"inquiry_type_id":"1",
*	"inquiry_id":"1",
*	"problem_description":"dsfa"
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

