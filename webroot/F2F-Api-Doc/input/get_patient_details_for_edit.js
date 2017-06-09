/**
* @api {get} /Patients/getPatientDetailsForEdit/:patientId Get Patient Details For Edit
* @apiName getPatientDetailsForEdit
* @apiGroup Consumer
*
* @apiDescription Get Patient Details For Edit.
* 
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Patient Object contain details about patient.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 1,
    "user_id": 3,
    "fname": "Jack",
    "lname": "Doe",
    "dob": "2000-09-05T00:00:00+00:00",
    "gender": "Male",
    "child_lives_with": "Mother",
    "ssn_no": "",
    "status": "Active",
    "release_info_authrization": true,
    "created": "2016-09-27T10:03:38+00:00",
    "modified": "2016-09-27T10:03:38+00:00",
    "patient_insurances": [
      {
        "id": 1,
        "patient_id": 1,
        "company_name": "ABV",
        "holder_name": "AMSS",
        "policy_number": "11"
      },
      {
        "id": 2,
        "patient_id": 1,
        "company_name": "ABV",
        "holder_name": "AMSS",
        "policy_number": "1"
      }
    ],
    "patient_authorization_form": {
      "id": 1,
      "patient_id": 1,
      "patient_first_name": "Jack",
      "patient_last_name": "Doe",
      "patient_dob": "2000-02-02T00:00:00+00:00",
      "name_of_person": "Ravi",
      "relationship_to_patient": "Teacher",
      "reason_for_disclosure": "Treatment",
      "terms_and_conditions": true,
      "status": "Active",
      "created": "2016-09-27T10:03:38+00:00",
      "modified": "2016-09-27T10:03:38+00:00"
    },
    "patient_parent": {
      "id": 1,
      "patient_id": 1,
      "mother_fname": "Ammy",
      "mother_lname": "samsung",
      "mother_dob": "1980-02-02T00:00:00+00:00",
      "mother_ssn_no": "111-11-1111",
      "mother_address": "NYC circle 2-400",
      "mother_cell_no": "9540420501",
      "mother_home_phone_no": "9876543211",
      "mother_employer": "Google",
      "mother_work_phone_no": "9876543211",
      "father_fname": "Niel",
      "father_lname": "jhonsan",
      "father_dob": "1978-02-02T00:00:00+00:00",
      "father_ssn_no": "222-22-2222",
      "father_address": "NYC circle 2-400",
      "father_cell_no": "9504435001",
      "father_home_phone_no": "9876543211",
      "father_employer": "Yahoo",
      "father_work_phone_no": "9876543211",
      "martial_status": "Married",
      "emergency_contact_fname": "Ricky",
      "emergency_contact_lname": "Bell",
      "emergency_contact_address": "NYC circle 2-400",
      "emergency_contact_cell_no": "9876543211",
      "emergency_contact_home_no": "9876543211",
      "status": "Active",
      "created": "2016-09-27T10:03:38+00:00",
      "modified": "2016-09-27T10:03:38+00:00"
    }
  }
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

