import { useCallback } from 'react';



import 'survey-core/defaultV2.min.css';
import './App.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import { surveyJson } from "./survey1";


function App() {
    const survey = new Model(surveyJson);

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
        // saveSurveyResults(
        //   "https://your-web-service.com/" + SURVEY_ID,
        //   sender.data
        // )
    }, []);

    survey.onComplete.add(alertResults);

    return <Survey model={survey} />;
}

export default App;
