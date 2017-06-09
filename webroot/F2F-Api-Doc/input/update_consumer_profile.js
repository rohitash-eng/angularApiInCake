/**
* @api {post} /users/updateConsumerProfile Update Consumer Profile
* @apiName updateConsumerProfile
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription Update consumer profile.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
* @apiParam {String} community_username    * Consumer community username required field in body.
* @apiParam {String} title    * Consumer Suffix optional field in body.
* @apiParam {String} fname    * Consumer first name required field in body.
* @apiParam {String} mname    * Consumer middle name optional field in body.
* @apiParam {String} lname    * Consumer last name required field in body.
* @apiParam {String} email    * Consumer email required field in body.
* @apiParam {String} stripe_card_id    * Consumer card optional field in body.
* @apiParam {String} type    * Consumer payment failed type optional field in body(consultation|plan).
* @apiParam {Array}  consumer_billing_details * Consumer Billing Detail.
* @apiParam {String} consumer_billing_details.id    * Consumer delivery id required if already save field in body.
* @apiParam {String} consumer_billing_details.address1    * Consumer delivery first address required field in body.
* @apiParam {String} consumer_billing_details.address2   * Consumer delivery second address required field in body.
* @apiParam {String} consumer_billing_details.city    * Consumer delivery city required field in body.
* @apiParam {String} consumer_billing_details.state_id    * Consumer delivery state id required field in body.
* @apiParam {String} consumer_billing_details.zip_code    * Consumer delivery zip code required field in body.
* @apiParam {String} consumer_billing_details.primary_phone   * Consumer delivery primary phone number required field in body.
* @apiParam {String} consumer_billing_details.secondary_phone   * Consumer delivery secondary phone number required field in body.
* @apiParam {String} consumer_billing_details.work_phone   * Consumer delivery work phone number required field in body.
* @apiParam {String} consumer_billing_details.fax   * Consumer delivery fax number required field in body.
* @apiParam {String} consumer_billing_details.type   * Consumer address type required field in body(P|B).
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {Object} data Consumer Object contain details about consumer profile.

* @apiExample Example usage:
*
*
*{
*"community_username":"singha",
*"title": "Mr.",
*"fname": "dhirendra",
*"mname": "kumar",
*"lname":"singh",
*"email":"singh@gmail.com",
*"stripe_card_id":"card_18zmWfFspN4AvLfbXi6k9dpw",
*"type":"consultation|plan",
*"consumer_billing_details":{
*	"0":{
*		"id":"1",
*		"address1":"sssss",
*		"address2":"Dhiru",
*		"city":"alld",
*		"state_id":"1",
*		"zip_code":"125535",
*		"primary_phone":"2324253455",
*		"secondary_phone":"2324253455",
*		"work_phone":"2324253455",
*		"fax":"23242534455",
*		"type":"P"
*	}
*}
*}
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "community_username": "singh",
    "title": "",
    "fname": "dhirendra",
    "mname": "",
    "lname": "singh",
    "email": "singh@gmail.com",
    "stripe_card_id": "card_18zmWfFspN4AvLfbXi6k9dpw",
    "consumer_billing_details": [
      {
        "id": "1",
        "address1": "Agara3333",
        "address2": "asdf",
        "city": "alld",
        "state_id": "1",
        "zip_code": "125535",
        "primary_phone": "2324253455",
        "secondary_phone": "2324253455",
        "work_phone": "2324253455",
        "fax": "23242534455",
        "type": "P"
      }
    ]
  }
}
 *
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

