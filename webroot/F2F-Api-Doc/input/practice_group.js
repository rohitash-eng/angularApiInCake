/**
* @api {get} pages/providerPage/practice-group Practice Group Page
* @apiVersion 0.0.1
* @apiName Practice Group Page
* @apiGroup Pages
*
* @apiDescription Practice Group Page
*
* @apiExample Example usage:
* 
* pages/providerPage/practice-group

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Practice Group Page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "Practice Group Home edit qqq",
      "description": "<p>description of Practice Group Home 11</p>",
      "image": "https://face2face-dev.s3.amazonaws.com/page/800_400_20170210091415.png",
      "video_link": null,
      "page_category": {
        "id": 30
      }
    },
    "section": {
      "banners": [
        {
          "id": 65,
          "title": "practice group banner",
          "caption": "description of practice group banner",
          "image": "https://face2face-dev.s3.amazonaws.com/banner/1280_600_20170210091902.jpg",
          "url": ""
        }
      ],
      "footer": [
        {
          "title": "practice group footer",
          "name": null,
          "page_group": null,
          "slug": "practice-group-footer",
          "description": "<p>description of practice group footer 11</p>",
          "description2": "<p>description of practice group footer 22</p>",
          "image": "https://face2face-dev.s3.amazonaws.com/page/300_200_20170213070835.png",
          "icon_image": null,
          "video_link": null
        }
      ],
      "benefits": [
        {
          "title": "practice group benefits",
          "name": null,
          "page_group": null,
          "slug": "practice-group-benefits",
          "description": "<p>description of practice group benefits 1111</p>",
          "description2": "",
          "image": "https://face2face-dev.s3.amazonaws.com/page/80_80_20170213070616.jpg",
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


