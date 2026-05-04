package com.salinahm

import android.appwidget.AppWidgetManager
import android.content.BroadcastReceiver
import android.content.ComponentName
import android.content.Context
import android.content.Intent

/**
 * Re-schedules the daily midnight widget refresh after:
 *   - Boot (BOOT_COMPLETED)
 *   - App update (MY_PACKAGE_REPLACED)
 *   - Manual time/timezone change (TIME_SET / TIMEZONE_CHANGED)
 *   - System date roll-over notification (DATE_CHANGED)
 *
 * Also forces an immediate widget redraw so the user sees fresh data after any of these events.
 */
class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        // Force-update existing widgets right away
        val mgr = AppWidgetManager.getInstance(context)
        val ids = mgr.getAppWidgetIds(ComponentName(context, TrainingWidget::class.java))
        for (id in ids) {
            TrainingWidget.updateAppWidget(context, mgr, id)
        }
        // Re-arm the daily alarm
        WidgetUpdater.scheduleNextMidnight(context)
    }
}
