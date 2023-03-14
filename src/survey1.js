

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
                    "html": "<p>Thank for visiting Greater Parkersburg!  We sincerely hope you enjoyed your visit with us and will return in the future. We would be very appreciative if you would take 5 minutes of your time to answer a few questions that will help us improve our visitor services. </p>"
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
                            "value": "Item 1",
                            "text": "A visit to see friends or family for leisure"
                        },
                        {
                            "value": "Item 2",
                            "text": "A holiday or short getaway"
                        },
                        {
                            "value": "Item 3",
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
                            "value": "Item 1",
                            "text": "Visited by myself"
                        },
                        {
                            "value": "Item 2",
                            "text": "Two"
                        },
                        {
                            "value": "Item 3",
                            "text": "Three"
                        },
                        {
                            "value": "Item 4",
                            "text": "Four"
                        },
                        {
                            "value": "Item 5",
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
                            "value": "Item 1",
                            "text": "One"
                        },
                        {
                            "value": "Item 2",
                            "text": "Two"
                        },
                        {
                            "value": "Item 3",
                            "text": "Three"
                        },
                        {
                            "value": "Item 4",
                            "text": "Four or more"
                        },
                        {
                            "value": "Item 5",
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
                            "value": "Item 1",
                            "text": "Arts & Entertainment"
                        },
                        {
                            "value": "Item 2",
                            "text": "Blennerhassett Island Historical State Park"
                        },
                        {
                            "value": "Item 3",
                            "text": "Discovery World on Market"
                        },
                        {
                            "value": "Item 4",
                            "text": "Fairs and Festivals"
                        },
                        {
                            "value": "Item 5",
                            "text": "Henderson Hall Plantation"
                        },
                        {
                            "value": "Item 6",
                            "text": "Mountwood Park"
                        },
                        {
                            "value": "Item 7",
                            "text": "North Bend State Park"
                        },
                        {
                            "value": "Item 8",
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
                            "value": "Item 1",
                            "text": "Recommended by family/relatives"
                        },
                        {
                            "value": "Item 2",
                            "text": "Have visited before"
                        },
                        {
                            "value": "Item 3",
                            "text": "Advertising in newspapers/magazines"
                        },
                        {
                            "value": "Item 4",
                            "text": "Advertising on a website"
                        },
                        {
                            "value": "Item 5",
                            "text": "Tourism brochure"
                        },
                        {
                            "value": "Item 6",
                            "text": "Interest in area history"
                        },
                        {
                            "value": "Item 7",
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
                            "value": "Item 1",
                            "text": "16-24"
                        },
                        {
                            "value": "Item 2",
                            "text": "25-34"
                        },
                        {
                            "value": "Item 3",
                            "text": "35-44"
                        },
                        {
                            "value": "Item 4",
                            "text": "45-54"
                        },
                        {
                            "value": "Item 5",
                            "text": "55-64"
                        },
                        {
                            "value": "Item 6",
                            "text": "65+"
                        }
                    ]
                }
            ]
        }
    ],
    "showTitle": false
};

