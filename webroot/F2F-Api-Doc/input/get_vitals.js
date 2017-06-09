/**
 * @api {get} Vitals/getVitals:1 Get Vitals
 * @apiName Get Vitals
 * @apiGroup Immunizations And Vitals
 *
 * @apiDescription Get Vitals Using Id.
 * 
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
 *
 * @apiParam {Number} /:1    * Vital id requried field in url query string
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
  "data": {
    "id": 1,
    "user_id": 10,
    "patient_id": 2,
    "voice_clip": "2",
    "voice_clip_name": "3333",
    "image": "2",
    "image_name": "2",
    "data_title": 2,
    "data_description": 2,
    "weight_lbs": 2,
    "weight_kgs": 2,
    "height_inch": 2,
    "height_cm": 2,
    "bp_systolic_mmgh": 2,
    "bp_diatolic_mmgh": 2,
    "temperature_f": 2,
    "temperature_c": 2,
    "temp_location": "Testtt",
    "oxygen_saturation_percentage": 2,
    "head_circumference_inch": 2,
    "head_circumference_cm": 2,
    "waist_circumference_inch": 2,
    "waist_circumference_cm": 2,
    "bmi_kg_m2": 2,
    "bmi_status_type": "2222",
    "status": "Active",
    "created": "2016-11-09T12:54:03+00:00",
    "modified": "2016-11-09T12:55:17+00:00"
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