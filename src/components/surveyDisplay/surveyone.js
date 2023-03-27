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

        console.log(data);
        const results = JSON.stringify(data);
        const formData = new FormData();
        formData.append('SurveyId', surveyNumber);
        formData.append('Json', results);

        // const fetchURL = 'https://www.greaterparkersburg.com/wp-admin/admin-ajax.php?action=SurveyJS_SaveResult';
        const fetchURL = 'https://dev.pcv788.build/wp-admin/admin-ajax.php?action=add_surveyjs_entry';


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