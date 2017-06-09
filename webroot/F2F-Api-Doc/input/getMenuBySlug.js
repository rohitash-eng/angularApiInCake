/**
 * @api {get} /pages/getMenuBySlug/:slug Get menu based on query string in slug
 * @apiName Get menu for e learning and virtual health
 * @apiGroup Pages
 *
 * @apiDescription Get ELearning menu
 *
 * @apiExample Example usage:
 * 
/pages/getMenuBySlug/e-learning
 *
 * @apiSuccess {String} status True.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data menu for e-learning or virtual health with id, title and slug 
 *
 * @apiSuccessExample Success-Response-Example:
 *  HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": [
    {
      "id": 16,
      "title": "Homepage",
      "slug": "homepage"
    },
    {
      "id": 17,
      "title": "What Is",
      "slug": "what-is"
    },
    {
      "id": 18,
      "title": "Benefits",
      "slug": "benefits"
    },
    {
      "id": 19,
      "title": "Testimonials",
      "slug": "testimonials"
    },
    {
      "id": 20,
      "title": "Virtual Health",
      "slug": "virtual-health"
    },
    {
      "id": 21,
      "title": "Community",
      "slug": "community"
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
