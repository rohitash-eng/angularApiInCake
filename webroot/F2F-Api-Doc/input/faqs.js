/**
* @api {get} /Pages/faqs Faqs Page data
* @apiVersion 0.0.1
* @apiName Faqs Page data
* @apiGroup Pages
*
* @apiDescription Faqs Page data.
*
* @apiExample Example usage:
* 
* /Pages/faqs

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Faqs Page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": [
      {
        "title": "Faqs",
        "description": "<p>tesing faqs</p>",
        "image": null,
        "video_link": null
      }
    ],
    "faqs": [
      {
        "question": "test1",
        "answer": "answer1"
      },
      {
        "question": "test2",
        "answer": "answer2"
      }
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


