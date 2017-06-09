/**
* @api {get} pages/providerPage/individual-provider Individual Provider Page
* @apiVersion 0.0.1
* @apiName Individual Provider Page
* @apiGroup Pages
*
* @apiDescription Individual Provider Page
*
* @apiExample Example usage:
* 
* pages/providerPage/individual-provider

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Individual Provider Page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "individual-provider Home edit",
      "description": "<p>description of individual-provider Homeeeeee</p>",
      "image": "https://face2face-dev.s3.amazonaws.com/page/800_400_20170210091230.png",
      "video_link": null,
      "page_category": {
        "id": 29
      }
    },
    "section": {
      "banners": [
        {
          "id": 60,
          "title": "individual-provider 1",
          "caption": "description for individual-provider 1",
          "image": "https://face2face-dev.s3.amazonaws.com/banner/1280_600_20170208114912.jpg",
          "url": "http://test.com"
        }
      ],
      "features": [
        {
          "title": "Individual Feature",
          "name": null,
          "page_group": null,
          "slug": "individual-feature",
          "description": "<p>Description of Individual Feature 111</p>",
          "description2": "",
          "image": "https://face2face-dev.s3.amazonaws.com/page/300_200_20170213064916.png",
          "icon_image": null,
          "video_link": null
        }
      ],
      "benefits": [
        {
          "title": "individual-provider benefits  edit",
          "name": null,
          "page_group": null,
          "slug": "individual-provider-benefits-edit",
          "description": "<p>description of individual-provider benefits&nbsp;</p>",
          "description2": "",
          "image": "https://face2face-dev.s3.amazonaws.com/page/80_80_20170208130122.jpg",
          "icon_image": null,
          "video_link": null
        }
      ],
      "footer": [
        {
          "title": "Individual Footer",
          "name": null,
          "page_group": null,
          "slug": "individual-footer",
          "description": "<p>description of Individual Footer</p>",
          "description2": "<p>description of Individual Footer 222222</p>",
          "image": "https://face2face-dev.s3.amazonaws.com/page/300_200_20170213065322.png",
          "icon_image": null,
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


