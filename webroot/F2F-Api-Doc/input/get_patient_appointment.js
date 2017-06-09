/**
* @api {post} /patients/getPatientAppointments/:1 Get Patient Appointments List scheduled or completed or all
* @apiName Get Patient Appointments List scheduled or completed or all
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Get Patient Appointments List scheduled or completed or all
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
*
* @apiParam {Number} /:1                  * Send page number in url query string if use pagination
* @apiParam {Number} patient_id  	  * Required patient id in body.
* @apiParam {string} status   	          * Optional "Completed" or "Scheduled" value in body
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Patient Appointments List scheduled or completed or all

* @apiExample Example usage:
*
*patients/getPatientAppointments/:1
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "list": [
      {
        "consult_type": "Scheduled",
        "consultation_status": "Not Started",
        "consultation_start_date": "2016-09-27T00:00:00+00:00",
        "consultation_end_time": "2016-11-10T05:23:34+00:00",
        "inquiry_type": {
          "name": "Dental"
        },
        "inquiry": {
          "name": "Dental-1"
        },
        "provider": {
          "fname": "Ravi",
          "lname": "kumar"
        },
        "consumer": {
          "title": "",
          "fname": "Kannan",
          "lname": "Ram"
        },
        "speciality": {
          "title": "Pharmacists"
        }
      },
      {
        "consult_type": "On-Demand",
        "consultation_status": "Not Started",
        "consultation_start_date": null,
        "consultation_end_time": "2016-11-10T00:00:00+00:00",
        "inquiry_type": null,
        "inquiry": null,
        "provider": {
          "fname": "Ravi",
          "lname": "kumar"
        },
        "consumer": {
          "title": "",
          "fname": "Kannan",
          "lname": "Ram"
        },
        "speciality": {
          "title": "Pharmacists"
        }
      },
      {
        "consult_type": "On-Demand",
        "consultation_status": "Not Started",
        "consultation_start_date": null,
        "consultation_end_time": "2016-11-10T00:00:00+00:00",
        "inquiry_type": null,
        "inquiry": null,
        "provider": {
          "fname": "Ravi",
          "lname": "kumar"
        },
        "consumer": {
          "title": "",
          "fname": "Kannan",
          "lname": "Ram"
        },
        "speciality": {
          "title": "Pharmacists"
        }
      }
    ],
    "Page": {
      "finder": "all",
      "page": 1,
      "current": 5,
      "count": 72,
      "perPage": 5,
      "prevPage": false,
      "nextPage": true,
      "pageCount": 15,
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

