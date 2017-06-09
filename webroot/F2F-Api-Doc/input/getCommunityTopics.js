/**
 * @api {post} /Community/getCommunityTopics Get community topics
 * @apiName getCommunityTopics
 * @apiGroup Community
 *
 * @apiDescription Get community topics
 *
 * @apiHeader {String} TOKEN             * A token send by header as TOKEN is optional
*
* @apiParam {Number} provider_type_id    * Provider type id is required in body.
* @apiParam {String} title               * Title is optional field in body.
* @apiParam {String} sort_by             * sort_by is optional field with values "Most Popular","Most Recent","Most Oldest","A-Z","Z-A" in body.
*
* @apiExample Example usage:
*
*{
*	"provider_type_id":"1",
*	"title":"title",
*	"sort_by":"Most Popular"
*}
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
    "community_category": {
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
      },
      "_serialize": [
        "code",
        "status",
        "message",
        "data"
      ]
    },
    "is_joined": true,
    "community_topics": [
      {
        "title": "1",
        "description": "3",
        "created_by": "2",
        "created_on": "2016-09-29 06:18:22",
        "provider_type_id": 1,
        "comment_count": "0",
        "last_comment_date": null,
        "comment_id": null,
        "joined_user_count": "1"
      },
      {
        "title": "asdfsadf",
        "description": "fdsfadsfdasf",
        "created_by": "fasdfdasf",
        "created_on": "2016-09-30 11:32:38",
        "provider_type_id": 1,
        "comment_count": "0",
        "last_comment_date": null,
        "comment_id": null,
        "joined_user_count": "1"
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
 *
  {
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
{
  "status": false,
  "message": "Unauthorised, You have not joined"
}
 */
