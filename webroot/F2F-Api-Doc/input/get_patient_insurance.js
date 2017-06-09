/**
* @api {get} /patients/getPatientInsuranceByPatientId?patient_id=1 Get Patient Insurance
 * @apiName getPatientInsuranceByPatientId
 * @apiGroup Insurance
*
* @apiDescription Get insurances by patient id.
* 
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} patient_id    * Patient id requried field in url query string
 *
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Insurance Object contain details about insurance.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 1,
      "patient_id": 1,
      "company_name": "sad",
      "holder_name": "asdf",
      "policy_number": "125535",
      "state_id": 1,
      "plan_type_id": 1,
      "insurance_plan_id": 1,
      "subscriber_id": 1,
      "group_number": 12,
      "payer_type_display_name": "sadf display",
      "payer_id": "1",
      "assingments_of_benefits": null,
      "release_of_information": "afafds information",
      "active": "Y",
      "type": "P",
      "created": "2016-09-22T13:41:14+00:00",
      "modified": "2016-09-22T14:39:02+00:00"
    },
    {
      "id": 2,
      "patient_id": 1,
      "company_name": "sad",
      "holder_name": "asdf",
      "policy_number": "125535",
      "state_id": 1,
      "plan_type_id": 2,
      "insurance_plan_id": 1,
      "subscriber_id": 1,
      "group_number": 12,
      "payer_type_display_name": "test to display",
      "payer_id": "1",
      "assingments_of_benefits": null,
      "release_of_information": "release of information",
      "active": "Y",
      "type": "P",
      "created": "2016-09-22T13:41:14+00:00",
      "modified": "2016-09-22T14:39:03+00:00"
    },
    {
      "id": 3,
      "patient_id": 1,
      "company_name": "",
      "holder_name": "",
      "policy_number": "125535",
      "state_id": 1,
      "plan_type_id": 2,
      "insurance_plan_id": 4,
      "subscriber_id": 1,
      "group_number": 12,
      "payer_type_display_name": "test to display",
      "payer_id": "1",
      "assingments_of_benefits": null,
      "release_of_information": "release of information",
      "active": "Y",
      "type": "P",
      "created": "2016-09-22T14:25:39+00:00",
      "modified": "2016-09-22T14:39:03+00:00"
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

