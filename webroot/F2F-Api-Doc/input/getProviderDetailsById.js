/**
* @api {post} /patients/getProviderDetailsById Get provider detail for schedule appointment
* @apiName getProviderDetailsById
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Get provider details by id for appointment to be scheduled.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} provider_id    * Provider id is required in body.
* @apiParam {Date} consultation_start_date    * Consultation start date is required in body.
* @apiParam {Time} consultation_start_time    * Consultation start time is required in body.
* @apiParam {Time} consultation_end_time    * Consultation end time is required in body.
* @apiParam {Number} insurance_plan_id    * Insurance plan id is required in body.
* @apiParam {String} concierge_service    * Concierge service is required in body(Y|N).
* @apiParam {Number} patient_id    * Patient id is required in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about providers..

 * @apiExample Example usage:
*
*{
*	"provider_id":"166",
*	"consultation_start_date": "11/15/2016",
*	"consultation_start_time": "13:08:00",
*	"consultation_end_time": "13:20:00",
*	"insurance_plan_id":"3",
*	"concierge_service":"Y",
*	"patient_id":"1"
*}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 166,
    "title": "Doctor",
    "photo": "https://face2face-dev.s3.amazonaws.com/profileImage/57f51cbc2bd3f.jpeg",
    "fname": "Raj",
    "lname": "Jhaveri",
    "dob": "1984-01-25T00:00:00+00:00",
    "gender": "Male",
    "provider_profile": {
      "city": "New York",
      "id": 17,
      "speciality": {
        "id":"2",
        "title": "Physicians",
        "scheduled_price": null,
        "concierge_price": 200
      },
      "state": {
        "id": 37,
        "name": "New York"
      }
    },
    "provider_setting": {
      "id": 1,
      "scheduled_insurance_charges": 90,
      "scheduled_non_insurance_charges": 0
    },
    "total_amount": 180,
    "is_insurance_applied": false
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

