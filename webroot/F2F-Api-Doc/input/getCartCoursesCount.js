/**
 * @api {get} BuyCourses/getCartCoursesCount Get Cart Courses Count
 * @apiName getCartCoursesCount
 * @apiGroup Buy Courses
 *
 * @apiDescription Get Cart Courses Count
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
    "0": {
      "course_id": 1
    },
    "1": {
      "course_id": 2
    },
    "courseCount": 2
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