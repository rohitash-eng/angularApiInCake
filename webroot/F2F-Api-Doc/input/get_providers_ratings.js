/**
 * @api {get} ProvidersRatings/getProvidersRatings:2 Get Providers Ratings
 * @apiName Get Providers Ratings
 * @apiGroup Ratings
 *
 * @apiDescription Get Providers Ratings using provider id.
 * 
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
 *
 * @apiParam {Number} /:2    * Provider id requried field in url query string
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
      "id": 3,
      "user_id": 37,
      "provider_id": 12,
      "rating": 21,
      "comment": "hi this is for testing",
      "created": "2016-11-22T13:53:40+00:00"
    },
    {
      "id": 4,
      "user_id": 37,
      "provider_id": 12,
      "rating": 21,
      "comment": "hi this is for testing",
      "created": "2016-11-22T13:54:24+00:00"
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