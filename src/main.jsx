import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://83ac433d76e63ee6aac2cf9ae21684db@o4509228512182272.ingest.us.sentry.io/4509228513165312",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [
    Sentry.browserTracingIntegration(),
   
    
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
  sendDefaultPii: true
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
