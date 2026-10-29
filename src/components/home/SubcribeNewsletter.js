import React from "react";

import Translate, { translate } from "@docusaurus/Translate";
import cx from "classnames";
import styles from "../homeStyles.module.css";
import Turnstile from "../Turnstile";

const NEWSLETTER_API = "https://newsletter.gladysassistant.com/api/v1/subscribe";
// Public site key of the Turnstile widget of the newsletter (Cloudflare dashboard > Turnstile).
const TURNSTILE_SITE_KEY = "REPLACE_WITH_TURNSTILE_SITE_KEY";

function validateEmail(email) {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
  return re.test(email);
}

function SubcribeNewsletter({ lang }) {
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [status, setStatus] = React.useState("initial");
  // The captcha is only loaded once the visitor starts filling the form.
  const [showCaptcha, setShowCaptcha] = React.useState(false);
  const [turnstileToken, setTurnstileToken] = React.useState("");
  const [turnstileKey, setTurnstileKey] = React.useState(0);
  // A Turnstile token is single use: a second click while a request is pending would fail the captcha.
  const pending = React.useRef(false);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileKey((k) => k + 1); // remounts the widget: a token is single use
  };

  async function subscribe(e) {
    e.preventDefault();
    if (pending.current) {
      return;
    }
    setShowCaptcha(true);

    if (!validateEmail(email)) {
      setStatus("failed");
      return;
    }
    if (!turnstileToken) {
      setStatus("captcha");
      return;
    }

    pending.current = true;
    try {
      setStatus("waiting");
      const res = await fetch(NEWSLETTER_API, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstname,
          // The newsletter is only written in French and English.
          language: lang === "fr" ? "fr" : "en",
          turnstile_token: turnstileToken,
        }),
      });
      resetTurnstile();
      if (res.status === 403) {
        setStatus("captcha");
        return;
      }
      if (res.status === 429) {
        setStatus("rate_limited");
        return;
      }
      if (!res.ok) {
        setStatus("failed");
        return;
      }
      setEmail("");
      setFirstname("");
      setStatus("success");
    } catch (e) {
      resetTurnstile();
      setStatus("failed");
    } finally {
      pending.current = false;
    }
  }

  return (
    <div className="row">
      <div className="col col--8">
        <h2>
          <Translate
            id="subscribeNewsletter.title"
            description="Subscribe newsletter banner title"
          >
            Subscribe to the Gladys Assistant newsletter
          </Translate>
        </h2>
        <Translate
          id="subscribeNewsletter.text"
          description="Subscribe newsletter banner text"
        >
          A few emails per month about new releases and project news. Sent by
          Pierre-Gilles Leymarie, founder of the project. Unsubscribe anytime 🙂
        </Translate>
      </div>
      <div className={cx("col col--4", styles.newsletterSectionInputCol)}>
        <form onSubmit={subscribe}>
          {status === "failed" && (
            <div
              class="alert alert--danger"
              role="alert"
              style={{ marginBottom: "10px" }}
            >
              <button
                aria-label="Close"
                class="close"
                type="button"
                onClick={() => setStatus("initial")}
              >
                <span aria-hidden="true">×</span>
              </button>
              <Translate
                id="subscribeNewsletter.error"
                description="Subscribe newsletter banner error"
              >
                An error occured, are you sure your email is right? If yes,
                please retry.
              </Translate>
            </div>
          )}
          {status === "captcha" && (
            <div
              class="alert alert--warning"
              role="alert"
              style={{ marginBottom: "10px" }}
            >
              <Translate
                id="subscribeNewsletter.captcha"
                description="Subscribe newsletter banner captcha error"
              >
                Please complete the verification below, then retry.
              </Translate>
            </div>
          )}
          {status === "rate_limited" && (
            <div
              class="alert alert--warning"
              role="alert"
              style={{ marginBottom: "10px" }}
            >
              <Translate
                id="subscribeNewsletter.rateLimited"
                description="Subscribe newsletter banner rate limit error"
              >
                Too many attempts, please retry in a minute.
              </Translate>
            </div>
          )}
          {status === "success" && (
            <div
              class="alert alert--success"
              role="status"
              style={{ marginBottom: "10px" }}
            >
              <Translate
                id="subscribeNewsletter.success"
                description="Subscribe newsletter banner success message"
              >
                Almost done! Check your inbox and click the link in the email
                we just sent you to confirm your subscription.
              </Translate>
            </div>
          )}
          <div class="form-group">
            <input
              type="email"
              style={{
                width: "100%",
                lineHeight: "1.5",
                borderRadius: "5px",
                padding: "8px",
              }}
              value={email}
              onFocus={() => setShowCaptcha(true)}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={translate({
                id: "subscribeNewsletter.emailPlaceholder",
                message: "Email",
                description: "Subscribe newsletter email placeholder",
              })}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              style={{
                width: "100%",
                lineHeight: "1.5",
                borderRadius: "5px",
                padding: "8px",
                marginTop: "10px",
              }}
              value={firstname}
              onFocus={() => setShowCaptcha(true)}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder={translate({
                id: "subscribeNewsletter.firstnamePlaceholder",
                message: "First name",
                description: "Subscribe newsletter firstname placeholder",
              })}
            />
          </div>
          {showCaptcha && (
            <Turnstile
              key={turnstileKey}
              siteKey={TURNSTILE_SITE_KEY}
              language={lang}
              onToken={setTurnstileToken}
            />
          )}
          <button
            type="submit"
            disabled={status === "waiting"}
            style={{ marginTop: "10px" }}
            class="button button--primary button--block"
          >
            {status === "waiting" ? (
              <Translate
                id="subscribeNewsletter.subscribing"
                description="Subscribe newsletter banner subscribing button text"
              >
                Subscribing...
              </Translate>
            ) : (
              <Translate
                id="subscribeNewsletter.subscribeButton"
                description="Subscribe newsletter banner subscribe button"
              >
                Subscribe to the newsletter
              </Translate>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubcribeNewsletter;
