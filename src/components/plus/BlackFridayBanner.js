import React, { useEffect, useState } from "react";
import { BLACK_FRIDAY_CONFIG } from "../../config/blackFriday";

const blackFridayEndDate = BLACK_FRIDAY_CONFIG.END_DATE;

function BlackFridayBanner({ language }) {
  const [active, setActive] = useState(BLACK_FRIDAY_CONFIG.ENABLED);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!BLACK_FRIDAY_CONFIG.ENABLED) return;
    const tick = () => {
      const now = new Date();
      const distance = blackFridayEndDate - now;
      if (distance < 0) {
        setActive(false);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!active) return null;

  const isFr = language === "fr";

  const cell = (value, label) => (
    <div
      style={{
        background: "rgba(255,255,255,0.2)",
        padding: "0.75rem 1.25rem",
        borderRadius: "8px",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{value}</div>
      <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>{label}</div>
    </div>
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "1.5rem 1rem",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "0 0 0.5rem 0",
            color: "white",
          }}
        >
          🎁{" "}
          {isFr
            ? "BLACK FRIDAY : -30% sur la première année !"
            : "BLACK FRIDAY: -30% off the first year!"}
        </h2>
        <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0", opacity: 0.95 }}>
          {isFr
            ? "Utilisez le code promo BLACK-FRIDAY-2025 lors de votre inscription"
            : "Use promo code BLACK-FRIDAY-2025 when subscribing"}
        </p>
        <p style={{ fontSize: "0.95rem", margin: "0 0 1rem 0", opacity: 0.85 }}>
          {isFr
            ? "(Offre réservée aux nouveaux clients)"
            : "(Offer for new customers only)"}
        </p>
        {timeLeft && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1rem",
            }}
          >
            {timeLeft.days > 0 && cell(timeLeft.days, isFr ? "jours" : "days")}
            {cell(timeLeft.hours, isFr ? "heures" : "hours")}
            {cell(timeLeft.minutes, isFr ? "minutes" : "minutes")}
            {cell(timeLeft.seconds, isFr ? "secondes" : "seconds")}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlackFridayBanner;
