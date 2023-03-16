import React from "react";
import Mysurvey from "./components/surveyDisplay/surveyone";
import './App.css';


import logo from './PKB_logo.svg';


//import { surveyJson } from "./survey1";
const surveyNumber = process.env.REACT_APP_SURVEYNUMBER;

function App() {
    return (
        <div className="App">
            <main>
                <img src={logo} className="logo" /><Mysurvey />
            </main>
        </div>
    )
}

export default App;

// console.log('SURVEYNUMBER: ' + surveyNumber);
// const alertResults = useCallback((sender) => {
//     const results = JSON.stringify(sender.data);
//     //sender.data
//     var formData = new FormData();
//     formData.append('SurveyId', surveyNumber);
//     formData.append('Json', results);
//     fetch('https://www.greaterparkersburg.com/wp-admin/admin-ajax.php?action=SurveyJS_SaveResult', {
//         method: 'POST',
//         body: formData // body data type must match "Content-Type" header
//
//     }).then(function() {
//         console.log("ok");
//     }).catch(function() {
//         alert("Error saving survey. Please try again later.");
//
//     });
//     //alert(results);
//     // saveSurveyResults(
//     //   "https://your-web-service.com/" + SURVEY_ID,
//     //   sender.data
//     // )
// }, []);
//
// survey.onComplete.add(alertResults);