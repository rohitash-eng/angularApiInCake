/**
* @api {get} /users/updateProvidersProfile Update Provider Profile
* @apiVersion 0.0.1
* @apiName updateProvidersProfile
* @apiGroup Authentication
* @apiPermission Provider
*
* @apiDescription Update provider profile.
*
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
* 
* @apiParam {String} title                                      * Title of the User.
* @apiParam {String} fname                                      * First name of User .
* @apiParam {String} lname                                      * Last Name of User.
* @apiParam {String} photo                                      * Photo of the provider.
* @apiParam {String} ssn_no                                     * SSN Number of the provider.
* @apiParam {Date}   dob                                          * Date of Birth(mm-dd-yyyy) of the provider.
* @apiParam {String} gender                                     * Gender(Male,Female) of the provider.
* @apiParam {Boolean} terms_of_use                               * Terms of Use for the user.
* @apiParam {Array}  provider_license_and_insurances            * Provider License and Insurance Details
* @apiParam {Number}  provider_license_and_insurances.id            * Provider ID
* @apiParam {Number} provider_license_and_insurances.state_id   * State ID in which provider accepts license and insurance.
* @apiParam {String} provider_license_and_insurances.license_number         * License Number of provider.
* @apiParam {Number} provider_license_and_insurances.insurance_plan_type_id * Insurance Plan Type ID.
* @apiParam {Number} provider_license_and_insurances.insurance_plan_id      * Insurance Plan Id.
* @apiParam {Array}  provider_profile                           		* Provider Profile Details.
* @apiParam {Number} provider_profile.id                           		* Provider ID.
* @apiParam {Number} provider_profile.state_id                                   * State ID for Provider profile Details.
* @apiParam {String} provider_profile.city                                       * City of the provider.
* @apiParam {String} provider_profile.address1                                   * Address of the provider.
* @apiParam {String} provider_profile.address2                                   * Address of the provider.
* @apiParam {String} provider_profile.zip                                        * Zip code of the provider
* @apiParam {Number} provider_profile.home_phone                                 * Home phone number of the provider.
* @apiParam {Number} provider_profile.home_fax                                   * Home Fax Number of the provider.
* @apiParam {Number} provider_profile.office_phone                               * Office Phone Number of the provider.
* @apiParam {Number} provider_profile.office_fax                                 * Office Fax Number of the provider.
* @apiParam {String} provider_profile.bio                                        * Biodata of the provider.
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
*{
*   "title" : Mr.,
*   "fname" : Ravi,
*   "lname" : kumar,
*   "photo" : Abs.jpeg,
*   "ssn_no" : 111-11-1111,
*   "dob" : 04-07-1988,
*   "gender" : Male,
*   "terms_of_use" : 1,
*   "provider_license_and_insurances" : -{
*       "0" : -{
*           "id" : 63,
*           "state_id" : 1,
*           "license_number" : 123456,
*           "insurance_plan_type_id" : 2,
*           "insurance_plan_id" : 1
*       },
*       "1" : -{
*           "id" : 64,
*           "state_id" : 1,
*           "license_number" : 123456,
*           "insurance_plan_type_id" : 2,
*           "insurance_plan_id" : 1
*       },
*       "2" : -{
*           "id" : 65,
*           "state_id" : 2,
*           "license_number" : 123456,
*           "insurance_plan_type_id" : 2,
*           "insurance_plan_id" : 1
*       },
*       "3" : -{
*           "id" : 66,
*           "state_id" : 2,
*           "license_number" : 123456,
*           "insurance_plan_type_id" : 2,
*           "insurance_plan_id" : 1
*       }
*   },
*   "provider_profile" : -{
*       "id" : 8,
*       "state_id" : 1,
*       "city" : NYC,
*       "address1" : NYC-22,
*       "address2" : NYC-22,
*       "zip" : NYC112,
*       "home_phone" : 1234627892,
*       "home_fax" : 12346789221,
*       "office_phone" : 1234678922,
*       "office_fax" : 12346789254,
*       "bio" : Hellow how are you?,
*       "speciality_id" : 1,
*       "speciality_experience" : I am fine!,
*       "individual" : individual,
*       "organization_name" : ,
*       "npi_number" : ASDPK8786G,
*       "npi_number_expiration" : 04-07-1988,
*       "dea_number" : ASDPK,
*       "dea_number_expiration" : 04-07-1988,
*       "contract" : legal_contract.jpg
*   }
*}
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

