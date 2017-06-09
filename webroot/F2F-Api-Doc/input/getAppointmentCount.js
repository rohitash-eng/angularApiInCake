/**
* @api {post} Calendar/getAppointmentCount  Get appointment count
* @apiVersion 0.0.1
* @apiName getAppointmentCount
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Get appointment count.
* 
* @apiHeader {String} TOKEN        * A token send by header as TOKEN
* 
* @apiParam {Date} end_date    * End date required field in body.
*
* @apiExample Example usage:
*
*{
*	"end_date": "2016-11-30"
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
    "status": true,
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

