import React from 'react';
import Layout from '../components/Layout';
import KPICard from '../components/KPICard';
import { SimpleLineChart } from '../components/Charts';

const OverviewDashboard = () => {
  const chartData = [
    { day: 1, energy: 820, cost: 164 },
    { day: 5, energy: 780, cost: 156 },
    { day: 10, energy: 850, cost: 170 },
    { day: 15, energy: 720, cost: 144 },
    { day: 20, energy: 650, cost: 130 },
    { day: 25, energy: 620, cost: 124 },
    { day: 30, energy: 580, cost: 116 }
  ];

  return (
    <Layout pageTitle="Platform Overview" pageSubtitle="Real-time monitoring across 12 services">
      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        marginBottom: '24px'
      }}
      className="kpi-grid-responsive">
        <KPICard
          title="Saved this month"
          value="$127,340"
          icon="💰"
          color="success"
          change="23% vs last month"
          changeType="positive"
        />

        <KPICard
          title="Average GPU utilization"
          value="87.3"
          unit="%"
          icon="⚡"
          color="accent"
          progress={87.3}
          target="Target: >80%"
        />

        <KPICard
          title="CO₂ equivalent"
          value="4,230"
          unit=" kg"
          icon="🍃"
          color="success"
        >
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
            ≈ 17 trees planted
          </div>
        </KPICard>

        <KPICard
          title="Requiring attention"
          value="3"
          icon="⚠️"
          color="warning"
          badge={{ text: '2 High Priority', type: 'warning' }}
          link={{ text: 'View all', href: '/issues' }}
        />
      </div>

      {/* Status Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(16, 124, 16, 0.05), rgba(108, 203, 95, 0.05))',
        border: '1px solid rgba(16, 124, 16, 0.2)',
        borderRadius: '12px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--success)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            ✓
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>System Optimized</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>All services running efficiently. Last scan: 14 minutes ago</p>
          </div>
        </div>
        <button style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: '1px solid var(--card-border)',
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'var(--bg-secondary)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'var(--card-bg)';
        }}
        >
          Run Manual Scan
        </button>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '24px'
      }}
      className="content-grid-responsive">
        {/* Chart Card */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600 }}>Energy & Cost Trends</h3>
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
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
          
          {/* Chart Container */}
          <div style={{ height: '300px', position: 'relative', marginTop: '10px' }}>
            <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 800 300">
              {/* Grid lines */}
              <line x1="60" y1="40" x2="760" y2="40" stroke="var(--card-border)" strokeWidth="1" />
              <line x1="60" y1="90" x2="760" y2="90" stroke="var(--card-border)" strokeWidth="1" />
              <line x1="60" y1="140" x2="760" y2="140" stroke="var(--card-border)" strokeWidth="1" />
              <line x1="60" y1="190" x2="760" y2="190" stroke="var(--card-border)" strokeWidth="1" />
              <line x1="60" y1="240" x2="760" y2="240" stroke="var(--card-border)" strokeWidth="1" />

              {/* Area under energy line */}
              <path
                d="M60,180 L160,160 L260,170 L360,140 L460,120 L560,110 L660,100 L760,80 L760,240 L60,240 Z"
                fill="var(--accent)"
                opacity="0.15"
              />

              {/* Energy line (Blue) */}
              <polyline
                points="60,180 160,160 260,170 360,140 460,120 560,110 660,100 760,80"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Cost line (Green) */}
              <polyline
                points="60,200 160,185 260,190 360,165 460,150 560,140 660,130 760,115"
                fill="none"
                stroke="var(--success)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Y-axis labels (left) */}
              <text x="50" y="45" textAnchor="end" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">900</text>
              <text x="50" y="145" textAnchor="end" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">450</text>
              <text x="50" y="245" textAnchor="end" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">0</text>
              <text x="50" y="25" textAnchor="end" fontSize="11" fill="var(--text-tertiary)">kWh</text>

              {/* Y-axis labels (right) for cost */}
              <text x="770" y="45" textAnchor="start" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">$180</text>
              <text x="770" y="145" textAnchor="start" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">$90</text>
              <text x="770" y="245" textAnchor="start" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">$0</text>

              {/* X-axis labels */}
              <text x="60" y="265" textAnchor="start" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">Day 1</text>
              <text x="360" y="265" textAnchor="middle" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">Day 15</text>
              <text x="760" y="265" textAnchor="end" fontSize="12" fill="var(--text-tertiary)" fontWeight="500">Day 30</text>

              {/* Data points */}
              <circle cx="60" cy="180" r="4" fill="var(--accent)" />
              <circle cx="160" cy="160" r="4" fill="var(--accent)" />
              <circle cx="260" cy="170" r="4" fill="var(--accent)" />
              <circle cx="360" cy="140" r="4" fill="var(--accent)" />
              <circle cx="460" cy="120" r="4" fill="var(--accent)" />
              <circle cx="560" cy="110" r="4" fill="var(--accent)" />
              <circle cx="660" cy="100" r="4" fill="var(--accent)" />
              <circle cx="760" cy="80" r="4" fill="var(--accent)" />

              <circle cx="60" cy="200" r="4" fill="var(--success)" />
              <circle cx="160" cy="185" r="4" fill="var(--success)" />
              <circle cx="260" cy="190" r="4" fill="var(--success)" />
              <circle cx="360" cy="165" r="4" fill="var(--success)" />
              <circle cx="460" cy="150" r="4" fill="var(--success)" />
              <circle cx="560" cy="140" r="4" fill="var(--success)" />
              <circle cx="660" cy="130" r="4" fill="var(--success)" />
              <circle cx="760" cy="115" r="4" fill="var(--success)" />
            </svg>
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '24px', marginTop: '16px', fontSize: '12px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--accent)' }}></div>
              <span>Energy Usage (kWh)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'var(--success)' }}></div>
              <span>Cost ($)</span>
            </div>
          </div>
        </div>

        {/* Activity Feed Card */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Recent Optimizations</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { time: '14 min ago', service: 'Image Pipeline', text: 'Auto-fix deployed - GPU util +12%' },
              { time: '1 hour ago', service: 'Inference Service', text: 'Batch size optimized - Cost -$240/day' },
              { time: '3 hours ago', service: 'Data Processing', text: 'Pipeline parallelized - 2.3x throughput' },
              { time: '5 hours ago', service: 'Training Service', text: 'Memory leak fixed - Stability improved' },
              { time: 'Yesterday', service: 'Model Registry', text: 'Cache enabled - Latency -45ms' }
            ].map((activity, index) => (
              <div key={index} style={{
                padding: '12px',
                borderRadius: '8px',
                background: 'var(--bg-secondary)',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--card-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
              }}
              >
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>
                  {activity.time}
                </div>
                <div style={{
                  display: 'inline-block',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  background: 'rgba(0, 120, 212, 0.1)',
                  color: 'var(--accent)',
                  fontSize: '11px',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>
                  {activity.service}
                </div>
                <div style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--success)' }}>✓</span>
                  <span>{activity.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <a href="/issues" style={{ fontSize: '14px', color: 'var(--accent)', textDecoration: 'none' }}>
              View all activity →
            </a>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1200px) {
          .kpi-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .kpi-grid-responsive {
            grid-template-columns: 1fr !important;
          }
          .content-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default OverviewDashboard;
