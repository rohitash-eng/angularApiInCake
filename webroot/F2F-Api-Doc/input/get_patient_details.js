/**
* @api {get} /Patients/getPatientDetails/:patientId Get Patient Details
* @apiName getPatientDetails
* @apiGroup Consumer
*
* @apiDescription Get Patient Details.
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
        "user_id": 66,
        "fname": "Ronnytwo",
        "lname": "Dawntwo",
        "dob": "2003-02-02T00:00:00+00:00",
        "gender": "Male",
        "child_lives_with": "Mother",
        "ssn_no": "",
        "status": "Deleted",
        "release_info_authrization": true,
        "created": "2016-09-27T12:55:19+00:00",
        "modified": "2016-09-27T12:55:19+00:00"
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

