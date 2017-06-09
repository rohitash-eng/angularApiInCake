/**
* @api {get} /Webinars/getPastWebinar Get past webinar details
* @apiVersion 0.0.1
* @apiName Past Webinar
* @apiGroup Webinar
*
* @apiDescription past webinar details.
*
* @apiParam {String} sort_by             * sort_by is optional field with values "Most Recent","Most Oldest","A-Z","Z-A","Most Popular" in body.
* @apiParam {String} search_by           * search_by is optional field witch search data on topic field in body.
* @apiParam {String} filter_by           * filter_by is optional field with values "All","Free","Paid" in body.
*
* @apiExample Example usage:
* 
*{
*	"sort_by":"A-Z"
*	"search_by":"append"
*	"filter_by":"Paid"
*}
*
* 
* /Webinars/getPastWebinar

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Past Webinar.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 15,
      "image": "https://face2face-dev.s3.amazonaws.com/webinar/vela_1024x768_20161207052133.jpg",
      "topic": "append",
      "presenter": "5657",
      "host_messaging": "m1",
      "start_time": "February 5, 2017 9:00 am",
      "duration": "3:50",
      "end_time": "2017-02-05 09:03:00",
      "attendees_capacity": "9",
      "cost": 99
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


