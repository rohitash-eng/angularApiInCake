/**
 * @api {post} Calendar/updateAvailability Update Provider Availability
 * @apiName updateAvailability
 * @apiGroup Provider
 *
 * @apiDescription Add provider availability.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Date} date                * Availability date is required fieled in body.
 * @apiParam {Time} start_time          * Start time is required field in body.
 * @apiParam {Time} end_time            * End time is required field in body
 * @apiParam {String} is_recurring      * Recurring is required (Y|N)

 *
 * 
 * @apiExample Example usage:
{
    "date":"12-12-2016",
    "start_time":"07:20:00",
    "end_time":"07:50:00",
    "is_recurring":"Y"
}
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
  "data": "None"
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