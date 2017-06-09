/**
* @api {post} /states/validateZipcodeByState  validate zip-code by state
* @apiVersion 0.0.1
* @apiName validateZipcodeByState
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Validate zip-code by state id.
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
* 
* @apiParam {Number} state_id    * State id required field in body.
* @apiParam {Number} zip_code    * Zipcode required field in body.
*
* @apiExample Example usage:
*
*{
*	"state_id": "1",
*	"zip_code": "99501"
*}
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data None.
*
*
* 
* @apiSuccessExample {json} Success-Response: 
*        HTTP/1.1 success
{
    "status": true/false,
    "message": "The request is OK",
    "data": "None"
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

