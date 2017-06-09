/**
 * @api {get} patientMedicalHistories/getPatientMedicalHistories?patient_id=33 Patient Medical History
 * @apiName getPatientMedicalHistories
 * @apiGroup Medical History
 *
 * @apiDescription Get medical history of Patient.
 * 
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
 *
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Object contain details about Patient Medical History.
 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
 {
 "status": true,
 "message": "Data saved successfully",
 "data": {
        "0": {
            "issue_type_id": 1,
            "number_of_issues": 1,
            "issue_type_name": "Medical Problem"
        },
        "1": {
            "issue_type_id": 2,
            "number_of_issues": 2,
            "issue_type_name": "Dental"
        },
        "2": {
            "issue_type_id": 3,
            "number_of_issues": 1,
            "issue_type_name": "Surgery"
        },
        "3": {
            "issue_type_id": 4,
            "number_of_issues": 1,
            "issue_type_name": "Allergy"
        },
        "4": {
            "issue_type_id": 5,
            "number_of_issues": 1,
            "issue_type_name": "Medication"
        },
        "patient_name": "Jack Doe",
        "patient_dob": "1998-09-15T00:00:00+00:00"
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

