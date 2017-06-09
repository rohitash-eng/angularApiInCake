/**
* @api {get} /users/UpdateProvidersProfileFromMobile Update Provider Profile From Mobile
* @apiVersion 0.0.1
* @apiName UpdateProvidersProfileFromMobile
* @apiGroup Authentication
* @apiPermission Provider
*
* @apiDescription Update provider profile from mobile.
*
* @apiHeader {String} TOKEN      * A token send by header as TOKEN
* 
* @apiParam {String} username                                   * Username of the User.
* @apiParam {String} title                                      * Title of the User.
* @apiParam {String} fname                                      * First name of User .
* @apiParam {String} lname                                      * Last Name of User.
* @apiParam {String} photo                                      * Photo of the provider.
* @apiParam {String} ssn_no                                     * SSN Number of the provider.
* @apiParam {Date}   dob                                        * Date of Birth(mm/dd/yyyy) of the provider.
* @apiParam {String} gender                                     * Gender(Male,Female) of the provider.
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
*
*
* @apiSuccess {Boolean} status true/false.
* @apiSuccess {String} message The request is OK.
* @apiSuccess {String} data None

* @apiExample Example usage:
*
*
{
  "title" : "Mr.",
  "fname" : "Ravi",
  "lname" : "kumar",
  "ssn_no" : "111-11-1111",
  "dob" : "04/07/1988",
  "gender" : "Male",
  "provider_profile" :{
      "id" : 8,
      "state_id" : 1,
      "city" : "NYC",
      "address1" : "NYC-22",
      "address2" : "NYC-22",
      "zip" : "NYC112",
      "home_phone" : "1234627892",
      "home_fax" : "12346789221",
      "office_phone" : "1234678922",
      "office_fax" : "12346789254",
      "bio" : "Hellow how are you?",
      "speciality_id" : 1,
      "speciality_experience" : "I am fine!",
      "individual" : "individual",
      "organization_name" : "fd"
  }
}
*

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
*       "organization_name" : 'asdf',
*   }
*}
*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success 
{
	"status": true,
	"message": "The request is OK",
	"data": {None}
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

