/**
 * @api {get} /patients/getAgeGroupDropDown Get age group dropdown
 * @apiName getAgeGroupDropDown
 * @apiGroup Consumer
 *
 * @apiDescription Get age group dropdown
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
  "data": [
    {
      "id": 1,
      "age": "<0 Months"
    },
    {
      "id": 2,
      "age": "0-12 Months"
    },
    {
      "id": 3,
      "age": "1-3 Years"
    },
    {
      "id": 4,
      "age": "3-5 Years"
    },
    {
      "id": 5,
      "age": "5-12 Years"
    },
    {
      "id": 6,
      "age": "12-18 Years"
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
