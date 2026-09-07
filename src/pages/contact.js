import React, { useEffect, useRef, useState } from "react";
import HorizonPage from "../components/horizon/HorizonPage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";
import { translate } from "@docusaurus/Translate";

const CONTACT_API = "https://contact-page.gladysassistant.workers.dev";
const TURNSTILE_SCRIPT =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const STATUS = {
  INITIAL: "INITIAL",
  SENDING: "SENDING",
  NETWORK_ERROR: "NETWORK_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  RATE_LIMITED: "RATE_LIMITED",
  CAPTCHA_FAILED: "CAPTCHA_FAILED",
  SEND_ERROR: "SEND_ERROR",
  SUCCESS: "SUCCESS",
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function loadTurnstileScript() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${TURNSTILE_SCRIPT}"]`);
    const script = existing || document.createElement("script");
    script.addEventListener("load", () => resolve(window.turnstile));
    script.addEventListener("error", reject);
    if (!existing) {
      script.src = TURNSTILE_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

/** Renders the Turnstile widget and reports the token to the parent. */
function Turnstile({ siteKey, language, onToken }) {
  const container = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadTurnstileScript()
      .then((turnstile) => {
        if (cancelled || !container.current) {
          return;
        }
        widgetId.current = turnstile.render(container.current, {
          sitekey: siteKey,
          language,
          callback: (token) => onToken(token),
          "expired-callback": () => onToken(""),
          "error-callback": () => onToken(""),
        });
      })
      .catch((e) => console.error("Turnstile failed to load", e));
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [siteKey, language]);

  return <div ref={container} className="margin-top--sm" />;
}

function Home() {
  const context = useDocusaurusContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot, must stay empty
  const [status, setStatus] = useState(STATUS.INITIAL);
  const [availability, setAvailability] = useState(null);
  const [turnstile, setTurnstile] = useState({ required: false, siteKey: null });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);
  const { i18n } = context;
  const language = i18n.currentLocale;

  // Away banner + Turnstile configuration, from the API.
  useEffect(() => {
    fetch(`${CONTACT_API}/status`)
      .then((res) => res.json())
      .then((data) => {
        setAvailability(data);
        if (data.turnstile) {
          setTurnstile(data.turnstile);
        }
      })
      .catch(() => {});
  }, []);

  const awayMessage =
    availability && availability.available === false && availability.message
      ? availability.message[language] || availability.message.en
      : null;

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileKey((k) => k + 1); // remounts the widget: a token is single use
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!validateEmail(email) || message.trim().length === 0) {
      setStatus(STATUS.VALIDATION_ERROR);
      return;
    }
    if (turnstile.required && turnstile.siteKey && !turnstileToken) {
      setStatus(STATUS.CAPTCHA_FAILED);
      return;
    }

    try {
      setStatus(STATUS.SENDING);
      const res = await fetch(`${CONTACT_API}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          message,
          name,
          language,
          page: window.location.href,
          website,
          turnstileToken,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        resetTurnstile();
        if (data.error === "validation_error") {
          setStatus(STATUS.VALIDATION_ERROR);
        } else if (data.error === "rate_limited") {
          setStatus(STATUS.RATE_LIMITED);
        } else if (data.error === "captcha_failed") {
          setStatus(STATUS.CAPTCHA_FAILED);
        } else {
          setStatus(STATUS.SEND_ERROR);
        }
        return;
      }
      if (data.available === false) {
        setAvailability(data);
      }
      setName("");
      setEmail("");
      setMessage("");
      resetTurnstile();
      setStatus(STATUS.SUCCESS);
    } catch (e) {
      console.error(e);
      resetTurnstile();
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
    <HorizonPage
      title={translate({
        id: "contact.title",
        description: "Contact page title",
        message: "Contact Us",
      })}
      description={translate({
        id: "contact.metaDescription",
        description: "Contact page meta description",
        message:
          "Get in touch with the Gladys Assistant team: questions, ideas, partnership requests, or support for your open-source, privacy-first smart home.",
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
            {language === "fr" && (
              <div
                className="alert alert--warning margin-bottom--md"
                role="alert"
              >
                Vous êtes sur le formulaire de contact de Gladys Assistant, un
                logiciel de maison connectée open-source.{" "}
                <a href="/fr/">Pour en savoir plus</a>.<br />
                <br />
                Nous n'avons <b>aucun lien</b> avec Glady / Wedoogift !
              </div>
            )}
            {awayMessage && (
              <div
                className="alert alert--info margin-bottom--md"
                role="status"
              >
                {awayMessage}
              </div>
            )}
            {status === STATUS.SUCCESS && (
              <div
                className="alert alert--success margin-bottom--md"
                role="alert"
              >
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
              <div
                className="alert alert--warning margin-bottom--md"
                role="alert"
              >
                <Translate
                  id="contactPage.validationError"
                  description="Gladys contact page validation error"
                >
                  The contact form is not valid. Is your email address is valid?
                  Did you write a message?
                </Translate>
              </div>
            )}
            {status === STATUS.RATE_LIMITED && (
              <div
                className="alert alert--warning margin-bottom--md"
                role="alert"
              >
                <Translate
                  id="contactPage.rateLimited"
                  description="Gladys contact page rate limited error"
                >
                  You have sent too many messages in a short time. Please wait
                  an hour before trying again, or write to us on the forum.
                </Translate>
              </div>
            )}
            {status === STATUS.CAPTCHA_FAILED && (
              <div
                className="alert alert--warning margin-bottom--md"
                role="alert"
              >
                <Translate
                  id="contactPage.captchaFailed"
                  description="Gladys contact page captcha error"
                >
                  We could not verify that you are a human. Please complete the
                  verification below and try again.
                </Translate>
              </div>
            )}
            {status === STATUS.SEND_ERROR && (
              <div
                className="alert alert--danger margin-bottom--md"
                role="alert"
              >
                <Translate
                  id="contactPage.sendError"
                  description="Gladys contact page send error"
                >
                  Your message could not be delivered. Please retry in a few
                  minutes. If the problem persists, you can contact us on the
                  forum.
                </Translate>
              </div>
            )}
            {status === STATUS.NETWORK_ERROR && (
              <div
                className="alert alert--danger margin-bottom--md"
                role="alert"
              >
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
              <label>
                <Translate id="contactPage.name" description="Gladys contact name">
                  Name (optional)
                </Translate>
              </label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                maxLength={100}
                className={
                  styles.inputField + " margin-top--sm margin-bottom--sm"
                }
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder={translate({
                  id: "contact.namePlaceholder",
                  description: "Contact page name placeholder",
                  message: "Your name",
                })}
              />

              <label>
                <Translate
                  id="contactPage.email"
                  description="Gladys contact email"
                >
                  Email
                </Translate>
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className={
                  styles.inputField + " margin-top--sm margin-bottom--sm"
                }
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder={translate({
                  id: "contact.emailPlaceholder",
                  description: "Contact page email placeholder",
                  message: "Enter your email",
                })}
              />

              <label>
                <Translate
                  id="contactPage.message"
                  description="Gladys contact message"
                >
                  Message
                </Translate>
              </label>
              <textarea
                name="message"
                required
                maxLength={10000}
                placeholder={translate({
                  id: "contact.messagePlaceholder",
                  description: "Contact page message placeholder",
                  message: "Write here your message!",
                })}
                className={
                  styles.contactTextAreaField +
                  " margin-top--sm margin-bottom--sm"
                }
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>

              {/* Honeypot: invisible for humans, bots fill it. Never rendered by
                  screen readers or the tab order. */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
              >
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
              </div>

              {turnstile.required && turnstile.siteKey && (
                <Turnstile
                  key={turnstileKey}
                  siteKey={turnstile.siteKey}
                  language={language}
                  onToken={setTurnstileToken}
                />
              )}

              <input
                type="submit"
                disabled={status === STATUS.SENDING}
                value={
                  status === STATUS.SENDING
                    ? submitButtonSending
                    : submitButtonInitialState
                }
                className="button button--primary margin-top--sm"
              />
            </form>
          </div>
        </div>
      </main>
    </HorizonPage>
  );
}

export default Home;
