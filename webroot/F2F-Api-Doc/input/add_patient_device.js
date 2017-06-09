/**
 * @api {post} PatientDevices/add Add Patient Devices
 * @apiName add
 * @apiGroup Patient Devices
 *
 * @apiDescription Add Patient Devices.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Number} patient_id        * Patient id
 * @apiParam {Number} device_id         * Device id
 * @apiParam {Number} device_title      * Device title
 * @apiParam {String} audio             * Audio
 * @apiParam {String} image             * Image
 *
 * 
 * @apiExample Example usage:
 {
	"patient_id":"1",
	"device_id":"1",
	"device_title":"Fitbit1",
	"audio":"",
	"image":""
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
  "message": "Data saved successfully",
  "data": "None"
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