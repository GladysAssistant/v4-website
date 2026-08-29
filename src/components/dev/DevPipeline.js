import React, { useEffect, useRef, useState } from "react";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./DevPipeline.module.css";

/**
 * Animated map of the Gladys development pipeline: an idea comes in, Claude
 * Code works on it overnight, the pull request gets an AI review, and the only
 * human gesture left is the merge. The drawing animation starts when the panel
 * scrolls into view (and is skipped entirely under prefers-reduced-motion).
 */
function DevPipeline() {
  const panelRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = panelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setPlay(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={panelRef}
      className={`${styles.panel} ${play ? styles.play : ""}`}
      aria-labelledby="pipeline-title"
    >
      <header className={styles.head}>
        <div className={styles.kicker}>
          <Translate
            id="devPage.pipeline.kicker"
            description="Pipeline infographic kicker"
          >
            Gladys Assistant · development
          </Translate>
        </div>
        <h2 id="pipeline-title" className={styles.title}>
          <Translate
            id="devPage.pipeline.title"
            description="Pipeline infographic title"
            values={{
              human: (
                <em key="human">
                  <Translate
                    id="devPage.pipeline.titleHuman"
                    description="Pipeline infographic title, highlighted half"
                  >
                    a single human gesture
                  </Translate>
                </em>
              ),
            }}
          >
            {"From idea to merge, {human}"}
          </Translate>
        </h2>
      </header>

      <div className={styles.scroll}>
        <svg
          className={styles.map}
          viewBox="0 96 1600 448"
          role="img"
          aria-label={translate({
            id: "devPage.pipeline.alt",
            description: "Accessible label of the pipeline infographic",
            message:
              "Diagram of the Gladys Assistant development pipeline: a bug or an idea, Claude Code every night, an automatic pull request, an AI review, then a one-click human merge",
          })}
        >
          <defs>
            <linearGradient
              id="devPipelineRail"
              gradientUnits="userSpaceOnUse"
              x1="200"
              y1="0"
              x2="1400"
              y2="0"
            >
              <stop offset="0" stopColor="#65c7f7" />
              <stop offset="1" stopColor="#7ba2ff" />
            </linearGradient>
            <linearGradient
              id="devPipelineRailWarm"
              gradientUnits="userSpaceOnUse"
              x1="1340"
              y1="0"
              x2="1480"
              y2="0"
            >
              <stop offset="0" stopColor="#7ba2ff" />
              <stop offset="1" stopColor="#ee9252" />
            </linearGradient>
            <radialGradient id="devPipelineNight">
              <stop offset="0" stopColor="#3d6df0" stopOpacity=".16" />
              <stop offset=".35" stopColor="#3d6df0" stopOpacity=".105" />
              <stop offset=".62" stopColor="#3d6df0" stopOpacity=".05" />
              <stop offset=".82" stopColor="#3d6df0" stopOpacity=".016" />
              <stop offset="1" stopColor="#3d6df0" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* night band */}
          <ellipse
            className={`${styles.fade} ${styles.d0}`}
            cx="600"
            cy="330"
            rx="340"
            ry="275"
            fill="url(#devPipelineNight)"
          />
          <g className={`${styles.fade} ${styles.d0}`} fill="#ffffff">
            <circle cx="418" cy="352" r="1.6" opacity=".45" />
            <circle cx="512" cy="140" r="1.3" opacity=".32" />
            <circle cx="614" cy="382" r="1.8" opacity=".4" />
            <circle cx="668" cy="128" r="1.4" opacity=".28" />
            <circle cx="782" cy="336" r="1.5" opacity=".35" />
            <circle cx="556" cy="330" r="1.2" opacity=".28" />
            <circle cx="742" cy="164" r="1.2" opacity=".26" />
            <circle cx="396" cy="210" r="1.1" opacity=".22" />
            <circle cx="806" cy="240" r="1.1" opacity=".22" />
          </g>
          <text
            className={`${styles.bandLabel} ${styles.fade} ${styles.d5}`}
            x="595"
            y="138"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.night",
              description: "Pipeline night band label",
              message: "WHILE I SLEEP",
            })}
          </text>

          {/* main rail */}
          <path
            className={`${styles.rail} ${styles.r1}`}
            pathLength="100"
            d="M200,270 H1090"
            stroke="url(#devPipelineRail)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* fork */}
          <path
            className={`${styles.rail} ${styles.r2}`}
            pathLength="100"
            d="M1090,270 C1140,270 1140,180 1195,180 H1275 C1330,180 1330,270 1380,270"
            stroke="url(#devPipelineRail)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className={`${styles.rail} ${styles.r3}`}
            pathLength="100"
            d="M1090,270 C1140,270 1140,360 1195,360 H1275 C1330,360 1330,270 1380,270"
            stroke="url(#devPipelineRail)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            className={`${styles.rail} ${styles.r4}`}
            pathLength="100"
            d="M1372,270 H1480"
            stroke="url(#devPipelineRailWarm)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />

          {/* direction chevrons */}
          <g
            className={`${styles.fade} ${styles.d5}`}
            stroke="#bcd2ff"
            strokeWidth="2.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".6"
          >
            <path d="M330,262 l9,8 -9,8" />
            <path d="M596,262 l9,8 -9,8" />
            <path d="M845,262 l9,8 -9,8" />
          </g>

          {/* feedback loop */}
          <path
            className={`${styles.fade} ${styles.d6}`}
            d="M960,300 C960,420 960,470 890,470 H540 C480,470 470,420 470,312"
            stroke="rgba(123,162,255,.45)"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="7 8"
          />
          <path
            className={`${styles.fade} ${styles.d6}`}
            d="M470,296 l7,15 -14,0 z"
            fill="rgba(123,162,255,.7)"
          />
          <text
            className={`${styles.loopLabel} ${styles.fade} ${styles.d6}`}
            x="715"
            y="504"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.loop",
              description: "Pipeline feedback loop label",
              message: "if there is feedback, Claude Code fixes it",
            })}
          </text>

          {/* stations */}
          <g
            className={styles.stations}
            fill="#0d1220"
            stroke="url(#devPipelineRail)"
            strokeWidth="5.5"
          >
            <circle cx="200" cy="270" r="13" />
            <circle cx="470" cy="270" r="13" />
            <circle cx="730" cy="270" r="13" />
            <circle cx="960" cy="270" r="13" />
          </g>
          <circle
            className={`${styles.pop} ${styles.d5}`}
            cx="1480"
            cy="270"
            r="18"
            fill="#0d1220"
            stroke="#ee9252"
            strokeWidth="6"
          />
          <circle
            className={`${styles.pop} ${styles.d5}`}
            cx="1480"
            cy="270"
            r="5.5"
            fill="#ee9252"
          />

          {/* labels */}
          <text
            className={`${styles.cap} ${styles.fade} ${styles.d1}`}
            x="200"
            y="200"
            textAnchor="middle"
          >
            GITHUB · FORUM
          </text>
          <text
            className={`${styles.name} ${styles.fade} ${styles.d1}`}
            x="200"
            y="234"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.ideaName",
              description: "Pipeline first station name",
              message: "A bug or an idea",
            })}
          </text>

          <text
            className={`${styles.cap} ${styles.fade} ${styles.d2}`}
            x="470"
            y="200"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.claudeCap",
              description: "Pipeline second station kicker",
              message: "EVERY NIGHT",
            })}
          </text>
          <text
            className={`${styles.name} ${styles.fade} ${styles.d2}`}
            x="470"
            y="234"
            textAnchor="middle"
          >
            Claude Code
          </text>

          <text
            className={`${styles.cap} ${styles.fade} ${styles.d3}`}
            x="730"
            y="200"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.prCap",
              description: "Pipeline third station kicker",
              message: "AUTOMATIC",
            })}
          </text>
          <text
            className={`${styles.name} ${styles.fade} ${styles.d3}`}
            x="730"
            y="234"
            textAnchor="middle"
          >
            Pull request
          </text>

          <text
            className={`${styles.cap} ${styles.fade} ${styles.d4}`}
            x="960"
            y="200"
            textAnchor="middle"
          >
            CURSOR · GROK 4.6 HIGH
          </text>
          <text
            className={`${styles.name} ${styles.fade} ${styles.d4}`}
            x="960"
            y="234"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.reviewName",
              description: "Pipeline fourth station name",
              message: "AI review",
            })}
          </text>

          <text
            className={`${styles.cap} ${styles.fade} ${styles.d5}`}
            x="1480"
            y="200"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.mergeCap",
              description: "Pipeline merge station kicker",
              message: "ME, IN ONE CLICK",
            })}
          </text>
          <text
            className={`${styles.name} ${styles.nameWarm} ${styles.fade} ${styles.d5}`}
            x="1480"
            y="234"
            textAnchor="middle"
          >
            Merge
          </text>

          {/* branch labels */}
          <text
            className={`${styles.branch} ${styles.fade} ${styles.d5}`}
            x="1235"
            y="158"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.branchComplex",
              description: "Pipeline top branch label",
              message: "Complex PR: I review it",
            })}
          </text>
          <text
            className={`${styles.branch} ${styles.fade} ${styles.d5}`}
            x="1235"
            y="398"
            textAnchor="middle"
          >
            {translate({
              id: "devPage.pipeline.branchSimple",
              description: "Pipeline bottom branch label",
              message: "Simple PR: I merge it",
            })}
          </text>
        </svg>
      </div>
    </section>
  );
}

export default DevPipeline;
