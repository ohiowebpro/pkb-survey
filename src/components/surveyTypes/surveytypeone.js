import React from 'react';
import 'survey-core/defaultV2.min.css';
import * as Survey from 'survey-react';
import "./recaptcha";


//import { Survey } from 'survey-react-ui';
import { json } from '../surveys/surveyone';

const Mysurvey = (prop) => {
    return (
        <Survey.Survey
            showCompletedPage={false}
            onComplete={data=>prop.showCompletedPage(data.valuesHash)}
            json={json}
        />
    )
}
export default Mysurvey;