import React from "react";
import Layout from "@theme/Layout";
import integrations from "../../integrations/index";
import { IntegrationPage } from "../../../shared/Integration";
// import { IntegrationPage } from "../components/Integration";

function PaymentSuccess() {
  return (
    <Layout title="Merci !" description="Merci d'avoir contribué à Gladys">
      <main>
        <div
          className="container"
          style={{ paddingTop: "30px", paddingBottom: "50px" }}
        >
          <h1 id="thank-you-">Thank you !</h1>

          <p>Thank you for subscribing to Gladys Plus 😊</p>

          <p>
            You should receive an email on the address you specified during the
            process. If you don’t receive anything, you can send me a message at
            hello@gladysassistant.com.
          </p>

          <p>
            Don’t hesitate to follow us on{" "}
            <a href="https://twitter.com/gladysassistant">Twitter</a>,{" "}
            <a href="https://facebook.com/gladysassistant">Facebook</a> or{" "}
            <a href="https://instagram.com/gladysassistant">Instagram</a>.
          </p>

          <p>
            If you have a question, if you have trouble installing Gladys, or if
            you want to help us develop Gladys, you can join us on Gladys
            Community (Already + 2 000 members!) =&gt;{" "}
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
            Founder of Gladys Assistant
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default PaymentSuccess;
