/**
* @api {post} /patients/getPatientAppointmentsByProvider/:page-number Get Provider's Patient Appointments List and searching
* @apiName Get Provider's Patient Appointments List and searching
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Get Provider's Patient Appointments List and searching
* 
* @apiHeader {String} TOKEN               * A token send by header as TOKEN
*
* @apiParam {Number} /:page_number        * optional Send page number in url query string if use pagination
* @apiParam {string} status   	          * Optional "Completed" or "Scheduled" or "Pending" value in body
* @apiParam {string} patient_name  	  * optional patient's first name or last name in body.
* @apiParam {string} inquiry_type  	  * optional inquiry_type id in body.
* @apiParam {string} gender  	          * optional patient's gender in body.
* @apiParam {date} dob  	          * optional patient's dob in body.
* @apiParam {date} appt_date  	          * optional patient's consultation request date  in body.
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Patient Appointments List of provider based on scheduled or completed or all other parameters

*@apiExample Example usage:
*
patients/getPatientAppointmentsByProvider/:1
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "list": [
      {
        "patient_id": 1,
        "consult_type": "On-Demand",
        "consultation_status": "Not Started",
        "consultation_start_date": null,
        "consultation_start_time": null,
        "consultation_end_time": "2016-11-10T00:00:00+00:00",
        "patient": {
          "fname": "Jack",
          "lname": "Doe",
          "gender": "Male",
          "dob": "2002-02-02T00:00:00+00:00"
        },
        "inquiry_type": null,
        "inquiry": null
      },
      {
        "patient_id": 1,
        "consult_type": "On-Demand",
        "consultation_status": "Not Started",
        "consultation_start_date": null,
        "consultation_start_time": null,
        "consultation_end_time": "2016-11-10T00:00:00+00:00",
        "patient": {
          "fname": "Jack",
          "lname": "Doe",
          "gender": "Male",
          "dob": "2002-02-02T00:00:00+00:00"
        },
        "inquiry_type": null,
        "inquiry": null
      },
      {
        "patient_id": 1,
        "consult_type": "On-Demand",
        "consultation_status": "Not Started",
        "consultation_start_date": null,
        "consultation_start_time": null,
        "consultation_end_time": "2016-11-10T00:00:00+00:00",
        "patient": {
          "fname": "Jack",
          "lname": "Doe",
          "gender": "Male",
          "dob": "2002-02-02T00:00:00+00:00"
        },
        "inquiry_type": null,
        "inquiry": null
      }
    ],
    "Page": {
      "finder": "all",
      "page": 1,
      "current": 5,
      "count": 7,
      "perPage": 5,
      "prevPage": false,
      "nextPage": true,
      "pageCount": 2,
      "sort": null,
      "direction": false,
      "limit": null,
      "sortDefault": false,
      "directionDefault": false,
      "scope": null
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

