/**
* @api {post} /patients/add Add Patient
* @apiVersion 0.0.1
* @apiName Add Patient
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Add patient by consumer.
*
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
* 
* @apiParam {String} fname                                      * First name of patient .
* @apiParam {String} lname                                      * Last Name of patient.
* @apiParam {Date} dob                                      	* Date of birth(mm/dd/yyyy) of patient.
* @apiParam {String} gender                                   	* Gender of patient.
* @apiParam {String} child_lives_with                           * Patient lives with.
* @apiParam {String} primary_care_physician           		* Primary care physician.
* @apiParam {Number} release_info_authrization           		* Realease information authrization.
* @apiParam {Array}  patient_parent            			* Patients Parent Information
* @apiParam {String} patient_parent.primary_fname                               * Primary first name of patient.
* @apiParam {String} patient_parent.primary_lname                               * Primary last name of patient.
* @apiParam {Date}   patient_parent.primary_dob                                 * Primary date of birth(mm/dd/yyyy).
* @apiParam {String} patient_parent.primary_ssn_no                              * Primary SSN No.
* @apiParam {String} patient_parent.primary_address                             * Primary address.
* @apiParam {Number} patient_parent.primary_cell_no                             * Cell number of primary.
* @apiParam {Number} patient_parent.primary_home_phone_no                       * Home phone number of primary.
* @apiParam {String} patient_parent.primary_employer                            * Primary employer.
* @apiParam {Number} patient_parent.primary_work_phone_no                       * Primary work phone number.
* @apiParam {Number} patient_parent.primary_relation                      	* Primary relation of patient.
* @apiParam {String} patient_parent.secondary_fname	                       * Secondary first name.
* @apiParam {String} patient_parent.secondary_lname                               * Secondary last name.
* @apiParam {Date}   patient_parent.secondary_dob                                 * Secondary date of birth(mm/dd/yyyy).
* @apiParam {String} patient_parent.secondary_ssn_no                              * Secondary SSN No.
* @apiParam {String} patient_parent.secondary_address                             * Secondary address.
* @apiParam {Number} patient_parent.secondary_cell_no                             * Secondary cell number.
* @apiParam {Number} patient_parent.secondary_home_phone_no                       * Secondary home phone number.
* @apiParam {String} patient_parent.secondary_employer                            * Secondary employer.
* @apiParam {Number} patient_parent.secondary_work_phone_no                       * Secondary work phone number.
* @apiParam {Number} patient_parent.martial_status                             * Marital status.
* @apiParam {String} patient_parent.emergency_contact_fname                    * Emergency contact first name.
* @apiParam {String} patient_parent.emergency_contact_lname                    * Emergency contact last name.
* @apiParam {String} patient_parent.emergency_contact_address                  * Emergency contact address.
* @apiParam {Number} patient_parent.emergency_contact_cell_no                  * Emergency contact cell number.
* @apiParam {Number} patient_parent.emergency_contact_home_no                  * Emergency contact home number.
* @apiParam {Array}  patient_authorization_form						   * Patient Authorization Forms
* @apiParam {String} patient_authorization_form.patient_first_name                         * Patient first name.
* @apiParam {String} patient_authorization_form.patient_last_name                          * Patient last name.
* @apiParam {Date}   patient_authorization_form.patient_dob                                * Patient date of birth(mm/dd/yyyy).
* @apiParam {String} patient_authorization_form.name_of_person                             * Name of person.
* @apiParam {String} patient_authorization_form.relationship_to_patient                    * Relationship to parent.
* @apiParam {String} patient_authorization_form.reason_for_disclosure                      * Reason for disclosure.
* @apiParam {Boolean} patient_authorization_form.terms_and_conditions                       * Terms and conditions.
* @apiParam {Array}  patient_insurance            			* Patients Parent Information
* @apiParam {String} patient_insurance.company_name                               * Patient Insurance company name.
* @apiParam {String} patient_insurance.holder_name                               * Patient Insurance holder name.
* @apiParam {Number}   patient_insurance.policy_number                                 * Patient Insurance policy number.
*

*
 * @apiSuccess {Boolean} status true/false.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Patient Object contain details about patient.
*
* @apiExample Example usage:
*
*{
*   "fname": "Jack",
*   "lname": "Doe",
*   "dob": "02/02/2002",
*   "gender": "Male",
*   "child_lives_with": "Mother",
*   "primary_care_physician": "Teacher",
*   "release_info_authrization": 1,
*   "patient_parent": {
*       "primary_fname": "Ammy",
*       "primary_lname": "samsung",
*       "primary_dob": "02/02/1988",
*       "primary_ssn_no": "111-11-1111",
*       "primary_address": "NYCcircle2-400",
*       "primary_cell_no": "9540420501",
*       "primary_home_phone_no": "9876543211",
*       "primary_employer": "Google",
*       "primary_work_phone_no": "9876543211",
*       "primary_relation": "Father",
*       "secondary_fname": "Niel",
*       "secondary_lname": "jhonsan",
*       "secondary_dob": "02/02/1988",
*       "secondary_ssn_no": "222-22-2222",
*       "secondary_address": "NYCcircle2-400",
*       "secondary_cell_no": "9504435001",
*       "secondary_home_phone_no": "9876543211",
*       "secondary_employer": "Yahoo",
*       "secondary_work_phone_no": "9876543211",
*       "martial_status": "Married",
*       "emergency_contact_fname": "Ricky",
*       "emergency_contact_lname": "Bell",
*       "emergency_contact_address": "NYCcircle2-400",
*       "emergency_contact_cell_no": "9876543211",
*       "emergency_contact_home_no": "9876543211"
*   },
*   "patient_authorization_form": {
*       "patient_first_name": "Jack",
*       "patient_last_name": "Doe",
*       "patient_dob": "02/02/2002",
*       "name_of_person": "Ravi",
*       "relationship_to_patient": "Teacher",
*       "reason_for_disclosure": "Treatment",
*       "terms_and_conditions": 1
*   },
*   "patient_insurances": {
*       "0": {
*           "company_name": "ABV",
*           "holder_name": "AMSS",
*           "policy_number": "1212AASSA"
*       },
*       "1": {
*           "company_name": "ABV",
*           "holder_name": "AMSS",
*           "policy_number": "1212AASSA"
*       }
*   }
*}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
	"status": true
	"message": "The request is OK"
	"data":  "None"
}
*
* @apiError (Error-Response Object){Boolean} status Status.
* @apiError (Error-Response Object){String} message Message.
* @apiError {Object} Error-Response Returns a json Object.
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
