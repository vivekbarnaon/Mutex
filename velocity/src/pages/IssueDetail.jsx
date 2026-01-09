import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const IssueDetail = () => {
  const navigate = useNavigate();

  return (
    <Layout pageTitle="Issues" pageSubtitle="Active performance and optimization issues">
      <div style={{ display: 'grid', gap: '24px' }}>
        {/* Issue Summary Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }}
        className="kpi-grid-responsive">
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px',
            position: 'relative',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              opacity: 0.6
            }}>
              
            </div>
            <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px', color: 'var(--warning)' }}>3</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Active Issues</div>
            <div style={{ fontSize: '12px', color: 'var(--warning)' }}>2 High Priority</div>
          </div>

          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px',
            position: 'relative',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              opacity: 0.6
            }}>
              ✓
            </div>
            <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px', color: 'var(--success)' }}>12</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Resolved Today</div>
            <div style={{ fontSize: '12px', color: 'var(--success)' }}>↑ 40% vs yesterday</div>
          </div>

          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px',
            position: 'relative',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              opacity: 0.6
            }}>
              
            </div>
            <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px', color: 'var(--accent)' }}>2.3h</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Avg Resolution Time</div>
            <div style={{ fontSize: '12px', color: 'var(--success)' }}>↓ 15% improvement</div>
          </div>

          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px',
            position: 'relative',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'var(--bg-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              opacity: 0.6
            }}>
              
            </div>
            <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px', color: 'var(--accent)' }}>87%</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Auto-Fix Success Rate</div>
            <div style={{ fontSize: '12px', color: 'var(--success)' }}>↑ 3% this week</div>
          </div>
        </div>

        {/* Active Issues List */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Active Issues</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              {
                id: 'ISS-2847',
                title: 'GPU Starvation Detected',
                service: 'ml-training-pipeline-prod',
                severity: 'High',
                time: '2 hours ago',
                metric: '67.4% idle',
                icon: '',
                autoFixAvailable: true
              },
              {
                id: 'ISS-2846',
                title: 'Memory Leak in Service',
                service: 'image-processing-api',
                severity: 'High',
                time: '5 hours ago',
                metric: '8.2 GB/hour growth',
                icon: '',
                autoFixAvailable: true
              },
              {
                id: 'ISS-2845',
                title: 'Suboptimal Batch Size',
                service: 'inference-service',
                severity: 'Medium',
                time: '1 day ago',
                metric: '23% below optimal',
                icon: '',
                autoFixAvailable: false
              }
            ].map((issue) => (
              <div key={issue.id} style={{
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid var(--card-border)',
                background: 'var(--bg-secondary)',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '16px', flex: 1, minWidth: '250px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      background: issue.severity === 'High' ? 'rgba(247, 99, 12, 0.1)' : 'rgba(255, 185, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0
                    }}>
                      {issue.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 600 }}>{issue.title}</h3>
                        <span style={{
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: 600,
                          background: issue.severity === 'High' ? 'rgba(247, 99, 12, 0.1)' : 'rgba(255, 185, 0, 0.1)',
                          color: issue.severity === 'High' ? 'var(--warning)' : '#FFB900'
                        }}>
                          {issue.severity}
                        </span>
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{issue.id}</span> • {issue.service}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{issue.time}</span>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>{issue.metric}</span>
                        {issue.autoFixAvailable && (
                          <span style={{
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: 600,
                            background: 'rgba(0, 120, 212, 0.1)',
                            color: 'var(--accent)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            🤖 Auto-Fix Available
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/auto-fix')}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'var(--accent)',
                      color: 'white',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-Fix CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.05), rgba(74, 158, 255, 0.05))',
          border: '1px solid rgba(0, 120, 212, 0.2)',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px'
            }}>
              🔧
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>Auto-Fix Available</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>2 issues can be automatically resolved with one click</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/auto-fix')}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              background: 'var(--accent)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Go to Auto-Fix →
          </button>
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
        }
      `}</style>
    </Layout>
  );
};

export default IssueDetail;

