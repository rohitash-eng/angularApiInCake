/**
* @api {post} /patients/updateOndemandAppointmentDetails Update on-demand appointment details
* @apiName updateOndemandAppointmentDetails
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Update on-demand appointment details.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} id    * Id is required field in body.
* @apiParam {Number} patient_id    * patint_id is required field in body.
* @apiParam {Number} speciality_id    * Speciality id is required field in body.
* @apiParam {String} coupon_code * Consultation end time is optional field in body.
* @apiParam {Number} consultation_total_charge * Consultation charge amount is required field in body.
* @apiParam {Number} speciality_unit_charge * Speciality charge is required field in body.
* @apiParam {String} stripe_card_id * Stripe card id type is required field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about providers.

* @apiExample Example usage:
*
*
{
    "id":"1",
    "patient_id":"2",
    "speciality_id":"3",
    "coupon_code":"CSdF",
    "consultation_total_charge":"4522",
    "speciality_unit_charge":"4000",
    "stripe_card_id":"card_dafsf42234"
}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "meeting_id": 211314314,
    "start_url": "https://zoom.us/s/123456789?zpk=hs65q23kd9sqliy612h23k",
    "join_url": "https://zoom.us/j/123456789",
    "meeting_duration": 10
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

