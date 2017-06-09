/**
* @api {get} /Pages/patient-home Patient Home Page
* @apiVersion 0.0.1
* @apiName Patient Home Page
* @apiGroup Pages
*
* @apiDescription Patient Home Page
*
* @apiExample Example usage:
* 
/Pages/patient-home
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Patient Home Page data with home page content, banners,features, benifits and footer
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "Home",
      "description": "Home Page",
      "image": "abc.jpg",
      "video_link": null,
      "page_category": {
        "id": 7
      }
    },
    "section": {
      "banners": [
        {
          "id": 4,
          "title": "banner home",
          "caption": "banner",
          "image": "bannerhome1.jpg",
          "url": ""
        },
        {
          "id": 5,
          "title": "home banner2",
          "caption": "home",
          "image": "abc.jpg",
          "url": ""
        }
      ],
      "features": [
        {
          "title": "home feature",
          "name": "home feature",
          "description": "home feature",
          "image": "abc.jpg",
          "video_link": null
        },
        {
          "title": "home 2 feature",
          "name": "home 2 feature",
          "description": "home 2 feature",
          "image": "abc.jpg",
          "video_link": null
        }
      ],
      "benifits": [
        {
          "title": "home benifits",
          "name": "home benifits",
          "description": "home benifits",
          "image": "abc.jpg",
          "video_link": null
        }
      ],
      "footer": [
        {
          "title": "home footer",
          "name": "home footer",
          "description": "home footer",
          "image": "abc.jpg",
          "video_link": null
        }
      ]
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


