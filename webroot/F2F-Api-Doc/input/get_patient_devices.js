/**
 * @api {get} PatientDevices/getPatientDevices/:1 Get Patient Devices
 * @apiName getPatientDevices
 * @apiGroup Patient Devices
 *
 * @apiDescription Get Patient Devices
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
      "id": 16,
      "user_id": 37,
      "patient_id": 1,
      "device_id": 1,
      "device_title": "Fitbit1",
      "audio": "",
      "image": "",
      "device_access_token": "O:8:\"stdClass\":6:{s:12:\"access_token\";s:273:\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1M0RGNUoiLCJhdWQiOiIyMjdYWTciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNDgwOTc3NTY4LCJpYXQiOjE0ODA5NDg3Njh9.UwQh-RMbmgRmSHpyVOfuJjCC37RV31gqDJZLQCt_GgM\";s:10:\"expires_in\";i:28800;s:13:\"refresh_token\";s:64:\"6a2d5c533a8eb937e618d347fd3739bdfda5bf6c403f2863caf46e27b6c33271\";s:5:\"scope\";s:74:\"settings weight nutrition profile activity social sleep heartrate location\";s:10:\"token_type\";s:6:\"Bearer\";s:7:\"user_id\";s:6:\"53DF5J\";}",
      "status": "Active",
      "created": "2016-12-05T14:39:04+00:00",
      "modified": "2016-12-05T14:39:04+00:00"
    },
    {
      "id": 17,
      "user_id": 37,
      "patient_id": 1,
      "device_id": 1,
      "device_title": "Fitbit1",
      "audio": "",
      "image": "",
      "device_access_token": "O:8:\"stdClass\":6:{s:12:\"access_token\";s:273:\"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1M0RGNUoiLCJhdWQiOiIyMjdYWTciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNDgxMDMzNDY2LCJpYXQiOjE0ODEwMDQ2NjZ9.PEIxvpBDiJ-P9guJXVCbIxZWNdctmk-JxSx_-k2xlYI\";s:10:\"expires_in\";i:28800;s:13:\"refresh_token\";s:64:\"e5f209d2279929db3ac749ce68d9cfb4cbbe714e0178bf233320190022ebcee7\";s:5:\"scope\";s:74:\"profile settings heartrate activity location nutrition sleep social weight\";s:10:\"token_type\";s:6:\"Bearer\";s:7:\"user_id\";s:6:\"53DF5J\";}",
      "status": "Active",
      "created": "2016-12-06T06:09:58+00:00",
      "modified": "2016-12-06T06:09:58+00:00"
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