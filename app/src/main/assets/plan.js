// Auto-generated training plan data — do not edit.
// Source: plan_data.py
export const PLAN = {
 "athlete": {
  "name": "Keith",
  "age_start": 39,
  "age_race": 40,
  "height_in": 75,
  "height_cm": 190.5,
  "sex": "male",
  "weight_start_lb": 250,
  "weight_goal_lb": 225,
  "max_hr": 200,
  "current_pr_half": "2:48:19",
  "recent_half": "2:51:47",
  "goal_half": "Sub 2:30:00",
  "bmr_start": 2135
 },
 "race": {
  "name": "Salina Crossroads Half-Marathon",
  "date": "2026-11-07",
  "start_time": "8:00 AM CST",
  "location": "Downtown Salina, KS",
  "distance_mi": 13.10938,
  "elev_min_ft": 1209,
  "elev_max_ft": 1292,
  "course_notes": "One loop, flat & fast, Boston Qualifier course.",
  "goal_time_seconds": 9000,
  "goal_pace_min_per_mi": 11.440917368581378
 },
 "plan_start": "2026-05-04",
 "total_weeks": 27,
 "phases": [
  {
   "id": 1,
   "name": "Base & Foundation",
   "weeks": [
    1,
    6
   ],
   "focus": "Aerobic base. HR-gated easy running ONLY. Discipline beats intensity.",
   "deficit_kcal": 500,
   "expected_loss_lb_per_wk": 1.0,
   "strength_per_wk": 2,
   "cross_per_wk": 1,
   "runs_per_wk": 3,
   "key_workouts": "All Z2 runs. No tempo, no intervals. Strides only at end of plan phase."
  },
  {
   "id": 2,
   "name": "Aerobic Development",
   "weeks": [
    7,
    14
   ],
   "focus": "Build mileage. Add strides + first easy tempo work. Still polarized.",
   "deficit_kcal": 500,
   "expected_loss_lb_per_wk": 1.0,
   "strength_per_wk": 2,
   "cross_per_wk": 1,
   "runs_per_wk": 4,
   "key_workouts": "Strides 2x/wk, fartlek, first tempo intervals (4x5min Z4)."
  },
  {
   "id": 3,
   "name": "Threshold & Race-Specific",
   "weeks": [
    15,
    22
   ],
   "focus": "Lift threshold. Race-pace specificity. Mileage peaks ~40 mi.",
   "deficit_kcal": 350,
   "expected_loss_lb_per_wk": 0.7,
   "strength_per_wk": 2,
   "cross_per_wk": 1,
   "runs_per_wk": 4,
   "key_workouts": "Threshold intervals (2x15min, 3x10min), race-pace tempos, hill strides."
  },
  {
   "id": 4,
   "name": "Sharpen & Taper",
   "weeks": [
    23,
    27
   ],
   "focus": "Race specificity, then volume drop while preserving intensity. Race week 27.",
   "deficit_kcal": 0,
   "expected_loss_lb_per_wk": 0.0,
   "strength_per_wk": 1,
   "cross_per_wk": 1,
   "runs_per_wk": 4,
   "key_workouts": "Race-pace cutdowns, dress-rehearsal long run, taper week."
  }
 ],
 "hr_zones": [
  {
   "zone": "Z1",
   "name": "Recovery / Walk",
   "lo_pct": 0.5,
   "hi_pct": 0.65,
   "lo_bpm": 100,
   "hi_bpm": 130,
   "purpose": "Walking, cooldown, very easy spinning. Active recovery between hard sessions."
  },
  {
   "zone": "Z2",
   "name": "Aerobic Easy (TRAINING ANCHOR)",
   "lo_pct": 0.65,
   "hi_pct": 0.75,
   "lo_bpm": 130,
   "hi_bpm": 150,
   "purpose": "Easy runs, long runs, base-building. ~80% of weekly volume lives here. If you can hold a full conversation, you're in Z2."
  },
  {
   "zone": "Z3",
   "name": "Aerobic Moderate (GRAY ZONE - LIMIT)",
   "lo_pct": 0.75,
   "hi_pct": 0.85,
   "lo_bpm": 150,
   "hi_bpm": 170,
   "purpose": "Steady-state, marathon pace, 'comfortably hard'. Useful in moderation but easy to over-occupy. Plan minimizes time here."
  },
  {
   "zone": "Z4",
   "name": "Threshold (Lactate Threshold)",
   "lo_pct": 0.85,
   "hi_pct": 0.92,
   "lo_bpm": 170,
   "hi_bpm": 184,
   "purpose": "Tempo runs, threshold intervals, half-marathon race effort. Sentence-by-sentence speech only."
  },
  {
   "zone": "Z5",
   "name": "VO2 Max / Anaerobic",
   "lo_pct": 0.92,
   "hi_pct": 1.0,
   "lo_bpm": 184,
   "hi_bpm": 200,
   "purpose": "Short hard intervals (3-5 min). Develops top-end. Used sparingly, mid-block onward."
  }
 ],
 "pace_targets": [
  {
   "phase": "Phase 1: Base (W1-6)",
   "easy": "13:30-14:30",
   "long": "13:30-14:00",
   "tempo": "—",
   "race_pace": "—",
   "intervals": "—"
  },
  {
   "phase": "Phase 2: Aerobic Dev (W7-14)",
   "easy": "13:00-14:00",
   "long": "13:00-13:45",
   "tempo": "11:45-12:15",
   "race_pace": "—",
   "intervals": "10:45-11:00 (strides)"
  },
  {
   "phase": "Phase 3: Threshold (W15-22)",
   "easy": "12:30-13:30",
   "long": "12:30-13:15",
   "tempo": "11:30-11:50",
   "race_pace": "11:25-11:35",
   "intervals": "10:15-10:45"
  },
  {
   "phase": "Phase 4: Sharpen+Taper (W23-27)",
   "easy": "12:15-13:15",
   "long": "12:30-13:00",
   "tempo": "11:25-11:40",
   "race_pace": "11:25-11:30",
   "intervals": "10:15-10:30"
  }
 ],
 "strength_library": [
  {
   "name": "Goblet / SSB Squat",
   "muscles": "Quads, glutes, core",
   "sets": "4x6 (Phase 1-2) / 3x5 (Phase 3) / 2x6 light (Phase 4)",
   "cues": "Heels down, knees track over toes, brace core. Use SSB to avoid loaded neck flexion.",
   "injury": "Vagus-safe alternative to back squat. Avoid HBBS/front rack if symptoms flare."
  },
  {
   "name": "Trap-Bar Deadlift",
   "muscles": "Posterior chain, glutes, lats",
   "sets": "3x5 heavy",
   "cues": "Neutral spine, wedge into bar, push floor away. Stop 1-2 reps shy of failure.",
   "injury": "Lower-back-friendly. Skip if back is symptomatic this week — sub RDL."
  },
  {
   "name": "Bulgarian Split Squat",
   "muscles": "Quads, glutes, single-leg stability",
   "sets": "3x8/leg",
   "cues": "Front-foot drive, vertical torso, control descent.",
   "injury": "Excellent for hip stability, knee tracking. Address LEFT-side weakness first."
  },
  {
   "name": "Romanian Deadlift",
   "muscles": "Hamstrings, glutes, lower back",
   "sets": "3x8",
   "cues": "Hinge from hips, knees soft, bar/DB tracks shins.",
   "injury": "Critical for L-hamstring tightness — eccentric emphasis (3-sec lower)."
  },
  {
   "name": "Nordic Curl (band-assisted)",
   "muscles": "Hamstring eccentric strength",
   "sets": "3x6",
   "cues": "Slow lower (4-5 sec), use band for assistance. THE single best hamstring injury preventer.",
   "injury": "Non-negotiable for left hamstring tightness. Start band-heavy, reduce assistance over weeks."
  },
  {
   "name": "Landmine Press (1-arm)",
   "muscles": "Shoulder, upper chest, core",
   "sets": "4x6/arm",
   "cues": "Press at angle (joint-friendly), exhale at top. PRIMARY vertical pressing pattern given L shoulder.",
   "injury": "Replaces overhead press. Cuff-friendly trajectory."
  },
  {
   "name": "Chest-Supported Row",
   "muscles": "Mid back, rhomboids, rear delts",
   "sets": "4x8",
   "cues": "Bench at 30°, retract scaps, full ROM. Counterbalances seated work.",
   "injury": "Foundational for posture/cuff health."
  },
  {
   "name": "Lat Pulldown",
   "muscles": "Lats, biceps",
   "sets": "3x10",
   "cues": "Lead with elbows, full stretch top, slight lean back.",
   "injury": "Vertical pulling pattern."
  },
  {
   "name": "Hip Thrust",
   "muscles": "Glute max, hamstrings",
   "sets": "3x8",
   "cues": "Chin tucked, drive through heels, squeeze glutes at top.",
   "injury": "Glute strength for stride power; protects knees."
  },
  {
   "name": "Cable Face Pull",
   "muscles": "Rear delts, rotator cuff, scap retractors",
   "sets": "3x12",
   "cues": "Pull rope to forehead, external rotation at end. Daily-driver cuff prehab.",
   "injury": "MANDATORY in every session given L cuff issue."
  },
  {
   "name": "Cable External Rotation (cuff)",
   "muscles": "Infraspinatus, teres minor",
   "sets": "3x12/arm",
   "cues": "Light load, slow, full ROM. Elbow at 90°, tucked to side.",
   "injury": "L shoulder rehab work — start very light, build slowly."
  },
  {
   "name": "Pallof Press",
   "muscles": "Anti-rotation core, obliques",
   "sets": "3x10/side",
   "cues": "Press out, resist rotation. Hold 1-2 sec at extension.",
   "injury": "Cervical-neutral core work; vagus-safe."
  },
  {
   "name": "Dead Bug",
   "muscles": "Deep core, anti-extension",
   "sets": "3x10/side",
   "cues": "Lower back pressed to floor, opposite limb, exhale on extension.",
   "injury": "Cervical-neutral core; great for vagus impingement."
  },
  {
   "name": "Calf Raise (DB or single-leg)",
   "muscles": "Gastrocnemius, soleus",
   "sets": "3x12",
   "cues": "Full ROM, slow eccentric. Ankle stability for run economy.",
   "injury": "Address L-knee/calf chain."
  }
 ],
 "nutrition_rules": [
  "Daily intake target hits the bottom of the range on REST days, top of range on hard-run days. Use the spreadsheet's per-day target.",
  "Protein at every meal: aim for 30-50g per sitting, 4-5 meals, hitting daily target by dinner.",
  "Carb-time around training: have 30-60g carbs in the 90 minutes BEFORE a quality workout, and 50-80g carbs + 20-30g protein within 60 minutes AFTER.",
  "Long-run fueling protocol: practice every weekend run >75 min. 1 gel (25-30g carb) every 30-40 min. Sip 4-6 oz water/electrolyte every 15 min. RACE DAY = WHATEVER YOU PRACTICED.",
  "Hydration baseline: 0.5-1.0 oz of water per lb bodyweight daily. Add electrolytes (sodium 500-1000mg) on hard days >60 min.",
  "Pre-bed protein helps recovery: 30-40g casein-rich source (Greek yogurt, cottage cheese, or whey casein blend) within 1 hr of sleep on hard-training days.",
  "Alcohol: minimize. Each drink costs ~150 kcal AND impairs recovery + sleep depth + protein synthesis. Avoid in 48h before key workouts.",
  "Weigh in once per week, same day, same time, post-bathroom. Track 7-day moving average, not daily."
 ],
 "race_day_protocol": [
  {
   "when": "3 days out",
   "what": "Begin carb-up: shift 60-65% of calories to carbs. Maintain protein. Reduce fiber/fat. Hydrate aggressively + electrolytes."
  },
  {
   "when": "Day before",
   "what": "Light meals, easy carbs (rice, pasta, bread, fruit). 2 hr easy walk allowed. Lay out kit, pin bib, set alarms (multiple). 9 PM lights out."
  },
  {
   "when": "Race morning",
   "what": "Wake 3 hrs before start (5:00 AM for 8:00 start). 600-800 kcal carb-heavy breakfast (oatmeal, banana, toast w/ honey, coffee). Sip 16-20 oz water + electrolytes."
  },
  {
   "when": "90 min pre",
   "what": "Final bathroom. Top up 8-10 oz water. Easy 5-10 min walk."
  },
  {
   "when": "30 min pre",
   "what": "Final gel (25g) + small water sip. Dynamic warm-up: leg swings, lunges, 4x20s strides. Stop 8-10 min before gun."
  },
  {
   "when": "Miles 1-3",
   "what": "TARGET 11:30-11:35 pace. KEEP HR <175. The first 3 miles will FEEL too easy. THEY ARE SUPPOSED TO. Resist any 'feels great' surge. This is where last race went wrong."
  },
  {
   "when": "Miles 4-7",
   "what": "Lock 11:25-11:32 pace. Gel at mile 4 + sip. HR drift to 180-185 OK if pace steady. Course is flat — find rhythm."
  },
  {
   "when": "Miles 8-10",
   "what": "Gel at mile 8 + sip. HR 180-188. Cue: 'relaxed shoulders, light feet, push through hips'. Find runner ahead, work to them."
  },
  {
   "when": "Miles 11-13",
   "what": "RACE STARTS NOW. HR can climb 188-195. Empty the tank if able. Mile 13 surge to finish."
  },
  {
   "when": "Post-race",
   "what": "Walk 10-15 min. 30g protein + 60g carbs within 30 min. Rehydrate (0.5 oz/lb of body weight lost). Foam roll/light stretch. NO running for 5-7 days."
  }
 ],
 "weeks": [
  {
   "week": 1,
   "phase_id": 1,
   "phase_name": "Base & Foundation",
   "dates": [
    "2026-05-04",
    "2026-05-05",
    "2026-05-06",
    "2026-05-07",
    "2026-05-08",
    "2026-05-09",
    "2026-05-10"
   ],
   "total_miles": 16,
   "long_miles": 6,
   "calories": {
    "week": 1,
    "phase": 1,
    "phase_name": "Base & Foundation",
    "projected_weight_lb": 250.0,
    "bmr": 2135,
    "neat_kcal": 640,
    "weekly_exercise_kcal": 3642,
    "avg_daily_exercise_kcal": 520,
    "daily_tdee": 3295,
    "deficit_target": 500,
    "daily_intake_target": 2795,
    "protein_g_target": 225,
    "fat_g_min": 88
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-05-04",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Tue",
     "date": "2026-05-05",
     "activity": "Run",
     "detail": "5.0 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 5.0,
     "duration_min": 65,
     "est_kcal": 741
    },
    {
     "day_name": "Wed",
     "date": "2026-05-06",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 778
    },
    {
     "day_name": "Thu",
     "date": "2026-05-07",
     "activity": "Rest",
     "detail": "Active recovery walk 30 min OR full rest",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Fri",
     "date": "2026-05-08",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-05-09",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Sun",
     "date": "2026-05-10",
     "activity": "Run",
     "detail": "6.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 6,
     "duration_min": 78,
     "est_kcal": 889
    }
   ]
  },
  {
   "week": 2,
   "phase_id": 1,
   "phase_name": "Base & Foundation",
   "dates": [
    "2026-05-11",
    "2026-05-12",
    "2026-05-13",
    "2026-05-14",
    "2026-05-15",
    "2026-05-16",
    "2026-05-17"
   ],
   "total_miles": 18,
   "long_miles": 7,
   "calories": {
    "week": 2,
    "phase": 1,
    "phase_name": "Base & Foundation",
    "projected_weight_lb": 248.8,
    "bmr": 2129,
    "neat_kcal": 638,
    "weekly_exercise_kcal": 4030,
    "avg_daily_exercise_kcal": 576,
    "daily_tdee": 3343,
    "deficit_target": 500,
    "daily_intake_target": 2843,
    "protein_g_target": 224,
    "fat_g_min": 87
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-05-11",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Tue",
     "date": "2026-05-12",
     "activity": "Run",
     "detail": "5.5 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 5.5,
     "duration_min": 71,
     "est_kcal": 815
    },
    {
     "day_name": "Wed",
     "date": "2026-05-13",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 944
    },
    {
     "day_name": "Thu",
     "date": "2026-05-14",
     "activity": "Rest",
     "detail": "Active recovery walk 30 min OR full rest",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Fri",
     "date": "2026-05-15",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-05-16",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Sun",
     "date": "2026-05-17",
     "activity": "Run",
     "detail": "7.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 7,
     "duration_min": 91,
     "est_kcal": 1037
    }
   ]
  },
  {
   "week": 3,
   "phase_id": 1,
   "phase_name": "Base & Foundation",
   "dates": [
    "2026-05-18",
    "2026-05-19",
    "2026-05-20",
    "2026-05-21",
    "2026-05-22",
    "2026-05-23",
    "2026-05-24"
   ],
   "total_miles": 20,
   "long_miles": 8,
   "calories": {
    "week": 3,
    "phase": 1,
    "phase_name": "Base & Foundation",
    "projected_weight_lb": 247.6,
    "bmr": 2124,
    "neat_kcal": 637,
    "weekly_exercise_kcal": 4086,
    "avg_daily_exercise_kcal": 584,
    "daily_tdee": 3345,
    "deficit_target": 500,
    "daily_intake_target": 2845,
    "protein_g_target": 223,
    "fat_g_min": 87
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-05-18",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Tue",
     "date": "2026-05-19",
     "activity": "Run",
     "detail": "6.0 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 6.0,
     "duration_min": 78,
     "est_kcal": 889
    },
    {
     "day_name": "Wed",
     "date": "2026-05-20",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 778
    },
    {
     "day_name": "Thu",
     "date": "2026-05-21",
     "activity": "Rest",
     "detail": "Active recovery walk 30 min OR full rest",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Fri",
     "date": "2026-05-22",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-05-23",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Sun",
     "date": "2026-05-24",
     "activity": "Run",
     "detail": "8.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 8,
     "duration_min": 104,
     "est_kcal": 1185
    }
   ]
  },
  {
   "week": 4,
   "phase_id": 1,
   "phase_name": "Base & Foundation",
   "dates": [
    "2026-05-25",
    "2026-05-26",
    "2026-05-27",
    "2026-05-28",
    "2026-05-29",
    "2026-05-30",
    "2026-05-31"
   ],
   "total_miles": 18,
   "long_miles": 7,
   "calories": {
    "week": 4,
    "phase": 1,
    "phase_name": "Base & Foundation",
    "projected_weight_lb": 246.4,
    "bmr": 2118,
    "neat_kcal": 635,
    "weekly_exercise_kcal": 4030,
    "avg_daily_exercise_kcal": 576,
    "daily_tdee": 3329,
    "deficit_target": 500,
    "daily_intake_target": 2829,
    "protein_g_target": 222,
    "fat_g_min": 86
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-05-25",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Tue",
     "date": "2026-05-26",
     "activity": "Run",
     "detail": "5.5 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 5.5,
     "duration_min": 71,
     "est_kcal": 815
    },
    {
     "day_name": "Wed",
     "date": "2026-05-27",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 944
    },
    {
     "day_name": "Thu",
     "date": "2026-05-28",
     "activity": "Rest",
     "detail": "Active recovery walk 30 min OR full rest",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Fri",
     "date": "2026-05-29",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-05-30",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Sun",
     "date": "2026-05-31",
     "activity": "Run",
     "detail": "7.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 7,
     "duration_min": 91,
     "est_kcal": 1037
    }
   ]
  },
  {
   "week": 5,
   "phase_id": 1,
   "phase_name": "Base & Foundation",
   "dates": [
    "2026-06-01",
    "2026-06-02",
    "2026-06-03",
    "2026-06-04",
    "2026-06-05",
    "2026-06-06",
    "2026-06-07"
   ],
   "total_miles": 22,
   "long_miles": 9,
   "calories": {
    "week": 5,
    "phase": 1,
    "phase_name": "Base & Foundation",
    "projected_weight_lb": 245.2,
    "bmr": 2113,
    "neat_kcal": 633,
    "weekly_exercise_kcal": 4308,
    "avg_daily_exercise_kcal": 615,
    "daily_tdee": 3361,
    "deficit_target": 500,
    "daily_intake_target": 2861,
    "protein_g_target": 221,
    "fat_g_min": 86
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-06-01",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Tue",
     "date": "2026-06-02",
     "activity": "Run",
     "detail": "6.5 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 6.5,
     "duration_min": 84,
     "est_kcal": 963
    },
    {
     "day_name": "Wed",
     "date": "2026-06-03",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 778
    },
    {
     "day_name": "Thu",
     "date": "2026-06-04",
     "activity": "Rest",
     "detail": "Active recovery walk 30 min OR full rest",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Fri",
     "date": "2026-06-05",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-06-06",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Sun",
     "date": "2026-06-07",
     "activity": "Run",
     "detail": "9.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 9,
     "duration_min": 117,
     "est_kcal": 1333
    }
   ]
  },
  {
   "week": 6,
   "phase_id": 1,
   "phase_name": "Base & Foundation",
   "dates": [
    "2026-06-08",
    "2026-06-09",
    "2026-06-10",
    "2026-06-11",
    "2026-06-12",
    "2026-06-13",
    "2026-06-14"
   ],
   "total_miles": 20,
   "long_miles": 8,
   "calories": {
    "week": 6,
    "phase": 1,
    "phase_name": "Base & Foundation",
    "projected_weight_lb": 244.0,
    "bmr": 2107,
    "neat_kcal": 632,
    "weekly_exercise_kcal": 4252,
    "avg_daily_exercise_kcal": 607,
    "daily_tdee": 3346,
    "deficit_target": 500,
    "daily_intake_target": 2846,
    "protein_g_target": 220,
    "fat_g_min": 85
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-06-08",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Tue",
     "date": "2026-06-09",
     "activity": "Run",
     "detail": "6.0 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 6.0,
     "duration_min": 78,
     "est_kcal": 889
    },
    {
     "day_name": "Wed",
     "date": "2026-06-10",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 944
    },
    {
     "day_name": "Thu",
     "date": "2026-06-11",
     "activity": "Rest",
     "detail": "Active recovery walk 30 min OR full rest",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Fri",
     "date": "2026-06-12",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-06-13",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 617
    },
    {
     "day_name": "Sun",
     "date": "2026-06-14",
     "activity": "Run",
     "detail": "8.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 8,
     "duration_min": 104,
     "est_kcal": 1185
    }
   ]
  },
  {
   "week": 7,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-06-15",
    "2026-06-16",
    "2026-06-17",
    "2026-06-18",
    "2026-06-19",
    "2026-06-20",
    "2026-06-21"
   ],
   "total_miles": 24,
   "long_miles": 9,
   "calories": {
    "week": 7,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 242.9,
    "bmr": 2102,
    "neat_kcal": 630,
    "weekly_exercise_kcal": 4692,
    "avg_daily_exercise_kcal": 670,
    "daily_tdee": 3402,
    "deficit_target": 500,
    "daily_intake_target": 2902,
    "protein_g_target": 219,
    "fat_g_min": 85
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-06-15",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-06-16",
     "activity": "Run",
     "detail": "5.0 mi — Easy 4.0 mi + 6x20s strides on grass/track w/ full recovery",
     "hr_zone": "Z2 + brief Z5",
     "miles": 5.0,
     "duration_min": 65,
     "est_kcal": 720
    },
    {
     "day_name": "Wed",
     "date": "2026-06-17",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 756
    },
    {
     "day_name": "Thu",
     "date": "2026-06-18",
     "activity": "Run",
     "detail": "5.0 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 5.0,
     "duration_min": 65,
     "est_kcal": 720
    },
    {
     "day_name": "Fri",
     "date": "2026-06-19",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-06-20",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-06-21",
     "activity": "Run",
     "detail": "9.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 9,
     "duration_min": 117,
     "est_kcal": 1296
    }
   ]
  },
  {
   "week": 8,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-06-22",
    "2026-06-23",
    "2026-06-24",
    "2026-06-25",
    "2026-06-26",
    "2026-06-27",
    "2026-06-28"
   ],
   "total_miles": 26,
   "long_miles": 10,
   "calories": {
    "week": 8,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 241.7,
    "bmr": 2097,
    "neat_kcal": 629,
    "weekly_exercise_kcal": 5084,
    "avg_daily_exercise_kcal": 726,
    "daily_tdee": 3452,
    "deficit_target": 500,
    "daily_intake_target": 2952,
    "protein_g_target": 218,
    "fat_g_min": 85
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-06-22",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-06-23",
     "activity": "Run",
     "detail": "5.3 mi — Easy 4.3 mi + 6x20s strides on grass/track w/ full recovery",
     "hr_zone": "Z2 + brief Z5",
     "miles": 5.3,
     "duration_min": 68,
     "est_kcal": 763
    },
    {
     "day_name": "Wed",
     "date": "2026-06-24",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 918
    },
    {
     "day_name": "Thu",
     "date": "2026-06-25",
     "activity": "Run",
     "detail": "5.3 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 5.3,
     "duration_min": 68,
     "est_kcal": 763
    },
    {
     "day_name": "Fri",
     "date": "2026-06-26",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-06-27",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-06-28",
     "activity": "Run",
     "detail": "10.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 10,
     "duration_min": 130,
     "est_kcal": 1440
    }
   ]
  },
  {
   "week": 9,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-06-29",
    "2026-06-30",
    "2026-07-01",
    "2026-07-02",
    "2026-07-03",
    "2026-07-04",
    "2026-07-05"
   ],
   "total_miles": 28,
   "long_miles": 11,
   "calories": {
    "week": 9,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 240.5,
    "bmr": 2092,
    "neat_kcal": 627,
    "weekly_exercise_kcal": 5180,
    "avg_daily_exercise_kcal": 740,
    "daily_tdee": 3459,
    "deficit_target": 500,
    "daily_intake_target": 2959,
    "protein_g_target": 216,
    "fat_g_min": 84
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-06-29",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-06-30",
     "activity": "Run",
     "detail": "5.7 mi — Easy 4.7 mi + 6x20s strides on grass/track w/ full recovery",
     "hr_zone": "Z2 + brief Z5",
     "miles": 5.7,
     "duration_min": 74,
     "est_kcal": 820
    },
    {
     "day_name": "Wed",
     "date": "2026-07-01",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 756
    },
    {
     "day_name": "Thu",
     "date": "2026-07-02",
     "activity": "Run",
     "detail": "5.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 5.7,
     "duration_min": 74,
     "est_kcal": 820
    },
    {
     "day_name": "Fri",
     "date": "2026-07-03",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-07-04",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-07-05",
     "activity": "Run",
     "detail": "11.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 11,
     "duration_min": 143,
     "est_kcal": 1584
    }
   ]
  },
  {
   "week": 10,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-07-06",
    "2026-07-07",
    "2026-07-08",
    "2026-07-09",
    "2026-07-10",
    "2026-07-11",
    "2026-07-12"
   ],
   "total_miles": 24,
   "long_miles": 9,
   "calories": {
    "week": 10,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 239.3,
    "bmr": 2086,
    "neat_kcal": 625,
    "weekly_exercise_kcal": 4854,
    "avg_daily_exercise_kcal": 693,
    "daily_tdee": 3404,
    "deficit_target": 500,
    "daily_intake_target": 2904,
    "protein_g_target": 215,
    "fat_g_min": 84
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-07-06",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-07-07",
     "activity": "Run",
     "detail": "5.0 mi — Easy 4.0 mi + 6x20s strides on grass/track w/ full recovery",
     "hr_zone": "Z2 + brief Z5",
     "miles": 5.0,
     "duration_min": 65,
     "est_kcal": 720
    },
    {
     "day_name": "Wed",
     "date": "2026-07-08",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 918
    },
    {
     "day_name": "Thu",
     "date": "2026-07-09",
     "activity": "Run",
     "detail": "5.0 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 5.0,
     "duration_min": 65,
     "est_kcal": 720
    },
    {
     "day_name": "Fri",
     "date": "2026-07-10",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-07-11",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-07-12",
     "activity": "Run",
     "detail": "9.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 9,
     "duration_min": 117,
     "est_kcal": 1296
    }
   ]
  },
  {
   "week": 11,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-07-13",
    "2026-07-14",
    "2026-07-15",
    "2026-07-16",
    "2026-07-17",
    "2026-07-18",
    "2026-07-19"
   ],
   "total_miles": 30,
   "long_miles": 12,
   "calories": {
    "week": 11,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 238.1,
    "bmr": 2081,
    "neat_kcal": 624,
    "weekly_exercise_kcal": 5484,
    "avg_daily_exercise_kcal": 783,
    "daily_tdee": 3488,
    "deficit_target": 500,
    "daily_intake_target": 2988,
    "protein_g_target": 214,
    "fat_g_min": 83
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-07-13",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-07-14",
     "activity": "Run",
     "detail": "6.5 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 6.5,
     "duration_min": 84,
     "est_kcal": 936
    },
    {
     "day_name": "Wed",
     "date": "2026-07-15",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 756
    },
    {
     "day_name": "Thu",
     "date": "2026-07-16",
     "activity": "Run",
     "detail": "6.0 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.0,
     "duration_min": 78,
     "est_kcal": 864
    },
    {
     "day_name": "Fri",
     "date": "2026-07-17",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-07-18",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-07-19",
     "activity": "Run",
     "detail": "12.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 12,
     "duration_min": 156,
     "est_kcal": 1728
    }
   ]
  },
  {
   "week": 12,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-07-20",
    "2026-07-21",
    "2026-07-22",
    "2026-07-23",
    "2026-07-24",
    "2026-07-25",
    "2026-07-26"
   ],
   "total_miles": 32,
   "long_miles": 13,
   "calories": {
    "week": 12,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 236.9,
    "bmr": 2075,
    "neat_kcal": 622,
    "weekly_exercise_kcal": 5876,
    "avg_daily_exercise_kcal": 839,
    "daily_tdee": 3536,
    "deficit_target": 500,
    "daily_intake_target": 3036,
    "protein_g_target": 213,
    "fat_g_min": 83
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-07-20",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-07-21",
     "activity": "Run",
     "detail": "6.8 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 6.8,
     "duration_min": 88,
     "est_kcal": 979
    },
    {
     "day_name": "Wed",
     "date": "2026-07-22",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 918
    },
    {
     "day_name": "Thu",
     "date": "2026-07-23",
     "activity": "Run",
     "detail": "6.3 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.3,
     "duration_min": 81,
     "est_kcal": 907
    },
    {
     "day_name": "Fri",
     "date": "2026-07-24",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-07-25",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-07-26",
     "activity": "Run",
     "detail": "13.0 mi — Long run w/ finish surge: easy 11.0 mi @ Z2 / final 2 mi steady Z3 high. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 13,
     "duration_min": 169,
     "est_kcal": 1872
    }
   ]
  },
  {
   "week": 13,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-07-27",
    "2026-07-28",
    "2026-07-29",
    "2026-07-30",
    "2026-07-31",
    "2026-08-01",
    "2026-08-02"
   ],
   "total_miles": 28,
   "long_miles": 11,
   "calories": {
    "week": 13,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 235.7,
    "bmr": 2070,
    "neat_kcal": 621,
    "weekly_exercise_kcal": 5252,
    "avg_daily_exercise_kcal": 750,
    "daily_tdee": 3441,
    "deficit_target": 500,
    "daily_intake_target": 2941,
    "protein_g_target": 212,
    "fat_g_min": 82
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-07-27",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-07-28",
     "activity": "Run",
     "detail": "6.2 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 6.2,
     "duration_min": 80,
     "est_kcal": 892
    },
    {
     "day_name": "Wed",
     "date": "2026-07-29",
     "activity": "Stationary bike",
     "detail": "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 756
    },
    {
     "day_name": "Thu",
     "date": "2026-07-30",
     "activity": "Run",
     "detail": "5.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 5.7,
     "duration_min": 74,
     "est_kcal": 820
    },
    {
     "day_name": "Fri",
     "date": "2026-07-31",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-08-01",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-08-02",
     "activity": "Run",
     "detail": "11.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 11,
     "duration_min": 143,
     "est_kcal": 1584
    }
   ]
  },
  {
   "week": 14,
   "phase_id": 2,
   "phase_name": "Aerobic Development",
   "dates": [
    "2026-08-03",
    "2026-08-04",
    "2026-08-05",
    "2026-08-06",
    "2026-08-07",
    "2026-08-08",
    "2026-08-09"
   ],
   "total_miles": 32,
   "long_miles": 13,
   "calories": {
    "week": 14,
    "phase": 2,
    "phase_name": "Aerobic Development",
    "projected_weight_lb": 234.5,
    "bmr": 2064,
    "neat_kcal": 619,
    "weekly_exercise_kcal": 5876,
    "avg_daily_exercise_kcal": 839,
    "daily_tdee": 3522,
    "deficit_target": 500,
    "daily_intake_target": 3022,
    "protein_g_target": 211,
    "fat_g_min": 82
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-08-03",
     "activity": "Strength",
     "detail": "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Tue",
     "date": "2026-08-04",
     "activity": "Run",
     "detail": "6.8 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 6.8,
     "duration_min": 88,
     "est_kcal": 979
    },
    {
     "day_name": "Wed",
     "date": "2026-08-05",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 45,
     "est_kcal": 918
    },
    {
     "day_name": "Thu",
     "date": "2026-08-06",
     "activity": "Run",
     "detail": "6.3 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.3,
     "duration_min": 81,
     "est_kcal": 907
    },
    {
     "day_name": "Fri",
     "date": "2026-08-07",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-08-08",
     "activity": "Strength",
     "detail": "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 600
    },
    {
     "day_name": "Sun",
     "date": "2026-08-09",
     "activity": "Run",
     "detail": "13.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 13,
     "duration_min": 169,
     "est_kcal": 1872
    }
   ]
  },
  {
   "week": 15,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-08-10",
    "2026-08-11",
    "2026-08-12",
    "2026-08-13",
    "2026-08-14",
    "2026-08-15",
    "2026-08-16"
   ],
   "total_miles": 34,
   "long_miles": 13,
   "calories": {
    "week": 15,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 233.3,
    "bmr": 2059,
    "neat_kcal": 617,
    "weekly_exercise_kcal": 5589,
    "avg_daily_exercise_kcal": 798,
    "daily_tdee": 3474,
    "deficit_target": 350,
    "daily_intake_target": 3124,
    "protein_g_target": 210,
    "fat_g_min": 82
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-08-10",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-08-11",
     "activity": "Run",
     "detail": "8.0 mi — Threshold: 2 mi WU / 2x15min Z4 (3 min jog between) / 2 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 8.0,
     "duration_min": 104,
     "est_kcal": 1104
    },
    {
     "day_name": "Wed",
     "date": "2026-08-12",
     "activity": "Stationary bike",
     "detail": "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 805
    },
    {
     "day_name": "Thu",
     "date": "2026-08-13",
     "activity": "Run",
     "detail": "7.0 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 7.0,
     "duration_min": 91,
     "est_kcal": 966
    },
    {
     "day_name": "Fri",
     "date": "2026-08-14",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-08-15",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-08-16",
     "activity": "Run",
     "detail": "13.0 mi — Long run w/ finish surge: easy 11.0 mi @ Z2 / final 2 mi steady Z3 high. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 13,
     "duration_min": 169,
     "est_kcal": 1794
    }
   ]
  },
  {
   "week": 16,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-08-17",
    "2026-08-18",
    "2026-08-19",
    "2026-08-20",
    "2026-08-21",
    "2026-08-22",
    "2026-08-23"
   ],
   "total_miles": 36,
   "long_miles": 14,
   "calories": {
    "week": 16,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 232.1,
    "bmr": 2053,
    "neat_kcal": 615,
    "weekly_exercise_kcal": 5981,
    "avg_daily_exercise_kcal": 854,
    "daily_tdee": 3522,
    "deficit_target": 350,
    "daily_intake_target": 3172,
    "protein_g_target": 209,
    "fat_g_min": 81
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-08-17",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-08-18",
     "activity": "Run",
     "detail": "8.3 mi — Race-pace tempo: 2 mi WU / 4 mi @ goal HMP (target 11:25-11:35) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 8.3,
     "duration_min": 107,
     "est_kcal": 1145
    },
    {
     "day_name": "Wed",
     "date": "2026-08-19",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 977
    },
    {
     "day_name": "Thu",
     "date": "2026-08-20",
     "activity": "Run",
     "detail": "7.3 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 7.3,
     "duration_min": 94,
     "est_kcal": 1007
    },
    {
     "day_name": "Fri",
     "date": "2026-08-21",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-08-22",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-08-23",
     "activity": "Run",
     "detail": "14.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 14,
     "duration_min": 182,
     "est_kcal": 1932
    }
   ]
  },
  {
   "week": 17,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-08-24",
    "2026-08-25",
    "2026-08-26",
    "2026-08-27",
    "2026-08-28",
    "2026-08-29",
    "2026-08-30"
   ],
   "total_miles": 32,
   "long_miles": 12,
   "calories": {
    "week": 17,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 231.0,
    "bmr": 2048,
    "neat_kcal": 614,
    "weekly_exercise_kcal": 5367,
    "avg_daily_exercise_kcal": 767,
    "daily_tdee": 3429,
    "deficit_target": 350,
    "daily_intake_target": 3079,
    "protein_g_target": 208,
    "fat_g_min": 81
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-08-24",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-08-25",
     "activity": "Run",
     "detail": "7.7 mi — VO2: 2 mi WU / 5x3min Z5 (3 min jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z5 -> Z2",
     "miles": 7.7,
     "duration_min": 100,
     "est_kcal": 1062
    },
    {
     "day_name": "Wed",
     "date": "2026-08-26",
     "activity": "Stationary bike",
     "detail": "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 805
    },
    {
     "day_name": "Thu",
     "date": "2026-08-27",
     "activity": "Run",
     "detail": "6.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.7,
     "duration_min": 87,
     "est_kcal": 924
    },
    {
     "day_name": "Fri",
     "date": "2026-08-28",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-08-29",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-08-30",
     "activity": "Run",
     "detail": "12.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 12,
     "duration_min": 156,
     "est_kcal": 1656
    }
   ]
  },
  {
   "week": 18,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-08-31",
    "2026-09-01",
    "2026-09-02",
    "2026-09-03",
    "2026-09-04",
    "2026-09-05",
    "2026-09-06"
   ],
   "total_miles": 38,
   "long_miles": 14,
   "calories": {
    "week": 18,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 229.8,
    "bmr": 2043,
    "neat_kcal": 612,
    "weekly_exercise_kcal": 6175,
    "avg_daily_exercise_kcal": 882,
    "daily_tdee": 3537,
    "deficit_target": 350,
    "daily_intake_target": 3187,
    "protein_g_target": 207,
    "fat_g_min": 80
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-08-31",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-09-01",
     "activity": "Run",
     "detail": "9.0 mi — Cruise intervals: 2 mi WU / 3x10min Z4 (2 min jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 9.0,
     "duration_min": 117,
     "est_kcal": 1242
    },
    {
     "day_name": "Wed",
     "date": "2026-09-02",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 977
    },
    {
     "day_name": "Thu",
     "date": "2026-09-03",
     "activity": "Run",
     "detail": "8.0 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 8.0,
     "duration_min": 104,
     "est_kcal": 1104
    },
    {
     "day_name": "Fri",
     "date": "2026-09-04",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-09-05",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-09-06",
     "activity": "Run",
     "detail": "14.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 14,
     "duration_min": 182,
     "est_kcal": 1932
    }
   ]
  },
  {
   "week": 19,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-09-07",
    "2026-09-08",
    "2026-09-09",
    "2026-09-10",
    "2026-09-11",
    "2026-09-12",
    "2026-09-13"
   ],
   "total_miles": 40,
   "long_miles": 15,
   "calories": {
    "week": 19,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 228.6,
    "bmr": 2038,
    "neat_kcal": 611,
    "weekly_exercise_kcal": 6223,
    "avg_daily_exercise_kcal": 889,
    "daily_tdee": 3538,
    "deficit_target": 350,
    "daily_intake_target": 3188,
    "protein_g_target": 206,
    "fat_g_min": 80
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-09-07",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-09-08",
     "activity": "Run",
     "detail": "9.3 mi — Threshold: 2 mi WU / 2x15min Z4 (3 min jog between) / 2 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 9.3,
     "duration_min": 120,
     "est_kcal": 1283
    },
    {
     "day_name": "Wed",
     "date": "2026-09-09",
     "activity": "Stationary bike",
     "detail": "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 805
    },
    {
     "day_name": "Thu",
     "date": "2026-09-10",
     "activity": "Run",
     "detail": "8.3 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 8.3,
     "duration_min": 107,
     "est_kcal": 1145
    },
    {
     "day_name": "Fri",
     "date": "2026-09-11",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-09-12",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-09-13",
     "activity": "Run",
     "detail": "15.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 15,
     "duration_min": 195,
     "est_kcal": 2070
    }
   ]
  },
  {
   "week": 20,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-09-14",
    "2026-09-15",
    "2026-09-16",
    "2026-09-17",
    "2026-09-18",
    "2026-09-19",
    "2026-09-20"
   ],
   "total_miles": 35,
   "long_miles": 12,
   "calories": {
    "week": 20,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 227.4,
    "bmr": 2032,
    "neat_kcal": 609,
    "weekly_exercise_kcal": 5815,
    "avg_daily_exercise_kcal": 831,
    "daily_tdee": 3472,
    "deficit_target": 350,
    "daily_intake_target": 3122,
    "protein_g_target": 205,
    "fat_g_min": 80
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-09-14",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-09-15",
     "activity": "Run",
     "detail": "8.7 mi — Race-pace tempo: 2 mi WU / 4 mi @ goal HMP (target 11:25-11:35) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 8.7,
     "duration_min": 113,
     "est_kcal": 1200
    },
    {
     "day_name": "Wed",
     "date": "2026-09-16",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 977
    },
    {
     "day_name": "Thu",
     "date": "2026-09-17",
     "activity": "Run",
     "detail": "7.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 7.7,
     "duration_min": 100,
     "est_kcal": 1062
    },
    {
     "day_name": "Fri",
     "date": "2026-09-18",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-09-19",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-09-20",
     "activity": "Run",
     "detail": "12.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 12,
     "duration_min": 156,
     "est_kcal": 1656
    }
   ]
  },
  {
   "week": 21,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-09-21",
    "2026-09-22",
    "2026-09-23",
    "2026-09-24",
    "2026-09-25",
    "2026-09-26",
    "2026-09-27"
   ],
   "total_miles": 40,
   "long_miles": 14,
   "calories": {
    "week": 21,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 226.2,
    "bmr": 2027,
    "neat_kcal": 608,
    "weekly_exercise_kcal": 6195,
    "avg_daily_exercise_kcal": 885,
    "daily_tdee": 3520,
    "deficit_target": 350,
    "daily_intake_target": 3170,
    "protein_g_target": 204,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-09-21",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-09-22",
     "activity": "Run",
     "detail": "9.7 mi — VO2: 2 mi WU / 5x3min Z5 (3 min jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z5 -> Z2",
     "miles": 9.7,
     "duration_min": 126,
     "est_kcal": 1338
    },
    {
     "day_name": "Wed",
     "date": "2026-09-23",
     "activity": "Stationary bike",
     "detail": "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 805
    },
    {
     "day_name": "Thu",
     "date": "2026-09-24",
     "activity": "Run",
     "detail": "8.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 8.7,
     "duration_min": 113,
     "est_kcal": 1200
    },
    {
     "day_name": "Fri",
     "date": "2026-09-25",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-09-26",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-09-27",
     "activity": "Run",
     "detail": "14.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 14,
     "duration_min": 182,
     "est_kcal": 1932
    }
   ]
  },
  {
   "week": 22,
   "phase_id": 3,
   "phase_name": "Threshold & Race-Specific",
   "dates": [
    "2026-09-28",
    "2026-09-29",
    "2026-09-30",
    "2026-10-01",
    "2026-10-02",
    "2026-10-03",
    "2026-10-04"
   ],
   "total_miles": 36,
   "long_miles": 13,
   "calories": {
    "week": 22,
    "phase": 3,
    "phase_name": "Threshold & Race-Specific",
    "projected_weight_lb": 225.0,
    "bmr": 2021,
    "neat_kcal": 606,
    "weekly_exercise_kcal": 5953,
    "avg_daily_exercise_kcal": 850,
    "daily_tdee": 3477,
    "deficit_target": 350,
    "daily_intake_target": 3127,
    "protein_g_target": 202,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-09-28",
     "activity": "Strength",
     "detail": "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Tue",
     "date": "2026-09-29",
     "activity": "Run",
     "detail": "8.7 mi — Cruise intervals: 2 mi WU / 3x10min Z4 (2 min jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 8.7,
     "duration_min": 113,
     "est_kcal": 1200
    },
    {
     "day_name": "Wed",
     "date": "2026-09-30",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 50,
     "est_kcal": 977
    },
    {
     "day_name": "Thu",
     "date": "2026-10-01",
     "activity": "Run",
     "detail": "7.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 7.7,
     "duration_min": 100,
     "est_kcal": 1062
    },
    {
     "day_name": "Fri",
     "date": "2026-10-02",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-10-03",
     "activity": "Strength",
     "detail": "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 460
    },
    {
     "day_name": "Sun",
     "date": "2026-10-04",
     "activity": "Run",
     "detail": "13.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 13,
     "duration_min": 169,
     "est_kcal": 1794
    }
   ]
  },
  {
   "week": 23,
   "phase_id": 4,
   "phase_name": "Sharpen & Taper",
   "dates": [
    "2026-10-05",
    "2026-10-06",
    "2026-10-07",
    "2026-10-08",
    "2026-10-09",
    "2026-10-10",
    "2026-10-11"
   ],
   "total_miles": 34,
   "long_miles": 14,
   "calories": {
    "week": 23,
    "phase": 4,
    "phase_name": "Sharpen & Taper",
    "projected_weight_lb": 225,
    "bmr": 2021,
    "neat_kcal": 606,
    "weekly_exercise_kcal": 5284,
    "avg_daily_exercise_kcal": 755,
    "daily_tdee": 3382,
    "deficit_target": 0,
    "daily_intake_target": 3382,
    "protein_g_target": 202,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-10-05",
     "activity": "Strength",
     "detail": "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Tue",
     "date": "2026-10-06",
     "activity": "Run",
     "detail": "7.7 mi — Race-pace cutdown: 2 mi WU / 5 mi @ HMP / 1 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 7.7,
     "duration_min": 100,
     "est_kcal": 1039
    },
    {
     "day_name": "Wed",
     "date": "2026-10-07",
     "activity": "Stationary bike",
     "detail": "BIKE 35 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 35,
     "est_kcal": 551
    },
    {
     "day_name": "Thu",
     "date": "2026-10-08",
     "activity": "Run",
     "detail": "6.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.7,
     "duration_min": 87,
     "est_kcal": 904
    },
    {
     "day_name": "Fri",
     "date": "2026-10-09",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-10-10",
     "activity": "Strength",
     "detail": "STRENGTH B (Light Upper): Landmine press 2x5 | Cable row 2x8 | Cuff prehab 3x12 | Mobility flow",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Sun",
     "date": "2026-10-11",
     "activity": "Run",
     "detail": "14.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 14,
     "duration_min": 182,
     "est_kcal": 1890
    }
   ]
  },
  {
   "week": 24,
   "phase_id": 4,
   "phase_name": "Sharpen & Taper",
   "dates": [
    "2026-10-12",
    "2026-10-13",
    "2026-10-14",
    "2026-10-15",
    "2026-10-16",
    "2026-10-17",
    "2026-10-18"
   ],
   "total_miles": 32,
   "long_miles": 12,
   "calories": {
    "week": 24,
    "phase": 4,
    "phase_name": "Sharpen & Taper",
    "projected_weight_lb": 225,
    "bmr": 2021,
    "neat_kcal": 606,
    "weekly_exercise_kcal": 5132,
    "avg_daily_exercise_kcal": 733,
    "daily_tdee": 3360,
    "deficit_target": 0,
    "daily_intake_target": 3360,
    "protein_g_target": 202,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-10-12",
     "activity": "Strength",
     "detail": "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Tue",
     "date": "2026-10-13",
     "activity": "Run",
     "detail": "7.7 mi — Threshold: 1.5 mi WU / 2x12min Z4 (3 min jog) / 1 mi CD",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 7.7,
     "duration_min": 100,
     "est_kcal": 1039
    },
    {
     "day_name": "Wed",
     "date": "2026-10-14",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 35 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 35,
     "est_kcal": 669
    },
    {
     "day_name": "Thu",
     "date": "2026-10-15",
     "activity": "Run",
     "detail": "6.7 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.7,
     "duration_min": 87,
     "est_kcal": 904
    },
    {
     "day_name": "Fri",
     "date": "2026-10-16",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-10-17",
     "activity": "Strength",
     "detail": "STRENGTH B (Light Upper): Landmine press 2x5 | Cable row 2x8 | Cuff prehab 3x12 | Mobility flow",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Sun",
     "date": "2026-10-18",
     "activity": "Run",
     "detail": "12.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 12,
     "duration_min": 156,
     "est_kcal": 1620
    }
   ]
  },
  {
   "week": 25,
   "phase_id": 4,
   "phase_name": "Sharpen & Taper",
   "dates": [
    "2026-10-19",
    "2026-10-20",
    "2026-10-21",
    "2026-10-22",
    "2026-10-23",
    "2026-10-24",
    "2026-10-25"
   ],
   "total_miles": 28,
   "long_miles": 10,
   "calories": {
    "week": 25,
    "phase": 4,
    "phase_name": "Sharpen & Taper",
    "projected_weight_lb": 225,
    "bmr": 2021,
    "neat_kcal": 606,
    "weekly_exercise_kcal": 4556,
    "avg_daily_exercise_kcal": 651,
    "daily_tdee": 3278,
    "deficit_target": 0,
    "daily_intake_target": 3278,
    "protein_g_target": 202,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-10-19",
     "activity": "Strength",
     "detail": "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Tue",
     "date": "2026-10-20",
     "activity": "Run",
     "detail": "7.0 mi — VO2 sharpener: 1.5 mi WU / 6x90s Z5 (90s jog) / 1.5 mi CD",
     "hr_zone": "Z2 -> Z5 -> Z2",
     "miles": 7.0,
     "duration_min": 91,
     "est_kcal": 945
    },
    {
     "day_name": "Wed",
     "date": "2026-10-21",
     "activity": "Stationary bike",
     "detail": "BIKE 35 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 35,
     "est_kcal": 551
    },
    {
     "day_name": "Thu",
     "date": "2026-10-22",
     "activity": "Run",
     "detail": "6.0 mi — Easy aerobic recovery run",
     "hr_zone": "Z2 (low end)",
     "miles": 6.0,
     "duration_min": 78,
     "est_kcal": 810
    },
    {
     "day_name": "Fri",
     "date": "2026-10-23",
     "activity": "Rest",
     "detail": "REST DAY — no training. Mobility/stretching only.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-10-24",
     "activity": "Strength",
     "detail": "STRENGTH B (Light Upper): Landmine press 2x5 | Cable row 2x8 | Cuff prehab 3x12 | Mobility flow",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Sun",
     "date": "2026-10-25",
     "activity": "Run",
     "detail": "10.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 10,
     "duration_min": 130,
     "est_kcal": 1350
    }
   ]
  },
  {
   "week": 26,
   "phase_id": 4,
   "phase_name": "Sharpen & Taper",
   "dates": [
    "2026-10-26",
    "2026-10-27",
    "2026-10-28",
    "2026-10-29",
    "2026-10-30",
    "2026-10-31",
    "2026-11-01"
   ],
   "total_miles": 22,
   "long_miles": 8,
   "calories": {
    "week": 26,
    "phase": 4,
    "phase_name": "Sharpen & Taper",
    "projected_weight_lb": 225,
    "bmr": 2021,
    "neat_kcal": 606,
    "weekly_exercise_kcal": 3819,
    "avg_daily_exercise_kcal": 546,
    "daily_tdee": 3173,
    "deficit_target": 0,
    "daily_intake_target": 3173,
    "protein_g_target": 202,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-10-26",
     "activity": "Strength",
     "detail": "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12",
     "hr_zone": "Z2-Z3 brief",
     "miles": 0,
     "duration_min": 40,
     "est_kcal": 450
    },
    {
     "day_name": "Tue",
     "date": "2026-10-27",
     "activity": "Run",
     "detail": "5.0 mi — Tempo: 1.5 mi WU / 3x6min Z4 (2 min jog) / 1 mi CD — sharpener",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 5,
     "duration_min": 65,
     "est_kcal": 675
    },
    {
     "day_name": "Wed",
     "date": "2026-10-28",
     "activity": "Stairmaster",
     "detail": "STAIRMASTER 35 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.",
     "hr_zone": "Z2",
     "miles": 0,
     "duration_min": 35,
     "est_kcal": 669
    },
    {
     "day_name": "Thu",
     "date": "2026-10-29",
     "activity": "Run",
     "detail": "4.0 mi — Easy aerobic",
     "hr_zone": "Z2",
     "miles": 4,
     "duration_min": 52,
     "est_kcal": 540
    },
    {
     "day_name": "Fri",
     "date": "2026-10-30",
     "activity": "Rest",
     "detail": "REST DAY",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-10-31",
     "activity": "Run",
     "detail": "3.0 mi — Easy + 4x20s strides",
     "hr_zone": "Z2 + brief Z5",
     "miles": 3,
     "duration_min": 39,
     "est_kcal": 405
    },
    {
     "day_name": "Sun",
     "date": "2026-11-01",
     "activity": "Run",
     "detail": "8.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).",
     "hr_zone": "Z2 (Z3 only on prescribed segments)",
     "miles": 8,
     "duration_min": 104,
     "est_kcal": 1080
    }
   ]
  },
  {
   "week": 27,
   "phase_id": 4,
   "phase_name": "Sharpen & Taper",
   "dates": [
    "2026-11-02",
    "2026-11-03",
    "2026-11-04",
    "2026-11-05",
    "2026-11-06",
    "2026-11-07",
    "2026-11-08"
   ],
   "total_miles": 16,
   "long_miles": 13.1,
   "calories": {
    "week": 27,
    "phase": 4,
    "phase_name": "Sharpen & Taper",
    "projected_weight_lb": 225,
    "bmr": 2021,
    "neat_kcal": 606,
    "weekly_exercise_kcal": 3300,
    "avg_daily_exercise_kcal": 471,
    "daily_tdee": 3098,
    "deficit_target": 0,
    "daily_intake_target": 3098,
    "protein_g_target": 202,
    "fat_g_min": 79
   },
   "days": [
    {
     "day_name": "Mon",
     "date": "2026-11-02",
     "activity": "Run",
     "detail": "3 mi very easy + 4x20s strides",
     "hr_zone": "Z2 -> Z5 brief",
     "miles": 3.0,
     "duration_min": 35,
     "est_kcal": 360
    },
    {
     "day_name": "Tue",
     "date": "2026-11-03",
     "activity": "Run",
     "detail": "4 mi: 1.5 WU / 2 mi @ goal HMP / 0.5 CD — final tune-up",
     "hr_zone": "Z2 -> Z4 -> Z2",
     "miles": 4.0,
     "duration_min": 50,
     "est_kcal": 480
    },
    {
     "day_name": "Wed",
     "date": "2026-11-04",
     "activity": "Bike",
     "detail": "30 min Z1 super-easy spin",
     "hr_zone": "Z1",
     "miles": 0,
     "duration_min": 30,
     "est_kcal": 240
    },
    {
     "day_name": "Thu",
     "date": "2026-11-05",
     "activity": "Run",
     "detail": "20-25 min easy shake-out + 4x15s strides. Mind/body check.",
     "hr_zone": "Z2",
     "miles": 1.8,
     "duration_min": 22,
     "est_kcal": 240
    },
    {
     "day_name": "Fri",
     "date": "2026-11-06",
     "activity": "Rest",
     "detail": "REST: 15-20 min walk + foam roll. Hydrate + carb-load. Pin bib. Lay out kit.",
     "hr_zone": "—",
     "miles": 0,
     "duration_min": 0,
     "est_kcal": 0
    },
    {
     "day_name": "Sat",
     "date": "2026-11-07",
     "activity": "Run",
     "detail": "RACE DAY — Salina Crossroads Half-Marathon. 8:00 AM CST start. See race-day protocol.",
     "hr_zone": "Z3->Z4->Z4-high",
     "miles": 13.1,
     "duration_min": 150,
     "est_kcal": 1900
    },
    {
     "day_name": "Sun",
     "date": "2026-11-08",
     "activity": "Rest",
     "detail": "Recovery walk 20-30 min. Refuel. Hydrate. Celebrate.",
     "hr_zone": "Z1",
     "miles": 0,
     "duration_min": 25,
     "est_kcal": 80
    }
   ]
  }
 ]
};
