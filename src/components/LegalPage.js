import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const EMAIL_PATTERN = /([\w.+-]+@[\w-]+\.[\w.-]+)/g;

// The legal texts mention email addresses inline (our contact address, the
// consumer mediator). Rather than turning every string of the data file into
// JSX, they are linkified here.
function linkifyEmail(text) {
  return text.split(EMAIL_PATTERN).map((part, index) =>
    index % 2 === 1 ? (
      <a key={index} href={`mailto:${part}`}>
        {part}
      </a>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    ),
  );
}

function BlockLink({ link }) {
  if (!link) {
    return null;
  }
  // `href` covers external links and cross-locale links (the French version of
  // a legal page is not part of the English build, so `<Link>` would be
  // reported as a broken link).
  if (link.href) {
    const isExternal = link.href.startsWith("http");
    return (
      <>
        {" "}
        <a
          href={link.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {link.label}
        </a>
      </>
    );
  }
  return (
    <>
      {" "}
      <Link to={link.to}>{link.label}</Link>
    </>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "ul":
      return (
        <ul>
          {block.items.map((item, index) => (
            <li key={index}>
              {typeof item === "string" ? (
                linkifyEmail(item)
              ) : (
                <>
                  <strong>{item.label}</strong> {linkifyEmail(item.text)}
                </>
              )}
            </li>
          ))}
        </ul>
      );
    // Identity block of the legal notice: a list of "label: value" lines whose
    // values that are not known yet are simply left out of the data file.
    case "dl":
      return (
        <ul>
          {block.items
            .filter((item) => item.value)
            .map((item, index) => (
              <li key={index}>
                <strong>{item.term} :</strong> {linkifyEmail(item.value)}
              </li>
            ))}
        </ul>
      );
    // Footnote closing the English legal pages: which language version
    // prevails. Kept discreet, it is not part of the text itself.
    case "note":
      return (
        <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>
          <em>
            {linkifyEmail(block.text)}
            <BlockLink link={block.link} />
          </em>
        </p>
      );
    default:
      return (
        <p>
          {linkifyEmail(block.text)}
          <BlockLink link={block.link} />
        </p>
      );
  }
}

/**
 * Shared layout of the legal pages (terms of sale, privacy policy, legal
 * notice). The content itself lives in `src/data/legalData.js`, in English and
 * in French.
 */
function LegalPage({ title, description, heading, updated, sections }) {
  return (
    <Layout title={title} description={description}>
      <main>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h1>{heading}</h1>
                {updated && (
                  <p style={{ fontSize: "0.9rem", opacity: 0.75 }}>{updated}</p>
                )}
                {sections.map((section, index) => (
                  <React.Fragment key={index}>
                    {section.title && <h2>{section.title}</h2>}
                    {section.blocks.map((block, blockIndex) => (
                      <Block key={blockIndex} block={block} />
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default LegalPage;
