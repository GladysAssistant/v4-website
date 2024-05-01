import React from "react";
import { useLocation } from "react-router-dom";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import MDXContent from "@theme-original/MDXContent";
import { useColorMode } from "@docusaurus/theme-common";
import SubcribeNewsletter from "../../components/home/SubcribeNewsletter";

const LOCATION_BLACK_LIST = ["/fr/blog/", "/blog/"];

export default function MDXContentWrapper(props) {
  const context = useDocusaurusContext();
  const { i18n } = context;
  const language = i18n.currentLocale;
  const isDarkTheme = useColorMode().colorMode === "dark";
  const color = isDarkTheme ? "white" : "black";
  const { pathname } = useLocation();

  return (
    <>
      <MDXContent {...props} />
      {!LOCATION_BLACK_LIST.includes(pathname) && (
        <div>
          <div
            style={{
              borderTop: `1px solid ${color}`,
              marginTop: "50px",
              marginBottom: "50px",
            }}
          ></div>
          <SubcribeNewsletter lang={language} />
        </div>
      )}
    </>
  );
}
