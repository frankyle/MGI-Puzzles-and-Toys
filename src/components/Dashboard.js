// src/components/Dashboard.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function Dashboard({ trades }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const closed = trades.filter(t => t.status !== 'open');
    const labels = closed.map(t => t.pair + ' (' + t.status + ')');
    const data = closed.map(t => (parseFloat(t.pipsAimed) / parseFloat(t.pipsRisked)).toFixed(1));

    const ctx = canvasRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'R/R Achieved',
          data,
        }]
      }
    });
  }, [trades]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default Dashboard;
