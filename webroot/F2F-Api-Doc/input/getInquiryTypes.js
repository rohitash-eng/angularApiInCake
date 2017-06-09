/**
 * @api {get} /inquiryTypes/getInquiryTypes Get Inquiry Types
 * @apiName getInquiryTypes
 * @apiGroup Medical History
 *
 * @apiDescription Get all inquiries.
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
            "name": "Medical Problem"
        },
        {
            "id": 2,
            "name": "Dental"
        },
        {
            "id": 3,
            "name": "Surgery"
        },
        {
            "id": 4,
            "name": "Allergy"
        },
        {
            "id": 5,
            "name": "Medication"
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
