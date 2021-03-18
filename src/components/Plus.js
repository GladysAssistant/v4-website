import React from "react";
import Pricing from "./home/Pricing";
import FAQ from "./home/FAQ";

import Translate from "@docusaurus/Translate";

function Plus({ translation, lang }) {
  return (
    <main>
      <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1
                className="text--center"
                style={{
                  fontSize: "50px",
                  marginBottom: "30px",
                }}
              >
                <Translate
                  id="gladysPlusPage.title"
                  description="Gladys Plus page title"
                >
                  Gladys Plus
                </Translate>
              </h1>
              <p className="text--center">
                <Translate
                  id="gladysPlusPage.description1"
                  description="Gladys Plus description 1"
                >
                  Gladys Assistant is free and open-source, forever.
                </Translate>
                <br />
                <Translate
                  id="gladysPlusPage.description2"
                  description="Gladys Plus description 2"
                >
                  We provide Gladys Plus for cool additionnal features!
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Pricing lang={lang} translation={translation} />
      <FAQ lang={lang} />
    </main>
  );
}

export default Plus;
