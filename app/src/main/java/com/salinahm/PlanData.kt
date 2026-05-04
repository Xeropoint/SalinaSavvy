// Auto-generated. Do not edit by hand.
// Source: plan_data.py via gen_kotlin.py
package com.salinahm

import java.time.LocalDate

data class HrZone(val zone: String, val name: String, val loPct: Double, val hiPct: Double, val loBpm: Int, val hiBpm: Int, val purpose: String)
data class PaceTarget(val phase: String, val easy: String, val long: String, val tempo: String, val racePace: String, val intervals: String)
data class Phase(val id: Int, val name: String, val weekStart: Int, val weekEnd: Int, val focus: String, val deficitKcal: Int, val expectedLossPerWk: Double, val strengthPerWk: Int, val crossPerWk: Int, val runsPerWk: Int, val keyWorkouts: String)
data class StrengthExercise(val name: String, val muscles: String, val sets: String, val cues: String, val injuryNotes: String)
data class RaceDayStep(val whenLabel: String, val what: String)
data class DayPlan(val dayName: String, val date: LocalDate, val activity: String, val detail: String, val hrZone: String, val miles: Double, val durationMin: Int, val estKcal: Int)
data class WeekCalories(val week: Int, val phaseId: Int, val projectedWeightLb: Double, val bmr: Int, val neatKcal: Int, val weeklyExerciseKcal: Int, val avgDailyExerciseKcal: Int, val dailyTdee: Int, val deficitTarget: Int, val dailyIntakeTarget: Int, val proteinG: Int, val fatGMin: Int)
data class WeekPlan(val week: Int, val phaseId: Int, val phaseName: String, val totalMiles: Int, val longMiles: Double, val days: List<DayPlan>, val calories: WeekCalories)
data class Athlete(val name: String, val ageStart: Int, val ageRace: Int, val heightIn: Int, val sex: String, val weightStartLb: Int, val weightGoalLb: Int, val maxHr: Int, val bmrStart: Int, val recentHalf: String, val goalHalf: String)
data class Race(val name: String, val date: LocalDate, val startTime: String, val location: String, val courseNotes: String)

object PlanData {
  val athlete = Athlete(
    name = "Keith", ageStart = 39, ageRace = 40,
    heightIn = 75, sex = "male",
    weightStartLb = 250, weightGoalLb = 225,
    maxHr = 200, bmrStart = 2135,
    recentHalf = "2:51:47", goalHalf = "Sub 2:30:00")

  val race = Race(
    name = "Salina Crossroads Half-Marathon",
    date = LocalDate.of(2026, 11, 7),
    startTime = "8:00 AM CST",
    location = "Downtown Salina, KS",
    courseNotes = "One loop, flat & fast, Boston Qualifier course.")

  val planStart: LocalDate = LocalDate.of(2026, 5, 4)
  const val totalWeeks = 27

  val hrZones = listOf(
    HrZone("Z1", "Recovery / Walk", 0.5, 0.65, 100, 130, "Walking, cooldown, very easy spinning. Active recovery between hard sessions."),
    HrZone("Z2", "Aerobic Easy (TRAINING ANCHOR)", 0.65, 0.75, 130, 150, "Easy runs, long runs, base-building. ~80% of weekly volume lives here. If you can hold a full conversation, you're in Z2."),
    HrZone("Z3", "Aerobic Moderate (GRAY ZONE - LIMIT)", 0.75, 0.85, 150, 170, "Steady-state, marathon pace, 'comfortably hard'. Useful in moderation but easy to over-occupy. Plan minimizes time here."),
    HrZone("Z4", "Threshold (Lactate Threshold)", 0.85, 0.92, 170, 184, "Tempo runs, threshold intervals, half-marathon race effort. Sentence-by-sentence speech only."),
    HrZone("Z5", "VO2 Max / Anaerobic", 0.92, 1.0, 184, 200, "Short hard intervals (3-5 min). Develops top-end. Used sparingly, mid-block onward."),
  )

  val paceTargets = listOf(
    PaceTarget("Phase 1: Base (W1-6)", "13:30-14:30", "13:30-14:00", "—", "—", "—"),
    PaceTarget("Phase 2: Aerobic Dev (W7-14)", "13:00-14:00", "13:00-13:45", "11:45-12:15", "—", "10:45-11:00 (strides)"),
    PaceTarget("Phase 3: Threshold (W15-22)", "12:30-13:30", "12:30-13:15", "11:30-11:50", "11:25-11:35", "10:15-10:45"),
    PaceTarget("Phase 4: Sharpen+Taper (W23-27)", "12:15-13:15", "12:30-13:00", "11:25-11:40", "11:25-11:30", "10:15-10:30"),
  )

  val phases = listOf(
    Phase(1, "Base & Foundation", 1, 6, "Aerobic base. HR-gated easy running ONLY. Discipline beats intensity.", 500, 1.0, 2, 1, 3, "All Z2 runs. No tempo, no intervals. Strides only at end of plan phase."),
    Phase(2, "Aerobic Development", 7, 14, "Build mileage. Add strides + first easy tempo work. Still polarized.", 500, 1.0, 2, 1, 4, "Strides 2x/wk, fartlek, first tempo intervals (4x5min Z4)."),
    Phase(3, "Threshold & Race-Specific", 15, 22, "Lift threshold. Race-pace specificity. Mileage peaks ~40 mi.", 350, 0.7, 2, 1, 4, "Threshold intervals (2x15min, 3x10min), race-pace tempos, hill strides."),
    Phase(4, "Sharpen & Taper", 23, 27, "Race specificity, then volume drop while preserving intensity. Race week 27.", 0, 0.0, 1, 1, 4, "Race-pace cutdowns, dress-rehearsal long run, taper week."),
  )

  val strengthLibrary = listOf(
    StrengthExercise("Goblet / SSB Squat", "Quads, glutes, core", "4x6 (Phase 1-2) / 3x5 (Phase 3) / 2x6 light (Phase 4)", "Heels down, knees track over toes, brace core. Use SSB to avoid loaded neck flexion.", "Vagus-safe alternative to back squat. Avoid HBBS/front rack if symptoms flare."),
    StrengthExercise("Trap-Bar Deadlift", "Posterior chain, glutes, lats", "3x5 heavy", "Neutral spine, wedge into bar, push floor away. Stop 1-2 reps shy of failure.", "Lower-back-friendly. Skip if back is symptomatic this week — sub RDL."),
    StrengthExercise("Bulgarian Split Squat", "Quads, glutes, single-leg stability", "3x8/leg", "Front-foot drive, vertical torso, control descent.", "Excellent for hip stability, knee tracking. Address LEFT-side weakness first."),
    StrengthExercise("Romanian Deadlift", "Hamstrings, glutes, lower back", "3x8", "Hinge from hips, knees soft, bar/DB tracks shins.", "Critical for L-hamstring tightness — eccentric emphasis (3-sec lower)."),
    StrengthExercise("Nordic Curl (band-assisted)", "Hamstring eccentric strength", "3x6", "Slow lower (4-5 sec), use band for assistance. THE single best hamstring injury preventer.", "Non-negotiable for left hamstring tightness. Start band-heavy, reduce assistance over weeks."),
    StrengthExercise("Landmine Press (1-arm)", "Shoulder, upper chest, core", "4x6/arm", "Press at angle (joint-friendly), exhale at top. PRIMARY vertical pressing pattern given L shoulder.", "Replaces overhead press. Cuff-friendly trajectory."),
    StrengthExercise("Chest-Supported Row", "Mid back, rhomboids, rear delts", "4x8", "Bench at 30°, retract scaps, full ROM. Counterbalances seated work.", "Foundational for posture/cuff health."),
    StrengthExercise("Lat Pulldown", "Lats, biceps", "3x10", "Lead with elbows, full stretch top, slight lean back.", "Vertical pulling pattern."),
    StrengthExercise("Hip Thrust", "Glute max, hamstrings", "3x8", "Chin tucked, drive through heels, squeeze glutes at top.", "Glute strength for stride power; protects knees."),
    StrengthExercise("Cable Face Pull", "Rear delts, rotator cuff, scap retractors", "3x12", "Pull rope to forehead, external rotation at end. Daily-driver cuff prehab.", "MANDATORY in every session given L cuff issue."),
    StrengthExercise("Cable External Rotation (cuff)", "Infraspinatus, teres minor", "3x12/arm", "Light load, slow, full ROM. Elbow at 90°, tucked to side.", "L shoulder rehab work — start very light, build slowly."),
    StrengthExercise("Pallof Press", "Anti-rotation core, obliques", "3x10/side", "Press out, resist rotation. Hold 1-2 sec at extension.", "Cervical-neutral core work; vagus-safe."),
    StrengthExercise("Dead Bug", "Deep core, anti-extension", "3x10/side", "Lower back pressed to floor, opposite limb, exhale on extension.", "Cervical-neutral core; great for vagus impingement."),
    StrengthExercise("Calf Raise (DB or single-leg)", "Gastrocnemius, soleus", "3x12", "Full ROM, slow eccentric. Ankle stability for run economy.", "Address L-knee/calf chain."),
  )

  val nutritionRules = listOf(
    "Daily intake target hits the bottom of the range on REST days, top of range on hard-run days. Use the spreadsheet's per-day target.",
    "Protein at every meal: aim for 30-50g per sitting, 4-5 meals, hitting daily target by dinner.",
    "Carb-time around training: have 30-60g carbs in the 90 minutes BEFORE a quality workout, and 50-80g carbs + 20-30g protein within 60 minutes AFTER.",
    "Long-run fueling protocol: practice every weekend run >75 min. 1 gel (25-30g carb) every 30-40 min. Sip 4-6 oz water/electrolyte every 15 min. RACE DAY = WHATEVER YOU PRACTICED.",
    "Hydration baseline: 0.5-1.0 oz of water per lb bodyweight daily. Add electrolytes (sodium 500-1000mg) on hard days >60 min.",
    "Pre-bed protein helps recovery: 30-40g casein-rich source (Greek yogurt, cottage cheese, or whey casein blend) within 1 hr of sleep on hard-training days.",
    "Alcohol: minimize. Each drink costs ~150 kcal AND impairs recovery + sleep depth + protein synthesis. Avoid in 48h before key workouts.",
    "Weigh in once per week, same day, same time, post-bathroom. Track 7-day moving average, not daily.",
  )

  val raceDayProtocol = listOf(
    RaceDayStep("3 days out", "Begin carb-up: shift 60-65% of calories to carbs. Maintain protein. Reduce fiber/fat. Hydrate aggressively + electrolytes."),
    RaceDayStep("Day before", "Light meals, easy carbs (rice, pasta, bread, fruit). 2 hr easy walk allowed. Lay out kit, pin bib, set alarms (multiple). 9 PM lights out."),
    RaceDayStep("Race morning", "Wake 3 hrs before start (5:00 AM for 8:00 start). 600-800 kcal carb-heavy breakfast (oatmeal, banana, toast w/ honey, coffee). Sip 16-20 oz water + electrolytes."),
    RaceDayStep("90 min pre", "Final bathroom. Top up 8-10 oz water. Easy 5-10 min walk."),
    RaceDayStep("30 min pre", "Final gel (25g) + small water sip. Dynamic warm-up: leg swings, lunges, 4x20s strides. Stop 8-10 min before gun."),
    RaceDayStep("Miles 1-3", "TARGET 11:30-11:35 pace. KEEP HR <175. The first 3 miles will FEEL too easy. THEY ARE SUPPOSED TO. Resist any 'feels great' surge. This is where last race went wrong."),
    RaceDayStep("Miles 4-7", "Lock 11:25-11:32 pace. Gel at mile 4 + sip. HR drift to 180-185 OK if pace steady. Course is flat — find rhythm."),
    RaceDayStep("Miles 8-10", "Gel at mile 8 + sip. HR 180-188. Cue: 'relaxed shoulders, light feet, push through hips'. Find runner ahead, work to them."),
    RaceDayStep("Miles 11-13", "RACE STARTS NOW. HR can climb 188-195. Empty the tank if able. Mile 13 surge to finish."),
    RaceDayStep("Post-race", "Walk 10-15 min. 30g protein + 60g carbs within 30 min. Rehydrate (0.5 oz/lb of body weight lost). Foam roll/light stretch. NO running for 5-7 days."),
  )

  val weeks: List<WeekPlan> = listOf(
    WeekPlan(1, 1, "Base & Foundation", 16, 6.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 5, 4), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Tue", LocalDate.of(2026, 5, 5), "Run", "5.0 mi — Easy aerobic", "Z2", 5.0, 65, 741),
      DayPlan("Wed", LocalDate.of(2026, 5, 6), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 778),
      DayPlan("Thu", LocalDate.of(2026, 5, 7), "Rest", "Active recovery walk 30 min OR full rest", "—", 0.0, 0, 0),
      DayPlan("Fri", LocalDate.of(2026, 5, 8), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 5, 9), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Sun", LocalDate.of(2026, 5, 10), "Run", "6.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 6.0, 78, 889)
    ), WeekCalories(1, 1, 250.0, 2135, 640, 3642, 520, 3295, 500, 2795, 225, 88)),
    WeekPlan(2, 1, "Base & Foundation", 18, 7.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 5, 11), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Tue", LocalDate.of(2026, 5, 12), "Run", "5.5 mi — Easy aerobic", "Z2", 5.5, 71, 815),
      DayPlan("Wed", LocalDate.of(2026, 5, 13), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 944),
      DayPlan("Thu", LocalDate.of(2026, 5, 14), "Rest", "Active recovery walk 30 min OR full rest", "—", 0.0, 0, 0),
      DayPlan("Fri", LocalDate.of(2026, 5, 15), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 5, 16), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Sun", LocalDate.of(2026, 5, 17), "Run", "7.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 7.0, 91, 1037)
    ), WeekCalories(2, 1, 248.8, 2129, 638, 4030, 576, 3343, 500, 2843, 224, 87)),
    WeekPlan(3, 1, "Base & Foundation", 20, 8.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 5, 18), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Tue", LocalDate.of(2026, 5, 19), "Run", "6.0 mi — Easy aerobic", "Z2", 6.0, 78, 889),
      DayPlan("Wed", LocalDate.of(2026, 5, 20), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 778),
      DayPlan("Thu", LocalDate.of(2026, 5, 21), "Rest", "Active recovery walk 30 min OR full rest", "—", 0.0, 0, 0),
      DayPlan("Fri", LocalDate.of(2026, 5, 22), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 5, 23), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Sun", LocalDate.of(2026, 5, 24), "Run", "8.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 8.0, 104, 1185)
    ), WeekCalories(3, 1, 247.6, 2124, 637, 4086, 584, 3345, 500, 2845, 223, 87)),
    WeekPlan(4, 1, "Base & Foundation", 18, 7.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 5, 25), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Tue", LocalDate.of(2026, 5, 26), "Run", "5.5 mi — Easy aerobic", "Z2", 5.5, 71, 815),
      DayPlan("Wed", LocalDate.of(2026, 5, 27), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 944),
      DayPlan("Thu", LocalDate.of(2026, 5, 28), "Rest", "Active recovery walk 30 min OR full rest", "—", 0.0, 0, 0),
      DayPlan("Fri", LocalDate.of(2026, 5, 29), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 5, 30), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Sun", LocalDate.of(2026, 5, 31), "Run", "7.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 7.0, 91, 1037)
    ), WeekCalories(4, 1, 246.4, 2118, 635, 4030, 576, 3329, 500, 2829, 222, 86)),
    WeekPlan(5, 1, "Base & Foundation", 22, 9.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 6, 1), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Tue", LocalDate.of(2026, 6, 2), "Run", "6.5 mi — Easy aerobic", "Z2", 6.5, 84, 963),
      DayPlan("Wed", LocalDate.of(2026, 6, 3), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 778),
      DayPlan("Thu", LocalDate.of(2026, 6, 4), "Rest", "Active recovery walk 30 min OR full rest", "—", 0.0, 0, 0),
      DayPlan("Fri", LocalDate.of(2026, 6, 5), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 6, 6), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Sun", LocalDate.of(2026, 6, 7), "Run", "9.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 9.0, 117, 1333)
    ), WeekCalories(5, 1, 245.2, 2113, 633, 4308, 615, 3361, 500, 2861, 221, 86)),
    WeekPlan(6, 1, "Base & Foundation", 20, 8.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 6, 8), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Tue", LocalDate.of(2026, 6, 9), "Run", "6.0 mi — Easy aerobic", "Z2", 6.0, 78, 889),
      DayPlan("Wed", LocalDate.of(2026, 6, 10), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 944),
      DayPlan("Thu", LocalDate.of(2026, 6, 11), "Rest", "Active recovery walk 30 min OR full rest", "—", 0.0, 0, 0),
      DayPlan("Fri", LocalDate.of(2026, 6, 12), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 6, 13), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 617),
      DayPlan("Sun", LocalDate.of(2026, 6, 14), "Run", "8.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 8.0, 104, 1185)
    ), WeekCalories(6, 1, 244.0, 2107, 632, 4252, 607, 3346, 500, 2846, 220, 85)),
    WeekPlan(7, 2, "Aerobic Development", 24, 9.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 6, 15), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 6, 16), "Run", "5.0 mi — Easy 4.0 mi + 6x20s strides on grass/track w/ full recovery", "Z2 + brief Z5", 5.0, 65, 720),
      DayPlan("Wed", LocalDate.of(2026, 6, 17), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 756),
      DayPlan("Thu", LocalDate.of(2026, 6, 18), "Run", "5.0 mi — Easy aerobic recovery run", "Z2 (low end)", 5.0, 65, 720),
      DayPlan("Fri", LocalDate.of(2026, 6, 19), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 6, 20), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 6, 21), "Run", "9.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 9.0, 117, 1296)
    ), WeekCalories(7, 2, 242.9, 2102, 630, 4692, 670, 3402, 500, 2902, 219, 85)),
    WeekPlan(8, 2, "Aerobic Development", 26, 10.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 6, 22), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 6, 23), "Run", "5.3 mi — Easy 4.3 mi + 6x20s strides on grass/track w/ full recovery", "Z2 + brief Z5", 5.3, 68, 763),
      DayPlan("Wed", LocalDate.of(2026, 6, 24), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 918),
      DayPlan("Thu", LocalDate.of(2026, 6, 25), "Run", "5.3 mi — Easy aerobic recovery run", "Z2 (low end)", 5.3, 68, 763),
      DayPlan("Fri", LocalDate.of(2026, 6, 26), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 6, 27), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 6, 28), "Run", "10.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 10.0, 130, 1440)
    ), WeekCalories(8, 2, 241.7, 2097, 629, 5084, 726, 3452, 500, 2952, 218, 85)),
    WeekPlan(9, 2, "Aerobic Development", 28, 11.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 6, 29), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 6, 30), "Run", "5.7 mi — Easy 4.7 mi + 6x20s strides on grass/track w/ full recovery", "Z2 + brief Z5", 5.7, 74, 820),
      DayPlan("Wed", LocalDate.of(2026, 7, 1), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 756),
      DayPlan("Thu", LocalDate.of(2026, 7, 2), "Run", "5.7 mi — Easy aerobic recovery run", "Z2 (low end)", 5.7, 74, 820),
      DayPlan("Fri", LocalDate.of(2026, 7, 3), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 7, 4), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 7, 5), "Run", "11.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 11.0, 143, 1584)
    ), WeekCalories(9, 2, 240.5, 2092, 627, 5180, 740, 3459, 500, 2959, 216, 84)),
    WeekPlan(10, 2, "Aerobic Development", 24, 9.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 7, 6), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 7, 7), "Run", "5.0 mi — Easy 4.0 mi + 6x20s strides on grass/track w/ full recovery", "Z2 + brief Z5", 5.0, 65, 720),
      DayPlan("Wed", LocalDate.of(2026, 7, 8), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 918),
      DayPlan("Thu", LocalDate.of(2026, 7, 9), "Run", "5.0 mi — Easy aerobic recovery run", "Z2 (low end)", 5.0, 65, 720),
      DayPlan("Fri", LocalDate.of(2026, 7, 10), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 7, 11), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 7, 12), "Run", "9.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 9.0, 117, 1296)
    ), WeekCalories(10, 2, 239.3, 2086, 625, 4854, 693, 3404, 500, 2904, 215, 84)),
    WeekPlan(11, 2, "Aerobic Development", 30, 12.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 7, 13), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 7, 14), "Run", "6.5 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 6.5, 84, 936),
      DayPlan("Wed", LocalDate.of(2026, 7, 15), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 756),
      DayPlan("Thu", LocalDate.of(2026, 7, 16), "Run", "6.0 mi — Easy aerobic recovery run", "Z2 (low end)", 6.0, 78, 864),
      DayPlan("Fri", LocalDate.of(2026, 7, 17), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 7, 18), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 7, 19), "Run", "12.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 12.0, 156, 1728)
    ), WeekCalories(11, 2, 238.1, 2081, 624, 5484, 783, 3488, 500, 2988, 214, 83)),
    WeekPlan(12, 2, "Aerobic Development", 32, 13.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 7, 20), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 7, 21), "Run", "6.8 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 6.8, 88, 979),
      DayPlan("Wed", LocalDate.of(2026, 7, 22), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 918),
      DayPlan("Thu", LocalDate.of(2026, 7, 23), "Run", "6.3 mi — Easy aerobic recovery run", "Z2 (low end)", 6.3, 81, 907),
      DayPlan("Fri", LocalDate.of(2026, 7, 24), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 7, 25), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 7, 26), "Run", "13.0 mi — Long run w/ finish surge: easy 11.0 mi @ Z2 / final 2 mi steady Z3 high. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 13.0, 169, 1872)
    ), WeekCalories(12, 2, 236.9, 2075, 622, 5876, 839, 3536, 500, 3036, 213, 83)),
    WeekPlan(13, 2, "Aerobic Development", 28, 11.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 7, 27), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 7, 28), "Run", "6.2 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 6.2, 80, 892),
      DayPlan("Wed", LocalDate.of(2026, 7, 29), "Stationary bike", "BIKE 45 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 45, 756),
      DayPlan("Thu", LocalDate.of(2026, 7, 30), "Run", "5.7 mi — Easy aerobic recovery run", "Z2 (low end)", 5.7, 74, 820),
      DayPlan("Fri", LocalDate.of(2026, 7, 31), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 8, 1), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 8, 2), "Run", "11.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 11.0, 143, 1584)
    ), WeekCalories(13, 2, 235.7, 2070, 621, 5252, 750, 3441, 500, 2941, 212, 82)),
    WeekPlan(14, 2, "Aerobic Development", 32, 13.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 8, 3), "Strength", "STRENGTH A (Lower bias): Goblet/SSB squat 4x6 | Trap-bar deadlift 3x5 | Bulgarian split squat 3x8/leg | Nordic curl or RDL eccentric 3x6 | Cable face pull 3x12 | Dead bug 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Tue", LocalDate.of(2026, 8, 4), "Run", "6.8 mi — Tempo: 1.5 mi WU @ Z2 / 4x5min Z4 (90s jog) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 6.8, 88, 979),
      DayPlan("Wed", LocalDate.of(2026, 8, 5), "Stairmaster", "STAIRMASTER 45 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 45, 918),
      DayPlan("Thu", LocalDate.of(2026, 8, 6), "Run", "6.3 mi — Easy aerobic recovery run", "Z2 (low end)", 6.3, 81, 907),
      DayPlan("Fri", LocalDate.of(2026, 8, 7), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 8, 8), "Strength", "STRENGTH B (Upper bias): Landmine press 4x6 | Chest-supported row 4x8 | Lat pulldown 3x10 | DB single-arm row 3x10/arm | Cable cuff ER 3x12/arm | Pallof press 3x10/side", "Z2-Z3 brief", 0.0, 50, 600),
      DayPlan("Sun", LocalDate.of(2026, 8, 9), "Run", "13.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 13.0, 169, 1872)
    ), WeekCalories(14, 2, 234.5, 2064, 619, 5876, 839, 3522, 500, 3022, 211, 82)),
    WeekPlan(15, 3, "Threshold & Race-Specific", 34, 13.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 8, 10), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 8, 11), "Run", "8.0 mi — Threshold: 2 mi WU / 2x15min Z4 (3 min jog between) / 2 mi CD", "Z2 -> Z4 -> Z2", 8.0, 104, 1104),
      DayPlan("Wed", LocalDate.of(2026, 8, 12), "Stationary bike", "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 50, 805),
      DayPlan("Thu", LocalDate.of(2026, 8, 13), "Run", "7.0 mi — Easy aerobic recovery run", "Z2 (low end)", 7.0, 91, 966),
      DayPlan("Fri", LocalDate.of(2026, 8, 14), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 8, 15), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 8, 16), "Run", "13.0 mi — Long run w/ finish surge: easy 11.0 mi @ Z2 / final 2 mi steady Z3 high. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 13.0, 169, 1794)
    ), WeekCalories(15, 3, 233.3, 2059, 617, 5589, 798, 3474, 350, 3124, 210, 82)),
    WeekPlan(16, 3, "Threshold & Race-Specific", 36, 14.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 8, 17), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 8, 18), "Run", "8.3 mi — Race-pace tempo: 2 mi WU / 4 mi @ goal HMP (target 11:25-11:35) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 8.3, 107, 1145),
      DayPlan("Wed", LocalDate.of(2026, 8, 19), "Stairmaster", "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 50, 977),
      DayPlan("Thu", LocalDate.of(2026, 8, 20), "Run", "7.3 mi — Easy aerobic recovery run", "Z2 (low end)", 7.3, 94, 1007),
      DayPlan("Fri", LocalDate.of(2026, 8, 21), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 8, 22), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 8, 23), "Run", "14.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 14.0, 182, 1932)
    ), WeekCalories(16, 3, 232.1, 2053, 615, 5981, 854, 3522, 350, 3172, 209, 81)),
    WeekPlan(17, 3, "Threshold & Race-Specific", 32, 12.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 8, 24), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 8, 25), "Run", "7.7 mi — VO2: 2 mi WU / 5x3min Z5 (3 min jog) / 1.5 mi CD", "Z2 -> Z5 -> Z2", 7.7, 100, 1062),
      DayPlan("Wed", LocalDate.of(2026, 8, 26), "Stationary bike", "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 50, 805),
      DayPlan("Thu", LocalDate.of(2026, 8, 27), "Run", "6.7 mi — Easy aerobic recovery run", "Z2 (low end)", 6.7, 87, 924),
      DayPlan("Fri", LocalDate.of(2026, 8, 28), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 8, 29), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 8, 30), "Run", "12.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 12.0, 156, 1656)
    ), WeekCalories(17, 3, 231.0, 2048, 614, 5367, 767, 3429, 350, 3079, 208, 81)),
    WeekPlan(18, 3, "Threshold & Race-Specific", 38, 14.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 8, 31), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 9, 1), "Run", "9.0 mi — Cruise intervals: 2 mi WU / 3x10min Z4 (2 min jog) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 9.0, 117, 1242),
      DayPlan("Wed", LocalDate.of(2026, 9, 2), "Stairmaster", "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 50, 977),
      DayPlan("Thu", LocalDate.of(2026, 9, 3), "Run", "8.0 mi — Easy aerobic recovery run", "Z2 (low end)", 8.0, 104, 1104),
      DayPlan("Fri", LocalDate.of(2026, 9, 4), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 9, 5), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 9, 6), "Run", "14.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 14.0, 182, 1932)
    ), WeekCalories(18, 3, 229.8, 2043, 612, 6175, 882, 3537, 350, 3187, 207, 80)),
    WeekPlan(19, 3, "Threshold & Race-Specific", 40, 15.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 9, 7), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 9, 8), "Run", "9.3 mi — Threshold: 2 mi WU / 2x15min Z4 (3 min jog between) / 2 mi CD", "Z2 -> Z4 -> Z2", 9.3, 120, 1283),
      DayPlan("Wed", LocalDate.of(2026, 9, 9), "Stationary bike", "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 50, 805),
      DayPlan("Thu", LocalDate.of(2026, 9, 10), "Run", "8.3 mi — Easy aerobic recovery run", "Z2 (low end)", 8.3, 107, 1145),
      DayPlan("Fri", LocalDate.of(2026, 9, 11), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 9, 12), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 9, 13), "Run", "15.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 15.0, 195, 2070)
    ), WeekCalories(19, 3, 228.6, 2038, 611, 6223, 889, 3538, 350, 3188, 206, 80)),
    WeekPlan(20, 3, "Threshold & Race-Specific", 35, 12.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 9, 14), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 9, 15), "Run", "8.7 mi — Race-pace tempo: 2 mi WU / 4 mi @ goal HMP (target 11:25-11:35) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 8.7, 113, 1200),
      DayPlan("Wed", LocalDate.of(2026, 9, 16), "Stairmaster", "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 50, 977),
      DayPlan("Thu", LocalDate.of(2026, 9, 17), "Run", "7.7 mi — Easy aerobic recovery run", "Z2 (low end)", 7.7, 100, 1062),
      DayPlan("Fri", LocalDate.of(2026, 9, 18), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 9, 19), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 9, 20), "Run", "12.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 12.0, 156, 1656)
    ), WeekCalories(20, 3, 227.4, 2032, 609, 5815, 831, 3472, 350, 3122, 205, 80)),
    WeekPlan(21, 3, "Threshold & Race-Specific", 40, 14.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 9, 21), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 9, 22), "Run", "9.7 mi — VO2: 2 mi WU / 5x3min Z5 (3 min jog) / 1.5 mi CD", "Z2 -> Z5 -> Z2", 9.7, 126, 1338),
      DayPlan("Wed", LocalDate.of(2026, 9, 23), "Stationary bike", "BIKE 50 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 50, 805),
      DayPlan("Thu", LocalDate.of(2026, 9, 24), "Run", "8.7 mi — Easy aerobic recovery run", "Z2 (low end)", 8.7, 113, 1200),
      DayPlan("Fri", LocalDate.of(2026, 9, 25), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 9, 26), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 9, 27), "Run", "14.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 14.0, 182, 1932)
    ), WeekCalories(21, 3, 226.2, 2027, 608, 6195, 885, 3520, 350, 3170, 204, 79)),
    WeekPlan(22, 3, "Threshold & Race-Specific", 36, 13.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 9, 28), "Strength", "STRENGTH A (Maint Lower): Trap-bar DL 3x5 | BSS 2x8/leg | Nordic curl 2x6 | Hip thrust 3x8 | Face pull 3x12 | Plank 3x45s", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Tue", LocalDate.of(2026, 9, 29), "Run", "8.7 mi — Cruise intervals: 2 mi WU / 3x10min Z4 (2 min jog) / 1.5 mi CD", "Z2 -> Z4 -> Z2", 8.7, 113, 1200),
      DayPlan("Wed", LocalDate.of(2026, 9, 30), "Stairmaster", "STAIRMASTER 50 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 50, 977),
      DayPlan("Thu", LocalDate.of(2026, 10, 1), "Run", "7.7 mi — Easy aerobic recovery run", "Z2 (low end)", 7.7, 100, 1062),
      DayPlan("Fri", LocalDate.of(2026, 10, 2), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 10, 3), "Strength", "STRENGTH B (Maint Upper): Landmine press 3x6 | CSR 3x8 | Pulldown 2x10 | Cuff ER 3x12 | Pallof 3x10/side", "Z2-Z3 brief", 0.0, 40, 460),
      DayPlan("Sun", LocalDate.of(2026, 10, 4), "Run", "13.0 mi — Long run w/ HMP segment: 4 mi Z2 / 4 mi @ goal HMP / remainder Z2. Practice fueling.", "Z2 (Z3 only on prescribed segments)", 13.0, 169, 1794)
    ), WeekCalories(22, 3, 225.0, 2021, 606, 5953, 850, 3477, 350, 3127, 202, 79)),
    WeekPlan(23, 4, "Sharpen & Taper", 34, 14.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 10, 5), "Strength", "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Tue", LocalDate.of(2026, 10, 6), "Run", "7.7 mi — Race-pace cutdown: 2 mi WU / 5 mi @ HMP / 1 mi CD", "Z2 -> Z4 -> Z2", 7.7, 100, 1039),
      DayPlan("Wed", LocalDate.of(2026, 10, 7), "Stationary bike", "BIKE 35 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 35, 551),
      DayPlan("Thu", LocalDate.of(2026, 10, 8), "Run", "6.7 mi — Easy aerobic recovery run", "Z2 (low end)", 6.7, 87, 904),
      DayPlan("Fri", LocalDate.of(2026, 10, 9), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 10, 10), "Strength", "STRENGTH B (Light Upper): Landmine press 2x5 | Cable row 2x8 | Cuff prehab 3x12 | Mobility flow", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Sun", LocalDate.of(2026, 10, 11), "Run", "14.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 14.0, 182, 1890)
    ), WeekCalories(23, 4, 225.0, 2021, 606, 5284, 755, 3382, 0, 3382, 202, 79)),
    WeekPlan(24, 4, "Sharpen & Taper", 32, 12.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 10, 12), "Strength", "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Tue", LocalDate.of(2026, 10, 13), "Run", "7.7 mi — Threshold: 1.5 mi WU / 2x12min Z4 (3 min jog) / 1 mi CD", "Z2 -> Z4 -> Z2", 7.7, 100, 1039),
      DayPlan("Wed", LocalDate.of(2026, 10, 14), "Stairmaster", "STAIRMASTER 35 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 35, 669),
      DayPlan("Thu", LocalDate.of(2026, 10, 15), "Run", "6.7 mi — Easy aerobic recovery run", "Z2 (low end)", 6.7, 87, 904),
      DayPlan("Fri", LocalDate.of(2026, 10, 16), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 10, 17), "Strength", "STRENGTH B (Light Upper): Landmine press 2x5 | Cable row 2x8 | Cuff prehab 3x12 | Mobility flow", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Sun", LocalDate.of(2026, 10, 18), "Run", "12.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 12.0, 156, 1620)
    ), WeekCalories(24, 4, 225.0, 2021, 606, 5132, 733, 3360, 0, 3360, 202, 79)),
    WeekPlan(25, 4, "Sharpen & Taper", 28, 10.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 10, 19), "Strength", "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Tue", LocalDate.of(2026, 10, 20), "Run", "7.0 mi — VO2 sharpener: 1.5 mi WU / 6x90s Z5 (90s jog) / 1.5 mi CD", "Z2 -> Z5 -> Z2", 7.0, 91, 945),
      DayPlan("Wed", LocalDate.of(2026, 10, 21), "Stationary bike", "BIKE 35 min Z2 (RPE 5-6, conversational). Spin-up cadence 85-95 rpm.", "Z2", 0.0, 35, 551),
      DayPlan("Thu", LocalDate.of(2026, 10, 22), "Run", "6.0 mi — Easy aerobic recovery run", "Z2 (low end)", 6.0, 78, 810),
      DayPlan("Fri", LocalDate.of(2026, 10, 23), "Rest", "REST DAY — no training. Mobility/stretching only.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 10, 24), "Strength", "STRENGTH B (Light Upper): Landmine press 2x5 | Cable row 2x8 | Cuff prehab 3x12 | Mobility flow", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Sun", LocalDate.of(2026, 10, 25), "Run", "10.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 10.0, 130, 1350)
    ), WeekCalories(25, 4, 225.0, 2021, 606, 4556, 651, 3278, 0, 3278, 202, 79)),
    WeekPlan(26, 4, "Sharpen & Taper", 22, 8.0, listOf(
      DayPlan("Mon", LocalDate.of(2026, 10, 26), "Strength", "STRENGTH A (Light Lower): BSS 2x6/leg @ light | Hip thrust 2x8 | Calf raise 2x12 | Cuff prehab 3x12", "Z2-Z3 brief", 0.0, 40, 450),
      DayPlan("Tue", LocalDate.of(2026, 10, 27), "Run", "5.0 mi — Tempo: 1.5 mi WU / 3x6min Z4 (2 min jog) / 1 mi CD — sharpener", "Z2 -> Z4 -> Z2", 5.0, 65, 675),
      DayPlan("Wed", LocalDate.of(2026, 10, 28), "Stairmaster", "STAIRMASTER 35 min steady Z2 (avoid leaning on rails). Posture tall, vagus-friendly neutral neck.", "Z2", 0.0, 35, 669),
      DayPlan("Thu", LocalDate.of(2026, 10, 29), "Run", "4.0 mi — Easy aerobic", "Z2", 4.0, 52, 540),
      DayPlan("Fri", LocalDate.of(2026, 10, 30), "Rest", "REST DAY", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 10, 31), "Run", "3.0 mi — Easy + 4x20s strides", "Z2 + brief Z5", 3.0, 39, 405),
      DayPlan("Sun", LocalDate.of(2026, 11, 1), "Run", "8.0 mi — Long run, conversational pace. Practice fueling (gel every 30-40 min).", "Z2 (Z3 only on prescribed segments)", 8.0, 104, 1080)
    ), WeekCalories(26, 4, 225.0, 2021, 606, 3819, 546, 3173, 0, 3173, 202, 79)),
    WeekPlan(27, 4, "Sharpen & Taper", 16, 13.1, listOf(
      DayPlan("Mon", LocalDate.of(2026, 11, 2), "Run", "3 mi very easy + 4x20s strides", "Z2 -> Z5 brief", 3.0, 35, 360),
      DayPlan("Tue", LocalDate.of(2026, 11, 3), "Run", "4 mi: 1.5 WU / 2 mi @ goal HMP / 0.5 CD — final tune-up", "Z2 -> Z4 -> Z2", 4.0, 50, 480),
      DayPlan("Wed", LocalDate.of(2026, 11, 4), "Bike", "30 min Z1 super-easy spin", "Z1", 0.0, 30, 240),
      DayPlan("Thu", LocalDate.of(2026, 11, 5), "Run", "20-25 min easy shake-out + 4x15s strides. Mind/body check.", "Z2", 1.8, 22, 240),
      DayPlan("Fri", LocalDate.of(2026, 11, 6), "Rest", "REST: 15-20 min walk + foam roll. Hydrate + carb-load. Pin bib. Lay out kit.", "—", 0.0, 0, 0),
      DayPlan("Sat", LocalDate.of(2026, 11, 7), "Run", "RACE DAY — Salina Crossroads Half-Marathon. 8:00 AM CST start. See race-day protocol.", "Z3->Z4->Z4-high", 13.1, 150, 1900),
      DayPlan("Sun", LocalDate.of(2026, 11, 8), "Rest", "Recovery walk 20-30 min. Refuel. Hydrate. Celebrate.", "Z1", 0.0, 25, 80)
    ), WeekCalories(27, 4, 225.0, 2021, 606, 3300, 471, 3098, 0, 3098, 202, 79)),
  )
}
