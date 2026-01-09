import React from 'react';
import Layout from '../components/Layout';
import KPICard from '../components/KPICard';

const ComplianceAudit = () => {
  const auditLogs = [
    {
      id: 1,
      date: '2026-01-09',
      time: '14:32:15',
      service: 'ml-training-pipeline-prod',
      action: 'GPU Optimization Applied',
      energySaved: '1,247 kWh',
      carbonImpact: '623 kg CO₂',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2026-01-08',
      time: '09:18:42',
      service: 'data-processing-cluster',
      action: 'Auto-Scaling Triggered',
      energySaved: '892 kWh',
      carbonImpact: '446 kg CO₂',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2026-01-07',
      time: '16:45:33',
      service: 'inference-api-prod',
      action: 'Idle Resource Shutdown',
      energySaved: '564 kWh',
      carbonImpact: '282 kg CO₂',
      status: 'Completed',
    },
    {
      id: 4,
      date: '2026-01-07',
      time: '11:22:08',
      service: 'analytics-engine',
      action: 'Workload Rebalancing',
      energySaved: '1,105 kWh',
      carbonImpact: '552 kg CO₂',
      status: 'Completed',
    },
    {
      id: 5,
      date: '2026-01-06',
      time: '07:55:19',
      service: 'ml-training-pipeline-prod',
      action: 'Peak Hours Optimization',
      energySaved: '1,834 kWh',
      carbonImpact: '917 kg CO₂',
      status: 'Completed',
    },
    {
      id: 6,
      date: '2026-01-05',
      time: '13:08:47',
      service: 'batch-jobs-cluster',
      action: 'GPU Utilization Fix',
      energySaved: '2,156 kWh',
      carbonImpact: '1,078 kg CO₂',
      status: 'Completed',
    },
    {
      id: 7,
      date: '2026-01-04',
      time: '10:14:25',
      service: 'data-processing-cluster',
      action: 'Storage Optimization',
      energySaved: '423 kWh',
      carbonImpact: '211 kg CO₂',
      status: 'Completed',
    },
    {
      id: 8,
      date: '2026-01-03',
      time: '15:37:56',
      service: 'inference-api-prod',
      action: 'Compute Right-Sizing',
      energySaved: '678 kWh',
      carbonImpact: '339 kg CO₂',
      status: 'Completed',
    },
  ];

  const complianceStandards = [
    { name: 'CSRD', status: 'Compliant', fullName: 'Corporate Sustainability Reporting Directive' },
    { name: 'ESG', status: 'Compliant', fullName: 'Environmental, Social, Governance' },
    { name: 'ISO 14001', status: 'Compliant', fullName: 'Environmental Management' },
    { name: 'GHG Protocol', status: 'Compliant', fullName: 'Greenhouse Gas Protocol' },
  ];

  return (
    <Layout pageTitle="Compliance & Audit" pageSubtitle="Track sustainability compliance and audit trail">
      {/* Summary KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }} className="kpi-grid-responsive">
        <KPICard
          title="Total Energy Saved"
          value="8,899"
          unit="kWh"
          change="Last 7 Days"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
          }
          color="accent"
        />
        <KPICard
          title="Carbon Reduced"
          value="4,448"
          unit="kg CO₂"
          change="Last 7 Days"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          }
          color="success"
        />
        <KPICard
          title="Optimization Actions"
          value="8"
          change="Last 7 Days"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          }
          color="warning"
        />
        <KPICard
          title="Compliance Status"
          value="100"
          unit="%"
          badge="All Standards Met"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          }
          color="success"
        />
      </div>

      {/* Compliance Standards */}
      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        boxShadow: 'var(--shadow)',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '20px',
        }}>Compliance Standards</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {complianceStandards.map((standard, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '16px',
              background: 'rgba(16, 124, 16, 0.05)',
              border: '1px solid rgba(16, 124, 16, 0.2)',
              borderRadius: '8px',
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'var(--success)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <p style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '2px',
                }}>{standard.name}</p>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  marginBottom: '4px',
                }}>{standard.fullName}</p>
                <span style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--success)',
                  padding: '4px 8px',
                  background: 'rgba(16, 124, 16, 0.1)',
                  borderRadius: '4px',
                }}>{standard.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit Log Table */}
      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow)',
        marginBottom: '24px',
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid var(--card-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: 0,
          }}>Audit Log</h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '10px 16px',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>📄</span>
              <span>Export CSV</span>
            </button>
            <button style={{
              padding: '10px 16px',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>📊</span>
              <span>CSRD Report</span>
            </button>
            <button style={{
              padding: '10px 16px',
              background: 'var(--success)',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>🌱</span>
              <span>ESG Report</span>
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Date & Time</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Service</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Action</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Energy Saved</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Carbon Impact</th>
                <th style={{
                  padding: '12px 24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log, index) => (
                <tr key={log.id} style={{
                  borderTop: index > 0 ? '1px solid var(--card-border)' : 'none',
                }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}>{log.date}</div>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--text-tertiary)',
                    }}>{log.time}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      fontSize: '13px',
                      fontFamily: 'monospace',
                      color: 'var(--text-secondary)',
                    }}>{log.service}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      fontSize: '14px',
                      color: 'var(--text-primary)',
                    }}>{log.action}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--accent)',
                    }}>{log.energySaved}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--success)',
                    }}>{log.carbonImpact}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--success)',
                      background: 'rgba(16, 124, 16, 0.1)',
                      borderRadius: '12px',
                    }}>{log.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Information */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 120, 212, 0.05) 0%, rgba(0, 120, 212, 0.1) 100%)',
        border: '1px solid rgba(0, 120, 212, 0.2)',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        gap: '20px',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: 'var(--accent)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}>About Compliance Reports</h4>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '12px',
          }}>
            VELOCITY automatically generates comprehensive compliance reports aligned with international standards including 
            CSRD (Corporate Sustainability Reporting Directive) and ESG (Environmental, Social, Governance) frameworks.
          </p>
          <ul style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}>
            <li>• <span style={{ fontWeight: '600' }}>CSRD Reports:</span> EU compliance for sustainability disclosure</li>
            <li>• <span style={{ fontWeight: '600' }}>ESG Reports:</span> Environmental impact metrics and governance data</li>
            <li>• <span style={{ fontWeight: '600' }}>Audit Logs:</span> Complete traceability of all optimization actions</li>
          </ul>
        </div>
      </div>

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

export default ComplianceAudit;
