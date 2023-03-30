import React, { useState, useEffect, useCallback } from 'react';
import Mysurvey from "../surveyTypes/surveytypeone";

const surveyNumber = process.env.REACT_APP_SURVEYNUMBER;
const searchParams = new URLSearchParams(document.location.search);
let surveyLoc = searchParams.get('loc');
if (!surveyLoc) {
    surveyLoc = 'Test Survey';
}

const grecaptchaSiteKey = 'YOUR_RECAPTCHA_SITE_KEY';

const Surveyone = () => {
    const [showPage, setShowPage] = useState(true);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    useEffect(() => {
        const loadRecaptcha = () => {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                window.grecaptcha.render('recaptcha-container', {
                    sitekey: grecaptchaSiteKey,
                    callback: (token) => setRecaptchaToken(token),
                });
            };
            document.body.appendChild(script);
        };

        if (!window.grecaptcha) {
            loadRecaptcha();
        } else {
            window.grecaptcha.reset();
        }
    }, [showPage]);

    const onCompletePage = useCallback((data) => {
        if (!recaptchaToken) {
            alert("Please complete the reCAPTCHA challenge.");
            return;
        }

        let today = new Date().toLocaleString() + "";
        data.question9 = today;
        data.question10 = surveyLoc;
        data.recaptchaToken = recaptchaToken;

        console.log(data);
        const results = JSON.stringify(data);
        const formData = new FormData();
        formData.append('SurveyId', surveyNumber);
        formData.append('Json', results);

        //const fetchURL = 'https://www.greaterparkersburg.com/wp-admin/admin-ajax.php?action=add_surveyjs_entry';
        const fetchURL = 'https://dev.pcv788.build/wp-admin/admin-ajax.php?action=add_surveyjs_entry';

        fetch(fetchURL, {
            method: 'POST',
            body: formData
        }).then(function(response) {
            if(!response.ok) throw new Error(response.status);
            else  setShowPage(!showPage);
        }).catch(function() {
            alert("Error saving survey. Please try again later.");
        });
    }, [showPage, recaptchaToken])

    const setFinalPage = () => {
        return (
            <div className="thankyou">
                <h3>Thank you for taking the time to complete this survey. We truly value the information you have provided.</h3><p><a href='https://www.greaterparkersburg.com/'>See the latest at GreaterParkersburg.com</a></p>
            </div>
        )
    }

    return (
        <div>
            {

                showPage?
                <Mysurvey showCompletedPage={data=>onCompletePage(data)}/>:
                setFinalPage()
            }
        </div>
    )
}

export default Surveyone;