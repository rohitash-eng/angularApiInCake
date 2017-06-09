/**
* @api {get} /Blogs/postDetail?id=:id  Blog Detail by blog id
* @apiName Blog Details by blog id
* @apiGroup News
*
* @apiDescription Blog Details by blog id with Tags having provider type, speciality and user type
*
* @apiExample Example usage:
*
/Blogs/newsDetail?id=11
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} Blog Details with Tags having provider type, speciality and user type
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "posts": {
      "id": 11,
      "title": "test",
      "image": "https://face2face-dev.s3.amazonaws.com/blog/sample_20161103095332.jpg",
      "caption": "this is test news",
      "description": "<p>this is test news</p>",
      "published_date": "2016-11-04T00:00:00+00:00",
      "specialities": [
        {
          "title": "Mental health Nurse Practitioner",
          "_joinData": {
            "blog_id": 11,
            "speciality_id": 14
          },
          "BlogsSpecialities": {
            "blog_id": 11
          }
        },
        {
          "title": "Clinical/School Psychologist (PhD)",
          "_joinData": {
            "blog_id": 11,
            "speciality_id": 15
          },
          "BlogsSpecialities": {
            "blog_id": 11
          }
        }
      ],
      "provider_types": [
        {
          "title": "Speech, Language & Motor Development",
          "_joinData": {
            "blog_id": 11,
            "provider_type_id": 2
          },
          "BlogsProviderTypes": {
            "blog_id": 11
          }
        },
        {
          "title": "Emotional & Mental Health",
          "_joinData": {
            "blog_id": 11,
            "provider_type_id": 3
          },
          "BlogsProviderTypes": {
            "blog_id": 11
          }
        }
      ]
    },
    "tags": "Speech, Language & Motor Development, Emotional & Mental Health, Mental health Nurse Practitioner, Clinical/School Psychologist (PhD), caregivers"
  }
}
*
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

