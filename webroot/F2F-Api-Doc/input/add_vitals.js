/**
* @api {put} /Vitals/add Add Vitals
* @apiName Add Vitals
* @apiGroup Immunizations And Vitals
*
* @apiDescription Consumer can add the Vitals.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {Number} patient_id                     * Id of patient
* @apiParam {String} voice_clip                     * Voice clip link
* @apiParam {String} voice_clip_name                * Voice clip name
* @apiParam {String} image                          * Image
* @apiParam {String}   image_name                     * Image name
* @apiParam {String}   data_title                     * Data title
* @apiParam {String} data_description               * Data description
* @apiParam {Number} weight_lbs                     * Weight lbs
* @apiParam {Number} weight_kgs                     * Weight kgs
* @apiParam {String} height_inch                    * Height inch
* @apiParam {Number} height_cm                      * Height cm
* @apiParam {Number} bp_systolic_mmgh               * Bp_systolic mmgh
* @apiParam {Number} bp_diatolic_mmgh               * Bp_diatolic mmgh
* @apiParam {Number} pulse_rate                     * Pulse rate
* @apiParam {Number} temperature_f                  * Temperature f
* @apiParam {Number} temperature_c                  * Temperature c
* @apiParam {Number} temp_location                  * Temp location
* @apiParam {Number} oxygen_saturation_percentage   * Oxygen saturation %
* @apiParam {String} head_circumference_inch        * Head circumference inch
* @apiParam {Number} head_circumference_cm          * Head circumference cm
* @apiParam {String} waist_circumference_inch       * Waist circumference inch
* @apiParam {Number} waist_circumference_cm         * Waist circumference cm
* @apiParam {Number} bmi_kg_m2                      * Bmi kg/m2
* @apiParam {Number} bmi_status_type                * Bmi status type
*
* 
* @apiExample Example usage:
{
    "patient_id": "2",
    "voice_clip": "2",
    "voice_clip_name": "2",
    "image": "2",
    "image_name": "2",
    "data_title": "2",
    "data_description": "2",
    "weight_lbs": "2",
    "weight_kgs": "2",
    "height_inch": "5'10",
    "height_cm": "2",
    "bp_systolic_mmgh": "2",
    "bp_diatolic_mmgh": "2",
    "pulse_rate": "122",
    "temperature_f": "2",
    "temperature_c": "2",
    "temp_location": "Testtt",
    "oxygen_saturation_percentage": "2",
    "head_circumference_inch": "5'10",
    "head_circumference_cm": "2",
    "waist_circumference_inch": "5'10",
    "waist_circumference_cm": "2",
    "bmi_kg_m2": "2",
    "bmi_status_type": "2"
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