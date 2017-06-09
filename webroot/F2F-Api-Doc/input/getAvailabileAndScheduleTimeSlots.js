/**
 * @api {post} Calendar/getAvailabileAndScheduleTimeSlots Get availability and scheduled appointment
 * @apiName getAvailabileAndScheduleTimeSlots
 * @apiGroup Provider
 *
 * @apiDescription Get provider availability and scheduled appointment between given date.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Date} start_date          * Start time is required field in body.
 * @apiParam {Date} end_date            * End time is required field in body.

 *
 * 
 * @apiExample Example usage:
{
	"start_date":"2016-12-19",
	"end_date":"2016-12-12"
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
  "data": {
    "schedule_list": [
      {
        "id": 1,
        "re_schedule_by": null,
        "re_schedule_request_date": null,
        "title": "Raj Jhaveri",
        "start": "2016-12-08 12:31:03",
        "end": "2016-12-08 00:31:03"
      },
      {
        "id": 148,
        "re_schedule_by": null,
        "re_schedule_request_date": null,
        "title": "anshu ghgfjhf",
        "start": "2016-11-19 02:31:00",
        "end": "2016-11-19 03:31:00"
      },
      {
        "id": 180,
        "re_schedule_by": null,
        "re_schedule_request_date": null,
        "title": "anshu ghgfjhf",
        "start": "2016-12-03 02:31:00",
        "end": "2016-12-03 03:31:00"
      }
    ],
    "available_list": [
      {
        "id": 3,
        "user_id": 213,
        "date": "2016-12-12T00:00:00+00:00",
        "in_time": "2016-12-13T07:20:00+00:00",
        "out_time": "2016-12-13T07:50:00+00:00",
        "start": "2016-12-12 07:20:00",
        "end": "2016-12-12 07:50:00"
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