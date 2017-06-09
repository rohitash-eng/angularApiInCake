/**
 * @api {get} insurancePlans/getPlanTypeByStateId/:stateId Get insurance plan type by state id
 * @apiName getPlanTypeByStateId
 * @apiGroup Insurance
 *
 * @apiDescription Get insurance plan type by state id.
 * 
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
 *
* @apiParam {Number} stateId    * State id required field in url query string.
* 
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 1,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 2500 HSA High, a Multi-State Plan",
      "insurance_plan_type": {
        "plan_type": "HMO",
        "id": 1,
        "plan_type_name": "HMO"
      }
    },
    {
      "id": 2,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Select 1500, a Multi-State Plan",
      "insurance_plan_type": {
        "plan_type": "PPO",
        "id": 2,
        "plan_type_name": "PPO"
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
