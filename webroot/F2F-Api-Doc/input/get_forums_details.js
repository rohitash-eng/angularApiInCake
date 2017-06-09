/**
* @api {get} /Forums/viewForum/42 View forum
* @apiName viewForum
* @apiGroup Forums
* @apiPermission Consumer
*
* @apiDescription View Forum and comments.
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
        "id": 1,
        "provider_type_id": 1,
        "title": "Fever",
        "description": "Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum Lorem lipsum ",
        "topicCreated": "2016-12-23T11:03:28+00:00",
        "commentsCount": 6,
        "UserInfo": {
            "fname": "Ashutosh",
            "mname": null,
            "lname": "Agrawal",
            "community_username": null,
            "photo": null
        },
        "provider_type": {
            "icon_image": "https://face2face-dev.s3.amazonaws.com/page/17980426_caduceus_red_circle_glossy_web_icon_on_white_background_stock_photo_20161130141338.jpg"
        },
        "Comments": {
            "1": {
                "id": 1,
                "forum_id": 1,
                "parent": 0,
                "description": "Testt",
                "user_id": 280,
                "status": "Active",
                "created": "2016-12-23T14:25:36+00:00",
                "modified": "2016-12-23T14:25:36+00:00",
                "user": {
                    "id": 280,
                    "fname": "Ashutosh",
                    "lname": "Agrawal",
                    "community_username": null,
                    "consumer_billing_details": [
                        {
                            "city": "City",
                            "user_id": 280,
                            "state": {
                                "abbrev": "AK"
                            }
                        }
                    ]
                },
                "child": [
                    {
                        "id": 5,
                        "forum_id": 1,
                        "parent": 1,
                        "description": "Testt",
                        "user_id": 280,
                        "status": "Active",
                        "created": "2016-12-23T15:08:15+00:00",
                        "modified": "2016-12-23T15:08:15+00:00",
                        "user": {
                            "id": 280,
                            "fname": "Ashutosh",
                            "lname": "Agrawal",
                            "community_username": null,
                            "consumer_billing_details": [
                                {
                                    "city": "City",
                                    "user_id": 280,
                                    "state": {
                                        "abbrev": "AK"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "id": 6,
                        "forum_id": 1,
                        "parent": 1,
                        "description": "Testt",
                        "user_id": 280,
                        "status": "Active",
                        "created": "2016-12-23T15:08:20+00:00",
                        "modified": "2016-12-23T15:08:20+00:00",
                        "user": {
                            "id": 280,
                            "fname": "Ashutosh",
                            "lname": "Agrawal",
                            "community_username": null,
                            "consumer_billing_details": [
                                {
                                    "city": "City",
                                    "user_id": 280,
                                    "state": {
                                        "abbrev": "AK"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2": {
                "id": 2,
                "forum_id": 1,
                "parent": 0,
                "description": "Testttt",
                "user_id": 280,
                "status": "Active",
                "created": "2016-12-23T14:25:45+00:00",
                "modified": "2016-12-23T14:25:45+00:00",
                "user": {
                    "id": 280,
                    "fname": "Ashutosh",
                    "lname": "Agrawal",
                    "community_username": null,
                    "consumer_billing_details": [
                        {
                            "city": "City",
                            "user_id": 280,
                            "state": {
                                "abbrev": "AK"
                            }
                        }
                    ]
                }
            },
            "3": {
                "id": 3,
                "forum_id": 1,
                "parent": 0,
                "description": "Testttt Test",
                "user_id": 280,
                "status": "Active",
                "created": "2016-12-23T14:25:51+00:00",
                "modified": "2016-12-23T14:25:51+00:00",
                "user": {
                    "id": 280,
                    "fname": "Ashutosh",
                    "lname": "Agrawal",
                    "community_username": null,
                    "consumer_billing_details": [
                        {
                            "city": "City",
                            "user_id": 280,
                            "state": {
                                "abbrev": "AK"
                            }
                        }
                    ]
                }
            },
            "4": {
                "id": 4,
                "forum_id": 1,
                "parent": 0,
                "description": "Testttt Test idiot",
                "user_id": 280,
                "status": "Active",
                "created": "2016-12-23T14:25:57+00:00",
                "modified": "2016-12-23T14:25:57+00:00",
                "user": {
                    "id": 280,
                    "fname": "Ashutosh",
                    "lname": "Agrawal",
                    "community_username": null,
                    "consumer_billing_details": [
                        {
                            "city": "City",
                            "user_id": 280,
                            "state": {
                                "abbrev": "AK"
                            }
                        }
                    ]
                }
            }
        }
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

