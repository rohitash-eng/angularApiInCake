/**
* @api {post} /patients/getProviderDetailsByIdForOnDemand Get provider detail for on demand appointment
* @apiName getProviderDetailsByIdForOnDemand
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Get provider details by id for schedule an on demand appointment.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} provider_id    * Provider id is required in body.
* @apiParam {Number} insurance_plan_id    * Insurance plan id is required in body.
* @apiParam {Number} patient_id    * Patient id is required in body.
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Provider Object contain details about providers..

 * @apiExample Example usage:
*
*{
*	"provider_id":"166",
*	"insurance_plan_id":"3",
*	"patient_id":"1"
*}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 166,
    "title": "Doctor",
    "photo": "https://face2face-dev.s3.amazonaws.com/profileImage/57f51cbc2bd3f.jpeg",
    "fname": "Raj",
    "lname": "Jhaveri",
    "dob": "1984-01-25T00:00:00+00:00",
    "gender": "Male",
    "provider_profile": {
      "city": "New York",
      "id": 17,
      "speciality": {
        "id": 4,
        "title": "Physicians",
        "on_demand_price": 400,
        "concierge_price": 200
      },
      "state": {
        "id": 37,
        "name": "New York"
      }
    },
    "provider_setting": {
      "id": 1,
      "on_demand_insurance_charges": 90,
      "on_demand_non_insurance_charges": 0
    },
    "total_amount": 180,
    "is_insurance_applied": false
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

