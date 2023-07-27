import React,{useState, useCallback} from 'react';
import Mysurvey from "../surveyTypes/surveytypeone";




const surveyNumber = process.env.REACT_APP_SURVEYNUMBER;

//const surveyLoc ='Test Survey';
const searchParams = new URLSearchParams(document.location.search);
let surveyLoc = searchParams.get('loc');
if (!surveyLoc) {
    surveyLoc ='Test Survey';
}
const Surveyone = () => {
    const [showPage, setShowPage] = useState(true);

    const onCompletePage = useCallback((data) => {



        let today = new Date().toLocaleString() + "";
        data.question9 =  today;
        data.question10 = surveyLoc;

        //console.log(data);
        const results = JSON.stringify(data);
        const formData = new FormData();
        formData.append('SurveyId', surveyNumber);
        formData.append('Json', results);

        const fetchURL = 'https://www.greaterparkersburg.com/wp-admin/admin-ajax.php?action=SurveyJS_SaveResult';
        //const fetchURL = 'https://dev.pcv788.build/wp-admin/admin-ajax.php?action=add_surveyjs_entry';


        fetch(fetchURL, {
            method: 'POST',
            body: formData // body data type must match "Content-Type" header

        }).then(function(response) {
            if(!response.ok) throw new Error(response.status);
            else  setShowPage(!showPage);
        }).catch(function() {
            alert("Error saving survey. Please try again later.");

        });







    },[showPage])
    const setFinalPage = ()=> {
        const text = '<div className="thankyou"><h3>Thank you for taking the time to complete this survey. We truly value the information you have provided.</h3><h2 style="text-align:center;">$50 Amazon Gift Card</h2><p>As a small token of our appreciation we would like to enter you in our giveaway for a $50 Amazon Gift Card. We will be giving away one $50 Amazon Gift Card every three months. All you need to do is provide your name and email address where indicated below. So enter now! You will receive an email confirmation of your participation.</p><p><i>Odds of winning depend upon the number of eligible entries received during the entry period. No purchase necessary</i></p><p style="text-align:center; font-size:1.2rem;"><a href="https://www.greaterparkersburg.com/gift-card-givaway/">Enter to Win$50 Amazon Gift Card</a></p></div>';

        return <div dangerouslySetInnerHTML={{ __html: text }} />;
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