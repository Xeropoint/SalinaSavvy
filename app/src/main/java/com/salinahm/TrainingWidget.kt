package com.salinahm

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.view.View
import android.widget.RemoteViews
import java.time.LocalDate

/**
 * 4×6 home screen widget. Shows today's workout big and glanceable.
 *
 * Design (top to bottom):
 *   1. Header strip — Phase pill | Wk N/27 | Days to race
 *   2. Day name + date (medium type)
 *   3. Activity title (huge, color-tinted by phase)
 *   4. Detail (multi-line, body type)
 *   5. Stats row — HR zone | Miles | Duration
 *   6. Footer — Daily kcal + protein target
 *
 * Tapping anywhere opens MainActivity. Widget refreshes:
 *   - When provider is first added
 *   - Once a day at midnight via WidgetUpdater (AlarmManager)
 *   - On boot, time set, timezone change, date change (via BootReceiver)
 *   - When the app is opened
 */
class TrainingWidget : AppWidgetProvider() {

    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        for (id in appWidgetIds) {
            updateAppWidget(context, appWidgetManager, id)
        }
        // After updating, schedule the next midnight tick so we redraw at 00:01
        WidgetUpdater.scheduleNextMidnight(context)
    }

    override fun onEnabled(context: Context) {
        // First widget instance added — start the daily schedule
        WidgetUpdater.scheduleNextMidnight(context)
    }

    override fun onDisabled(context: Context) {
        WidgetUpdater.cancelSchedule(context)
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        if (intent.action == ACTION_REFRESH) {
            val mgr = AppWidgetManager.getInstance(context)
            val ids = mgr.getAppWidgetIds(ComponentName(context, TrainingWidget::class.java))
            for (id in ids) updateAppWidget(context, mgr, id)
            WidgetUpdater.scheduleNextMidnight(context)
        }
    }

    companion object {
        const val ACTION_REFRESH = "com.salinahm.ACTION_REFRESH_WIDGET"

        fun updateAppWidget(context: Context, manager: AppWidgetManager, widgetId: Int) {
            val views = buildRemoteViews(context)
            manager.updateAppWidget(widgetId, views)
        }

        private fun buildRemoteViews(context: Context): RemoteViews {
            val rv = RemoteViews(context.packageName, R.layout.widget_layout)
            val today = LocalDate.now()
            val r = PlanLogic.findToday(today)
            val day = r.day
            val w = r.week
            val cal = w.calories

            // -------- Header strip --------
            rv.setTextViewText(R.id.w_phase_pill, "P${w.phaseId}")
            rv.setInt(R.id.w_phase_pill, "setBackgroundResource", phaseDrawable(w.phaseId))

            rv.setTextViewText(R.id.w_phase_name, w.phaseName)
            rv.setTextViewText(R.id.w_week_label, "Wk ${w.week}/${PlanData.totalWeeks}")

            val daysLeft = PlanLogic.daysToRace(today)
            val countdownText = when {
                daysLeft > 0 -> "$daysLeft ${if (daysLeft == 1L) "day" else "days"} to race"
                daysLeft == 0L -> "🏁 Race Day"
                else -> "Race complete"
            }
            rv.setTextViewText(R.id.w_countdown, countdownText)

            // -------- Day name + date --------
            val dateLine = when {
                r.isToday -> "Today · ${PlanLogic.formatLong(day.date)}"
                r.isBefore -> "Plan starts ${PlanLogic.formatLong(day.date)}"
                r.isAfter -> "Plan complete · ${PlanLogic.formatLong(day.date)}"
                else -> PlanLogic.formatLong(day.date)
            }
            rv.setTextViewText(R.id.w_date, dateLine)

            // -------- Activity title (huge) --------
            val title = PlanLogic.activityTitle(day)
            rv.setTextViewText(R.id.w_activity, title)
            rv.setTextColor(R.id.w_activity, activityColor(day))

            // -------- Detail --------
            rv.setTextViewText(R.id.w_detail, day.detail)

            // -------- Stats row --------
            val hrZone = if (day.hrZone == "—" || day.hrZone.isBlank()) "—" else day.hrZone
            rv.setTextViewText(R.id.w_stat_hr, hrZone)
            rv.setTextViewText(R.id.w_stat_miles, if (day.miles > 0) PlanLogic.stripZeroes(day.miles) + " mi" else "—")
            rv.setTextViewText(R.id.w_stat_duration, if (day.durationMin > 0) "${day.durationMin}m" else "—")

            // -------- Fueling footer --------
            rv.setTextViewText(R.id.w_kcal, "${"%,d".format(cal.dailyIntakeTarget)} kcal")
            rv.setTextViewText(R.id.w_protein, "${cal.proteinG}g P · ${cal.fatGMin}g F")
            rv.setTextViewText(R.id.w_weight, "${cal.projectedWeightLb} lb")

            // -------- Tap target — open MainActivity --------
            val openIntent = Intent(context, MainActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
            }
            val pi = PendingIntent.getActivity(
                context, 0, openIntent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )
            rv.setOnClickPendingIntent(R.id.w_root, pi)

            return rv
        }

        private fun phaseDrawable(phaseId: Int): Int = when (phaseId) {
            1 -> R.drawable.phase_pill_p1
            2 -> R.drawable.phase_pill_p2
            3 -> R.drawable.phase_pill_p3
            4 -> R.drawable.phase_pill_p4
            else -> R.drawable.phase_pill_p1
        }

        private fun activityColor(day: DayPlan): Int {
            return when (PlanLogic.activityKind(day)) {
                "race" -> 0xFFFF5563.toInt()
                "run" -> 0xFF4EA1FF.toInt()
                "strength" -> 0xFFFF9D4D.toInt()
                "cross" -> 0xFF4DDCA8.toInt()
                "rest" -> 0xFF97A3B9.toInt()
                else -> 0xFFE6ECF5.toInt()
            }
        }
    }
}
