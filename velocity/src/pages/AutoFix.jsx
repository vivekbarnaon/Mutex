import React from 'react';
import Layout from '../components/Layout';

const AutoFix = () => {
  // Mock PR data
  const pullRequest = {
    id: 'PR-4521',
    title: 'Optimize GPU data pipeline with RAPIDS acceleration',
    issueId: 'ISS-2847',
    status: 'Merged',
    author: 'VELOCITY AutoFix Bot',
    createdAt: '2026-01-09T08:15:00Z',
    mergedAt: '2026-01-09T10:42:00Z',
    deployedAt: '2026-01-09T11:05:00Z',
    branch: 'autofix/gpu-starvation-2847',
    repository: 'ml-training-pipeline-prod',
  };

  // Status progression
  const statusSteps = [
    { label: 'Generated', completed: true, timestamp: pullRequest.createdAt },
    { label: 'Reviewed', completed: true, timestamp: '2026-01-09T09:30:00Z' },
    { label: 'Merged', completed: true, timestamp: pullRequest.mergedAt },
    { label: 'Deployed', completed: true, timestamp: pullRequest.deployedAt },
  ];

  // Before vs After comparison
  const comparison = {
    before: {
      pipelineThroughput: '1.2 GB/s',
      batchWaitTime: '450ms',
      gpuIdle: '67.4%',
      trainingTime: '8.5 hours',
      costPerRun: '$142',
      library: 'pandas 1.3.5',
    },
    after: {
      pipelineThroughput: '8.7 GB/s',
      batchWaitTime: '28ms',
      gpuIdle: '11.2%',
      trainingTime: '2.6 hours',
      costPerRun: '$46',
      library: 'cuDF 24.02 + RAPIDS',
    },
  };

  // Performance improvements
  const improvements = [
    {
      metric: 'GPU Utilization',
      before: '32.6%',
      after: '88.8%',
      improvement: '+56.2%',
      icon: '⚡',
      color: 'blue',
    },
    {
      metric: 'Training Speed',
      before: '8.5 hrs',
      after: '2.6 hrs',
      improvement: '3.3x faster',
      icon: '',
      color: 'purple',
    },
    {
      metric: 'Cost per Run',
      before: '$142',
      after: '$46',
      improvement: '-$96 (68%)',
      icon: '',
      color: 'green',
    },
    {
      metric: 'Monthly Savings',
      before: '$42,600',
      after: '$13,800',
      improvement: '-$28,800',
      icon: '',
      color: 'green',
    },
  ];

  // Code changes summary (visual only, no real code)
  const changes = [
    {
      file: 'data_pipeline.py',
      type: 'Modified',
      changes: '+47 -23',
      description: 'Replaced pandas operations with GPU-accelerated cuDF',
    },
    {
      file: 'requirements.txt',
      type: 'Modified',
      changes: '+3 -1',
      description: 'Added RAPIDS libraries for GPU acceleration',
    },
    {
      file: 'config.yaml',
      type: 'Modified',
      changes: '+5 -2',
      description: 'Enabled async data loading and batch prefetch',
    },
  ];

  return (
    <Layout pageTitle="Auto-Fix Details" pageSubtitle="Automated code optimization and deployment">
      <div style={{ display: 'grid', gap: '24px' }}>
        {/* PR Header */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'rgba(16, 124, 16, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                flexShrink: 0
              }}>
                ✓
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {pullRequest.title}
                  </h2>
                  <span style={{
                    padding: '4px 12px',
                    background: 'rgba(16, 124, 16, 0.1)',
                    color: 'var(--success)',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: '1px solid rgba(16, 124, 16, 0.2)'
                  }}>
                    {pullRequest.status}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                  Pull Request: <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--accent)' }}>{pullRequest.id}</span> • 
                  Fixes Issue: <span style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--warning)', marginLeft: '4px' }}>{pullRequest.issueId}</span>
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Repository: <span style={{ fontFamily: 'monospace' }}>{pullRequest.repository}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid var(--card-border)'
          }}>
            <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Deployment Status
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflowX: 'auto', paddingBottom: '8px' }}>
              {statusSteps.map((step, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: step.completed ? 'var(--success)' : 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: step.completed ? 'none' : '2px solid var(--card-border)'
                    }}>
                      {step.completed ? (
                        <span style={{ color: 'white', fontWeight: 700, fontSize: '18px' }}>✓</span>
                      ) : (
                        <span style={{ color: 'var(--text-tertiary)', fontWeight: 700 }}>{index + 1}</span>
                      )}
                    </div>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: 500,
                      marginTop: '8px',
                      color: step.completed ? 'var(--text-primary)' : 'var(--text-tertiary)'
                    }}>
                      {step.label}
                    </p>
                    <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                      {step.completed && new Date(step.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  {index < statusSteps.length - 1 && (
                    <div style={{
                      flex: 1,
                      height: '3px',
                      margin: '0 8px',
                      background: step.completed ? 'var(--success)' : 'var(--card-border)',
                      borderRadius: '2px'
                    }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
            Before vs After
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}
          className="comparison-grid-responsive">
            {/* Before Card */}
            <div style={{
              background: 'rgba(209, 52, 56, 0.05)',
              border: '2px solid rgba(209, 52, 56, 0.2)',
              borderRadius: '12px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '28px' }}></span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--error)' }}>Before Fix</h4>
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(209, 52, 56, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Pipeline Throughput</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--error)' }}>{comparison.before.pipelineThroughput}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(209, 52, 56, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Batch Wait Time</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--error)' }}>{comparison.before.batchWaitTime}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(209, 52, 56, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>GPU Idle Time</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--error)' }}>{comparison.before.gpuIdle}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(209, 52, 56, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Training Time</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--error)' }}>{comparison.before.trainingTime}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(209, 52, 56, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Cost per Run</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--error)' }}>{comparison.before.costPerRun}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(209, 52, 56, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Library Stack</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--error)' }}>{comparison.before.library}</p>
                </div>
              </div>
            </div>

            {/* After Card */}
            <div style={{
              background: 'rgba(16, 124, 16, 0.05)',
              border: '2px solid rgba(16, 124, 16, 0.2)',
              borderRadius: '12px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '28px' }}></span>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>After Fix</h4>
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 124, 16, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Pipeline Throughput</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>{comparison.after.pipelineThroughput}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 124, 16, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Batch Wait Time</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>{comparison.after.batchWaitTime}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 124, 16, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>GPU Idle Time</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>{comparison.after.gpuIdle}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 124, 16, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Training Time</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>{comparison.after.trainingTime}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 124, 16, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Cost per Run</p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>{comparison.after.costPerRun}</p>
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '12px', border: '1px solid rgba(16, 124, 16, 0.1)' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Library Stack</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--success)' }}>{comparison.after.library}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Improvements */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
            Performance & Cost Improvements
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}
          className="kpi-grid-responsive">
            {improvements.map((item, index) => (
              <div key={index} style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '28px' }}>{item.icon}</span>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: item.color === 'green' ? 'rgba(16, 124, 16, 0.1)' : item.color === 'blue' ? 'rgba(0, 120, 212, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                    color: item.color === 'green' ? 'var(--success)' : item.color === 'blue' ? 'var(--accent)' : '#8B5CF6'
                  }}>
                    {item.improvement}
                  </span>
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  {item.metric}
                </h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-tertiary)' }}>Before:</span>
                    <span style={{ fontWeight: 600, color: 'var(--error)' }}>{item.before}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-tertiary)' }}>After:</span>
                    <span style={{ fontWeight: 600, color: 'var(--success)' }}>{item.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Changes Summary */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
            Code Changes Summary
          </h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {changes.map((change, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '16px',
                background: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  background: change.type === 'Modified' ? 'rgba(0, 120, 212, 0.1)' : 'rgba(16, 124, 16, 0.1)',
                  color: change.type === 'Modified' ? 'var(--accent)' : 'var(--success)',
                  border: change.type === 'Modified' ? '1px solid rgba(0, 120, 212, 0.2)' : '1px solid rgba(16, 124, 16, 0.2)'
                }}>
                  {change.type}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <p style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {change.file}
                    </p>
                    <span style={{ fontFamily: 'monospace', fontSize: '12px', color: 'var(--text-tertiary)' }}>
                      {change.changes}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{change.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.05), rgba(74, 158, 255, 0.05))',
          border: '1px solid rgba(0, 120, 212, 0.2)',
          borderRadius: '12px',
          padding: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '32px' }}></span>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                Fix Successfully Deployed
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                System is now operating at optimal efficiency
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '10px 20px',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--bg-secondary)'}
            onMouseLeave={(e) => e.target.style.background = 'var(--card-bg)'}>
              View PR on GitHub
            </button>
            <button style={{
              padding: '10px 20px',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1200px) {
          .kpi-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .comparison-grid-responsive {
            grid-template-columns: 1fr !important;
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

export default AutoFix;
