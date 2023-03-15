

export const surveyJson = {
    "title": "Survey Questionnaire",
    "logoHeight": "100px",
    "logoPosition": "right",
    "completedHtml": "<img src=\"https://www.greaterparkersburg.com/wp-content/uploads/2021/09/PKB_logo.svg\" alt=\"pkb logo\" style=\"width:300px;display:block; margin: 20px auto;\" />\n<h3>Thank you for taking the time to complete this survey. We truly value the information you have provided. </h3>",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "image",
                    "name": "image1",
                    "imageLink": "https://www.greaterparkersburg.com/wp-content/uploads/2021/09/PKB_logo.svg",
                    "contentMode": "image"
                },
                {
                    "type": "html",
                    "name": "Intro",
                    "html": "<h1>Thank for visiting Greater Parkersburg! </h1><p>We sincerely hope you enjoyed your visit with us and will return in the future. We would be very appreciative if you would take 5 minutes of your time to answer a few questions that will help us improve our visitor services. </p>"
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Please provide your home zip code below.",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "question2",
                    "title": "Which of the following best describes your trip to Parkersburg? ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "A visit to see friends or family for leisure",
                            "text": "A visit to see friends or family for leisure"
                        },
                        {
                            "value": "A holiday or short getaway",
                            "text": "A holiday or short getaway"
                        },
                        {
                            "value": "A business trip",
                            "text": "A business trip"
                        }
                    ],
                    "showOtherItem": true
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question3",
                    "title": "How many people were in your party? ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Visited by myself",
                            "text": "Visited by myself"
                        },
                        {
                            "value": "Two",
                            "text": "Two"
                        },
                        {
                            "value": "Three",
                            "text": "Three"
                        },
                        {
                            "value": "Four",
                            "text": "Four"
                        },
                        {
                            "value": "More than four",
                            "text": "More than four"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "boolean",
                    "name": "question4",
                    "title": "Was this your first visit to Parkersburg? ",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "question5",
                    "title": "How many nights did you stay? ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "One",
                            "text": "One"
                        },
                        {
                            "value": "Two",
                            "text": "Two"
                        },
                        {
                            "value": "Three",
                            "text": "Three"
                        },
                        {
                            "value": "Four or more",
                            "text": "Four or more"
                        },
                        {
                            "value": "Did not stay overnight",
                            "text": "Did not stay overnight"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question6",
                    "title": "Did you come to Parkersburg to see a specific attraction, participate in an activity, or attend an event? If so, please check below all that apply to your most recent visit. ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Arts & Entertainment",
                            "text": "Arts & Entertainment"
                        },
                        {
                            "value": "Blennerhassett Island Historical State Park",
                            "text": "Blennerhassett Island Historical State Park"
                        },
                        {
                            "value": "Discovery World on Market",
                            "text": "Discovery World on Market"
                        },
                        {
                            "value": "Fairs and Festivals",
                            "text": "Fairs and Festivals"
                        },
                        {
                            "value": "Henderson Hall Plantation",
                            "text": "Henderson Hall Plantation"
                        },
                        {
                            "value": "Mountwood Park",
                            "text": "Mountwood Park"
                        },
                        {
                            "value": "North Bend State Park",
                            "text": "North Bend State Park"
                        },
                        {
                            "value": "Oil & Gas Museum",
                            "text": "Oil & Gas Museum"
                        }
                    ],
                    "showNoneItem": true
                }
            ]
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question7",
                    "title": "Which of the following, if any, prompted you to visit Parkersburg",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Recommended by family/relatives",
                            "text": "Recommended by family/relatives"
                        },
                        {
                            "value": "Have visited before",
                            "text": "Have visited before"
                        },
                        {
                            "value": "Advertising in newspapers/magazines",
                            "text": "Advertising in newspapers/magazines"
                        },
                        {
                            "value": "Advertising on a website",
                            "text": "Advertising on a website"
                        },
                        {
                            "value": "Tourism brochure",
                            "text": "Tourism brochure"
                        },
                        {
                            "value": "Interest in area history",
                            "text": "Interest in area history"
                        },
                        {
                            "value": "Specific outdoor recreation activities",
                            "text": "Specific outdoor recreation activities"
                        }
                    ],
                    "showNoneItem": true
                }
            ]
        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "question8",
                    "title": "What is your age? ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "16-24",
                            "text": "16-24"
                        },
                        {
                            "value": "25-34",
                            "text": "25-34"
                        },
                        {
                            "value": "35-44",
                            "text": "35-44"
                        },
                        {
                            "value": "45-54",
                            "text": "45-54"
                        },
                        {
                            "value": "55-64",
                            "text": "55-64"
                        },
                        {
                            "value": "65+",
                            "text": "65+"
                        }
                    ]
                }
            ]
        }
    ],
    "showTitle": false
};

