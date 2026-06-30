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

  data.gladys_4_instances.forEach((elem, index) => {
    if (index < data.gladys_4_instances.length - 1) {
      labels.push(elem.month);
      points.push(elem.nb_instances);
    }
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

function Open() {
  const context = useDocusaurusContext();
  const [usageChartCanva, setUsageChartCanva] = useState(null);
  const [forumPageViewsCanva, setForumPageViewsCanva] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usageChartData, setUsageChartData] = useState(null);
  const { i18n } = context;
  const language = i18n.currentLocale;
  const urlPrefix = language === "fr" ? "/fr" : "";

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
    const config = {
      type: "line",
      data: {
        labels: usageChartData.labels,
        datasets: [
          {
            label: "Number of Gladys instances",
            borderColor: "#74b9ff",
            data: usageChartData.points,
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
              text: "Number of instances",
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
            <div className="row">
              <div className="col col--12">
                <h1
                  className="text--center"
                  style={{
                    fontSize: "50px",
                  }}
                >
                  <Translate
                    id="openPage.title"
                    description="Gladys open page title"
                  >
                    Open metrics
                  </Translate>
                </h1>
                <p className="text--center">
                  <Translate
                    id="openPage.description"
                    description="Open page description"
                  >
                    Gladys Assistant is radically transparent. Here are our real
                    numbers, live: how many homes run Gladys, our community, and
                    how the project is funded. No investors, no ads, no data
                    resale, just a project funded by the people who use it.
                  </Translate>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className="alert alert--info" role="note">
                  <h2 style={{ marginTop: 0 }}>
                    <Translate
                      id="openPage.lockin.title"
                      description="Open page no lock-in title"
                    >
                      Your home never depends on us
                    </Translate>
                  </h2>
                  <p style={{ marginBottom: 0 }}>
                    <Translate
                      id="openPage.lockin.body"
                      description="Open page no lock-in body"
                    >
                      Gladys is open-source (Apache 2.0) and runs 100% locally on
                      your own hardware. Even if Gladys Plus disappeared
                      tomorrow, your automations keep running and your data stays
                      in your home. Gladys Plus is a convenience, never a
                      lock-in, and that is exactly why we can afford to be this
                      transparent.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>
            {loading && (
              <div className={styles.loadingContainer}>
                <div className="row">
                  <div className="col col--4">
                    <div className={styles.skeletonCard}>
                      <div className={styles.skeletonTitle}></div>
                      <div className={styles.skeletonNumber}></div>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className={styles.skeletonCard}>
                      <div className={styles.skeletonTitle}></div>
                      <div className={styles.skeletonNumber}></div>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className={styles.skeletonCard}>
                      <div className={styles.skeletonTitle}></div>
                      <div className={styles.skeletonNumber}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.skeletonChart}></div>
                <div className={styles.skeletonChart}></div>
              </div>
            )}
            {loading === false && (
              <div>
                <div className="row">
                  <div className={"col col--4 " + styles.openPageCard}>
                    <div className="card">
                      <div className="card__body">
                        <div className="text--center">
                          <Translate
                            id="openPage.homeRunningGladys"
                            description="Open Page home running Gladys"
                          >
                            Homes running Gladys
                          </Translate>
                        </div>
                        <h3
                          className="text--center"
                          style={{ fontSize: "4rem" }}
                        >
                          {numberOfInstances}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className={"col col--4 " + styles.openPageCard}>
                    <div className="card">
                      <div className="card__body">
                        <div className="text--center">
                          <Translate
                            id="openPage.communityMembers"
                            description="Open Page community members"
                          >
                            Community members
                          </Translate>
                        </div>
                        <h3
                          className="text--center"
                          style={{ fontSize: "4rem" }}
                        >
                          {communityMembers}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className={"col col--4 " + styles.openPageCard}>
                    <div className="card">
                      <div className="card__body">
                        <div className="text--center">
                          <Translate
                            id="openPage.onlineSince"
                            description="Open Page online since"
                          >
                            Online since
                          </Translate>
                        </div>
                        <h3
                          className="text--center"
                          style={{ fontSize: "4rem" }}
                        >
                          2019
                        </h3>
                        <div className="text--center text--secondary">
                          <Translate
                            id="openPage.onlineSinceSubtitle"
                            description="Open Page online since subtitle"
                          >
                            with near-zero downtime
                          </Translate>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={"row " + styles.openPageChartRow}>
                  <div className={"col col--12 " + styles.openPageCard}>
                    <div className="card">
                      <div className="card__body">
                        <h2 className="text--center">
                          <Translate
                            id="openPage.numberOfHomeRunningGladys"
                            description="Chart title"
                          >
                            Number of home running Gladys
                          </Translate>
                        </h2>
                        <div style={{ height: "400px" }}>
                          <canvas ref={usageChartRef}></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"row " + styles.openPageChartRow}>
                  <div className={"col col--12 " + styles.openPageCard}>
                    <div className="card">
                      <div className="card__body">
                        <h2 className="text--center">
                          <Translate
                            id="openPage.funding.title"
                            description="Open Page funding title"
                          >
                            How the project is funded
                          </Translate>
                        </h2>
                        <p className="text--center">
                          <Translate
                            id="openPage.funding.intro"
                            description="Open Page funding intro"
                          >
                            Gladys Plus is the only thing funding Gladys, and it
                            is powered entirely by its subscribers. No outside
                            money.
                          </Translate>
                        </p>
                        <div className="row">
                          <div className="col col--6 text--center">
                            <div>
                              <Translate
                                id="openPage.funding.supporters"
                                description="Open Page supporters"
                              >
                                Gladys Plus supporters
                              </Translate>
                            </div>
                            <h3 style={{ fontSize: "3.5rem", marginBottom: 0 }}>
                              {numberOfGladysPlusUsers}
                            </h3>
                          </div>
                          <div className="col col--6 text--center">
                            <div>
                              <Translate
                                id="openPage.funding.mrr"
                                description="Open Page MRR label"
                              >
                                Monthly recurring revenue
                              </Translate>
                            </div>
                            <h3 style={{ fontSize: "3.5rem", marginBottom: 0 }}>
                              {mrr} €
                            </h3>
                          </div>
                        </div>
                        <p
                          className="text--center"
                          style={{ marginTop: "1.5rem", marginBottom: 0 }}
                        >
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
                    </div>
                  </div>
                </div>
                <div class={"row " + styles.openPageChartRow}>
                  <div className={"col col--4 " + styles.openPageCard}>
                    <div className="card" style={{ height: "270px" }}>
                      <div className="card__body">
                        <h2 className="text--center">
                          <Translate
                            id="openPage.lastYearReviews"
                            description="Last year reviews"
                          >
                            Last years reviews
                          </Translate>
                        </h2>
                        <ul>
                          <li className={styles.openPageList}>
                            <a href={`${urlPrefix}/blog/2024-year-in-review`}>
                              <Translate
                                id="openPage.yearlyReview"
                                description="Yearly reviews"
                                values={{ year: 2024 }}
                              >
                                {"{year} yearly review"}
                              </Translate>
                            </a>
                          </li>
                          <li className={styles.openPageList}>
                            <a href={`${urlPrefix}/blog/2023-year-in-review`}>
                              <Translate
                                id="openPage.yearlyReview"
                                description="Yearly reviews"
                                values={{ year: 2023 }}
                              >
                                {"{year} yearly review"}
                              </Translate>
                            </a>
                          </li>
                          <li className={styles.openPageList}>
                            <a href={`${urlPrefix}/blog/2022-year-in-review`}>
                              <Translate
                                id="openPage.yearlyReview"
                                description="Yearly reviews"
                                values={{ year: 2022 }}
                              >
                                {"{year} yearly review"}
                              </Translate>
                            </a>
                          </li>
                          <li className={styles.openPageList}>
                            <a href={`${urlPrefix}/blog/2021-year-in-review`}>
                              <Translate
                                id="openPage.yearlyReview"
                                description="Yearly reviews"
                                values={{ year: 2021 }}
                              >
                                {"{year} yearly review"}
                              </Translate>
                            </a>
                          </li>
                          <li className={styles.openPageList}>
                            <a
                              href={`${urlPrefix}/blog/bilan-2020-gladys-assistant`}
                            >
                              <Translate
                                id="openPage.yearlyReview"
                                description="Yearly reviews"
                                values={{ year: 2020 }}
                              >
                                {"{year} yearly review"}
                              </Translate>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={"col col--4 " + styles.openPageCard}>
                    <div className="card" style={{ height: "270px" }}>
                      <div className="card__body">
                        <h2 className="text--center">
                          <Translate
                            id="openPage.nbOfForumUsers"
                            description="Gladys open page number of forum users"
                          >
                            No. of forum users
                          </Translate>
                        </h2>
                        <ul>
                          {usageChartData &&
                            usageChartData.forum_users &&
                            usageChartData.forum_users.map((user) => (
                              <li className={styles.openPageList}>
                                <b>{user.user_type}:</b> {user.count}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={"col col--4 " + styles.openPageCard}>
                    <div className="card" style={{ height: "270px" }}>
                      <div className="card__header">
                        <h2
                          className="text--center"
                          style={{ marginBottom: 0 }}
                        >
                          <Translate
                            id="openPage.forumPageViews"
                            description="Gladys open forum page views"
                          >
                            Forum page views
                          </Translate>
                        </h2>
                        <div className="text--center">
                          <Translate
                            id="openPage.lastWeek"
                            description="Gladys Open page last week"
                          >
                            (Last week)
                          </Translate>
                        </div>
                      </div>
                      <div className="card__body">
                        <div
                          style={{
                            height: "150px",
                            width: "100%",
                          }}
                        >
                          <canvas ref={forumChartRef}></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Open;
