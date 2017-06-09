/**
* @api {get} /Webinars/getFutureWebinar Get future webinar details
* @apiVersion 0.0.1
* @apiName Future Webinar
* @apiGroup Webinar
*
* @apiDescription future webinar details.
* 
* @apiParam {String} sort_by             * sort_by is optional field with values "Most Recent","Most Oldest","A-Z","Z-A","Most Popular" in body.
* @apiParam {String} search_by           * search_by is optional field witch search data on topic field in body.
* @apiParam {String} filter_by           * filter_by is optional field with values "All","Free","Paid" in body.
*
* @apiExample Example usage:
* 
*{
*	"sort_by":"A-Z"
*	"search_by":"bold"
*	"filter_by":"Paid"
*}
* 
* /Webinars/getFutureWebinar

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Future Webinar.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 18,
      "image": null,
      "topic": "bold",
      "presenter": "s9DUY2_HRWWe2YBoX0NKXw",
      "host_messaging": "sdf",
      "start_time": "February 27, 2017 4:00 am",
      "duration": "3:20",
      "end_time": "2017-02-27 04:03:00",
      "attendees_capacity": "6",
      "cost": 124
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


