/**
* @api {get} /Pages/about-us About Us Page
* @apiVersion 0.0.1
* @apiName About Us Page
* @apiGroup Pages
*
* @apiDescription About Us Page.
*
* @apiExample Example usage:
* 
* /Pages/about-us

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data About Us Page.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "About Us Page",
      "description": "Testing About us Page",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 1
      }
    },
    "about-us": [
      [
        {
          "slug": "leadership-team",
          "title": "Leadership team",
          "description": "testing leadership team",
          "image": null,
          "video_link": null
        }
      ],
      [
        {
          "slug": "advisory-board",
          "title": "Advisory Board",
          "description": "Testing Advisory Board",
          "image": null,
          "video_link": null
        }
      ]
    ]
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


