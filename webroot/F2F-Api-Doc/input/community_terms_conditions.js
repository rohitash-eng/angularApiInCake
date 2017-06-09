/**
* @api {get} /Pages/community-terms-conditions Community Terms & Conditions Page
* @apiVersion 0.0.1
* @apiName Community Terms & Conditions Page
* @apiGroup Pages
*
* @apiDescription Community Terms & Conditions Page.
*
* @apiExample Example usage:
* 
* /Pages/community-terms-conditions

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Community Terms & Conditions Page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "community-terms-conditions",
      "description": "<h3>Data and Youth Protection Officer:</h3>\r\n<p>Genthiner Str. 13<br /> 10785 Berlin, Germany<br /> Tel: +49 (0)30 26 005 160<br /> E mail: datenschutz [ at ] degruyter.com</p>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 37
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


