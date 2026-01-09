import React from 'react';

const SimpleBarChart = ({ data, title, height = 200 }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: 'var(--shadow)'
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px', height: `${height}px` }}>
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 100;
          return (
            <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: '100%' }}>
                <div
                  style={{
                    width: '100%',
                    background: 'linear-gradient(to top, var(--accent), #4A9EFF)',
                    borderRadius: '8px 8px 0 0',
                    height: `${barHeight}%`,
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  title={`${item.label}: $${item.value.toLocaleString()}`}
                />
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SimpleLineChart = ({ data, title, height = 300, legend }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.energy || 0, d.cost || 0)));
  const minValue = 0;
  const range = maxValue - minValue || 1;

  const padding = { top: 20, right: 60, bottom: 40, left: 60 };
  const chartWidth = 100 - ((padding.left + padding.right) / 5);
  const chartHeight = 100 - ((padding.top + padding.bottom) / 3);

  // Create energy line points
  const energyPoints = data.map((item, index) => {
    const x = padding.left + (item.day / 30) * chartWidth;
    const y = padding.top + chartHeight - ((item.energy - minValue) / range) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  // Create cost line points
  const costPoints = data.map((item, index) => {
    const x = padding.left + (item.day / 30) * chartWidth;
    const y = padding.top + chartHeight - ((item.cost * 5 - minValue) / range) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  // Create area path
  const areaPath = data.map((item, index) => {
    const x = padding.left + (item.day / 30) * chartWidth;
    const y = padding.top + chartHeight - ((item.energy - minValue) / range) * chartHeight;
    return index === 0 ? `M${x},${y}` : `L${x},${y}`;
  }).join(' ') + ` L${padding.left + chartWidth},${padding.top + chartHeight} L${padding.left},${padding.top + chartHeight} Z`;

  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{title}</h3>
        <select style={{
          padding: '6px 12px',
          borderRadius: '8px',
          border: '1px solid var(--card-border)',
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer'
        }}>
          <option>Both</option>
          <option>Energy</option>
          <option>Cost</option>
        </select>
      </div>
      <div style={{ height: `${height}px`, position: 'relative' }}>
        <svg style={{ width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1={padding.left}
              y1={padding.top + i * chartHeight / 4}
              x2={padding.left + chartWidth}
              y2={padding.top + i * chartHeight / 4}
              stroke="var(--card-border)"
              strokeWidth="0.5"
            />
          ))}

          {/* Area under line */}
          <path
            d={areaPath}
            fill="var(--accent)"
            opacity="0.2"
          />

          {/* Energy line */}
          <polyline
            points={energyPoints}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Cost line */}
          <polyline
            points={costPoints}
            fill="none"
            stroke="var(--success)"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />

          {/* Y-axis labels (Energy) */}
          <text x={padding.left - 10} y={padding.top} textAnchor="end" fontSize="11" fill="var(--text-tertiary)">900</text>
          <text x={padding.left - 10} y={padding.top + chartHeight / 2} textAnchor="end" fontSize="11" fill="var(--text-tertiary)">450</text>
          <text x={padding.left - 10} y={padding.top + chartHeight} textAnchor="end" fontSize="11" fill="var(--text-tertiary)">0 kWh</text>

          {/* Y-axis labels (Cost) */}
          <text x={padding.left + chartWidth + 10} y={padding.top} textAnchor="start" fontSize="11" fill="var(--text-tertiary)">$180</text>
          <text x={padding.left + chartWidth + 10} y={padding.top + chartHeight / 2} textAnchor="start" fontSize="11" fill="var(--text-tertiary)">$90</text>
          <text x={padding.left + chartWidth + 10} y={padding.top + chartHeight} textAnchor="start" fontSize="11" fill="var(--text-tertiary)">$0</text>

          {/* X-axis labels */}
          <text x={padding.left} y={padding.top + chartHeight + 20} textAnchor="middle" fontSize="11" fill="var(--text-tertiary)">Day 1</text>
          <text x={padding.left + chartWidth / 2} y={padding.top + chartHeight + 20} textAnchor="middle" fontSize="11" fill="var(--text-tertiary)">Day 15</text>
          <text x={padding.left + chartWidth} y={padding.top + chartHeight + 20} textAnchor="middle" fontSize="11" fill="var(--text-tertiary)">Day 30</text>
        </svg>
      </div>
      {legend && (
        <div style={{ display: 'flex', gap: '24px', marginTop: '16px', fontSize: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--accent)' }}></div>
            <span>Energy Usage (kWh)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--success)' }}></div>
            <span>Cost ($)</span>
          </div>
        </div>
      )}
    </div>
  );
};

export { SimpleBarChart, SimpleLineChart };
