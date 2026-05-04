// Salina Crossroads HM Training — daily glance app
import { PLAN } from "./plan.js";

// ---------- Helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};
const parseISO = (s) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const fmtDate = (s, opts = { weekday: "short", month: "short", day: "numeric" }) =>
  parseISO(s).toLocaleDateString(undefined, opts);
const daysBetween = (aISO, bISO) => Math.round((parseISO(bISO) - parseISO(aISO)) / 86400000);

const ACTIVITY_KIND = {
  Run: "run", Strength: "strength", Bike: "cross",
  "Stationary bike": "cross", Stairmaster: "cross", Rest: "rest",
};
const isRaceDay = (day) => /RACE DAY/.test(day.detail || "");
const activityClass = (day) => isRaceDay(day) ? "race" : (ACTIVITY_KIND[day.activity] || "rest");

// Find current week and day, with sensible fallbacks
function findToday() {
  const today = todayISO();
  for (const w of PLAN.weeks) {
    for (const d of w.days) {
      if (d.date === today) return { week: w, day: d, isToday: true };
    }
  }
  // If today is BEFORE plan starts, return plan's first day with a flag
  if (today < PLAN.weeks[0].days[0].date) {
    return { week: PLAN.weeks[0], day: PLAN.weeks[0].days[0], isToday: false, before: true };
  }
  // After plan ends, return last day
  const lastWeek = PLAN.weeks[PLAN.weeks.length - 1];
  const lastDay = lastWeek.days[lastWeek.days.length - 1];
  return { week: lastWeek, day: lastDay, isToday: false, after: true };
}

function findCurrentWeek() {
  const today = todayISO();
  for (const w of PLAN.weeks) {
    if (today >= w.days[0].date && today <= w.days[6].date) return w;
  }
  if (today < PLAN.weeks[0].days[0].date) return PLAN.weeks[0];
  return PLAN.weeks[PLAN.weeks.length - 1];
}

// Race countdown
function renderCountdown() {
  const days = daysBetween(todayISO(), PLAN.race.date);
  const el = $("#countdown");
  if (!el) return;
  if (days > 0) el.textContent = `${days} day${days === 1 ? "" : "s"} to race  •  ${fmtDate(PLAN.race.date)}`;
  else if (days === 0) el.textContent = `🏁 Race day — ${fmtDate(PLAN.race.date)}`;
  else el.textContent = `Race complete (${-days} day${-days === 1 ? "" : "s"} ago)`;
}

// ---------- Views ----------

function renderToday() {
  const { week, day, isToday, before, after } = findToday();
  const cls = activityClass(day);
  const heroCls = `hero phase-${week.phase_id}` + (cls === "rest" ? " rest" : "") + (cls === "race" ? " race" : "");

  const dateLine = isToday
    ? `Today · ${fmtDate(day.date, { weekday: "long", month: "long", day: "numeric" })}`
    : before
      ? `Plan starts ${fmtDate(day.date, { weekday: "long", month: "long", day: "numeric" })}`
      : after
        ? `Plan complete · ${fmtDate(day.date, { weekday: "long", month: "long", day: "numeric" })}`
        : fmtDate(day.date, { weekday: "long", month: "long", day: "numeric" });

  // Activity title
  let activityTitle = day.activity;
  if (isRaceDay(day)) activityTitle = "🏁 Race Day";
  else if (day.activity === "Run" && day.miles) activityTitle = `${day.miles} mi Run`;
  else if (day.activity === "Strength") activityTitle = day.detail.match(/^STRENGTH ([AB])/) ? `Strength ${day.detail.match(/^STRENGTH ([AB])/)[1]}` : "Strength";
  else if (day.activity === "Stationary bike") activityTitle = "Bike (Cross-Train)";
  else if (day.activity === "Stairmaster") activityTitle = "Stairmaster (Cross-Train)";
  else if (day.activity === "Bike") activityTitle = "Bike";
  else if (day.activity === "Rest") activityTitle = "Rest Day";

  const cal = week.calories;
  const phaseClass = `p${week.phase_id}`;
  const phaseLabel = `Phase ${week.phase_id} · ${week.phase_name}`;

  const stats = [];
  if (day.miles) stats.push({ label: "Miles", value: day.miles, sub: "" });
  if (day.duration_min) stats.push({ label: "Duration", value: `${day.duration_min}m`, sub: "" });
  if (day.hr_zone && day.hr_zone !== "—") {
    const z = (day.hr_zone.match(/Z(\d)/) || [])[1];
    stats.push({ label: "HR Zone", value: day.hr_zone, sub: "", zone: z ? `zone-z${z}` : "" });
  }
  if (day.est_kcal) stats.push({ label: "Est Burn", value: `${day.est_kcal}`, sub: "kcal" });

  // Race countdown
  const daysLeft = daysBetween(todayISO(), PLAN.race.date);
  const countdownHTML = daysLeft >= 0
    ? `<div class="countdown-card">
        <div class="left">
          <div><b>Salina Crossroads HM</b></div>
          <div class="muted">${fmtDate(PLAN.race.date, { weekday: "long", month: "long", day: "numeric", year: "numeric" })} · ${esc(PLAN.race.start_time)}</div>
        </div>
        <div class="num">${daysLeft}<small>${daysLeft === 1 ? "day" : "days"}</small></div>
      </div>` : "";

  // Fueling card (always shows for the week)
  const fuelHTML = `
    <div class="fuel-card">
      <div class="card-title">Today's Fueling Target</div>
      <div class="fuel-grid">
        <div>
          <div class="fuel-target">${cal.daily_intake_target.toLocaleString()} <small>kcal</small></div>
          <div class="muted" style="font-size:12px;margin-top:4px">${cls === "rest" || cls === "strength" ? "Rest/light day → bottom of range" : "Hard training day → top of range"}</div>
        </div>
        <div class="fuel-macro">
          <div class="v">${cal.protein_g_target}g</div>
          <div class="l">Protein</div>
        </div>
        <div class="fuel-macro">
          <div class="v">${cal.fat_g_min}g</div>
          <div class="l">Fat min</div>
        </div>
      </div>
      <div class="muted" style="font-size:12px;margin-top:10px;line-height:1.45">
        Projected weight this week: <b style="color:var(--text)">${cal.projected_weight_lb} lb</b> · BMR <b style="color:var(--text)">${cal.bmr.toLocaleString()}</b> · Daily TDEE <b style="color:var(--text)">${cal.daily_tdee.toLocaleString()}</b>
      </div>
    </div>`;

  return `
    ${countdownHTML}
    <div class="${heroCls}">
      <div class="hero-meta">
        <span class="phase-pill ${phaseClass}">${esc(phaseLabel)}</span>
        <span>Week ${week.week} of ${PLAN.total_weeks}</span>
      </div>
      <div class="hero-day">${esc(dateLine)}</div>
      <div class="hero-activity ${cls}">${esc(activityTitle)}</div>
      <div class="hero-detail">${esc(day.detail)}</div>
      ${stats.length ? `
      <div class="hero-stats">
        ${stats.map(s => `
          <div class="stat ${s.zone || ""}">
            <div class="stat-label">${esc(s.label)}</div>
            <div class="stat-value">${esc(String(s.value))}</div>
            ${s.sub ? `<div class="stat-sub">${esc(s.sub)}</div>` : ""}
          </div>
        `).join("")}
      </div>` : ""}
    </div>
    ${fuelHTML}
    ${cls === "rest" ? `
      <div class="card compact">
        <div class="card-title">Rest Day Reminders</div>
        <ul class="bullets" style="font-size:13px">
          <li>Sleep 7-9 hrs tonight. This is when adaptation happens.</li>
          <li>Hydrate baseline (~0.5-1.0 oz fluid/lb bodyweight).</li>
          <li>Light mobility/foam roll if feeling stiff. NOT a workout.</li>
          <li>Hit bottom of calorie range — rest day means full deficit.</li>
        </ul>
      </div>` : ""}
    ${cls === "run" && day.duration_min > 60 ? `
      <div class="card compact">
        <div class="card-title">Long Run Fueling Protocol</div>
        <ul class="bullets" style="font-size:13px">
          <li>30-50g carbs 30-60 min before. 8-12 oz water.</li>
          <li>1 gel (25-30g carbs) every 30-40 min after the first 45 min.</li>
          <li>Sip 4-6 oz water/electrolyte every 15 min.</li>
          <li>Within 60 min after: 30g protein + 50-80g carbs.</li>
        </ul>
      </div>` : ""}
    ${isRaceDay(day) ? `
      <div class="card compact" style="border-color:var(--accent-hot)">
        <div class="card-title" style="color:var(--accent-hot)">Race Day Pacing</div>
        <table class="ref-table">
          <thead><tr><th>Miles</th><th>Pace</th><th>HR</th><th>Cue</th></tr></thead>
          <tbody>
            <tr><td><b>1-3</b></td><td>11:30-11:35</td><td>165-175</td><td>Will FEEL too easy. RESIST.</td></tr>
            <tr><td><b>4-7</b></td><td>11:25-11:32</td><td>175-185</td><td>Lock rhythm. Gel @ mile 4.</td></tr>
            <tr><td><b>8-10</b></td><td>11:25-11:32</td><td>180-188</td><td>Gel @ mile 8. Stay patient.</td></tr>
            <tr><td><b>11-13</b></td><td>11:20-11:30</td><td>188-195</td><td>Race starts now. Empty the tank.</td></tr>
          </tbody>
        </table>
      </div>` : ""}
    <div class="foot-note">Plan: ${PLAN.weeks[0].days[0].date} → ${PLAN.race.date} · 27 weeks · sub-2:30 / 250→225 lb</div>
  `;
}

function renderWeek() {
  const w = findCurrentWeek();
  const today = todayISO();
  const phaseClass = `p${w.phase_id}`;

  const summary = `
    <div class="week-summary">
      <div><div class="card-title" style="margin-bottom:4px">Week</div><div style="font-size:22px;font-weight:800">${w.week} <span style="color:var(--text-dim);font-size:13px">/ ${PLAN.total_weeks}</span></div></div>
      <div><div class="card-title" style="margin-bottom:4px">Phase</div><div style="font-size:14px;font-weight:700"><span class="phase-pill ${phaseClass}" style="display:inline-block">P${w.phase_id}</span> ${esc(w.phase_name)}</div></div>
      <div><div class="card-title" style="margin-bottom:4px">Total Miles</div><div style="font-size:22px;font-weight:800">${w.total_miles}</div></div>
      <div><div class="card-title" style="margin-bottom:4px">Long Run</div><div style="font-size:22px;font-weight:800">${w.long_miles}</div></div>
    </div>
    <div class="week-summary" style="grid-template-columns:repeat(3,1fr)">
      <div><div class="card-title" style="margin-bottom:4px">Daily kcal</div><div style="font-size:18px;font-weight:700">${w.calories.daily_intake_target.toLocaleString()}</div></div>
      <div><div class="card-title" style="margin-bottom:4px">Protein/day</div><div style="font-size:18px;font-weight:700">${w.calories.protein_g_target}g</div></div>
      <div><div class="card-title" style="margin-bottom:4px">Proj Weight</div><div style="font-size:18px;font-weight:700">${w.calories.projected_weight_lb}<span style="color:var(--text-dim);font-size:12px">lb</span></div></div>
    </div>
  `;

  const dayRows = w.days.map(d => {
    const cls = activityClass(d);
    const isToday = d.date === today;
    const dDate = parseISO(d.date);
    let title = d.activity;
    if (isRaceDay(d)) title = "🏁 RACE DAY";
    else if (d.activity === "Stationary bike") title = "Bike";
    else if (d.activity === "Run" && d.miles) title = `Run · ${d.miles} mi`;
    else if (d.activity === "Strength") {
      const m = d.detail.match(/^STRENGTH ([AB])/);
      title = m ? `Strength ${m[1]}` : "Strength";
    }
    const stats = [];
    if (d.miles) stats.push(`<b>${d.miles}</b>mi`);
    if (d.duration_min) stats.push(`<b>${d.duration_min}</b>m`);
    return `
      <div class="day-row ${isToday ? "today" : ""} ${cls === "race" ? "race" : ""}">
        <div>
          <div class="day-name">${esc(d.day_name)}</div>
          <div class="day-date">${dDate.getDate()}</div>
        </div>
        <div>
          <div class="day-activity ${cls}">${esc(title)}${isToday ? ' <span class="tag" style="color:var(--accent);background:rgba(78,161,255,0.12)">TODAY</span>' : ""}</div>
          <div class="day-detail">${esc(d.detail)}</div>
        </div>
        <div class="day-stats">${stats.join(" · ") || "&nbsp;"}</div>
      </div>
    `;
  }).join("");

  return `
    ${summary}
    <div class="section-title">Daily Schedule · ${fmtDate(w.days[0].date)} – ${fmtDate(w.days[6].date)}</div>
    ${dayRows}
  `;
}

function renderReference() {
  // HR Zones
  const zonesHTML = PLAN.hr_zones.map(z => {
    const k = z.zone.toLowerCase();
    return `
      <div class="zone-row">
        <div class="zone-badge ${k}">${esc(z.zone)}</div>
        <div>
          <div class="zone-name">${esc(z.name)}</div>
          <div class="zone-purpose">${esc(z.purpose)}</div>
        </div>
        <div class="zone-bpm">${z.lo_bpm}-${z.hi_bpm}<small>${Math.round(z.lo_pct*100)}-${Math.round(z.hi_pct*100)}%</small></div>
      </div>
    `;
  }).join("");

  // Pace targets
  const paceRows = PLAN.pace_targets.map((p, i) => `
    <tr>
      <td><b>${esc(p.phase)}</b></td>
      <td class="center">${esc(p.easy)}</td>
      <td class="center">${esc(p.long)}</td>
      <td class="center">${esc(p.tempo)}</td>
      <td class="center">${esc(p.race_pace)}</td>
      <td class="center">${esc(p.intervals)}</td>
    </tr>
  `).join("");

  // Pace -> half conversion
  const paces = [
    [10.5, "2:17:35"], [10.75, "2:20:53"], [11.0, "2:24:12"],
    [11.25, "2:27:30"], [11.45, "2:30:00"], [11.5, "2:30:48"],
    [11.75, "2:34:06"], [12.0, "2:37:24"], [12.25, "2:40:42"],
    [12.5, "2:44:00"], [12.75, "2:47:18"], [13.0, "2:50:36"],
  ];
  const fmtP = (p) => { const m = Math.floor(p); const s = Math.round((p-m)*60); return `${m}:${String(s).padStart(2,'0')}`; };
  const paceConv = paces.map(([p, t]) => `
    <tr><td class="center"><b>${fmtP(p)}</b></td><td class="center" style="${p===11.45?'color:var(--accent-cool);font-weight:700':''}">${esc(t)}</td></tr>
  `).join("");

  // Race day protocol
  const raceHTML = PLAN.race_day_protocol.map(r => `
    <div class="race-step">
      <div class="when">${esc(r.when)}</div>
      <div class="what">${esc(r.what)}</div>
    </div>
  `).join("");

  // Strength templates
  const strengthA = [
    ["Goblet/SSB Squat", "P1-2: 4×6 / P3: 3×5 / P4: 2×6 light"],
    ["Trap-Bar Deadlift", "3×5 heavy (P1-2), 3×5 mod (P3), skip if back symptomatic (P4)"],
    ["Bulgarian Split Squat (LEFT first)", "3×8/leg → 2×8 → 1×8"],
    ["Nordic Curl OR RDL eccentric", "3×6 → 2×6 → 2×6 (NON-NEGOTIABLE)"],
    ["Cable Face Pull", "3×12 every session (cuff prehab)"],
    ["Dead Bug", "3×10/side (vagus-friendly core)"],
  ];
  const strengthB = [
    ["Landmine Press (PRIMARY vertical)", "4×6/arm → 3×6 → 2×5"],
    ["Chest-Supported Row", "4×8 → 3×8 → 2×8"],
    ["Lat Pulldown / Pull-ups", "3×10 → 2×10 → —"],
    ["DB Single-Arm Row", "3×10/arm → 2×10 → —"],
    ["Cable External Rotation", "3×12/arm every session (cuff)"],
    ["Pallof Press", "3×10/side → 3×10 → 2×10"],
  ];
  const strRowsA = strengthA.map(([n,s]) => `<tr><td><b>${esc(n)}</b></td><td>${esc(s)}</td></tr>`).join("");
  const strRowsB = strengthB.map(([n,s]) => `<tr><td><b>${esc(n)}</b></td><td>${esc(s)}</td></tr>`).join("");

  // Nutrition
  const nutritionHTML = `<ul class="bullets">${PLAN.nutrition_rules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>`;

  // Phase summary
  const phaseRows = PLAN.phases.map(p => {
    const start = PLAN.weeks[p.weeks[0]-1].days[0].date;
    const end = PLAN.weeks[p.weeks[1]-1].days[6].date;
    return `<tr>
      <td><span class="phase-pill p${p.id}" style="display:inline-block">P${p.id}</span></td>
      <td><b>${esc(p.name)}</b></td>
      <td class="center">W${p.weeks[0]}-${p.weeks[1]}</td>
      <td class="center">${fmtDate(start, {month:"short",day:"numeric"})} – ${fmtDate(end, {month:"short",day:"numeric"})}</td>
      <td class="center">${p.deficit_kcal || "Maint"}</td>
    </tr>`;
  }).join("");

  return `
    <div class="ref-section">
      <h2>Phase Structure</h2>
      <table class="ref-table">
        <thead><tr><th></th><th>Name</th><th class="center">Weeks</th><th class="center">Dates</th><th class="center">Deficit</th></tr></thead>
        <tbody>${phaseRows}</tbody>
      </table>
    </div>

    <div class="ref-section">
      <h2>Heart Rate Zones · Max HR 200</h2>
      ${zonesHTML}
    </div>

    <div class="ref-section">
      <h2>Pace Targets by Phase</h2>
      <table class="ref-table">
        <thead><tr><th>Phase</th><th class="center">Easy</th><th class="center">Long</th><th class="center">Tempo</th><th class="center">Race</th><th class="center">Intervals</th></tr></thead>
        <tbody>${paceRows}</tbody>
      </table>
    </div>

    <div class="ref-section">
      <h2>Pace → Half Time</h2>
      <table class="ref-table">
        <thead><tr><th class="center">Pace</th><th class="center">Time</th></tr></thead>
        <tbody>${paceConv}</tbody>
      </table>
    </div>

    <div class="ref-section">
      <h2>Strength A · Lower Bias</h2>
      <table class="ref-table">
        <thead><tr><th>Exercise</th><th>Sets × Reps (P1-2 → P3 → P4)</th></tr></thead>
        <tbody>${strRowsA}</tbody>
      </table>
    </div>

    <div class="ref-section">
      <h2>Strength B · Upper Bias</h2>
      <table class="ref-table">
        <thead><tr><th>Exercise</th><th>Sets × Reps (P1-2 → P3 → P4)</th></tr></thead>
        <tbody>${strRowsB}</tbody>
      </table>
    </div>

    <div class="ref-section">
      <h2>Race Day Protocol</h2>
      ${raceHTML}
    </div>

    <div class="ref-section">
      <h2>Nutrition Rules</h2>
      ${nutritionHTML}
    </div>

    <div class="foot-note">All zones validated against your race-day data. Max HR = 200 measured.</div>
  `;
}

// ---------- Router ----------
const VIEWS = { today: renderToday, week: renderWeek, reference: renderReference };

function setView(name) {
  if (!VIEWS[name]) name = "today";
  $("#view").innerHTML = VIEWS[name]();
  $("#view").scrollTop = 0;
  window.scrollTo(0, 0);
  // Update active states on both nav sets
  $$(".tab").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  $$(".bnav").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  if (location.hash !== `#${name}`) history.replaceState(null, "", `#${name}`);
}

function init() {
  renderCountdown();
  // Hook up nav buttons
  $$(".tab, .bnav").forEach(btn => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });
  // Initial view from hash, default Today
  const initial = (location.hash || "#today").slice(1);
  setView(initial);

  // Re-render when window regains focus (in case the date rolled over while app was idle)
  window.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      renderCountdown();
      const cur = $$(".tab.active, .bnav.active")[0]?.dataset.view || "today";
      setView(cur);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
