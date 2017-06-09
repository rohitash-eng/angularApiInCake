/**
* @api {get} /pages/providerTypePage/:id Provider Type Landing Page
* @apiVersion 0.0.1
* @apiName Provider Type Landing Page
* @apiGroup Pages
*
* @apiDescription Provider Type Landing Page
*
* @apiExample Example usage:
* 
/pages/providerTypePage/:id
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data provider type landing page with page content, banners,features, benifits and footer
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "provider_type": [
        {
          "id": 1,
          "title": "General Health",
          "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          "color": "#ffc87b",
          "image": "https://face2face-dev.s3.amazonaws.com/profileImage/580f05285ebd4.png",
          "icon_image": "https://face2face-dev.s3.amazonaws.com/profileImage/580f430ddd404.png"
        }
      ],
      "banners": [
        {
          "id": 1,
          "title": "general health",
          "caption": "test",
          "image": "https://face2face-dev.s3.amazonaws.com/banner/sample_20161105074715.jpg",
          "url": ""
        },
        {
          "id": 2,
          "title": "banner 2",
          "caption": "banner 2",
          "image": "https://face2face-dev.s3.amazonaws.com/banner/sample_20161105102412.jpg",
          "url": "abc.com"
        }
      ]
    },
    {
      "features": [
        {
          "title": "general feature",
          "name": null,
          "description": "<p>fdgdfgdg</p>",
          "image": "https://face2face-dev.s3.amazonaws.com/page/sample_20161109080454.jpg",
          "video_link": null
        },
        {
          "title": "speech feature",
          "name": null,
          "description": "<p>fgdfgfdgdg</p>",
          "image": "https://face2face-dev.s3.amazonaws.com/page/sample_20161109080523.jpg",
          "video_link": null
        }
      ]
    },
    {
      "benifits": [
        {
          "title": "general benifits",
          "name": null,
          "description": "<p>fddfgdfgd</p>",
          "image": "https://face2face-dev.s3.amazonaws.com/page/sample_20161109080606.jpg",
          "video_link": null
        }
      ]
    },
    {
      "footer": [
        {
          "title": "general footer",
          "name": null,
          "description": "<p>dfgdfgdfgdf</p>",
          "image": "https://face2face-dev.s3.amazonaws.com/page/sample_20161109080629.jpg",
          "video_link": null
        }
      ]
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


