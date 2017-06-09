/**
* @api {get} /Courses/getCourses Get courses
* @apiVersion 0.0.1
* @apiName Get Courses
* @apiGroup Courses
*
* @apiDescription get Courses details.
* 
* @apiParam {Int} page             * page is optional field in body.
* @apiParam {Int} limit            * limit is optional field in body.
* @apiParam {String} direction     * direction is optional field in body.
* @apiParam {String} orderby       * orderby is optional field with values popular,product,age_group,fullname,price,gender,status,category
*
* @apiExample Example usage:
* 
*{
*	"page":"2",
*	"limit":"2",
*	"direction":"desc",
*	"orderby":"fullname",
*}
* 
* /Courses/getCourses 

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Get Courses.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 3,
      "provider_type_id": 1,
      "product_id": 7,
      "age_group_id": 2,
      "product": "Courses",
      "age_group": "0-12 Months",
      "fullname": "kiwi Course",
      "price": 0,
      "gender": "Male",
      "popular": 0,
      "status": "Active",
      "moodle_course_id": 10,
      "comments": 0,
      "category": "General Healths",
      "description": "<p>asdfdasfdsf</p>",
      "tags": "",
      "shortname": "kc",
      "visible": 1
    },
    {
      "id": 6,
      "provider_type_id": 3,
      "product_id": 7,
      "age_group_id": 3,
      "product": "Courses",
      "age_group": "1-3 Years",
      "fullname": "java course",
      "price": 2,
      "gender": "Male",
      "popular": 0,
      "status": "Active",
      "moodle_course_id": 13,
      "comments": 0,
      "category": "Emotional & Mental Health",
      "description": "",
      "tags": "",
      "shortname": "jc",
      "visible": 1
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


