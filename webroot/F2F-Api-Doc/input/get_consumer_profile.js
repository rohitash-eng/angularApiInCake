/**
* @api {get} /users/getConsumerDetails Get Consumer Profile
* @apiName getConsumerDetails
* @apiGroup Consumer
* @apiPermission Consumer
*
* @apiDescription get consumer profile details.
* 
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
*
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "id": 213,
    "user_type_id": 2,
    "group_id": null,
    "title": "",
    "fname": "dhirendra",
    "mname": null,
    "lname": "singh",
    "community_username": null,
    "email": "dhirendra.singh@kiwitech.com",
    "username": "gau44rav123",
    "newsletter_subsciption_status": "Y",
    "photo": null,
    "photo_name": null,
    "ssn_no": "",
    "guid": null,
    "forgot_password_request_time": null,
    "dob": null,
    "gender": "",
    "terms_of_use": false,
    "activate_key": "f5d498a5-76db-415e-bfbb-2d13a2754531",
    "status": "Active",
    "stripe_customer_id": "cus_9INHHy8k4rkGxs",
    "stripe_card_id": "card_18zmWfFspN4AvLfbXi6k9dpw",
    "zoom_user_id": "1GG_qMJIRJ6VRdQAuPvzhw",
    "created": "2016-11-18T08:23:59+00:00",
    "modified": "2016-11-08T15:31:31+00:00",
    "consumer_billing_details": [
      {
        "id": 36,
        "user_id": 213,
        "address1": "rytrtyrty",
        "address2": "ertert",
        "city": "ertert",
        "state_id": 1,
        "zip_code": "12234",
        "primary_phone": null,
        "secondary_phone": null,
        "work_phone": null,
        "fax": null,
        "type": "B",
        "created": "2016-10-24T09:25:27+00:00",
        "modified": "2016-10-24T09:25:43+00:00",
        "state": {
          "name": "Alaska"
        }
      },
      {
        "id": 37,
        "user_id": 213,
        "address1": "rytrtyrty",
        "address2": "ertert",
        "city": "ertert",
        "state_id": 1,
        "zip_code": "12234",
        "primary_phone": null,
        "secondary_phone": null,
        "work_phone": null,
        "fax": null,
        "type": "P",
        "created": "2016-10-24T09:25:27+00:00",
        "modified": "2016-10-24T09:25:43+00:00",
        "state": {
          "name": "Alaska"
        }
      }
    ],
    "stripeCard": {
      "id": "card_18zmWfFspN4AvLfbXi6k9dpw",
      "object": "card",
      "address_city": "City",
      "address_country": null,
      "address_line1": "Address 1",
      "address_line1_check": "pass",
      "address_line2": "Address 2",
      "address_state": "American Samoa",
      "address_zip": "12345",
      "address_zip_check": "pass",
      "brand": "Visa",
      "country": "US",
      "customer": "cus_9INHHy8k4rkGxs",
      "cvc_check": "pass",
      "dynamic_last4": null,
      "exp_month": 4,
      "exp_year": 2022,
      "fingerprint": "XNDZ0OJ9pXiBdK3J",
      "funding": "credit",
      "last4": "4242",
      "metadata": [],
      "name": "test",
      "tokenization_method": null
    }
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

