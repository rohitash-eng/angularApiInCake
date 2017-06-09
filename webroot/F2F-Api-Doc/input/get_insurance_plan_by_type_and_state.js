/**
* @api {get} /patients/getInsurancePlanByTypeIdAndStateId?plane_type_id=1&state_id=2 Get Insurance Plan By Type and State
 * @apiName getInsurancePlanByTypeIdAndStateId
 * @apiGroup Insurance
*
* @apiDescription Get insurance plan by plan type id and state id.
* 
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} plane_type_id    * Plane type id requried field in url query string
* @apiParam {Number} state_id    * State id requried field in url query string
 *
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data Insurance plan Object contain details about insurance plan.

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 1,
      "name": "Capital Distict Physician Health",
      "plan_name": 0
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

