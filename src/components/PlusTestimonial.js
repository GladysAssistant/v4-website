import React from "react";
import cx from "classnames";
import Translate from "@docusaurus/Translate";

import testimonialsFr from "./testimonials.fr.json";

import styles from "./styles.module.css";

function Testimonial({ username, content, url, date }) {
  return (
    <div className={cx("card", styles.testimonial)}>
      <div className="card__header">
        <div className="avatar">
          <img
            alt={username}
            className="avatar__photo"
            src={`/fr/img/testimonials/${username}.png`}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={cx("avatar__intro", styles.testimonialMeta)}>
            <strong className="avatar__name">{username}</strong>
            <span>@{username}</span>
          </div>
        </div>
      </div>

      <div className={cx("card__body", styles.testimonial)}>{content}</div>

      <div className="card__footer">
        <a
          className={cx(styles.testimonialMeta, styles.testimonialDate)}
          href={url}
        >
          {date}
        </a>
      </div>
    </div>
  );
}

const testimonials = {
  fr: testimonialsFr,
  en: [],
};

function TestimonialSection({ lang }) {
  const testimonialsColumn = [[], [], []];
  testimonials[lang].forEach((testimonial, i) =>
    testimonialsColumn[i % 3].push(testimonial)
  );

  if (testimonials[lang].length === 0) {
    return null;
  }

  return (
    <section id="testimonial">
      <div className="container">
        <h2 className={cx("margin-bottom--lg", "text--center")}>
          <Translate
            id="gladysPlusPage.testimonialTitle"
            description="Gladys Plus testimonial title"
          >
            Loved by many users
          </Translate>
        </h2>
        <div className={cx("row", styles.testimonialsSection)}>
          {testimonialsColumn.map((testimonialsItem, i) => (
            <div className="col col--4" key={i}>
              {testimonialsItem.map((testimonial) => (
                <Testimonial {...testimonial} key={testimonial.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
