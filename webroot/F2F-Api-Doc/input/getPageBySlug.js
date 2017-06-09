/**
 * @api {post} /pages/getPageBySlug Get pages by page_slug i.e homepage and parent_slug i.e e-learning 
 * @apiName Get pages by slug i.e homepage and parent slug i.e e-learning
 * @apiGroup Pages
 *
 * @apiDescription Get pages by slug i.e homepage and parent slug i.e e-learning
 *
 * @apiParam {string} parent_slug    * Required parent slug either of the values "e-learning" or "virtual-health" in the body
*  @apiParam {string} page_slug           * Required page slug i.e. "homepage","what-is" in the body
 * @apiExample Example usage:
 * 
/pages/getPageBySlug
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data  Page Data with banners and testimonials 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": [
      {
        "title": "benifits",
        "slug": "benifits",
        "description": "<p>benifits</p>",
        "image": null,
        "icon_image": "https://face2face-dev.s3.amazonaws.com/page/44_80_20161221131052.gif"
      },
      {
        "title": "benifits",
        "slug": "benifits",
        "description": "<p>benefits</p>",
        "image": null,
        "icon_image": "https://face2face-dev.s3.amazonaws.com/page/44_80_20161222081432.gif"
      }
    ],
    "banner": {
      "title": "benifits banner",
      "caption": "",
      "image": "https://face2face-dev.s3.amazonaws.com/banner/1280_600_20161221131428.jpg",
      "button_text": null,
      "url": ""
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
