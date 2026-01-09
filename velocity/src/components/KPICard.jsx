import React from 'react';

const KPICard = ({ title, value, unit, change, changeType, icon, color = 'blue', progress, target, badge, link, children }) => {
  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: '12px',
      padding: '24px',
      position: 'relative',
      transition: 'all 0.2s',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      {/* Icon in top-right */}
      {icon && (
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
          {icon}
        </div>
      )}

      {/* Value */}
      <div style={{
        fontSize: '32px',
        fontWeight: 700,
        marginBottom: '4px',
        fontVariantNumeric: 'tabular-nums',
        color: color === 'success' ? 'var(--success)' : color === 'warning' ? 'var(--warning)' : color === 'accent' ? 'var(--accent)' : 'var(--text-primary)'
      }}>
        {value}{unit && <span style={{ fontSize: '20px', marginLeft: '4px' }}>{unit}</span>}
      </div>

      {/* Label */}
      <div style={{
        fontSize: '12px',
        color: 'var(--text-secondary)',
        marginBottom: '8px'
      }}>
        {title}
      </div>

      {/* Trend */}
      {change && (
        <div style={{
          fontSize: '12px',
          color: changeType === 'positive' ? 'var(--success)' : changeType === 'negative' ? 'var(--error)' : 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span>{changeType === 'positive' ? '↑' : changeType === 'negative' ? '↓' : '→'}</span>
          <span>{change}</span>
        </div>
      )}

      {/* Progress bar */}
      {progress !== undefined && (
        <>
          <div style={{
            width: '100%',
            height: '6px',
            background: 'var(--bg-secondary)',
            borderRadius: '3px',
            overflow: 'hidden',
            marginTop: '12px'
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, var(--accent), #4A9EFF)',
              borderRadius: '3px',
              width: `${progress}%`,
              transition: 'width 0.3s'
            }}></div>
          </div>
          {target && (
            <div style={{
              fontSize: '12px',
              color: 'var(--text-tertiary)',
              marginTop: '8px'
            }}>
              {target}
            </div>
          )}
        </>
      )}

      {/* Badge */}
      {badge && (
        <div style={{
          display: 'inline-block',
          padding: '4px 10px',
          borderRadius: '12px',
          fontSize: '11px',
          fontWeight: 600,
          marginTop: '8px',
          background: badge.type === 'warning' ? 'rgba(247, 99, 12, 0.1)' : 'rgba(16, 124, 16, 0.1)',
          color: badge.type === 'warning' ? 'var(--warning)' : 'var(--success)'
        }}>
          {badge.text}
        </div>
      )}

      {/* Link */}
      {link && (
        <div style={{ marginTop: '8px' }}>
          <a href={link.href} style={{
            fontSize: '12px',
            color: 'var(--accent)',
            textDecoration: 'none'
          }}>
            {link.text} →
          </a>
        </div>
      )}

      {/* Custom children */}
      {children && (
        <div style={{ marginTop: '8px' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default KPICard;
