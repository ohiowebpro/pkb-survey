import * as Survey from 'survey-react';

// ... rest of the code


class RecaptchaWidget {
    constructor(question, siteKey) {
        this.question = question;
        this.siteKey = siteKey;
        this.widgetId = null;
    }

    render(el) {
        if (this.widgetId === null) {
            this.widgetId = window.grecaptcha.render(el, {
                sitekey: this.siteKey,
                callback: () => {
                    this.question.value = true;
                },
                "expired-callback": () => {
                    this.question.value = null;
                },
            });
        } else {
            window.grecaptcha.reset(this.widgetId);
        }
    }
}

class Recaptcha {
    name = "recaptcha";
    widget = null;

    constructor(siteKey) {
        this.siteKey = siteKey;
    }

    isFit(question) {
        return question.getType() === "recaptcha";
    }

    activatedByChanged(activatedBy) {
        Survey.JsonObject.metaData.addClass(
            "recaptcha",
            [],
            null,
            "empty"
        );
    }

    afterRender(question, el) {
        if (!this.widget) {
            this.widget = new RecaptchaWidget(question, this.siteKey);
        }
        this.widget.render(el);
    }
}

Survey.CustomWidgetCollection.Instance.addCustomWidget(new Recaptcha("6LfwWoYdAAAAAAgBDLAgtuR8QboDe5uTKjFJ7x1N"), "type");


// Register the custom widget
new RecaptchaWidget();
