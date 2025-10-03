import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";

function PaymentSuccess() {
  return (
    <Layout title="Merci !" description="Merci d'avoir contribué à Gladys">
      <main>
        <div
          className="container"
          style={{ paddingTop: "30px", paddingBottom: "50px" }}
        >
          <h1 id="thank-you-">
            <Translate
              id="payment_success.thank-you"
              description="Thank you title"
            >
              Thank you!
            </Translate>
          </h1>

          <p>
            <Translate
              id="payment_success.thank-you-message"
              description="Thank you message"
            >
              Thank you for subscribing to Gladys Plus 🙂
            </Translate>
          </p>

          <p>
            <Translate
              id="payment_success.explanation"
              description="Thank you explanation"
            >
              You should receive an email on the address you specified during
              the process. If you don't receive anything, you can send me a
              message at hello@gladysassistant.com.
            </Translate>
          </p>

          <p>
            <Translate
              id="payment_success.follow-us"
              description="Thank you follow us"
            >
              Don't hesitate to follow us on:
            </Translate>{" "}
            <a href="https://twitter.com/gladysassistant">Twitter</a>,{" "}
            <a href="https://facebook.com/gladysassistant">Facebook</a>,{" "}
            <a href="https://instagram.com/gladysassistant">Instagram</a>.
          </p>

          <p>
            <Translate
              id="payment_success.questions"
              description="Thank you questions"
            >
              If you have a question, if you have trouble installing Gladys, or
              if you want to help us develop Gladys, you can join us on Gladys
              Community:
            </Translate>{" "}
            <a href="https://community.gladysassistant.com/">
              https://community.gladysassistant.com/
            </a>
            .
          </p>

          <p>
            <a href="https://twitter.com/pierregillesl">
              Pierre-Gilles Leymarie
            </a>
            <br />
            <Translate
              id="payment_success.founder-of-gladysassistant"
              description="Thank you founder"
            >
              Founder of Gladys Assistant
            </Translate>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default PaymentSuccess;
