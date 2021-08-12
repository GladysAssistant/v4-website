import React, { useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
import { translate } from "@docusaurus/Translate";

const STATUS = {
  INITIAL: "INITIAL",
  SENDING: "SENDING",
  NETWORK_ERROR: "NETWORK_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  SUCCESS: "SUCCESS",
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Home() {
  const context = useDocusaurusContext();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(STATUS.INITIAL);
  const { i18n } = context;

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus(STATUS.VALIDATION_ERROR);
      return;
    }

    if (message.length === 0) {
      setStatus(STATUS.VALIDATION_ERROR);
      return;
    }

    try {
      setStatus(STATUS.SENDING);
      await fetch("https://contact-page.gladysassistant.workers.dev/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });
      setEmail("");
      setMessage("");
      setStatus(STATUS.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(STATUS.NETWORK_ERROR);
    }
  };

  const submitButtonInitialState = translate({
    id: "contact.submit",
    description: "Contact page submit",
    message: "Send message",
  });

  const submitButtonSending = translate({
    id: "contact.sendingMessage",
    description: "Contact page sendingMessage",
    message: "Sending message...",
  });

  return (
    <Layout
      title={translate({
        id: "contact.title",
        description: "Contact page title",
        message: "Contact Us",
      })}
      description={translate({
        id: "contact.metaDescription",
        description: "Contact page meta description",
        message: "If you want to contact us",
      })}
    >
      <main>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <h1>
              <Translate
                id="contactPage.title"
                description="Gladys contact page title"
              >
                Contact Us
              </Translate>
            </h1>
            <p>
              <Translate
                id="contactPage.explanation"
                description="Gladys contact page explanation"
              >
                If you have a specific question, a parternship request, you can
                use this form. For technical support, please use the forum.
              </Translate>
            </p>
            {status === STATUS.SUCCESS && (
              <div class="alert alert--success margin-bottom--md" role="alert">
                <Translate
                  id="contactPage.success"
                  description="Gladys contact page success message"
                >
                  Message sent with success! We'll contact you back as soon as
                  possible.
                </Translate>
              </div>
            )}
            {status === STATUS.VALIDATION_ERROR && (
              <div class="alert alert--warning margin-bottom--md" role="alert">
                <Translate
                  id="contactPage.validationError"
                  description="Gladys contact page validation error"
                >
                  The contact form is not valid. Is your email address is valid?
                  Did you write a message?
                </Translate>
              </div>
            )}
            {status === STATUS.NETWORK_ERROR && (
              <div class="alert alert--danger margin-bottom--md" role="alert">
                <Translate
                  id="contactPage.networkError"
                  description="Gladys contact page network error"
                >
                  Network error: Are you connected to the internet? Please
                  retry. If the problem persist, you can contact us on Twitter,
                  or on the forum.
                </Translate>
              </div>
            )}
            <form onSubmit={sendMessage}>
              <label for="fname">
                <Translate
                  id="contactPage.email"
                  description="Gladys contact email"
                >
                  Email
                </Translate>
              </label>
              <input
                type="text"
                className={
                  styles.inputField + " margin-top--sm margin-bottom--sm"
                }
                onChange={updateEmail}
                value={email}
                placeholder={translate({
                  id: "contact.emailPlaceholder",
                  description: "Contact page email placeholder",
                  message: "Enter your email",
                })}
              />

              <label for="subject">
                <Translate
                  id="contactPage.message"
                  description="Gladys contact message"
                >
                  Message
                </Translate>
              </label>
              <textarea
                placeholder={translate({
                  id: "contact.messagePlaceholder",
                  description: "Contact page message placeholder",
                  message: "Write here your message!",
                })}
                className={
                  styles.contactTextAreaField +
                  " margin-top--sm margin-bottom--sm"
                }
                onChange={updateMessage}
                value={message}
              ></textarea>

              <input
                type="submit"
                disabled={status === STATUS.SENDING}
                value={
                  status === STATUS.SENDING
                    ? submitButtonSending
                    : submitButtonInitialState
                }
                class="button button--primary margin-top--sm"
              />
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
