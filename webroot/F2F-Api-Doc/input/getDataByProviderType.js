/**
 * @api {get} /pages/getDataByProviderType/:id Get Data By Provider Type
 * @apiName Get Data By Provider Type
 * @apiGroup Pages
 *
 * @apiDescription Get Data By Provider Type
 *
 * @apiExample Example usage:
 * 
/pages/getDataByProviderType/:1
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} provider type data by provider type id
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 1,
      "title": "General Health",
      "menu_title": "GENERAL HEALTH",
      "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "color": "#000000",
      "image": "https://face2face-dev.s3.amazonaws.com/profileImage/580f05285ebd4.png",
      "icon_image": "https://face2face-dev.s3.amazonaws.com/profileImage/580f430ddd404.png",
      "order": 1
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
