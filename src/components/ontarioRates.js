// Ontario Regulated Price Plan schedule, computed in the browser.
// Times are in Ontario time (America/Toronto). Prices live in
// src/data/ontarioElectricityRatesData.js; this file only knows which
// period applies at a given moment.

export const TZ = "America/Toronto";

// Wall-clock parts of a Date in Ontario time.
export function ontarioParts(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  return {
    year: Number(get("year")),
    month: Number(get("month")),
    day: Number(get("day")),
    hour: Number(get("hour")),
    minute: Number(get("minute")),
    weekday: get("weekday"), // Mon, Tue...
    key: `${get("year")}-${get("month")}-${get("day")}`,
  };
}

const pad = (n) => String(n).padStart(2, "0");
const keyOf = (y, m, d) => `${y}-${pad(m)}-${pad(d)}`;

// Day of week (0 = Sunday) of a calendar date.
const dow = (y, m, d) => new Date(Date.UTC(y, m - 1, d)).getUTCDay();

// nth weekday (0 = Sunday) of a month, e.g. 3rd Monday of February.
function nthWeekday(y, m, weekday, n) {
  const first = dow(y, m, 1);
  return 1 + ((weekday - first + 7) % 7) + (n - 1) * 7;
}

// Easter Sunday (Anonymous Gregorian algorithm).
function easter(y) {
  const a = y % 19;
  const b = Math.floor(y / 100);
  const c = y % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

// A fixed-date holiday that falls on a weekend is observed on the next
// weekday that isn't already a holiday.
function observed(y, m, d, taken) {
  let date = new Date(Date.UTC(y, m - 1, d));
  while (
    date.getUTCDay() === 0 ||
    date.getUTCDay() === 6 ||
    taken.has(date.toISOString().slice(0, 10))
  ) {
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return date.toISOString().slice(0, 10);
}

// Holidays treated as off-peak by the Ontario Energy Board.
export function ontarioHolidays(y) {
  const set = new Set();
  const e = easter(y);
  const goodFriday = new Date(Date.UTC(y, e.month - 1, e.day - 2));
  // Victoria Day: the Monday before May 25.
  const may24 = dow(y, 5, 24);
  const victoria = 24 - ((may24 + 6) % 7);
  [
    keyOf(y, 2, nthWeekday(y, 2, 1, 3)), // Family Day
    goodFriday.toISOString().slice(0, 10),
    keyOf(y, 5, victoria),
    keyOf(y, 8, nthWeekday(y, 8, 1, 1)), // Civic Holiday
    keyOf(y, 9, nthWeekday(y, 9, 1, 1)), // Labour Day
    keyOf(y, 10, nthWeekday(y, 10, 1, 2)), // Thanksgiving
  ].forEach((k) => set.add(k));
  set.add(observed(y, 1, 1, set)); // New Year's Day
  set.add(observed(y, 7, 1, set)); // Canada Day
  set.add(observed(y, 12, 25, set)); // Christmas Day
  set.add(observed(y, 12, 26, set)); // Boxing Day
  return set;
}

const isWinter = (month) => month >= 11 || month <= 4; // Nov 1 to Apr 30

// Period of a plan at a given wall-clock hour.
export function periodAt(plan, p, holidays) {
  const offDay =
    p.weekday === "Sat" || p.weekday === "Sun" || holidays.has(p.key);
  const h = p.hour;
  if (plan === "ulo") {
    if (h >= 23 || h < 7) return "ultraLow";
    if (offDay) return "weekendOff";
    if (h >= 16 && h < 21) return "on";
    return "mid";
  }
  // Time-of-Use
  if (offDay || h >= 19 || h < 7) return "off";
  const morningOrEvening = (h >= 7 && h < 11) || (h >= 17 && h < 19);
  if (isWinter(p.month)) return morningOrEvening ? "on" : "mid";
  return morningOrEvening ? "mid" : "on";
}

// The 24 hourly periods of the day containing `date`.
export function dayTimeline(plan, date) {
  const p = ontarioParts(date);
  const holidays = ontarioHolidays(p.year);
  return Array.from({ length: 24 }, (_, hour) =>
    periodAt(plan, { ...p, hour }, holidays)
  );
}
