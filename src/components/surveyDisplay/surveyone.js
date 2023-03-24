import React,{useState, useCallback} from 'react';
import Mysurvey from "../surveyTypes/surveytypeone";

const surveyLoc ='Test Survey';


const surveyNumber = process.env.REACT_APP_SURVEYNUMBER;
const Surveyone = () => {
    const [showPage, setShowPage] = useState(true);
    const onCompletePage = useCallback((data) => {

        console.log(data);

        if (data.captchaValidation) {
            let today = new Date().toLocaleString() + "";
            data.question9 =  today;
            data.question10 = surveyLoc;

            console.log(data);
            const results = JSON.stringify(data);
            const formData = new FormData();
            formData.append('SurveyId', surveyNumber);
            formData.append('Json', results);
            fetch('https://www.greaterparkersburg.com/wp-admin/admin-ajax.php?action=SurveyJS_SaveResult', {
                method: 'POST',
                body: formData // body data type must match "Content-Type" header

            }).then(function(response) {
                if(!response.ok) throw new Error(response.status);
                else  setShowPage(!showPage);
            }).catch(function() {
                alert("Error saving survey. Please try again later.");

            });
        } else {

            // reCAPTCHA validation failed, show an error message or handle it accordingly
            alert("Please complete the reCAPTCHA validation before submitting the form.");
        }





    },[showPage])
    const setFinalPage = ()=> {
        return(
            <div className="thankyou">
                <h3>Thank you for taking the time to complete this survey. We truly value the information you have provided.</h3><p><a href='https://www.greaterparkersburg.com/'>See the latest at GreaterParkersburg.com</a></p>
            </div>
        )
    }
    return (
        <div >
            {
                showPage?
                <Mysurvey showCompletedPage={data=>onCompletePage(data)}/>:
                setFinalPage()
            }
        </div>
    )
}

export default Surveyone;