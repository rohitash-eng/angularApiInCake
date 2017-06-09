/**
* @api {get} /Pages/consumer-signup-terms-conditions Consumer Signup Terms & Conditions Page
* @apiVersion 0.0.1
* @apiName Consumer Signup Terms & Conditions Page
* @apiGroup Pages
*
* @apiDescription Consumer Signup Terms & Conditions Page.
*
* @apiExample Example usage:
* 
* /Pages/consumer-signup-terms-conditions

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Consumer Signup Terms & Conditions page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "consumer-signup-terms-conditions",
      "description": "<h3>Users</h3>\r\n<ul>\r\n<li>The Features are available to all users aged 14 years or more who have a personal, registered user account. No person can claim a right to registration.</li>\r\n</ul>\r\n<h3>&nbsp;</h3>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 34
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


