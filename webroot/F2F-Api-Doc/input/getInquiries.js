/**
 * @api {get} /inquiries/getInquiries/:1 Get inquiries by type
 * @apiName getInquiries
 * @apiGroup Medical History
 *
 * @apiDescription Get all inquiries by type.
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
      "id": 5,
      "name": "Dental-1"
    },
    {
      "id": 6,
      "name": "Dental-2"
    },
    {
      "id": 7,
      "name": "Dental-3"
    },
    {
      "id": 8,
      "name": "Dental-4"
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
