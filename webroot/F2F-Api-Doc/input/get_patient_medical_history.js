/**
 * @api {get} patientMedicalHistories/getMedicalHistoryByIssueType?patient_id=33&issue_type_id=1 Patient Medical History By Issue Type
 * @apiName getMedicalHistoryByIssueType
 * @apiGroup Medical History
 *
 * @apiDescription Get medical history of Patient by issue type.
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
    "data": [
        {
            "id": 47,
            "issue_type_id": 4,
            "title": "Allergy",
            "issue_name": "XYZ",
            "summary": "XYZS",
            "begin_date": "2016-02-02T00:00:00+00:00",
            "end_date": "2016-02-02T00:00:00+00:00",
            "occurance": 12,
            "outcome": 12,
            "severity": "Midium",
            "reaction": "slow",
            "onset": "12",
            "referred_by": "nicole",
            "destination": "hello how are you?",
            "comments": "am fine how are you",
            "patient": {
                "id": 33,
                "fname": "Jack",
                "lname": "Doe",
                "dob": "1998-09-15T00:00:00+00:00"
            }
        },
        {
            "id": 54,
            "issue_type_id": 4,
            "title": "Allergy",
            "issue_name": "XYZ",
            "summary": "XYZS",
            "begin_date": "2016-02-02T00:00:00+00:00",
            "end_date": "2016-02-02T00:00:00+00:00",
            "occurance": 12,
            "outcome": 12,
            "severity": "Midium",
            "reaction": "slow",
            "onset": "12",
            "referred_by": "nicole",
            "destination": "hello how are you?",
            "comments": "am fine how are you",
            "patient": {
                "id": 33,
                "fname": "Jack",
                "lname": "Doe",
                "dob": "1998-09-15T00:00:00+00:00"
            }
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

