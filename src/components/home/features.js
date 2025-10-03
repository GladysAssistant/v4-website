import React from "react";

import Translate from "@docusaurus/Translate";

const Features = ({}) => (
  <div style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
    <div className="container">
      <div className="row">
        <div className="col col--12">
          <h2 className="text--center">
            <Translate
              id="features.title"
              description="Home page feature list title"
            >
              A super-stable software, designed for performance & security
            </Translate>
          </h2>
          <p
            className="col col--6 col--offset-4"
            style={{ paddingTop: "2rem" }}
          >
            <div>
              <input type="checkbox" checked disabled />{" "}
              <Translate
                id="features.atomicUpgrades"
                description="Home page feature atomic upgrade"
              >
                Atomic, rock-solid & automatic upgrades
              </Translate>
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              <Translate
                id="features.minimalist"
                description="Home page feature minimalist"
              >
                Minimalist, clean UI
              </Translate>
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              <Translate
                id="features.openSourceCode"
                description="Home page feature openSourceCode"
              >
                Open-Source Code, reviewed by the community
              </Translate>
            </div>
            <div>
              <input type="checkbox" checked disabled />{" "}
              <Translate
                id="features.integrationsBuiltIn"
                description="Home page feature integrationsBuiltIn"
              >
                Integrations are built-in, not installed
              </Translate>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
