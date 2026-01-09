import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, pageTitle, pageSubtitle }) => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Page Header */}
        {pageTitle && (
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>{pageTitle}</h1>
            {pageSubtitle && (
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{pageSubtitle}</p>
            )}
          </div>
        )}

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
