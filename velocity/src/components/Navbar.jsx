import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { name: 'Overview', path: '/' },
    { name: 'Issues', path: '/issues' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'Settings', path: '/settings' },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav style={{
      background: 'var(--card-bg)',
      borderBottom: '1px solid var(--card-border)',
      padding: '0 24px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Logo */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '20px',
        fontWeight: 700
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg, #107C10, #6CCB5F)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '18px'
        }}>
          🌿
        </div>
        <span>VELOCITY</span>
      </div>

      {/* Desktop Navigation Links */}
      <div style={{
        display: window.innerWidth >= 768 ? 'flex' : 'none',
        gap: '32px'
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              style={{
                color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                padding: '8px 0',
                borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.target.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.target.style.color = 'var(--text-secondary)';
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Right Side - Theme Toggle & User */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        position: 'relative'
      }}>
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: '1px solid var(--card-border)',
            background: 'var(--card-bg)',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            fontSize: '18px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--bg-secondary)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--card-bg)';
          }}
        >
          ◐
        </button>

        {/* User Avatar */}
        <div 
          onClick={() => setShowUserMenu(!showUserMenu)}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0078D4, #4A9EFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          SC
        </div>

        {/* User Dropdown Menu */}
        {showUserMenu && (
          <div style={{
            position: 'absolute',
            right: 0,
            top: '50px',
            width: '280px',
            background: 'var(--card-bg)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-hover)',
            border: '1px solid var(--card-border)',
            padding: '16px',
            zIndex: 50
          }}>
            <div style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--card-border)',
              marginBottom: '12px'
            }}>
              <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Demo User</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>demo@velocity.app</p>
            </div>
            <div style={{
              paddingBottom: '12px',
              borderBottom: '1px solid var(--card-border)',
              marginBottom: '12px'
            }}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '8px' }}>Membership</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{
                  padding: '4px 12px',
                  background: 'linear-gradient(135deg, #0078D4, #4A9EFF)',
                  color: 'white',
                  fontSize: '11px',
                  fontWeight: 600,
                  borderRadius: '12px'
                }}>Pro Plan</span>
                <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600 }}>Active</span>
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>Valid until Jan 2027</p>
            </div>
            <button style={{
              width: '100%',
              padding: '8px 12px',
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontSize: '13px',
              color: 'var(--text-primary)',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '4px'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--bg-secondary)'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
            >
              Account Settings
            </button>
            <button style={{
              width: '100%',
              padding: '8px 12px',
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontSize: '13px',
              color: 'var(--error)',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(209, 52, 56, 0.1)'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
            >
              Sign Out
            </button>
          </div>
        )}

        {/* Mobile menu button */}
        {window.innerWidth < 768 && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
