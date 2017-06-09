/**
* @api {post} /patients/getAppointments/:scheduled Get patient appointments
 * @apiName getAppointments
 * @apiGroup Consumer
*
* @apiDescription Get patient appointment by provider or consumer authentication.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {String} /:scheduled    * scheduled|requested|on-demand|not-started|started|completed send in request by url qurey string.
* @apiParam {String} search    * Search option field in request body.
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Appointment Object contain details about patient appointment.
*
* @apiExample Example usage:
*
*{
*    "search" : "text to be search"
*}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "concierge_service": "N",
      "id": 316,
      "multi_provider": "No",
      "accepted_first": "No",
      "meeting_duration": null,
      "consult_medium": "Phone",
      "insurance_plan_id": 1,
      "meeting_id": null,
      "insurance_accepted": "Yes",
      "request_status": "Accept",
      "start_url": null,
      "join_url": null,
      "is_followed_up": "N",
      "claim_status_send": "N",
      "re_schedule_by": null,
      "re_schedule_request_date": null,
      "requested_by_user_id": null,
      "consultation_status": "Not Started",
      "payment_status": "N",
      "consult_request_date_time": "2016-12-24T12:51:19+00:00",
      "consultation_start_date": "2017-01-09",
      "consultation_start_time": "13:00:00",
      "consultation_end_time": "14:10:00",
      "speciality": {
        "id": 20,
        "title": "Occupational Therapists",
        "provider_type": {
          "title": "Speech, Language & Motor Development",
          "id": 2
        }
      },
      "insurance_plan": {
        "name": ""
      },
      "inquiry_type": {
        "name": "Medical Problem"
      },
      "inquiry": {
        "name": "Medical Problem-1"
      },
      "patient_authorization_form": {
        "relationship_to_patient": "Father"
      },
      "provider": {
        "id": 1,
        "title": "Mr.",
        "fname": "subhash",
        "lname": "kumar"
      },
      "consumer": {
        "id": 213,
        "dob": null,
        "photo": null,
        "photo_name": null,
        "gender": "",
        "fname": "dhirendra",
        "lname": "singh",
        "consumer_billing_details": [
          {
            "user_id": 213,
            "type": "P",
            "city": "alld",
            "state_id": 1,
            "state": {
              "name": "Alaska"
            }
          },
          {
            "user_id": 213,
            "type": "P",
            "city": "ertert",
            "state_id": 1,
            "state": {
              "name": "Alaska"
            }
          }
        ]
      },
      "patient": {
        "id": 1,
        "fname": "anshu",
        "lname": "ghgfjhf",
        "dob": "2014-10-06T00:00:00+00:00",
        "gender": "Female"
      },
      "age": 2,
      "waiting_time": "22d ",
      "consult_start_status": "",
      "start_time": "2017-01-09 13:00:00",
      "end_time": "2017-01-09 14:10:00"
    },
    {
      "total_participants": "3",
      "concierge_service": "N",
      "id": 260,
      "multi_provider": "Yes",
      "accepted_first": "Yes",
      "meeting_duration": 10,
      "consult_medium": "Phone",
      "insurance_plan_id": null,
      "meeting_id": 380458237,
      "insurance_accepted": "No",
      "request_status": "Accept",
      "start_url": "https://zoom.us/s/380458237?zpk=oi5p-BCSfD7U2fNU1PJ7k1rasWXfVEDWYt5u2wlnvhw.AwckYTI5NzdmMmQtYTNlNy00MGJhLWI5YjktYWYwZWRlNzZhMGVlFm8xaC1kUmhjU2ZtZVN4d1p1a0RFQlEWbzFoLWRSaGNTZm1lU3h3WnVrREVCURxkaGlyZW5kcmEuc2luZ2hAa2l3aXRlY2guY29tYwB_NGlqTU5xVkxzRDZjQXVNcjZZLXpDRm91V2xRenpfanE4cjItbDF0ZmQzOC5CZ01zVmtablFXUnJkMnhCWjI5dk5USkdjVEJDTTBwd2VFNHlUM1V5VURGUE0wdFVja05xWTJkMlptVm5WVDBBQUF3elEwSkJkVzlwV1ZNemN6MAAAFk5NelhOQlRIVGktam5lNEZUaWRfNGcCAgEA",
      "join_url": "https://zoom.us/j/380458237?pwd=tWzAHHXJzXQ%3D",
      "is_followed_up": "N",
      "claim_status_send": "N",
      "re_schedule_by": null,
      "re_schedule_request_date": null,
      "consultation_status": "Not Started",
      "payment_status": "N",
      "consult_request_date_time": "2016-12-21T16:06:30+00:00",
      "consultation_start_date": "2016-12-24",
      "consultation_start_time": "08:01:00",
      "consultation_end_time": "08:11:00",
      "consultation_provider": {
        "consultation_ids": "260,261,262"
      },
      "speciality": {
        "id": 1,
        "title": "Pharmacists",
        "provider_type": {
          "title": "",
          "id": 1
        }
      },
      "insurance_plan": null,
      "inquiry_type": null,
      "inquiry": null,
      "patient_authorization_form": {
        "relationship_to_patient": "Father"
      },
      "provider": {
        "id": 1,
        "title": "Mr.",
        "fname": "subhash",
        "lname": "kumar"
      },
      "consumer": {
        "id": 213,
        "dob": null,
        "photo": null,
        "photo_name": null,
        "gender": "",
        "fname": "dhirendra",
        "lname": "singh",
        "consumer_billing_details": [
          {
            "user_id": 213,
            "type": "P",
            "city": "alld",
            "state_id": 1,
            "state": {
              "name": "Alaska"
            }
          },
          {
            "user_id": 213,
            "type": "P",
            "city": "ertert",
            "state_id": 1,
            "state": {
              "name": "Alaska"
            }
          }
        ]
      },
      "patient": {
        "id": 1,
        "fname": "anshu",
        "lname": "ghgfjhf",
        "dob": "2014-10-06T00:00:00+00:00",
        "gender": "Female"
      },
      "age": 2,
      "waiting_time": "25d ",
      "consult_start_status": "",
      "start_time": "2016-12-24 08:01:00",
      "end_time": "2016-12-24 08:11:00",
      "total_accepted": 0
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

