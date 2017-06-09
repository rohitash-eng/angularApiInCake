/**
* @api {post} /patients/getPatientsByConsumer Get patient by consumer
 * @apiName getPatientsByConsumer
 * @apiGroup Consumer
*
* @apiDescription Get patient details by consumer authentication.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
*

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 1,
      "fname": "name1",
      "lname": "lname1"
    },
    {
      "id": 2,
      "fname": "name2",
      "lname": "lname2"
    },
    {
      "id": 3,
      "fname": "name3",
      "lname": "lname3"
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

