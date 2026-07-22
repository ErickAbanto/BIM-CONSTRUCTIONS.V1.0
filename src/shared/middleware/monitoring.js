/**
 * @typedef {Object} LogEntry
 * @property {'info' | 'warn' | 'error'} level
 * @property {string} message
 * @property {string} timestamp
 * @property {string} [component]
 * @property {string} [action]
 * @property {string} [userId]
 * @property {number} [duration]
 * @property {Object} [metadata]
 */

class MonitoringService {
  /** @type {MonitoringService | null} */
  static instance = null;

  static getInstance() {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService();
    }
    return MonitoringService.instance;
  }

  /**
   * Logs a structured entry to console (dev) or external service (prod).
   *
   * @param {Omit<LogEntry, 'timestamp'>} entry
   */
  log(entry) {
    /** @type {LogEntry} */
    const fullEntry = {
      ...entry,
      timestamp: new Date().toISOString(),
    };

    if (process.env.NODE_ENV === "development") {
      const fn =
        entry.level === "error"
          ? console.error
          : entry.level === "warn"
            ? console.warn
            : console.log;
      fn(`[${entry.level.toUpperCase()}]`, entry.message, entry.metadata ?? "");
    }

    if (process.env.NODE_ENV === "production") {
      this.sendToExternal(fullEntry);
    }
  }

  /**
   * @param {LogEntry} error
   * @param {Object} [context]
   * @private
   */
  sendToExternal(error, context) {
    // Stub: In a real app, this would POST to /api/monitoring/logs or use Sentry/Datadog SDK
    // console.log("Sent to external monitoring:", entry);
    if (process.env.NODE_ENV === 'production') {
      console.error('[Monitoring Fallback]', error, context);
    }
  }
}

export const monitoring = MonitoringService.getInstance();
