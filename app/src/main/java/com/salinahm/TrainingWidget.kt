package com.salinahm

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.util.Log
import android.widget.RemoteViews
import java.time.LocalDate

/**
 * 4×6 home screen widget. Defensive: any exception in buildRemoteViews falls
 * back to a minimal RemoteViews so the widget still inflates instead of
 * showing "couldn't add widget".
 */
class TrainingWidget : AppWidgetProvider() {

    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        for (id in appWidgetIds) updateAppWidget(context, appWidgetManager, id)
        try { WidgetUpdater.scheduleNextMidnight(context) } catch (t: Throwable) {
            Log.e(TAG, "scheduleNextMidnight failed", t)
        }
    }

    override fun onEnabled(context: Context) {
        try { WidgetUpdater.scheduleNextMidnight(context) } catch (t: Throwable) {
            Log.e(TAG, "scheduleNextMidnight (onEnabled) failed", t)
        }
    }

    override fun onDisabled(context: Context) {
        try { WidgetUpdater.cancelSchedule(context) } catch (t: Throwable) {
            Log.e(TAG, "cancelSchedule failed", t)
        }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        if (intent.action == ACTION_REFRESH) {
            try {
                val mgr = AppWidgetManager.getInstance(context)
                val ids = mgr.getAppWidgetIds(ComponentName(context, TrainingWidget::class.java))
                for (id in ids) updateAppWidget(context, mgr, id)
                WidgetUpdater.scheduleNextMidnight(context)
            } catch (t: Throwable) {
                Log.e(TAG, "onReceive refresh failed", t)
            }
        }
    }

    companion object {
        private const val TAG = "SalinaWidget"
        const val ACTION_REFRESH = "com.salinahm.ACTION_REFRESH_WIDGET"

        fun updateAppWidget(context: Context, manager: AppWidgetManager, widgetId: Int) {
            val views = try {
                buildRemoteViews(context)
            } catch (t: Throwable) {
                Log.e(TAG, "buildRemoteViews threw", t)
                buildFallbackViews(context, t)
            }
            try {
                manager.updateAppWidget(widgetId, views)
            } catch (t: Throwable) {
                Log.e(TAG, "updateAppWidget failed", t)
            }
        }

        private fun buildFallbackViews(context: Context, t: Throwable): RemoteViews {
            val rv = RemoteViews(context.packageName, R.layout.widget_layout)
            rv.setTextViewText(R.id.w_phase_pill, "!")
            rv.setTextViewText(R.id.w_phase_name, "Salina HM")
            rv.setTextViewText(R.id.w_week_label, "—")
            rv.setTextViewText(R.id.w_countdown, "Tap to open")
            rv.setTextViewText(R.id.w_date, "Tap widget to open app")
            rv.setTextViewText(R.id.w_activity, "Today")
            rv.setTextViewText(R.id.w_detail, "(${t.javaClass.simpleName})")
            rv.setTextViewText(R.id.w_stat_hr, "—")
            rv.setTextViewText(R.id.w_stat_miles, "—")
            rv.setTextViewText(R.id.w_stat_duration, "—")
            rv.setTextViewText(R.id.w_kcal, "—")
            rv.setTextViewText(R.id.w_protein, "—")
            rv.setTextViewText(R.id.w_weight, "—")
            attachOpenAppIntent(context, rv)
            return rv
        }

        private fun attachOpenAppIntent(context: Context, rv: RemoteViews) {
            val openIntent = Intent(context, MainActivity::class.java).apply {
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
            }
            val pi = PendingIntent.getActivity(
                context, 0, openIntent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )
            rv.setOnClickPendingIntent(R.id.w_root, pi)
        }

        private fun buildRemoteViews(context: Context): RemoteViews {
            val rv = RemoteViews(context.packageName, R.layout.widget_layout)
            val today = LocalDate.now()
            val r = PlanLogic.findToday(today)
            val day = r.day
            val w = r.week
            val cal = w.calories

            rv.setTextViewText(R.id.w_phase_pill, "P${w.phaseId}")
            rv.setInt(R.id.w_phase_pill, "setBackgroundResource", phaseDrawable(w.phaseId))
            rv.setTextViewText(R.id.w_phase_name, w.phaseName)
            rv.setTextViewText(R.id.w_week_label, "Wk ${w.week}/${PlanData.totalWeeks}")

            val daysLeft = PlanLogic.daysToRace(today)
            val countdown = when {
                daysLeft > 0 -> "$daysLeft ${if (daysLeft == 1L) "day" else "days"} to race"
                daysLeft == 0L -> "RACE DAY"
                else -> "Race complete"
            }
            rv.setTextViewText(R.id.w_countdown, countdown)

            val dateLine = when {
                r.isToday -> "Today · ${PlanLogic.formatLong(day.date)}"
                r.isBefore -> "Plan starts ${PlanLogic.formatLong(day.date)}"
                r.isAfter -> "Plan complete · ${PlanLogic.formatLong(day.date)}"
                else -> PlanLogic.formatLong(day.date)
            }
            rv.setTextViewText(R.id.w_date, dateLine)

            rv.setTextViewText(R.id.w_activity, PlanLogic.activityTitle(day))
            rv.setTextColor(R.id.w_activity, activityColor(day))

            rv.setTextViewText(R.id.w_detail, day.detail)

            val hrZone = if (day.hrZone == "—" || day.hrZone.isBlank()) "—" else day.hrZone
            rv.setTextViewText(R.id.w_stat_hr, hrZone)
            rv.setTextViewText(R.id.w_stat_miles,
                if (day.miles > 0) PlanLogic.stripZeroes(day.miles) + " mi" else "—")
            rv.setTextViewText(R.id.w_stat_duration,
                if (day.durationMin > 0) "${day.durationMin}m" else "—")

            rv.setTextViewText(R.id.w_kcal, "${"%,d".format(cal.dailyIntakeTarget)} kcal")
            rv.setTextViewText(R.id.w_protein, "${cal.proteinG}g P · ${cal.fatGMin}g F")
            rv.setTextViewText(R.id.w_weight, "${cal.projectedWeightLb} lb")

            attachOpenAppIntent(context, rv)
            return rv
        }

        private fun phaseDrawable(phaseId: Int): Int = when (phaseId) {
            1 -> R.drawable.phase_pill_p1
            2 -> R.drawable.phase_pill_p2
            3 -> R.drawable.phase_pill_p3
            4 -> R.drawable.phase_pill_p4
            else -> R.drawable.phase_pill_p1
        }

        private fun activityColor(day: DayPlan): Int = when (PlanLogic.activityKind(day)) {
            "race" -> 0xFFFF5563.toInt()
            "run" -> 0xFF4EA1FF.toInt()
            "strength" -> 0xFFFF9D4D.toInt()
            "cross" -> 0xFF4DDCA8.toInt()
            "rest" -> 0xFF97A3B9.toInt()
            else -> 0xFFE6ECF5.toInt()
        }
    }
}
