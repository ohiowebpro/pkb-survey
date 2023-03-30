import React from "react";
import "survey-react/modern.css";
import * as Survey from "survey-react";
import 'survey-core/defaultV2.min.css';
import "./RecaptchaWidget";
import { json } from "../surveys/surveyone";

const Mysurvey = (prop) => {
    return (
        <Survey.Survey
            showCompletedPage={false}
            onComplete={(survey) => prop.showCompletedPage(survey.data)}
            model={new Survey.Model(json)}
        />
    );
};

export default Mysurvey;
