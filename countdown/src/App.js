import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

export default function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const THREE_MINUTES =  3 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const dateTimeAfterThreeMinutes = NOW_IN_MS + THREE_MINUTES;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />

      <h2>Expires after 3 minutes!!!</h2>
      <CountdownTimer targetDate={dateTimeAfterThreeMinutes} />
    </div>
  );
}
