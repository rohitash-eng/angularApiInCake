/**
 * @api {get} insurancePlans/getPlanByStateId/:stateId Get insurance plan type by state id
 * @apiName getPlanByStateId
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
      "plan_name": "Blue Cross Blue Shield Plus 2500 HSA High, a Multi-State Plan"
    },
    {
      "id": 2,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Select 1500, a Multi-State Plan"
    },
    {
      "id": 3,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 1500, a Multi-State Plan"
    },
    {
      "id": 4,
      "state_id": 1,
      "plan_name": "Be Prosperous (Select)"
    },
    {
      "id": 5,
      "state_id": 1,
      "plan_name": "Be Equipped (Select)"
    },
    {
      "id": 6,
      "state_id": 1,
      "plan_name": "Be Driven (Providence)"
    },
    {
      "id": 7,
      "state_id": 1,
      "plan_name": "Be Mighty (HSA) (Providence)"
    },
    {
      "id": 8,
      "state_id": 1,
      "plan_name": "Be Mighty (HSA) (Select)"
    },
    {
      "id": 9,
      "state_id": 1,
      "plan_name": "Be Rugged (Select)"
    },
    {
      "id": 10,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 5250 HSA High, a Multi-State Plan"
    },
    {
      "id": 11,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Select 2000, a Multi-State Plan"
    },
    {
      "id": 12,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 1000, a Multi-State Plan"
    },
    {
      "id": 13,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 2000, a Multi-State Plan"
    },
    {
      "id": 14,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 5500, a Multi-State Plan"
    },
    {
      "id": 15,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 6350, a Multi-State Plan"
    },
    {
      "id": 16,
      "state_id": 1,
      "plan_name": "Be Prosperous (Select)"
    },
    {
      "id": 17,
      "state_id": 1,
      "plan_name": "Be Adventurous (Providence)"
    },
    {
      "id": 18,
      "state_id": 1,
      "plan_name": "Be Adventurous (Select)"
    },
    {
      "id": 19,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Select 2500 HSA, a Multi-State Plan"
    },
    {
      "id": 20,
      "state_id": 1,
      "plan_name": "Blue Cross Blue Shield Plus 1500, a Multi-State Plan"
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
