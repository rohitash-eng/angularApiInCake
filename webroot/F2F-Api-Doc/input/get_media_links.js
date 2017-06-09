/**
* @api {get} /options/getMediaLinks Get Media links like facebook, twitter
* @apiName Get Media Links
* @apiGroup Pages
*
* @apiDescription Get all media links like facebook, twitter
*
* @apiExample Example usage:
*
/options/getMediaLinks
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Get Media Links like facebook, twitter
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 1,
      "key_name": "social",
      "key_value": {
        "twitter_class": "fa fa-twitter",
        "twitter_url": "https://www.google.com",
        "youtube_class": "fa fa-youtube-play",
        "youtube_url": "",
        "facebook_class": "fa fa-facebook",
        "facebook_url": "https://www.facebook.com/kavish.diwan",
        "linkedin_class": "fa fa-linkedin",
        "linkedin_url": "https://in.linkedin.com/in/kavish-diwan-80206866",
        "pinterest_class": "fa fa-pinterest-p",
        "pinterest_url": "",
        "googleplus_class": "fa fa-google-plus",
        "googleplus_url": ""
      },
      "autoload": 0
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

