import Tracker from "@openreplay/tracker/cjs";
import * as Sentry from "@sentry/react";

export const tracker = new Tracker({
  projectKey: process.env.REACT_APP_TRACKER_KEY,
  onStart: ({ sessionToken }) => {
    // This is to link from OpenReplay ==> Sentry
    Sentry.setTag("openReplaySessionToken", sessionToken);

    //This is to link from Sentry ==> OpenReplay
    Sentry.setTag("openReplaySessionURL", tracker.getSessionURL());
  },
  __DISABLE_SECURE_MODE: true,
});
