/**
* @api {post} /consultations/providerStrikeOnConcierge Record provider strike
* @apiName providerStrikeOnConcierge
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Record provider strike by consumer.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} consultation_id    * Consultation id is required field in body.
* @apiParam {Number} provider_id        * Provider id is required field in body.

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Null.

* @apiExample Example usage:
*
*
{
    "consultation_id": "148",
    "provider_id":"1"
}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "Provider": {
      "email": "subhash.kumar@kiwitech.com"
    }
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

