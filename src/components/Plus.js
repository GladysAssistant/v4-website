import React from "react";
import Layout from "@theme/Layout";

import Pricing from "./home/Pricing";
import FAQ from "./home/FAQ";

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
                {translation.plus.title}
              </h1>
              <p className="text--center">
                {translation.plus.description1}
                <br />
                {translation.plus.description2}
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
