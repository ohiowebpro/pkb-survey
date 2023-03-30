import * as Survey from "survey-react";

class RecaptchaWidget {
    constructor() {
        this.name = "recaptcha";
    }

    isFit(question) {
        return question.name === "recaptcha";
    }

    afterRender(question, el) {
        const grecaptchaSiteKey = "YOUR_RECAPTCHA_SITE_KEY";
        const renderRecaptcha = () => {
            window.grecaptcha.render(el, {
                sitekey: grecaptchaSiteKey,
                callback: (token) => {
                    question.value = token;
                },
            });
        };

        if (window.grecaptcha && window.grecaptcha.render) {
            renderRecaptcha();
        } else {
            const script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
            script.async = true;
            script.defer = true;
            script.onload = () => {
                if (!window.grecaptcha || !window.grecaptcha.render) {
                    script.addEventListener("grecaptcha:ready", renderRecaptcha);
                } else {
                    renderRecaptcha();
                }
            };
            document.body.appendChild(script);
        }
    }


    waitForRecaptcha(onReady, timeout = 3000, interval = 100) {
        const startTime = new Date().getTime();
        const check = () => {
            if (window.grecaptcha && window.grecaptcha.render) {
                onReady();
            } else if (new Date().getTime() - startTime < timeout) {
                setTimeout(check, interval);
            }
        };
        check();
    }
    renderRecaptcha(question, el, siteKey) {
        this.waitForRecaptcha(() => {
            window.grecaptcha.render(el, {
                sitekey: siteKey,
                callback: (token) => {
                    question.value = token;
                },
            });
        });
    }

}

Survey.CustomWidgetCollection.Instance.addCustomWidget(new RecaptchaWidget());
