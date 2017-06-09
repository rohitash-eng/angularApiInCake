/**
* @api {get} /Pages/webinar-terms-conditions Webinar Terms & Conditions Page
* @apiVersion 0.0.1
* @apiName Webinar Terms & Conditions Page
* @apiGroup Pages
*
* @apiDescription Webinar Terms & Conditions Page.
*
* @apiExample Example usage:
* 
* /Pages/webinar-terms-conditions

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Webinar Terms & Conditions Page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "webinar-terms-conditions",
      "description": "<h3>Behavioral codex</h3>\r\n<ul>\r\n<li>De Gruyter Online Community Features should be used solely for the purpose of tolerant, constructive, objective exchange of opinions on scientific subjects and attitudes.</li>\r\n<li>All users undertake to treat other users with respect and to refrain from attacking, provoking, threatening, annoying, insulting, offending or disconcerting them in any other way whatsoever.</li>\r\n<li>Each User undertakes to act in a fair and trustworthy way and, in particular, to refrain from culpably deceiving or damaging other users, for example, by claiming to be an employee or representative of De Gruyter for the purpose of obtaining personal information on other users.</li>\r\n<li>Each User undertakes to comply with the regulations on protection of minors.</li>\r\n<li>De Gruyter Features must not be used for purposes which would constitute violation of Federal German law by the User.</li>\r\n<li>Users are prohibited from engaging in activities aimed at sabotaging or otherwise interfering with De Gruyter Features and, in particular, from taking any action capable of affecting the physical or electronic structure of the Features.</li>\r\n</ul>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 38
      }
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


