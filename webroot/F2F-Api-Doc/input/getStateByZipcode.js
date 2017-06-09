/**
* @api {get} /states/getStateByZipcode/99501  Get state by zipcode
* @apiVersion 0.0.1
* @apiName getStateByZipcode
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Get state by zipcode.
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
* 

* @apiParam {Number} zipcode    * Zipcode required field in url query string.
*
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
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 1,
    "name": "Alaska",
    "abbrev": "AK"
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

