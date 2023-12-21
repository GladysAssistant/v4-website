import React from "react";
import classnames from "classnames";
import styles from "./homeStyles.module.css";
// import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Translate, { translate } from "@docusaurus/Translate";

const COMPATIBILITIES = [
  [
    { title: "Alexa", imgSrc: "alexa.jpg", docKey: "alexa" },
    { title: "API OpenWeather", imgSrc: "openweather.jpg", docKey: "openweather" },
    { title: "Apple HomeKit", imgSrc: "homekit.jpg", docKey: "homeKit"},
    { title: "Bluetooth", imgSrc: "bluetooth.jpg", docKey: "bluetooth" },
  ],
  [
    { title: "Broadlink", imgSrc: "broadlink.jpg", docKey: "broadlink" },
    { title: "CalDav", imgSrc: "caldav.jpg", docKey: "caldav" },
    { title: "Camera", imgSrc: "rtsp-camera.jpg", docKey: "camera" },
    { title: "Enedis", imgSrc: "enedis.jpg", docKey: "enedis" },
  ],
  [
    { title: "eWelink", imgSrc: "ewelink.jpg", docKey: "ewelink" },
    { title: "Google Home", imgSrc: "google-home.jpg", docKey: "google-home" },
    { title: "Lan Manager", imgSrc: "lan-manager.jpg", docKey: "lan-manager" },
    { title: "MELCloud", imgSrc: "melcloud.jpg", docKey: "melcloud" },
  ],
  [
    { title: "MQTT", imgSrc: "mqtt.jpg", docKey: "mqtt" },
    { title: "Coming soon Netatmo", imgSrc: "netatmo.jpg", docKey: "netatmo" },
    { title: "Nextcloud Talk", imgSrc: "nextcloud-talk.jpg", docKey: "nextcloud-talk" },
    { title: "Node-red", imgSrc: "node-red.jpg", docKey: "node-red" },
  ],
  [
    { title: "Open AI Chat GPT", imgSrc: "openai.jpg", docKey: "openai" },
    { title: "Owntracks", imgSrc: "owntracks.jpg", docKey: "owntracks" },
    { title: "Philips-Hue", imgSrc: "philips-hue.jpg", docKey: "philips-hue" },
    { title: "Sonos", imgSrc: "sonos.jpg", docKey: "sonos" },
  ],
  [
    { title: "Tasmota", imgSrc: "tasmota.jpg", docKey: "tasmota" },
    { title: "Telegram", imgSrc: "telegram.jpg", docKey: "telegram" },
    { title: "TP-Link", imgSrc: "tp-link.jpg", docKey: "tp-link/" },
    { title: "Tuya", imgSrc: "tuya.jpg", docKey: "tuya" },
  ],
  [
    { title: "Xiaomi Home", imgSrc: "xiaomi.jpg", docKey: "xiaomi" },
    { title: "Zigbee", imgSrc: "zigbee2mqtt.jpg", docKey: "zigbee2mqtt" },
    { title: "Coming soon Z-Wave-js-ui", imgSrc: "zwave-js-ui.jpg", docKey: "zwave-js-ui" },
  ],
];

const MainImageResponsive = ({ imageKey, alt, sizes }) => {
  let srcSet = "";

  sizes.forEach((size) => {
    if (srcSet.length > 0) {
      srcSet += ",\n";
    }
    srcSet += `${useBaseUrl(
      `/img/home/main_screenshot/${imageKey},w_${size}.png`
    )} ${size}w`;
  });

  return (
    <img
      fetchpriority="high"
      sizes="(max-width: 2800px) 100vw, 2800px"
      srcSet={srcSet}
      src={useBaseUrl(`/img/home/main_screenshot/${imageKey},w_2800.png`)}
      alt={alt}
    ></img>
  );
};

function docsintegrations({ integrations, lang }) {
  const [openPanel, setOpenPanel] = React.useState(1);
  return (
    <>
      <main>
        <div
          className={classnames(
            styles.homeSection,
            styles.compatibilitiesSection
          )}
        >
          <h2 className={styles.secondaryTitle}>
            <Translate
              id="integration.page.compatibilities.title"
              description="Integrations description"
            >
              A large number of integrations !
            </Translate>
          </h2>
          <div className="row">
            <div className="col col--12">
              <p className="text--center">
                <Translate
                  id="home.integrations.description"
                  description= "Integrations description of the homepage"
                >
                  All integrations are open-source and developed by the
                  community.
                </Translate>
              </p>
              <h3 className={styles.secondaryTitle}>
            <Translate
              id="description.integration"
              description= "description on the integrations page"
            >
              Explore a diverse range of integrations to suit every aspect of your daily life. 
              Thanks to these community developments, Gladys Assistant can interact with a wide range of smart devices, 
              online services and protocols, creating a centralized solution to simplify your daily life.
            </Translate>
          </h3>
              {COMPATIBILITIES.map((row) => (
                <div className={styles.compatibilitiesRow}>
                  {row.map((item) => (
                    <div className={styles.compatibilitiesCol}>
                      <a href={useBaseUrl(`/docs/integrations/${item.docKey}`)}>
                        <img
                          src={useBaseUrl(
                            "/img/home/compatibilities/" + item.imgSrc
                          )}
                          width="254"
                          height="169"
                          alt={item.title}
                        />
                        <h5>{item.title}</h5>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export { docsintegrations };
