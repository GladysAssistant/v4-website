import React from "react";

const Features = ({ translation }) => (
  <div style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
    <div className="container">
      <div className="row">
        <div className="col col--12">
          <h2 className="text--center">{translation.features.title}</h2>
          <p
            className="col col--6 col--offset-4"
            style={{ paddingTop: "2rem" }}
          >
            <div>
              <input type="checkbox" checked disabled />{" "}
              {translation.features.atomicUpgrades}
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              {translation.features.minimalist}
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              {translation.features.openSourceCode}
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              {translation.features.integrationsBuiltIn}
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              {translation.features.endToEndEncrypted}
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
