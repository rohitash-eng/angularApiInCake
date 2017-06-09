/**
 * @api {post} /Community/getCommunityCategory/:id Get community category
 * @apiName getCommunityCategory
 * @apiGroup Community
 *
 * @apiDescription Get community category
 *
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
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
  "data": {
    "id": 1,
    "title": "General Health",
    "description": " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "color": "#ffc87b",
    "image": "",
    "status": 1,
    "created": "2016-08-30T13:10:20+00:00",
    "modified": "2016-08-30T13:10:20+00:00"
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
