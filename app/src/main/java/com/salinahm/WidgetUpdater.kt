package com.salinahm

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import java.util.Calendar

/**
 * Schedules a daily widget refresh at ~12:01 AM local time so the widget always
 * shows the correct day's plan when the user wakes up.
 *
 * We use AlarmManager.setAndAllowWhileIdle which:
 *   - Doesn't require SCHEDULE_EXACT_ALARM permission on Android 12+
 *   - May be delayed up to ~15 min during Doze (acceptable; the user is asleep)
 *
 * The alarm fires a broadcast that TrainingWidget.onReceive handles.
 */
object WidgetUpdater {

    private const val REQUEST_CODE = 271828

    fun scheduleNextMidnight(context: Context) {
        val am = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val triggerAt = nextMidnightMillis()
        val pi = buildPendingIntent(context)
        // Use setAndAllowWhileIdle so it fires even during Doze; inexact is fine for daily refresh.
        am.cancel(pi)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAt, pi)
        } else {
            @Suppress("DEPRECATION")
            am.set(AlarmManager.RTC_WAKEUP, triggerAt, pi)
        }
    }

    fun cancelSchedule(context: Context) {
        val am = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        am.cancel(buildPendingIntent(context))
    }

    /** Fire an immediate refresh broadcast (e.g., from MainActivity on app open). */
    fun requestRefresh(context: Context) {
        val intent = Intent(context, TrainingWidget::class.java).apply {
            action = TrainingWidget.ACTION_REFRESH
        }
        context.sendBroadcast(intent)
    }

    private fun buildPendingIntent(context: Context): PendingIntent {
        val intent = Intent(context, TrainingWidget::class.java).apply {
            action = TrainingWidget.ACTION_REFRESH
        }
        return PendingIntent.getBroadcast(
            context, REQUEST_CODE, intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )
    }

    private fun nextMidnightMillis(): Long {
        val cal = Calendar.getInstance().apply {
            add(Calendar.DAY_OF_YEAR, 1)
            set(Calendar.HOUR_OF_DAY, 0)
            set(Calendar.MINUTE, 1)        // 12:01 AM to be safely past midnight
            set(Calendar.SECOND, 0)
            set(Calendar.MILLISECOND, 0)
        }
        return cal.timeInMillis
    }
}
