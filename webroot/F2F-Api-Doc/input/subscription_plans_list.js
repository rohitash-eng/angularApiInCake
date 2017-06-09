/**
* @api {get} /SubscriptionPlans/getPlans Subsciption Plans List
* @apiVersion 0.0.1
* @apiName Subsciption Plans List
* @apiGroup Subscription
* @apiPermission Consumer
*
* @apiDescription Subscription plans for consumer.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiExample Example usage:
* /SubscriptionPlans/getPlans
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Plan list with user selected plan
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "plans": [
      {
        "id": 1,
        "name": "Free",
        "duration_in_months": 0,
        "price": 0,
        "description": "Free Plan",
        "status": "Active",
        "type": "Free",
        "created": null,
        "modified": null
      },
      {
        "id": 2,
        "name": "400",
        "duration_in_months": 3,
        "price": 400,
        "description": "Paid Plan $400",
        "status": "Active",
        "type": "Paid",
        "created": null,
        "modified": null
      },
      {
        "id": 3,
        "name": "600",
        "duration_in_months": 6,
        "price": 600,
        "description": "Paid Plan $600",
        "status": "Active",
        "type": "Paid",
        "created": null,
        "modified": null
      }
    ],
    "selected_plan": 2
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


