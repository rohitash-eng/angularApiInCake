/**
 * @api {get} Immunizations/getImmunization:2 Get Immunizations
 * @apiName Get Immunizations
 * @apiGroup Immunizations And Vitals
 *
 * @apiDescription Get Immunizations Details Using Id.
 * 
 * @apiHeader {String} TOKEN      * A token send by header as TOKEN
 *
 * @apiParam {Number} /:2    * Immunization id requried field in url query string
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
    "patient_id": 22,
    "tetanus_diphteria_dose1": "1998-02-02T00:00:00+00:00",
    "immunization_manufacturer": "Tetestssss",
    "immunization_lot_number": "TEsssst",
    "title_of_immunization_admin": "Tesssst",
    "note": " Yes tst ata  ssssasfas",
    "date_immunization_statement_given": "Test",
    "date_of_vis_statement": "1998-02-02T00:00:00+00:00",
    "immunization_after_birthday": "1998-02-02T00:00:00+00:00",
    "MMR_dose1": "1998-02-02T00:00:00+00:00",
    "MMR_dose2": "1998-02-02T00:00:00+00:00",
    "status": "Active",
    "created": "2016-11-09T12:48:02+00:00",
    "modified": "2016-11-09T12:48:45+00:00"
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