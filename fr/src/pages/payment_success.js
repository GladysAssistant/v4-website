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
          <h1 id="merci-">Merci !</h1>

          <p>Merci d’avoir souscrit à Gladys Plus 😊</p>

          <p>
            Vous devriez recevoir un email sur l’adresse que vous avez précisé
            lors de l’inscription. Si ce n’est pas le cas, merci de me contacter
            à hello@gladysassistant.com.
          </p>

          <p>
            N’hésitez pas à nous suivre aussi sur{" "}
            <a href="https://twitter.com/gladysassistant">Twitter</a>,{" "}
            <a href="https://facebook.com/gladysassistant">Facebook</a>
            &nbsp;ou&nbsp;
            <a href="https://instagram.com/gladysassistant">Instagram</a>.
          </p>

          <p>
            Si vous avez des questions, des difficultés à installer
            Gladys,&nbsp;que vous souhaitez participer au développement du
            projet,&nbsp;rejoignez la communauté sur le forum Gladys (+2 000
            inscrits déjà!)&nbsp;=&gt;&nbsp;
            <a href="https://community.gladysassistant.com/">
              https://community.gladysassistant.com/
            </a>
            .
          </p>

          <p>
            Merci à tous de supporter et de suivre le projet avec tant d’ardeur,
            c’est grâce à vous que le projet va si loin !
          </p>

          <p>
            <a href="https://twitter.com/pierregillesl">
              Pierre-Gilles Leymarie
            </a>
            <br />
            Fondateur de Gladys Assistant
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default PaymentSuccess;
