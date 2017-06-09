/**
 * @api {put}users/changeUsernameAndEmail Change Username, Email and Community Username
 * @apiName changeUsernameAndEmail
 * @apiGroup Provider
 *
 * @apiDescription Change Username, Email and Community Username.
 * 
 * @apiHeader {String} TOKEN            * A token send by header as TOKEN
 * 
 * @apiParam {String} username              * Username
 * @apiParam {String} email                 * Email
 * @apiParam {String} community_username    * Community username
 *
 * 
 * @apiExample Example usage:
 {
	"email": "nikum.kunj27@kiwitech.com",
        "username": "nikum.kunj27",
        "community_username": "nikum.kunj11111"	
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