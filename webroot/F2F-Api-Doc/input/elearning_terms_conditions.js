/**
* @api {get} /Pages/e-learning-terms-conditions E-learning Terms & Conditions Page
* @apiVersion 0.0.1
* @apiName E-learning Terms & Conditions Page
* @apiGroup Pages
*
* @apiDescription E-learning Terms & Conditions Page.
*
* @apiExample Example usage:
* 
* /Pages/e-learning-terms-conditions

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data E-learning Terms & Conditions page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "e-learning-terms-conditions",
      "description": "<h3>Registration</h3>\r\n<ul>\r\n<li>Each applicant for user status must complete the registration form by entering his current personal data truthfully. No nicknames, aliases or other obviously falsified data will be accepted. The applicant must further undertake to open not more than one user account. Registrations are valid for the User alone and are not transferable.</li>\r\n<li>Users must give immediate notice of any changes affecting their personal registration data. In cases where it transpires that Users have falsified personal data or have registered an incorrect address, De Gruyter reserves the right to exclude them from access and to delete content used by or addressed to them.</li>\r\n<li>Each User bears sole personal responsibility for confidentiality of his login name and password. Each User bears sole personal responsibility vis-&agrave;-vis both De Gruyter and all third parties for all activities occurring under his login name.</li>\r\n<li>Users must inform De Gruyter immediately of any unauthorized use of their access data or of any failure on their part to comply with data protection regulations. This information can be sent at any time to:</li>\r\n</ul>\r\n<p>Walter de Gruyter GmbH<br /> Genthiner Stra&szlig;e 13<br /> D-10785 Berlin, Germany<br /> Tel: +49 30 260 05-0<br /> Fax: +49 30 260 05-251<br /> E mail: service [ at ] degruyter.com</p>\r\n<ul>\r\n<li>Users can terminate their registration at any time without stating reasons. After receipt of the notice of termination De Gruyter will cancel the registration. Notice of termination must be served by letter or by fax and sent to the address stated above.</li>\r\n</ul>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 35
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


