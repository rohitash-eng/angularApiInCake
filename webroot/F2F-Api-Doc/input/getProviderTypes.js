/**
 * @api {get} /pages/getProviderTypes Get Provider Types
 * @apiName Get Provider Types
 * @apiGroup Pages
 *
 * @apiDescription Get Provider Types.
 *
 * @apiExample Example usage:
 * 
/pages/getProviderTypes
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data List of provider types with id, title and color 
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
      "menu_title": "GENERAL HEALTH",
      "color": "#000000",
      "order": 1
    },
    {
      "id": 2,
      "title": "Speech, Language & Motor Development",
      "menu_title": "DEVELOPMENT",
      "color": "#63a5d4",
      "order": 2
    },
    {
      "id": 3,
      "title": "Emotional & Mental Health",
      "menu_title": "MENTAL HEALTH",
      "color": "#b186ba",
      "order": 3
    },
    {
      "id": 4,
      "title": "Mind, Body & Nutrition",
      "menu_title": "MIND, BODY & NUTRITION",
      "color": "#ff7878",
      "order": 5
    },
    {
      "id": 5,
      "title": "Education, Advocacy, Tutoring & Coaching",
      "menu_title": "EDUCATION & ADVOCACY",
      "color": "#70d37c",
      "order": 4
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
