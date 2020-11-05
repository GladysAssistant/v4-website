import React from "react";

function validateEmail(email) {
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
  return re.test(email);
}

const translation = {
  en: {
    subscribe: "Subscribe",
    subscribing: "Subscribing...",
    firstname: "Firstname",
    email: "Email",
    error:
      "An error occured, are you sure your email is right? If yes, please retry.",
    title: "Join the community, and receive news about the project !",
    text: (
      <>
        <p>You are more than 40 000 who have downloaded Gladys.</p>
        <p>
          Emails are sent by Pierre-Gilles Leymarie, founder of the project, and
          you can unsubscribe at any time 🙂
        </p>
      </>
    ),
  },
  fr: {
    subscribe: "S'inscrire",
    subscribing: "Inscription en cours...",
    firstname: "Prénom",
    email: "Email",
    error:
      "Nous n'avons pas réussi à vous inscrire, est-ce que votre email est bon ?",
    title: "Rejoignez la communauté, et recevez l'actualité du projet !",
    text: (
      <>
        <p>
          Vous êtes plus de 40 000 à avoir téléchargé Gladys Assistant depuis
          son lancement.
        </p>
        <p>
          Les mails sont envoyés par Pierre-Gilles Leymarie, le fondateur du
          projet, et vous pouvez toujours vous désinscrire à tout moment 🙂
        </p>
      </>
    ),
  },
};

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
      await fetch("/.netlify/functions/new-subscriber", {
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
        {" "}
        <h2>{translation[lang].title}</h2>
        {translation[lang].text}
      </div>
      <div className="col col--4">
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
              {translation[lang].error}
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
              placeholder={translation[lang].email}
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
              placeholder={translation[lang].firstname}
            />
          </div>
          <input
            type="hidden"
            name="language"
            value="en"
            id="languageNewsletter"
          />
          <button
            onClick={subscribe}
            style={{ marginTop: "10px" }}
            class="button button--primary button--block"
          >
            {status === "waiting"
              ? translation[lang].subscribing
              : translation[lang].subscribe}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubcribeNewsletter;
