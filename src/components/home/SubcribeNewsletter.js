import React from "react";

import Translate, { translate } from "@docusaurus/Translate";
import cx from "classnames";
import styles from "../homeStyles.module.css";

function validateEmail(email) {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
  return re.test(email);
}

function SubcribeNewsletter({ lang }) {
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [status, setStatus] = React.useState("initial");

  async function subscribe(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("failed");
      return;
    }

    try {
      setStatus("waiting");
      await fetch("https://subscribe-newsletter.gladysassistant.workers.dev/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstname,
          language: lang,
        }),
      });
      setEmail("");
      setFirstname("");
      setStatus("initial");
    } catch (e) {
      setStatus("failed");
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
            Join the community, and get the latest news about the project!
          </Translate>
        </h2>
        <Translate
          id="subscribeNewsletter.text"
          description="Subscribe newsletter banner text"
        >
          Emails are sent by Pierre-Gilles Leymarie, founder of the project. You
          can unsubscribe at any time 🙂
        </Translate>
      </div>
      <div className={cx("col col--4", styles.newsletterSectionInputCol)}>
        <form>
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
              onChange={(e) => setFirstname(e.target.value)}
              placeholder={translate({
                id: "subscribeNewsletter.firstnamePlaceholder",
                message: "First name",
                description: "Subscribe newsletter firstname placeholder",
              })}
            />
          </div>
          <button
            onClick={subscribe}
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
                Subscribe
              </Translate>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubcribeNewsletter;
