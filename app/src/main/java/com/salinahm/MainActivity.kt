package com.salinahm

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.view.View
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat

/**
 * Single-activity wrapper that hosts a WebView pointing at the bundled offline
 * web app under assets/. No network ever; the WebView is configured to refuse
 * any external URL load.
 */
class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Switch from splash theme back to the regular theme before drawing UI
        setTheme(R.style.Theme_SalinaHM)
        WindowCompat.setDecorFitsSystemWindows(window, true)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.web_view)
        webView.settings.apply {
            javaScriptEnabled = true
            allowFileAccess = false        // assets/ access doesn't require this
            allowContentAccess = false
            domStorageEnabled = true        // for any localStorage if used
            mediaPlaybackRequiresUserGesture = true
            cacheMode = WebSettings.LOAD_DEFAULT
            // Keep zoom controls off; the page is responsive
            setSupportZoom(false)
            builtInZoomControls = false
            displayZoomControls = false
        }
        webView.setBackgroundColor(0xFF0B1320.toInt())
        webView.webViewClient = OfflineOnlyWebViewClient()
        // Load the bundled offline app
        webView.loadUrl("file:///android_asset/index.html")

        // Update the widget when the app is opened (so it reflects today's date)
        WidgetUpdater.requestRefresh(this)
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack() else super.onBackPressed()
    }

    /**
     * Refuse to load any URL outside the bundled assets — guarantees zero network
     * and prevents the WebView from being used as a backdoor.
     */
    private class OfflineOnlyWebViewClient : WebViewClient() {
        override fun shouldOverrideUrlLoading(
            view: WebView, request: android.webkit.WebResourceRequest
        ): Boolean {
            val url = request.url.toString()
            // Allow only file:///android_asset/ paths
            return !url.startsWith("file:///android_asset/")
        }
    }
}
