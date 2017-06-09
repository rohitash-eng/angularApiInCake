/**
* @api {get} /Advertisement/getAdvertisement Get advertisement
* @apiVersion 0.0.1
* @apiName Get Advertisement
* @apiGroup Advertisement
*
* @apiDescription get Advertisement details.
* 
* @apiParam {Int} provider_type_id             * provider_type_id is optional field in body.
*
* @apiExample Example usage:
* 
*{
*	"provider_type_id":"1"
*}
* 
* /Advertisement/getAdvertisement 

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Get Advertisement.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 9,
    "provider_type_id": 1,
    "title": "advertisement 5",
    "description": "<p>advertisement 4 advertisement 4</p>",
    "image": "https://face2face-dev.s3.amazonaws.com/advertisement/400_316_20170202111954.jpg",
    "link_name": "test link",
    "link_url": "http://testlink.com"
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


