/**
* @api {post} /Blogs/getPosts Latest Blogs and News on Dashboard
* @apiName Latest Blogs and News on Dashboard
* @apiGroup News 
*
* @apiDescription Display Latest Blogs and News on Provider/Consumer Dashboard
*
* @apiParam {string} type    * Required type in the body either of the values "news" or "blogs"
* @apiParam {number} limit   * Required limit in the body for news or blogs
* @apiExample Example usage:
*
/Blogs/getPosts

* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} List of news & blogs
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 11,
      "title": "test",
      "image": "https://face2face-dev.s3.amazonaws.com/blog/sample_20161103095332.jpg",
      "caption": "this is test news",
      "description": "<p>this is test news</p>",
      "published_date": "2016-11-04T00:00:00+00:00"
    }
  ]
}
*
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

