/**
* @api {get} /Pages/privacy-policy Privacy Policy Page
* @apiVersion 0.0.1
* @apiName Privacy Policy Page
* @apiGroup Pages
*
* @apiDescription Privacy Policy Page.
*
* @apiExample Example usage:
* 
* /Pages/privacy-policy

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Privacy Policy page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "title": "Privacy Policy",
      "description": "<p>testing privacy policy</p>",
      "image": null,
      "video_link": null
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


