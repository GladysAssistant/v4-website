import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";

/**
 * The shell of every "Horizon" marketing page.
 *
 * `horizon-page` lands on <html> server-side, which is how the navbar and the
 * footer (rendered outside the page wrapper by the theme) pick up the theme
 * without a flash; `horizon-page-body` carries the tokens and the scene. Both
 * are plain global classes rather than CSS-module ones so that pages keeping
 * their own stylesheet can read the tokens too. See src/css/horizon.css.
 */
function HorizonPage({ title, description, className, children }) {
  return (
    <HtmlClassNameProvider className="horizon-page">
      <Layout title={title} description={description}>
        <div className={classnames("horizon-page-body", className)}>
          {children}
        </div>
      </Layout>
    </HtmlClassNameProvider>
  );
}

export default HorizonPage;
