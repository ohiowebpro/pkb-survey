import React from 'react';
import 'survey-core/defaultV2.min.css';
import * as Survey from 'survey-react-ui';

//import { Survey } from 'survey-react-ui';
import { json } from '../surveys/surveyone';

const Mysurvey = () => {
    return (
        <Survey.Survey
            json={json}
        />
    )
}
export default Mysurvey;