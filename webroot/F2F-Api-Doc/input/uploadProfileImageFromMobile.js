/**
* @api {post} /users/uploadProfileImageFromMobile Upload provider profile
* @apiVersion 0.0.1
* @apiName uploadProfileImageFromMobile
* @apiGroup Provider
* @apiPermission Provider
*
* @apiDescription Upload image from mobile.
* 
* @apiParam {String} photo_name        		* Photo original name field is required in body
* @apiParam {Object} photoObj 		* Photo object field is required in body
*
*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {String} data None.
*
* @apiExample Example usage:
*
*{
*	"photo_name": "test.jpg",
*	"photoObj": "file object"
*}
*
*
* 
* @apiSuccessExample {json} Success-Response: 
*        HTTP/1.1 success
*        {
*            	"status": 	true,
*		"message": 	"The request is OK",
*		"data":"None"
*        }
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

