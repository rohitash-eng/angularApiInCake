/**
* @api {post} /Contacts/contactUs Contact Us Form
* @apiVersion 0.0.1
* @apiName Contact Us Form
* @apiGroup Pages
*
* @apiDescription Contact Us Form.
*
* @apiParam {string} name       	* Required Name in body.
* @apiParam {String} email   		* Required Email in body .
* @apiParam {String} phone    		* Required Phone Number in body.
* @apiParam {String} message    	* Required Message in body.
* @apiParam {string} news_updates       * Optional news_updates "Y" or "N" in body.
*
* @apiExample Example usage:
*
*{
*	"name":"gaurav",
*	"email":"gkv7@gmail.com",
*	"phone":"7686786876",
*	"message":"this is test message",
*	"news_updates":"Y"
*}
*
* @apiSuccess {String} status true.
* @apiSuccess {String} message Thank you for contacting us.
* @apiSuccess {Object} data Contact form data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "Thank you for contacting us",
  "data": {
    "name": "gaurav",
    "email": "gkv7@gmail.com",
    "phone": "7686786876",
    "message": "this is test message",
    "news_updates": "Y"
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


