import { useCallback } from 'react';


import logo from './PKB_logo.svg';
import 'survey-core/defaultV2.min.css';
import './App.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import { surveyJson } from "./survey1";


function App() {
    const survey = new Model(surveyJson);

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        //sender.data
        var formData = new FormData();
        formData.append('SurveyId', process.env.SURVEYNUMBER);
        formData.append('Json', results);
        fetch('https://www.greaterparkersburg.com/wp-admin/admin-ajax.php?action=SurveyJS_SaveResult', {
            method: 'POST',
            body: formData // body data type must match "Content-Type" header

        })
        //alert(results);
        // saveSurveyResults(
        //   "https://your-web-service.com/" + SURVEY_ID,
        //   sender.data
        // )
    }, []);

    survey.onComplete.add(alertResults);

    return <div><img src={logo} alt="Greater Parkersburg CVB Logo" class="logo" /><Survey model={survey} /></div>;
}

export default App;
