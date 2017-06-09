/**
* @api {get} /Pages/patient-consent Patient Consent Page
* @apiVersion 0.0.1
* @apiName Patient Consent Page
* @apiGroup Pages
*
* @apiDescription Patient Consent Page
*
* @apiExample Example usage:
* 
* /Pages/patient-consent

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Patient Consent page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "testing consent page",
      "description": "<p>testing consent page</p>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 13
      }
    }
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


