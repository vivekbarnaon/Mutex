import React from 'react';
import Layout from '../components/Layout';
import KPICard from '../components/KPICard';
import { SimpleLineChart } from '../components/Charts';

const OverviewDashboard = () => {
  const chartData = [
    { day: 1, energy: 920, cost: 184 },
    { day: 5, energy: 880, cost: 176 },
    { day: 10, energy: 820, cost: 164 },
    { day: 15, energy: 750, cost: 150 },
    { day: 20, energy: 680, cost: 136 },
    { day: 25, energy: 620, cost: 124 },
    { day: 30, energy: 580, cost: 116 }
  ];

  return (
    <Layout pageTitle="Platform Overview" pageSubtitle="Real-time monitoring across 12 services">
      {/* User Profile Card */}
      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: 'var(--shadow)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* User Info Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0078D4, #4A9EFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 600
          }}>
            SC
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>Demo User</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px' }}>demo@velocity.app</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                padding: '4px 12px',
                background: 'linear-gradient(135deg, #0078D4, #4A9EFF)',
                color: 'white',
                fontSize: '11px',
                fontWeight: 600,
                borderRadius: '12px'
              }}>
                Pro Plan
              </span>
              <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600 }}>● Active</span>
            </div>
          </div>
        </div>

        {/* Model Selection Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px 20px',
          background: 'var(--bg-secondary)',
          borderRadius: '10px',
          border: '1px solid var(--card-border)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #107C10, #6CCB5F)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              🤖
            </div>
            <div>
              <label style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '4px'
              }}>
                AI Model
              </label>
              <select style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                minWidth: '180px',
                outline: 'none'
              }}
              onChange={(e) => {
                e.target.style.background = 'var(--card-bg)';
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--bg-secondary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--card-bg)';
              }}>
                <option value="gpt-4">GPT-4 (Default)</option>
                <option value="gpt-5-premium">GPT-5 Premium</option>
                <option value="claude-3-opus">Claude 3 Opus</option>
                <option value="gemini-ultra">Gemini Ultra</option>
              </select>
            </div>
          </div>
          <div style={{
            padding: '4px 10px',
            background: 'rgba(16, 124, 16, 0.1)',
            border: '1px solid rgba(16, 124, 16, 0.3)',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--success)'
          }}>
            ✓ Active
          </div>
        </div>
      </div>

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
          change="↓ 37% reduction"
          changeType="positive"
        />

        <KPICard
          title="Average GPU utilization"
          value="87.3"
          unit="%"
          icon="⚡"
          color="accent"
          progress={87.3}
          target="Target: >80% | Improved from 52%"
        />

        <KPICard
          title="CO₂ reduction"
          value="4,230"
          unit=" kg"
          icon="🍃"
          color="success"
        >
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
            ↓ 47% this month ≈ 17 trees planted
          </div>
        </KPICard>

        <KPICard
          title="Energy saved"
          value="8,899"
          unit=" kWh"
          icon="⚡"
          color="accent"
        >
          <div style={{ fontSize: '12px', color: 'var(--success)', fontWeight: 600 }}>
            ↓ 340 kWh reduction (Last 30 days)
          </div>
        </KPICard>
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
                d="M60,80 L160,95 L260,120 L360,145 L460,170 L560,195 L660,210 L760,220 L760,240 L60,240 Z"
                fill="var(--accent)"
                opacity="0.15"
              />

              {/* Energy line (Blue) - Decreasing from Day 1 to Day 30 */}
              <polyline
                points="60,80 160,95 260,120 360,145 460,170 560,195 660,210 760,220"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Cost line (Green) - Decreasing from Day 1 to Day 30 */}
              <polyline
                points="60,100 160,110 260,135 360,160 460,180 560,200 660,215 760,225"
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

              {/* Data points - Energy (Blue) */}
              <circle cx="60" cy="80" r="4" fill="var(--accent)" />
              <circle cx="160" cy="95" r="4" fill="var(--accent)" />
              <circle cx="260" cy="120" r="4" fill="var(--accent)" />
              <circle cx="360" cy="145" r="4" fill="var(--accent)" />
              <circle cx="460" cy="170" r="4" fill="var(--accent)" />
              <circle cx="560" cy="195" r="4" fill="var(--accent)" />
              <circle cx="660" cy="210" r="4" fill="var(--accent)" />
              <circle cx="760" cy="220" r="4" fill="var(--accent)" />

              {/* Data points - Cost (Green) */}
              <circle cx="60" cy="100" r="4" fill="var(--success)" />
              <circle cx="160" cy="110" r="4" fill="var(--success)" />
              <circle cx="260" cy="135" r="4" fill="var(--success)" />
              <circle cx="360" cy="160" r="4" fill="var(--success)" />
              <circle cx="460" cy="180" r="4" fill="var(--success)" />
              <circle cx="560" cy="200" r="4" fill="var(--success)" />
              <circle cx="660" cy="215" r="4" fill="var(--success)" />
              <circle cx="760" cy="225" r="4" fill="var(--success)" />
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
