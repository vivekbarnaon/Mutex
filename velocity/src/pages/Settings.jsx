import React from 'react';
import Layout from '../components/Layout';

const Settings = () => {
  return (
    <Layout pageTitle="Settings" pageSubtitle="Manage your account and preferences">
      <div style={{ display: 'grid', gap: '24px' }}>
        {/* Account Settings */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Account Settings</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Demo User"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                Email Address
              </label>
              <input
                type="email"
                defaultValue="demo@velocity.app"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  fontSize: '14px'
                }}
              />
            </div>
            <div>
              <button style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                background: 'var(--accent)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                marginTop: '8px'
              }}>
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Notification Preferences</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              { label: 'Email notifications for critical issues', checked: true },
              { label: 'Weekly optimization reports', checked: true },
              { label: 'Cost savings alerts', checked: false },
              { label: 'Performance recommendations', checked: true }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer'
                  }}
                />
                <label style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* API Settings */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>API Access</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, marginBottom: '8px', color: 'var(--text-secondary)' }}>
                API Key
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  readOnly
                  defaultValue="vel_sk_••••••••••••••••••••••••••"
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--card-border)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    fontFamily: 'monospace'
                  }}
                />
                <button style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: '1px solid var(--card-border)',
                  background: 'var(--card-bg)',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}>
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--error)',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: 'var(--shadow)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: 'var(--error)' }}>Danger Zone</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button style={{
            padding: '10px 20px',
            borderRadius: '8px',
            border: '1px solid var(--error)',
            background: 'transparent',
            color: 'var(--error)',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer'
          }}>
            Delete Account
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
