/**
 * @api {put} Immunizations/edit:1 Edit Immunizations
 * @apiName Edit Immunizations
 * @apiGroup Immunizations And Vitals
 *
 * @apiDescription Edit Immunizations of Patient.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {Date} patient_id                          * Patient id
 * @apiParam {Date} immunization_type_id                * Immunization type id
 * @apiParam {Date} immunized_after_birthday            * Immunized after birthday
 * @apiParam {Date} dose1                               * dose1
 * @apiParam {Date} dose2                               * dose2
 * @apiParam {String} immunization_manufacturer         * Immunization manufacturer
 * @apiParam {String} immunization_lot_number           * Immunization lot number
 * @apiParam {String} title_of_immunization_admin       * Title of immunization admin
 * @apiParam {String} note                              * Note
 * @apiParam {Date} date_immunization_statement_given   * Date immunization statement given
 * @apiParam {Date}   date_of_vis_statement             * Date of VIS statement
 * @apiParam {Array}  immunization_documents            * Immunization documents
 * @apiParam {String}   document_url                    * Document url
 * @apiParam {String}   document_name                   * Document name
 * 
 * @apiExample Example usage:
 {
    "patient_id": "1",
    "immunization_type_id": "1",
    "immunized_after_birthday": "15",
    "dose1": "1998-02-02 00:00:00",
    "dose2": "1998-02-02 00:00:00"
    "immunization_manufacturer": "Tetest",
    "immunization_lot_number": "120",
    "title_of_immunization_admin": "Test",
    "note": " Yes tst ata  asfas",
    "date_immunization_statement_given": "1998-02-02 00:00:00",
    "date_of_vis_statement": "1998-02-02 00:00:00",
    "immunization_documents": [
        {
            "document_url": "https://face2face-dev.s3.amazonaws.com/consentPdf/consent-form-Ravi%20kumar-Saini-2016-11-22%2007%3A56%3A31.pdf",
            "document_name": "test.jpeg"
        },
        {
            "document_url": "https://face2face-dev.s3.amazonaws.com/consentPdf/consent-form-Ravi%20kumar-Saini-2016-11-22%2007%3A56%3A31.pdf",
            "document_name": "test.jpeg"
        }
    ]
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