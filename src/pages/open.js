import React, { useRef, useState, useEffect, useCallback } from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import {
  Chart,
  LineElement,
  LineController,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";

Chart.register(
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement
);

async function getUsage() {
  const response = await fetch("https://open.gladysassistant.workers.dev/");
  const data = await response.json();
  const labels = [];
  const points = [];

  // Keep every month, including the current (still-running) one. The last
  // point is flagged as "in progress" in the chart instead of being dropped,
  // so the most recent recovery stays visible.
  data.gladys_4_instances.forEach((elem) => {
    labels.push(elem.month);
    points.push(elem.nb_instances);
  });

  const forumPageViewsLabels = [];
  const forumPageViewsPoints = [];

  data.forum_page_views.forEach((elem) => {
    forumPageViewsLabels.push(elem.x);
    forumPageViewsPoints.push(elem.y);
  });

  let totalForumUser = 0;

  data.forum_users.forEach((user) => {
    totalForumUser += user.count;
  });

  data.forum_users.unshift({
    user_type: "total",
    count: totalForumUser,
  });

  return {
    labels,
    points,
    forumPageViewsLabels,
    forumPageViewsPoints,
    forum_users: data.forum_users,
    nb_gladys_plus_users: data.nb_gladys_plus_users,
    chartmogul_data: data.chartmogul_data,
  };
}

// "2026-06" -> "Jun 2026" (localized short month + year).
function formatMonthLabel(month, locale) {
  const [year, monthIndex] = month.split("-").map(Number);
  const date = new Date(year, monthIndex - 1, 1);
  return date.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    month: "short",
    year: "numeric",
  });
}

// Returns a straight line (one value per point) fitted to the data with a
// least-squares linear regression. Overlaying it on the instance chart shows
// the long-term direction, so a one-off spike (the viral Feb 2026 video) and
// the churn that follows it don't read as the project declining.
function computeTrendLine(points) {
  const n = points.length;
  const ys = points.map((p) => Number(p));
  if (n < 2) {
    return ys;
  }
  const meanX = (n - 1) / 2;
  const meanY = ys.reduce((sum, y) => sum + y, 0) / n;
  let sxy = 0;
  let sxx = 0;
  for (let i = 0; i < n; i += 1) {
    sxy += (i - meanX) * (ys[i] - meanY);
    sxx += (i - meanX) ** 2;
  }
  const slope = sxx === 0 ? 0 : sxy / sxx;
  const intercept = meanY - slope * meanX;
  return ys.map((_, i) => Math.round(intercept + slope * i));
}

function Open() {
  const context = useDocusaurusContext();
  const [usageChartCanva, setUsageChartCanva] = useState(null);
  const [forumPageViewsCanva, setForumPageViewsCanva] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usageChartData, setUsageChartData] = useState(null);
  const { i18n } = context;
  const language = i18n.currentLocale;

  const numberOfInstances = usageChartData
    ? usageChartData.points[usageChartData.points.length - 1]
    : null;

  const numberOfGladysPlusUsers = usageChartData
    ? usageChartData.nb_gladys_plus_users
    : null;

  const mrr = usageChartData
    ? Math.round(usageChartData.chartmogul_data.current / 100)
    : null;

  const communityMembers = usageChartData
    ? usageChartData.forum_users.find((user) => user.user_type === "total")
        ?.count
    : null;

  // Gladys has been developed in the open since 2013. Compute the count of
  // years live so the longevity stat never goes stale.
  const yearsInTheOpen = new Date().getFullYear() - 2013;

  async function fetchData() {
    const data = await getUsage();
    setUsageChartData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!usageChartData) {
      return;
    }
    const lastIndex = usageChartData.points.length - 1;
    const currentTag = translate({
      id: "openPage.chart.currentMonthShort",
      description: "Instance chart current month short tag",
      message: "current",
    });
    const currentMonthTooltip = translate({
      id: "openPage.chart.currentMonthTooltip",
      description: "Instance chart current month tooltip",
      message: "Current month, still in progress",
    });
    const displayLabels = usageChartData.labels.map((month, index) => {
      const base = formatMonthLabel(month, language);
      return index === lastIndex ? `${base} (${currentTag})` : base;
    });
    const config = {
      type: "line",
      data: {
        labels: displayLabels,
        datasets: [
          {
            label: translate({
              id: "openPage.chart.activeInstances",
              description: "Instance chart active instances series label",
              message: "Active instances",
            }),
            borderColor: "#74b9ff",
            backgroundColor: "#74b9ff",
            data: usageChartData.points,
            fill: false,
            tension: 0.3,
            // Dash the very last segment and highlight the last point so the
            // still-running current month reads as provisional, not final.
            segment: {
              borderDash: (ctx) =>
                ctx.p1DataIndex === lastIndex ? [6, 6] : undefined,
            },
            pointRadius: (ctx) => (ctx.dataIndex === lastIndex ? 6 : 3),
            pointBackgroundColor: (ctx) =>
              ctx.dataIndex === lastIndex ? "#e17055" : "#74b9ff",
            pointBorderColor: (ctx) =>
              ctx.dataIndex === lastIndex ? "#e17055" : "#74b9ff",
          },
          {
            label: translate({
              id: "openPage.chart.trend",
              description: "Instance chart trend line label",
              message: "Long-term trend",
            }),
            borderColor: "#00b894",
            borderDash: [6, 6],
            borderWidth: 2,
            pointRadius: 0,
            data: computeTrendLine(usageChartData.points),
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "index",
        },
        plugins: {
          tooltip: {
            position: "nearest",
            callbacks: {
              afterLabel: (ctx) =>
                ctx.dataIndex === lastIndex && ctx.datasetIndex === 0
                  ? currentMonthTooltip
                  : undefined,
            },
          },
        },
        indexAxis: "x",
        scales: {
          x: {
            display: true,
          },
          y: {
            title: {
              display: true,
              text: translate({
                id: "openPage.chart.yAxis",
                description: "Instance chart y axis title",
                message: "Number of instances",
              }),
            },
            beginAtZero: true,
          },
        },
      },
    };
    const forumPageViewsConfig = {
      type: "line",
      data: {
        labels: usageChartData.forumPageViewsLabels,
        datasets: [
          {
            label: "Forum pageviews",
            borderColor: "#74b9ff",
            data: usageChartData.forumPageViewsPoints,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: "Forum pageviews",
        },
        indexAxis: "x",
        scales: {
          x: {
            display: false,
          },
          y: {
            beginAtZero: false,
          },
        },
      },
    };
    if (usageChartCanva) {
      const usageCtx = usageChartCanva.getContext("2d");
      const usageChart = new Chart(usageCtx, config);
    }

    if (forumPageViewsCanva) {
      const forumPageViewsCtx = forumPageViewsCanva.getContext("2d");
      const forumPageViewsChart = new Chart(
        forumPageViewsCtx,
        forumPageViewsConfig
      );
    }
  }, [usageChartCanva, forumPageViewsCanva, usageChartData]);

  const usageChartRef = useCallback((node) => {
    setUsageChartCanva(node);
  }, []);

  const forumChartRef = useCallback((node) => {
    setForumPageViewsCanva(node);
  }, []);

  return (
    <Layout
      title={translate({
        id: "openPage.title",
        description: "",
        message: "Open Metrics",
      })}
      description={translate({
        id: "openPage.metaDescription",
        description: "gladys open page meta description",
        message:
          "Explore Gladys Assistant's open metrics in real time: active instances, Gladys Plus users, monthly recurring revenue, and community statistics.",
      })}
    >
      <main>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <div className={styles.openHero}>
              <span className={styles.openEyebrow}>
                <span className={styles.liveDot} aria-hidden="true"></span>
                <Translate
                  id="openPage.eyebrow"
                  description="Open page live eyebrow"
                >
                  Live numbers, updated automatically
                </Translate>
              </span>
              <h1 className={styles.openTitle}>
                <Translate id="openPage.h1" description="Gladys open page H1">
                  Everything about Gladys, in the open
                </Translate>
              </h1>
              <p className={styles.openLead}>
                <Translate
                  id="openPage.description"
                  description="Open page description"
                >
                  No investors, no ads, no data resale. Gladys has been built in
                  the open since 2013 and runs entirely on your own hardware.
                  These are the real numbers behind the project, live.
                </Translate>
              </p>
            </div>
            <div className={styles.lockinCallout}>
              <div className={styles.lockinIcon} aria-hidden="true">
                🔒
              </div>
              <div>
                <h2 className={styles.lockinTitle}>
                  <Translate
                    id="openPage.lockin.title"
                    description="Open page no lock-in title"
                  >
                    Your home never depends on us
                  </Translate>
                </h2>
                <p className={styles.lockinBody}>
                  <Translate
                    id="openPage.lockin.body"
                    description="Open page no lock-in body"
                  >
                    Gladys is open-source (Apache 2.0) and runs 100% locally on
                    your own hardware. If Gladys Plus disappeared tomorrow, your
                    automations would keep running and your data would stay in
                    your home. Gladys Plus is a convenience, never a lock-in, and
                    that is exactly why we can afford to be this transparent.
                  </Translate>
                </p>
              </div>
            </div>
            {loading && (
              <div className={styles.loadingContainer}>
                <div className={styles.metricsGrid}>
                  <div className={styles.skeletonCard}>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonNumber}></div>
                  </div>
                  <div className={styles.skeletonCard}>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonNumber}></div>
                  </div>
                  <div className={styles.skeletonCard}>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonNumber}></div>
                  </div>
                  <div className={styles.skeletonCard}>
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonNumber}></div>
                  </div>
                </div>
                <div className={styles.skeletonChart}></div>
                <div className={styles.skeletonChart}></div>
              </div>
            )}
            {loading === false && (
              <div>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricIcon} aria-hidden="true">
                      🏠
                    </div>
                    <div className={styles.metricValue}>{numberOfInstances}</div>
                    <div className={styles.metricLabel}>
                      <Translate
                        id="openPage.homeRunningGladys"
                        description="Open Page home running Gladys"
                      >
                        Homes running Gladys
                      </Translate>
                    </div>
                    <div className={styles.metricSub}>
                      <Translate
                        id="openPage.metric.homesSub"
                        description="Open page homes metric subtitle"
                      >
                        Live, self-reported
                      </Translate>
                    </div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricIcon} aria-hidden="true">
                      💬
                    </div>
                    <div className={styles.metricValue}>{communityMembers}</div>
                    <div className={styles.metricLabel}>
                      <Translate
                        id="openPage.communityMembers"
                        description="Open Page community members"
                      >
                        Community members
                      </Translate>
                    </div>
                    <div className={styles.metricSub}>
                      <Translate
                        id="openPage.metric.communitySub"
                        description="Open page community metric subtitle"
                      >
                        On the forum and beyond
                      </Translate>
                    </div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricIcon} aria-hidden="true">
                      🌱
                    </div>
                    <div className={styles.metricValue}>{yearsInTheOpen}</div>
                    <div className={styles.metricLabel}>
                      <Translate
                        id="openPage.metric.yearsLabel"
                        description="Open page years metric label"
                      >
                        Years in the open
                      </Translate>
                    </div>
                    <div className={styles.metricSub}>
                      <Translate
                        id="openPage.metric.yearsSub"
                        description="Open page years metric subtitle"
                      >
                        Since 2013, still independent
                      </Translate>
                    </div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricIcon} aria-hidden="true">
                      ❤️
                    </div>
                    <div className={styles.metricValue}>
                      {numberOfGladysPlusUsers}
                    </div>
                    <div className={styles.metricLabel}>
                      <Translate
                        id="openPage.funding.supporters"
                        description="Open Page supporters"
                      >
                        Gladys Plus supporters
                      </Translate>
                    </div>
                    <div className={styles.metricSub}>
                      <Translate
                        id="openPage.metric.supportersSub"
                        description="Open page supporters metric subtitle"
                      >
                        Funding the whole project
                      </Translate>
                    </div>
                  </div>
                </div>
                <section className={styles.openSection}>
                  <div className={styles.openPanel}>
                    <h2 className={styles.openPanelTitle}>
                      <Translate
                        id="openPage.numberOfHomeRunningGladys"
                        description="Chart title"
                      >
                        Homes running Gladys over time
                      </Translate>
                    </h2>
                    <div style={{ height: "400px" }}>
                      <canvas ref={usageChartRef}></canvas>
                    </div>
                    <p className={styles.chartCaption}>
                      <Translate
                        id="openPage.chart.spikeNote"
                        description="Open page instance chart spike explanation"
                      >
                        The February 2026 peak came from a viral "Home Assistant
                        vs Gladys" video that brought a wave of curious users.
                        The base that stayed is still well above where we
                        started, and the long-term trend keeps pointing up. The
                        last, dotted point is the current month, still in
                        progress.
                      </Translate>
                    </p>
                  </div>
                </section>
                <section className={styles.openSection}>
                  <div className={styles.fundingPanel}>
                    <h2 className={styles.openPanelTitle}>
                      <Translate
                        id="openPage.funding.title"
                        description="Open Page funding title"
                      >
                        How the project is funded
                      </Translate>
                    </h2>
                    <p className={styles.openPanelIntro}>
                      <Translate
                        id="openPage.funding.intro"
                        description="Open Page funding intro"
                      >
                        Gladys Plus is the only thing funding Gladys, and it runs
                        entirely on its subscribers. No outside money, no strings
                        attached.
                      </Translate>
                    </p>
                    <div className={styles.fundingStats}>
                      <div className={styles.fundingStat}>
                        <div className={styles.fundingStatValue}>
                          {numberOfGladysPlusUsers}
                        </div>
                        <div className={styles.fundingStatLabel}>
                          <Translate
                            id="openPage.funding.supporters"
                            description="Open Page supporters"
                          >
                            Gladys Plus supporters
                          </Translate>
                        </div>
                      </div>
                      <div className={styles.fundingStat}>
                        <div className={styles.fundingStatValue}>{mrr} €</div>
                        <div className={styles.fundingStatLabel}>
                          <Translate
                            id="openPage.funding.mrr"
                            description="Open Page MRR label"
                          >
                            Monthly recurring revenue
                          </Translate>
                        </div>
                      </div>
                    </div>
                    <p className={styles.fundingNote}>
                      <Translate
                        id="openPage.funding.note"
                        description="Open Page funding note"
                        values={{ count: numberOfGladysPlusUsers }}
                      >
                        {
                          "That's it: {count} people keeping an independent, privacy-first project alive. Every subscription funds servers, infrastructure and development, nothing else. No investors to please, no growth at all costs."
                        }
                      </Translate>
                    </p>
                  </div>
                </section>
                <section className={styles.openSection}>
                  <h2 className={styles.openSectionHeading}>
                    <Translate
                      id="openPage.community.title"
                      description="Open page community section title"
                    >
                      A living community
                    </Translate>
                  </h2>
                  <div className={styles.communityGrid}>
                    <div className={styles.openPanel}>
                      <h3 className={styles.openPanelSubtitle}>
                        <Translate
                          id="openPage.nbOfForumUsers"
                          description="Gladys open page number of forum users"
                        >
                          Forum members
                        </Translate>
                      </h3>
                      <div className={styles.forumUserList}>
                        {usageChartData &&
                          usageChartData.forum_users &&
                          usageChartData.forum_users.map((user) => (
                            <div
                              className={styles.forumUserRow}
                              key={user.user_type}
                            >
                              <span className={styles.forumUserType}>
                                {user.user_type}
                              </span>
                              <span className={styles.forumUserCount}>
                                {user.count}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className={styles.openPanel}>
                      <h3 className={styles.openPanelSubtitle}>
                        <Translate
                          id="openPage.forumPageViews"
                          description="Gladys open forum page views"
                        >
                          Forum page views
                        </Translate>
                      </h3>
                      <div className={styles.openPanelHint}>
                        <Translate
                          id="openPage.lastWeek"
                          description="Gladys Open page last week"
                        >
                          (Last week)
                        </Translate>
                      </div>
                      <div style={{ height: "200px", width: "100%" }}>
                        <canvas ref={forumChartRef}></canvas>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Open;
