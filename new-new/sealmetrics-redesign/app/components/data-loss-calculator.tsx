"use client";

import { useMemo, useState } from "react";

export function DataLossCalculator() {
  const [sessions, setSessions] = useState(250000);
  const [revenue, setRevenue] = useState(500000);
  const [visibleShare, setVisibleShare] = useState(50);
  const result = useMemo(() => {
    const visible = Math.max(1, Math.min(100, visibleShare));
    const modeledTotalRevenue = revenue / (visible / 100);
    return {
      sessions: Math.round(sessions * (1 - visible / 100)),
      revenue: Math.round(modeledTotalRevenue - revenue),
      totalRevenue: Math.round(modeledTotalRevenue),
    };
  }, [sessions, revenue, visibleShare]);

  const euros = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  const number = new Intl.NumberFormat("en-IE");

  return (
    <div className="calculator-module">
      <div className="calculator-inputs">
        <label>Monthly measured sessions<input type="number" min="0" value={sessions} onChange={e => setSessions(Number(e.target.value))} /></label>
        <label>Monthly measured revenue<input type="number" min="0" value={revenue} onChange={e => setRevenue(Number(e.target.value))} /></label>
        <label>Assumed visible share<input type="range" min="10" max="100" value={visibleShare} onChange={e => setVisibleShare(Number(e.target.value))} /><b>{visibleShare}% of the scenario</b></label>
      </div>
      <div className="calculator-result">
        <span>ILLUSTRATIVE SCENARIO · NOT MEASURED DATA</span>
        <strong>{euros.format(result.revenue)}</strong>
        <p>modeled revenue outside the current view under this assumption</p>
        <div><b>{number.format(result.sessions)}</b><span>modeled sessions outside the current view</span></div>
        <div><b>{euros.format(result.totalRevenue)}</b><span>modeled total under the assumption</span></div>
        <small>Assumes measured sessions and revenue are the visible, proportional share. It does not model channel skew or prove a gap on your site. Run both systems side by side to measure that.</small>
      </div>
    </div>
  );
}
