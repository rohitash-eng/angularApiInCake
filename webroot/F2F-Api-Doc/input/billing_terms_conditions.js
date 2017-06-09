/**
* @api {get} /Pages/billing-terms-conditions Billing Terms & Conditions Page
* @apiVersion 0.0.1
* @apiName Billing Terms & Conditions Page
* @apiGroup Pages
*
* @apiDescription Billing Terms & Conditions Page.
*
* @apiExample Example usage:
* 
* /Pages/billing-terms-conditions

*
* @apiSuccess {String} status true.
* @apiSuccess {String} message The request is ok.
* @apiSuccess {Object} data Billing Terms & Conditions Page data.
* 
* @apiSuccessExample {json} Success-Response: 
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "page": {
      "title": "billing-terms-conditions",
      "description": "<h3>Billing</h3>\r\n<ul>\r\n<li>The user undertakes to make all due allowance for generally recognized principles for data protection and data security and to comply with all obligations in connection with data protection.</li>\r\n<li>The User hereby grants his consent to De Gruyter&rsquo;s use and storage of personal data disclosed by him either in the registration process or obtained from its server&rsquo;s protocol files within the De Gruyter website and for the purpose of communication of offers. All such data will be collected, processed and used in according with legal regulations, in particular in accordance with the provisions of the Federal German Data Protection Act and the German Telemedia Act (TMG) of which more information can be obtained by User from <a href=\"http://www.datenschutz.de/\" target=\"_blank\">www.datenschutz.de</a>. De Gruyter reserves the right to use these data for the purpose of giving the User information on new products and services and/or on changes and other news from our publishing operation. By sending us inquiries on our products and services, the User automatically grants his consent to use of his personal data in this form. Data thus collected will in no case be sold or otherwise transmitted to third parties without the User&rsquo;s prior consent.</li>\r\n<li>De Gruyter reserves the right to monitor a User&rsquo;s activities for the following reasons:</li>\r\n</ul>\r\n<p>- to fulfill its legal obligations, <br /> to ensure legal protection of other users,<br /> - to ensure compliance with these conditions for use,<br /> to defend and protect De Gruyter&rsquo;s own rights, <br /> - to repair any technical defects or problems affecting the Features.</p>\r\n<ul>\r\n<li>De Gruyter is entitled to communicate certain user data, which shall not allow the identification of the User, to third parties &ndash; including clients taking advertising space in its publications &ndash; for demographic purposes. De Gruyter shall also be entitled to use these data itself for statistical purposes and for identification of trends.</li>\r\n<li>De Gruyter attaches great importance to retaining the trust of its Users. Consequently, we wish to give Users the opportunity to question us at any time on our use of their personal data. Users wishing to ask questions on use of their personal data or having doubts on our compliance with data protection regulations, and also any user seeking deletion of his personal data can send his request at any time to the following address: <br /> Walter de Gruyter GmbH<br /> Genthiner Stra&szlig;e 13<br /> D-10785 Berlin, Germany<br /> Tel: +49 30 260 05-0<br /> Fax: +49 30 260 05-251<br /> E mail: service [ at ] degruyter.com</li>\r\n</ul>\r\n<p>For further information on data protection please refer to our general statement on data protection on our website.</p>",
      "image": null,
      "video_link": null,
      "page_category": {
        "id": 36
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


