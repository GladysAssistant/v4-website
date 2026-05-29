import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const Yes = () => (
  <span className={styles.cmpYes} aria-label="Yes">
    ✓
  </span>
);
const No = () => (
  <span className={styles.cmpNo} aria-label="No">
    —
  </span>
);

function NabuCasaCompare() {
  return (
    <section className={styles.section} aria-labelledby="compare-title">
      <h2 id="compare-title" className={styles.sectionTitle}>
        <Translate id="gladysPlusPage.v2.compare.title">
          Honest comparison vs. Nabu Casa
        </Translate>
      </h2>
      <p className={styles.sectionSubtitle}>
        <Translate id="gladysPlusPage.v2.compare.subtitle">
          Nabu Casa is the official Home Assistant Cloud, made by the team
          driving Home Assistant. It's a great product. Here's how Gladys Plus
          compares — without cherry-picking.
        </Translate>
      </p>

      <div className={styles.compareTableWrapper}>
        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th scope="col">
                <Translate id="gladysPlusPage.v2.compare.col.feature">
                  Feature
                </Translate>
              </th>
              <th scope="col">Plus Lite</th>
              <th scope="col" className={styles.compareGladysCol}>
                Plus
              </th>
              <th scope="col">Nabu Casa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.price">
                  Price (EU, VAT incl.)
                </Translate>
              </th>
              <td>
                <strong>6,99€</strong>
                <br />
                <small>69,99€/an</small>
              </td>
              <td>
                <strong>9,99€</strong>
                <br />
                <small>99,99€/an</small>
              </td>
              <td>
                7,50€
                <br />
                <small>75€/an</small>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.target">
                  Built for
                </Translate>
              </th>
              <td colSpan={2}>
                <Translate id="gladysPlusPage.v2.compare.target.gladys">
                  Gladys Assistant
                </Translate>
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.target.nc">
                  Home Assistant
                </Translate>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.remote">
                  Encrypted remote access
                </Translate>
              </th>
              <td>
                <Yes />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <Yes />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.voice">
                  Google Home / Alexa
                </Translate>
              </th>
              <td>
                <Yes />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <Yes />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.api">
                  Open REST API
                </Translate>
              </th>
              <td>
                <Yes />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.partial.webhooks">
                  Webhooks only
                </Translate>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.backups">
                  Cloud backups (E2E)
                </Translate>
              </th>
              <td>
                <No />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.partial.ncbackups">
                  Yes (encrypted in transit)
                </Translate>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.camera">
                  Remote camera streaming
                </Translate>
              </th>
              <td>
                <No />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.partial.webrtc">
                  WebRTC support
                </Translate>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.localvoice">
                  TTS Voice
                </Translate>
              </th>
              <td>
                <No />
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.yes.ttsElevenLabs">
                  Yes (TTS using ElevenLabs API)
                </Translate>
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.yes.nabu">
                  Yes (Nabu voice)
                </Translate>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.ai">
                  Open-Weight AI models
                </Translate>
              </th>
              <td>
                <No />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <No />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.mcp">
                  MCP server
                </Translate>
              </th>
              <td>
                <No />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <No />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.enedis">
                  Enedis (French electricity data)
                </Translate>
              </th>
              <td>
                <No />
              </td>
              <td>
                <Yes />
              </td>
              <td>
                <No />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.support">
                  Direct contact with the maker
                </Translate>
              </th>
              <td colSpan={2}>
                <Translate id="gladysPlusPage.v2.compare.yes.creator">
                  Yes (FR + EN)
                </Translate>
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.no.team">
                  Team support
                </Translate>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <Translate id="gladysPlusPage.v2.compare.row.funds">
                  Funds the project
                </Translate>
              </th>
              <td colSpan={2}>
                <Translate id="gladysPlusPage.v2.compare.funds.gladys">
                  Gladys Assistant (indie, 1 person)
                </Translate>
              </td>
              <td>
                <Translate id="gladysPlusPage.v2.compare.funds.nc">
                  Open Home Foundation (HA, ESPHome, Z-Wave JS)
                </Translate>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.compareNotes}>
        <p>
          <strong>
            <Translate id="gladysPlusPage.v2.compare.honest.title">
              The honest take
            </Translate>
          </strong>
        </p>
        <p>
          <Translate id="gladysPlusPage.v2.compare.honest.nc">
            Nabu Casa is excellent if you're on Home Assistant. They include
            cloud backups, a privacy-focused local voice assistant (Nabu), and
            WebRTC for cameras at €7.50/month. They also fund a whole ecosystem
            (HA, ESPHome, Z-Wave JS) via the Open Home Foundation.
          </Translate>
        </p>
        <p>
          <Translate id="gladysPlusPage.v2.compare.honest.gladys">
            Gladys Plus only makes sense if you actually use Gladys Assistant.
            Plus Lite is cheaper than Nabu Casa for the basics. Plus is more
            expensive but adds an open REST API, Open-Weight AI models, MCP,
            French integrations like Enedis,
            and
            direct contact with the maker (in French if you want). It's an indie
            project funded by you alone — no investors, no foundation.
          </Translate>
        </p>
      </div>
    </section>
  );
}

export default NabuCasaCompare;
