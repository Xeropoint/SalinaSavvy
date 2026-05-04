package com.salinahm

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit

/**
 * Helpers for picking today's day from the plan, formatting strings, and
 * computing race countdown. Pure functions, no Android dependencies.
 */
object PlanLogic {

    /** Result of a "find today" lookup. */
    data class TodayResult(
        val week: WeekPlan,
        val day: DayPlan,
        val isToday: Boolean,
        val isBefore: Boolean,   // today is before plan start
        val isAfter: Boolean     // today is after plan end (post-race)
    )

    fun findToday(today: LocalDate = LocalDate.now()): TodayResult {
        val weeks = PlanData.weeks
        // Iterate to find an exact match
        for (w in weeks) {
            for (d in w.days) {
                if (d.date == today) return TodayResult(w, d, true, false, false)
            }
        }
        // Before plan: show first day with flag
        if (today.isBefore(weeks.first().days.first().date)) {
            val w = weeks.first(); val d = w.days.first()
            return TodayResult(w, d, false, true, false)
        }
        // After plan: show last day
        val w = weeks.last(); val d = w.days.last()
        return TodayResult(w, d, false, false, true)
    }

    fun findCurrentWeek(today: LocalDate = LocalDate.now()): WeekPlan {
        val weeks = PlanData.weeks
        for (w in weeks) {
            if (!today.isBefore(w.days.first().date) && !today.isAfter(w.days.last().date)) return w
        }
        return if (today.isBefore(weeks.first().days.first().date)) weeks.first() else weeks.last()
    }

    fun daysToRace(today: LocalDate = LocalDate.now()): Long =
        ChronoUnit.DAYS.between(today, PlanData.race.date)

    /** Pretty title for the day's activity (used in widget + UI). */
    fun activityTitle(day: DayPlan): String {
        if (isRaceDay(day)) return "🏁 RACE DAY"
        return when (day.activity) {
            "Run" -> if (day.miles > 0) "${stripZeroes(day.miles)} mi Run" else "Run"
            "Strength" -> {
                val m = Regex("^STRENGTH ([AB])").find(day.detail)
                if (m != null) "Strength ${m.groupValues[1]}" else "Strength"
            }
            "Stationary bike" -> "Bike"
            "Stairmaster" -> "Stairmaster"
            "Bike" -> "Bike"
            "Rest" -> "Rest Day"
            else -> day.activity
        }
    }

    fun isRaceDay(day: DayPlan): Boolean = day.detail.contains("RACE DAY")

    /** Activity kind for color/styling: run, strength, cross, rest, race. */
    fun activityKind(day: DayPlan): String = when {
        isRaceDay(day) -> "race"
        day.activity == "Run" -> "run"
        day.activity == "Strength" -> "strength"
        day.activity == "Bike" || day.activity == "Stationary bike" || day.activity == "Stairmaster" -> "cross"
        day.activity == "Rest" -> "rest"
        else -> "rest"
    }

    /** Drop trailing ".0" from doubles like "5.0" -> "5"; keep "5.5" as-is. */
    fun stripZeroes(d: Double): String =
        if (d == d.toLong().toDouble()) d.toLong().toString() else d.toString()

    private val LONG_DATE = DateTimeFormatter.ofPattern("EEEE, MMM d")
    private val SHORT_DATE = DateTimeFormatter.ofPattern("EEE")
    private val DAY_NUM = DateTimeFormatter.ofPattern("d")

    fun formatLong(d: LocalDate): String = d.format(LONG_DATE)
    fun formatDayName(d: LocalDate): String = d.format(SHORT_DATE)
    fun formatDayNum(d: LocalDate): String = d.format(DAY_NUM)
}
