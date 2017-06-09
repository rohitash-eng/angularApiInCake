/**
* @api {post} /users/signUp Provider Signup
* @apiVersion 0.0.1
* @apiName signup
* @apiGroup Authentication
* @apiPermission None
*
* @apiDescription Signup provider with Face2Face Health system.
* 
* @apiParam {String} title                                      * Title of the User.
* @apiParam {String} fname                                      * First name of User .
* @apiParam {String} lname                                      * Last Name of User.
* @apiParam {String} email                                      * Email Address of the user (Must be unique).
* @apiParam {String} username                                   * Username of the user (Must be unique).
* @apiParam {String} password                                   * Password.
* @apiParam {String} confirm_password                           * Confirm Password.
* @apiParam {File} photo                                      * Photo of the provider.
* @apiParam {String} ssn_no                                     * SSN Number of the provider.
* @apiParam {Date}   dob                                          * Date of Birth(mm-dd-yyyy) of the provider.
* @apiParam {String} gender                                     * Gender(Male,Female) of the provider.
* @apiParam {Boolean} terms_of_use                               * Terms of Use for the user.
* @apiParam {Array}  provider_license_and_insurances            * Provider License and Insurance Details
* @apiParam {Number} provider_license_and_insurances.state_id   * State ID in which provider accepts license and insurance.
* @apiParam {String} provider_license_and_insurances.license_number         * License Number of provider.
* @apiParam {String} provider_license_and_insurances.insurance_plan_id      * Insurance Plan Id.
* @apiParam {Array}  provider_profile                           		 * Provider Profile Details.
* @apiParam {Number} provider_profile.state_id                                   * State ID for Provider profile Details.
* @apiParam {Number} provider_profile.provider_type_id                           * provider_type_id will be for 5 silos.
* @apiParam {String} provider_profile.city                                       * City of the provider.
* @apiParam {String} provider_profile.address1                                   * Address of the provider.
* @apiParam {String} provider_profile.address2                                   * Address of the provider.
* @apiParam {String} provider_profile.zip                                        * Zip code of the provider
* @apiParam {Number} provider_profile.home_phone                                 * Home phone number of the provider.
* @apiParam {Number} provider_profile.home_fax                                   * Home Fax Number of the provider.
* @apiParam {Number} provider_profile.office_phone                               * Office Phone Number of the provider.
* @apiParam {Number} provider_profile.office_fax                                 * Office Fax Number of the provider.
* @apiParam {String} provider_profile.bio                                        * Biodata of the the provider.
* @apiParam {Number} provider_profile.speciality_id                              * Speciality ID of the provider.
* @apiParam {String} provider_profile.speciality_experience                      * Speciality Experience of the provider.
* @apiParam {Enum}   provider_profile.individual                                   * Provider's operation (Individual, Organization).
* @apiParam {String} provider_profile.organization_name                          * Organization Name of the provider.
* @apiParam {String} provider_profile.npi_number                                 * NPI Number of the provider.
* @apiParam {Date}   provider_profile.npi_number_expiration                        * NPI Number Expiration date(mm-dd-yyyy) of the provider.
* @apiParam {String} provider_profile.dea_number                                 * Dea Number of the provider.
* @apiParam {Date} provider_profile.dea_number_expiration                      * Dea Number Expiration date(mm-dd-yyyy) of the provider.
* @apiParam {String} provider_profile.contract                                   * Contract for the provider.
*
*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.

* @apiExample Example usage:
*
*
{
    "title": "Mr.",
    "fname": "Nikum",
    "lname": "Sir",
    "email": "nikum.kunj111@google.com",
    "username": "nikum.kunj111",
    "password": "Aa0!ravi",
    "confirm_password": "Aa0!ravi",
    "photo": "Abs.jpeg",
    "ssn_no": "111-11-1111",
    "dob": "04-07-1988",
    "gender": "Male",
    "terms_of_use": 1,
    "provider_license_and_insurances": [
        {
            "state_id": 1,
            "license_number": "123",
            "insurance_plan_id": "1"
        },
        {
            "state_id": 1,
            "license_number": "123",
            "insurance_plan_id": "1"
        },
        {
            "state_id": 2,
            "license_number": "123",
            "insurance_plan_id": "1"
        },
        {
            "state_id": 2,
            "license_number": "123",
            "insurance_plan_id": "1"
        }
    ],
    "provider_profile": {
        "state_id": 1,
        "city": "NYC",
        "address1": "NYC-2",
        "address2": "NYC-2",
        "zip": "NYC122",
        "home_phone": "1234567981",
        "home_fax": "12345679811",
        "office_phone": "1234567981",
        "office_fax": "12345679811",
        "bio": "Hellow how are you?",
        "provider_type_id": 1,
        "speciality_id": 1,
        "speciality_experience": "I am fine",
        "individual": "individual",
        "organization_name": "",
        "npi_number": "12345645",
        "npi_number_expiration": "08-30-2017",
        "dea_number": "12345645",
        "dea_number_expiration": "08-30-2017",
        "contract": "legal_contract.jpg"
    }
}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
	"status": true,
	"message": "The request is OK",
	"data": {none}
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

