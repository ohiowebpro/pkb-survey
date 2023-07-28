

export const json = {
    title: "Survey Questionnaire",
    logoHeight: "100px",
    logoPosition: "right",
    completedHtml: "<h3>Thank you for taking the time to complete this survey. We truly value the information you have provided.</h3><p><a href='https://www.greaterparkersburg.com/'>See the latest at GreaterParkersburg.com</a></p><h2 style='text-align:center;'>$50 Amazon Gift Card</h2><p>As a small token of our appreciation we would like to enter you in our giveaway for a $50 Amazon Gift Card. We will be giving away one $50 Amazon Gift Card every three months. All you need to do is provide your name and email address where indicated below. So enter now! You will receive an email confirmation of your participation.</p><p><i>Odds of winning depend upon the number of eligible entries received during the entry period. No purchase necessary</i></p><p style='text-align:center; font-size:1.2rem;'><a href='https://www.greaterparkersburg.com/gift-card-givaway/'>Enter to Win$50 Amazon Gift Card</a></p>",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "html",
                    name: "Intro",
                    html: "<h1>Thank for visiting Greater Parkersburg! </h1><p>We sincerely hope you enjoyed your visit with us and will return in the future. We would be very appreciative if you would take 5 minutes of your time to answer a few questions that will help us improve our visitor services. </p><div id='g-recaptcha'></div> <div class='form-group g-recaptcha' data-callback='verifyCaptcha' data-sitekey='6LfwWoYdAAAAAAgBDLAgtuR8QboDe5uTKjFJ7x1N'></div>"
                }
            ]
        },
        {
            name: "page2",
            elements: [
                {
                    type: "text",
                    name: "question1",
                    title: "Please provide your home zip code below.",
                    isRequired: true,
                    "validators": [{
                        "type": "regex",
                        "regex": "^\\d{5}$",
                        "text": "Your zipcode must be 5 numbers"
                    }]
                },
                {
                    type: "text",
                    name: "question9",
                    visible: false,
                    title: "Date",
                    titleLocation: "hidden"
                },
                {
                    type: "text",
                    name: "question10",
                    visible: false,
                    title: "Location",
                    titleLocation: "hidden"
                },
                {
                    type: "radiogroup",
                    name: "question2",
                    title: "Which of the following best describes your time in Parkersburg? ",
                    isRequired: true,
                    choices: [
                        "A visit to see friends or family for leisure",
                        "A holiday or short getaway",
                        "A business trip",
                        "I am from this area"
                    ],
                    showOtherItem: true
                }
            ]
        },
        {
            name: "page3",
            elements: [
                {
                    type: "radiogroup",
                    name: "question3",
                    title: "How many people were in your party? ",
                    isRequired: true,
                    choices: [
                        "Just me",
                        "Two",
                        "Three",
                        "Four",
                        "More than four"
                    ]
                }
            ]
        },
        {
            name: "page4",
            elements: [
                {
                    type: "boolean",
                    name: "question4",
                    title: "Is this your first time in Parkersburg? ",
                    isRequired: true
                },
                {
                    type: "radiogroup",
                    name: "question5",
                    title: "If you stayed overnight, how many nights did you stay? ",
                    isRequired: true,
                    choices: [
                        "One",
                        "Two",
                        "Three",
                        "Four or more",
                        "Did not stay overnight"
                    ]
                }
            ]
        },
        {
            name: "page5",
            elements: [
                {
                    type: "checkbox",
                    name: "question6",
                    title: "Did you come to Parkersburg to see a specific attraction, participate in an activity, or attend an event? If so, please check below all that apply to your most recent visit. ",
                    isRequired: true,
                    choices: [
                        "Arts & Entertainment",
                        "Blennerhassett Island Historical State Park",
                        "Discovery World on Market",
                        "Fairs and Festivals",
                        "Henderson Hall Plantation",
                        "Mountwood Park",
                        "North Bend State Park",
                        "Oil & Gas Museum"
                    ],
                    showNoneItem: true
                }
            ]
        },
        {
            name: "page6",
            elements: [
                {
                    type: "radiogroup",
                    name: "question7",
                    title: "Which of the following, if any, prompted you to visit Parkersburg",
                    isRequired: true,
                    choices: [
                        "Recommended by family/relatives",
                        "Have visited before",
                        "Advertising in newspapers/magazines",
                        "Advertising on a website",
                        "Tourism brochure",
                        "Interest in area history",
                        "Specific outdoor recreation activities",
                        "I am from this area"
                    ],
                    showNoneItem: true
                }
            ]
        },
        {
            name: "page7",
            elements: [
                {
                    type: "radiogroup",
                    name: "question8",
                    title: "What is your age? ",
                    isRequired: true,
                    choices: [
                        "18-24",
                        "25-34",
                        "35-44",
                        "45-54",
                        "55-64",
                        "65+"
                    ]
                }
            ]
        }
    ],
    showTitle: false
};

