/**
 * @api {get} /Community Get community
 * @apiName getCommunity
 * @apiGroup Community
 *
 * @apiDescription Get communities
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN is optional
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
 
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
      "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      "color": "#ffc87b",
      "topic_count": "5",
      "comment_count": "0",
      "last_comment_date": null,
      "comment_id": null,
      "is_joined": true
    },
    {
      "id": 2,
      "title": "Speech, Language & Motor Development",
      "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",\
      "color": "#63a5d4",
      "topic_count": "21",
      "comment_count": "8",
      "last_comment_date": "2016-09-30 19:27:19",
      "comment_id": "18",
      "commented_by": "Ashutosh Agrawal",
      "is_joined": false
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
