/**
* @api {post} /patients/addInsurance?patient_id=1 Add Patient Insurance
 * @apiName addInsurance
 * @apiGroup Insurance
*
* @apiDescription Add patient insurance plan.
* 
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} patient_id    * Patient id required field in url query string.
* @apiParam {Number} id    * Id optional field in body (if insurance already saved then it will required).
* @apiParam {Number} plan_type_id    * Plan type id requried field in body.
* @apiParam {Number} state_id    * State id requried field in body.
* @apiParam {Number} insurance_plan_id    * Insurance plan id requried field in body.
* @apiParam {Number} subscriber_id    * Subscriber id optional field in body.
* @apiParam {String} policy_number    * Policy number requried field in body.
* @apiParam {Number} group_number    * Group number optional field in body.
* @apiParam {String} payer_type_display_name    * Payer type display name field optional in body.
* @apiParam {Number} payer_id    * Payer id optional field in body.
* @apiParam {String} release_of_information    * Release of information optional field in body.
* @apiParam {String} type    * Type optional field in body('P','S','A').
 *
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Insurance Object contain details about insurance.
* @apiExample Example usage:
*
*{
*	"0": {
*		"id":"1",
*		"plan_type_id":"1",
*		"state_id":"1",
*		"insurance_plan_id":"1",
*		"subscriber_id":"1",
*		"policy_number":"125535",
*		"group_number":"12",
*		"payer_type_display_name":"sadf display",
*		"payer_id":"1",
*		"release_of_information":"afafds information",
*		"type":"P"
*	},
*	"1": {
*		"id":"2",
*		"plan_type_id":"2",
*		"state_id":"1",
*		"insurance_plan_id":"1",
*		"subscriber_id":"1",
*		"policy_number":"125535",
*		"group_number":"12",
*		"payer_type_display_name":"test to display",
*		"payer_id":"1",
*		"release_of_information":"release of information",
*		"type":"S"
*	},
*	"2": {
*		"id":"3",
*		"plan_type_id":"2",
*		"state_id":"1",
*		"insurance_plan_id":"4",
*		"subscriber_id":"1",
*		"policy_number":"125535",
*		"group_number":"12",
*		"payer_type_display_name":"test to display",
*		"payer_id":"1",
*		"release_of_information":"release of information",
*		"type":"A"
*	}
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

 * @apiError {Object} Error-Response Returns a json Object.
 * @apiError (Error-Response Object){Boolean} status Status.
 * @apiError (Error-Response Object){String} message Message.
 * @apiErrorExample Sample Error-Response:
*   
*  {
	"status": false,
	"message": "Request method not supported"
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

