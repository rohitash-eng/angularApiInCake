/**
* @api {get} /Menus/ Get main menu
 * @apiName Menus
 * @apiGroup Pages
*
* @apiDescription Get main menus.
* 
 *
 * @apiSuccess {String} status true.
 * @apiSuccess {String} message The request is OK.
 * @apiSuccess {Object} data None.
*

*
* @apiSuccessExample Success-Response-Example:
*     HTTP/1.1 success
{
  "status": true,
  "message": "The request is OK",
  "data": {
    "menus": [
      {
        "title": "Patients",
        "label": "Patients",
        "url": "patients",
        "param": "",
        "callback": "redirectToPage",
        "children": [
          {
            "title": "Patients home",
            "label": "Patients home",
            "url": "patients-home",
            "param": "main.landingPage.home",
            "callback": "redirectToPage"
          },
          {
            "title": "Where to Start",
            "label": "Where to Start",
            "url": "where-to-start",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "Signup",
            "label": "Signup",
            "url": "signup",
            "param": "main.patientSignUp",
            "callback": "redirectToPage"
          },
          {
            "title": "General Health",
            "label": "General Health",
            "url": "general-health",
            "param": "siloPage",
            "callback": "commonFunc",
            "children": [
              {
                "title": "Virtual Health",
                "label": "Virtual Health",
                "url": "virtual-health",
                "param": "patientMain.conOnDemandNewIssue",
                "callback": "consumerLinks"
              },
              {
                "title": "On-Demand Appointment",
                "label": "On-Demand Appointment",
                "url": "on-demand-appointment",
                "param": "main.conOnDemandNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Scheduled Appointment",
                "label": "Scheduled Appointment",
                "url": "scheduled-appointment",
                "param": "main.conScheduledNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Concierge Services",
                "label": "Concierge Services",
                "url": "concierge-services",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "E-Learning",
                "label": "E-Learning",
                "url": "e-learning",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "Communities",
                "label": "Communities",
                "url": "communities",
                "param": "communityPage",
                "callback": "commonFunc"
              }
            ]
          },
          {
            "title": "Speech, Language & Motor Development",
            "label": "Speech, Language & Motor Development",
            "url": "speech-language-motor-development",
            "param": "siloPage",
            "callback": "commonFunc",
            "children": [
              {
                "title": "Virtual Health",
                "label": "Virtual Health",
                "url": "virtual-health",
                "param": "patientMain.conOnDemandNewIssue",
                "callback": "consumerLinks"
              },
              {
                "title": "On-Demand Appointment",
                "label": "On-Demand Appointment",
                "url": "on-demand-appointment",
                "param": "main.conOnDemandNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Scheduled Appointment",
                "label": "Scheduled Appointment",
                "url": "scheduled-appointment",
                "param": "main.conScheduledNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Concierge Services",
                "label": "Concierge Services",
                "url": "concierge-services",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "E-Learning",
                "label": "E-Learning",
                "url": "e-learning",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "Communities",
                "label": "Communities",
                "url": "communities",
                "param": "communityPage",
                "callback": "commonFunc"
              }
            ]
          },
          {
            "title": "Emotional & Mental Health",
            "label": "Emotional & Mental Health",
            "url": "emotional-mental-health",
            "param": "siloPage",
            "callback": "commonFunc",
            "children": [
              {
                "title": "Virtual Health",
                "label": "Virtual Health",
                "url": "virtual-health",
                "param": "patientMain.conOnDemandNewIssue",
                "callback": "consumerLinks"
              },
              {
                "title": "On-Demand Appointment",
                "label": "On-Demand Appointment",
                "url": "on-demand-appointment",
                "param": "main.conOnDemandNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Scheduled Appointment",
                "label": "Scheduled Appointment",
                "url": "scheduled-appointment",
                "param": "main.conScheduledNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Concierge Services",
                "label": "Concierge Services",
                "url": "concierge-services",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "E-Learning",
                "label": "E-Learning",
                "url": "e-learning",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "Communities",
                "label": "Communities",
                "url": "communities",
                "param": "communityPage",
                "callback": "commonFunc"
              }
            ]
          },
          {
            "title": "Mind, Body & Nutrition",
            "label": "Mind, Body & Nutrition",
            "url": "mind-body-nutrition",
            "param": "siloPage",
            "callback": "commonFunc",
            "children": [
              {
                "title": "Virtual Health",
                "label": "Virtual Health",
                "url": "virtual-health",
                "param": "patientMain.conOnDemandNewIssue",
                "callback": "consumerLinks"
              },
              {
                "title": "On-Demand Appointment",
                "label": "On-Demand Appointment",
                "url": "on-demand-appointment",
                "param": "main.conOnDemandNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Scheduled Appointment",
                "label": "Scheduled Appointment",
                "url": "scheduled-appointment",
                "param": "main.conScheduledNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Concierge Services",
                "label": "Concierge Services",
                "url": "concierge-services",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "E-Learning",
                "label": "E-Learning",
                "url": "e-learning",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "Communities",
                "label": "Communities",
                "url": "communities",
                "param": "communityPage",
                "callback": "commonFunc"
              }
            ]
          },
          {
            "title": "Education, Advocacy, Tutoring & Coaching",
            "label": "Education, Advocacy, Tutoring & Coaching",
            "url": "education-advocacy-tutoring-coaching",
            "param": "siloPage",
            "callback": "commonFunc",
            "children": [
              {
                "title": "Virtual Health",
                "label": "Virtual Health",
                "url": "virtual-health",
                "param": "patientMain.conOnDemandNewIssue",
                "callback": "consumerLinks"
              },
              {
                "title": "On-Demand Appointment",
                "label": "On-Demand Appointment",
                "url": "on-demand-appointment",
                "param": "main.conOnDemandNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Scheduled Appointment",
                "label": "Scheduled Appointment",
                "url": "scheduled-appointment",
                "param": "main.conScheduledNewUser",
                "callback": "redirectToPage"
              },
              {
                "title": "Concierge Services",
                "label": "Concierge Services",
                "url": "concierge-services",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "E-Learning",
                "label": "E-Learning",
                "url": "e-learning",
                "param": "",
                "callback": "redirectToPage"
              },
              {
                "title": "Communities",
                "label": "Communities",
                "url": "communities",
                "param": "communityPage",
                "callback": "commonFunc"
              }
            ]
          },
          {
            "title": "Virtual Health",
            "label": "Virtual Health",
            "url": "virtual-health",
            "param": "patientMain.conOnDemandNewIssue",
            "callback": "consumerLinks"
          },
          {
            "title": "E-Learning",
            "label": "E-Learning",
            "url": "e-learning",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "Communities",
            "label": "Communities",
            "url": "communities",
            "param": "main.community",
            "callback": "redirectToPage"
          }
        ]
      },
      {
        "title": "Providers",
        "label": "Providers",
        "url": "providers",
        "param": "",
        "callback": "redirectToPage",
        "children": [
          {
            "title": "Home",
            "label": "Home",
            "url": "home",
            "param": "main.landingPage.providerhome",
            "callback": "redirectToPage"
          },
          {
            "title": "INDIVIDUAL PROVIDERS",
            "label": "INDIVIDUAL PROVIDERS",
            "url": "individual-providers",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "Benefits",
            "label": "Benefits",
            "url": "benefits",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "Technology",
            "label": "Technology",
            "url": "technology",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "Training",
            "label": "Training",
            "url": "training",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "PRACTICE GROUPs",
            "label": "PRACTICE GROUPs",
            "url": "practice-groups",
            "param": "",
            "callback": "redirectToPage"
          },
          {
            "title": "Technology",
            "label": "Technology",
            "url": "technology",
            "param": "",
            "callback": "redirectToPage"
          }
        ]
      },
      {
        "title": "BUSINESS",
        "label": "BUSINESS",
        "url": "business",
        "param": "main.businessHomePage",
        "callback": "redirectToPage"
      }
    ],
    "provider": [
      {
        "id": 1,
        "title": "General Health",
        "menu_title": "general health",
        "color": "#6aa6ac",
        "order": 1,
        "slug": "general-health"
      },
      {
        "id": 2,
        "title": "Speech, Language & Motor Development",
        "menu_title": "development",
        "color": "#63a5d4",
        "order": 2,
        "slug": "speech-language-motor-development"
      },
      {
        "id": 3,
        "title": "Emotional & Mental Health",
        "menu_title": "mental health",
        "color": "#b186ba",
        "order": 3,
        "slug": "emotional-mental-health"
      },
      {
        "id": 4,
        "title": "Mind, Body & Nutrition",
        "menu_title": "mind, body & nutrition",
        "color": "#ff7878",
        "order": 5,
        "slug": "mind-body-nutrition"
      },
      {
        "id": 5,
        "title": "Education, Advocacy, Tutoring & Coaching",
        "menu_title": "education & advocacy",
        "color": "#70d37c",
        "order": 4,
        "slug": "education-advocacy-tutoring-coaching"
      }
    ]
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

