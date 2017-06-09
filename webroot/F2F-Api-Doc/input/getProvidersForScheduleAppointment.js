/**
* @api {post} /patients/getProvidersForScheduleAppointment Search providers for schedule an appointment
* @apiName getProvidersForScheduleAppointment
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Search providers for schedule an appointment.
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
* @apiParam {Date} consultation_start_date * Consultation start date is required field in body.
* @apiParam {Time} consultation_start_time * Consultation start time is required field in body.
* @apiParam {Time} consultation_end_time * Consultation end time is required field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about providers.

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
*	"provider_name":"ravi",
*	"problem_description":"dsfa",
*	"consultation_start_date":"2016-11-03",
*	"consultation_start_time":"12:31:03",
*	"consultation_end_time":"00:31:03"
*}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "678": {
      "id": 113,
      "title": "Mr.",
      "photo": "Abs.jpeg",
      "fname": "Nikum",
      "lname": "Sir",
      "dob": "1988-04-07T00:00:00+00:00",
      "gender": "Male",
      "provider_profile": {
        "id": 2,
        "city": "NYC",
        "zip": "201301",
        "speciality": {
          "title": "Dentists",
          "scheduled_price": 200,
          "concierge_price": 200
        },
        "state": {
          "id": 1,
          "name": "Alaska"
        }
      },
      "provider_setting": {
        "id": 202,
        "scheduled_insurance_charges": 23.99,
        "scheduled_non_insurance_charges": 22.9
      },
      "provider_license_and_insurances": [
        {
          "user_id": 113,
          "state_id": 1,
          "id": 3
        },
        {
          "user_id": 113,
          "state_id": 1,
          "id": 4
        },
        {
          "user_id": 113,
          "state_id": 2,
          "id": 5
        },
        {
          "user_id": 113,
          "state_id": 2,
          "id": 6
        }
      ],
      "is_insurance_applied": false
    }
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

