/**
* @api {get} /Pages/provider-signup-terms-conditions Provider Signup Terms & Conditions Page
* @apiVersion 0.0.1
* @apiName Provider Signup Terms & Conditions Page
* @apiGroup Pages
*
* @apiDescription Provider Signup Terms & Conditions Page.
*
* @apiExample Example usage:
* 
* /Pages/provider-signup-terms-conditions

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Provider Signup Terms & Conditions page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "provider-signup-terms-conditions",
      "description": "<h3>Service provided</h3>\r\n<ul>\r\n<li>The <strong>De Gruyter Online</strong> web platform offers commentary functions and functions in the De Gruyter blogs (hereinafter called &ldquo;Features&rdquo;) giving its users (hereinafter called &ldquo;Users&rdquo;) the opportunity to post their own contributions (e.g. reports on experiences with De Gruyter products, opinions, expos&eacute;s, articles) and to link up with each other for the purpose of discussing publications and other subjects and exchanging experiences. Use of these Features is conditional on consent to and compliance with the following conditions. These conditions still apply in cases where a User accesses the De Gruyter Online platform from outside the territory of the Federal Republic of Germany.</li>\r\n</ul>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 33
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


