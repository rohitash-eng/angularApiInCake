/**
* @api {get} /Pages/our-model Our Model Page
* @apiVersion 0.0.1
* @apiName Our Model Page
* @apiGroup Pages
*
* @apiDescription Our Model Page
*
* @apiExample Example usage:
* 
* /Pages/our-model

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Our Model page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "model page ",
      "description": "<p>model page</p>",
      "image": "https://face2face-dev.s3.amazonaws.com/page/400x400_pixel_doll_wip_by_dragonspixels_d69at2t_20161222135457.png"
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


