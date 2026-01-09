import React from 'react';
import Layout from '../components/Layout';

const Pricing = () => {
  const pricingTiers = [
    {
      id: 1,
      name: 'Developer',
      price: 'Free',
      description: 'Public GitHub Action for static analysis',
      tagline: 'Perfect for open-source projects and individual developers',
      features: [
        'GitHub Action integration',
        'Static code analysis',
        'Basic performance insights',
        'Community support',
        'Public repository access',
        'Weekly reports'
      ],
      cta: 'Get Started',
      popular: false,
      icon: '🚀',
      color: 'blue',
      note: 'Viral adoption & community brand building'
    },
    {
      id: 2,
      name: 'Business',
      price: '$25',
      period: '/month',
      additionalCost: '+ Custom Model Selection',
      description: 'Azure Tracker and auto-remediation for cloud bills up to $20k/mo',
      tagline: 'Direct ROI through cloud cost reduction',
      features: [
        'Everything in Developer, plus:',
        'Azure infrastructure tracking',
        'Automated code remediation',
        'Cloud bills up to $20k/mo',
        'Custom AI model selection',
        'Priority support',
        'Real-time monitoring',
        'Cost optimization dashboard',
        'Pull request automation'
      ],
      cta: 'Start Free Trial',
      popular: true,
      icon: '💼',
      color: 'green',
      note: '~30% reduction in cloud compute costs'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full private-tenant deployment with Carbon Audit Vault',
      tagline: 'High-margin regulatory assurance for EU CSRD/SEC compliance',
      features: [
        'Everything in Business, plus:',
        'Private tenant deployment',
        'Carbon Audit Vault',
        'EU CSRD compliance reporting',
        'SEC compliance support',
        'Unlimited cloud spend tracking',
        'Dedicated account manager',
        'Custom SLA',
        'On-premise deployment option',
        'White-label solution',
        'Advanced security features'
      ],
      cta: 'Contact Sales',
      popular: false,
      icon: '🏢',
      color: 'purple',
      note: 'Enterprise-grade GreenOps compliance'
    }
  ];

  return (
    <Layout pageTitle="Pricing" pageSubtitle="Choose the perfect plan for your team">
      <div style={{ display: 'grid', gap: '32px' }}>
        {/* Pricing Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Revenue Model
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            A self-funding GreenOps platform that monetizes inefficiency by converting wasted cloud spend into compliance-ready carbon savings
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }}
        className="pricing-grid-responsive">
          {pricingTiers.map((tier) => (
            <div key={tier.id} style={{
              background: 'var(--card-bg)',
              border: tier.popular ? '2px solid var(--accent)' : '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              boxShadow: tier.popular ? 'var(--shadow-hover)' : 'var(--shadow)',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              if (!tier.popular) {
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!tier.popular) {
                e.currentTarget.style.boxShadow = 'var(--shadow)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}>
              {/* Popular Badge */}
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, var(--accent), #4A9EFF)',
                  color: 'white',
                  padding: '6px 20px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: tier.color === 'blue' ? 'rgba(0, 120, 212, 0.1)' : 
                           tier.color === 'green' ? 'rgba(16, 124, 16, 0.1)' : 
                           'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                marginBottom: '20px'
              }}>
                {tier.icon}
              </div>

              {/* Tier Name */}
              <h3 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                {tier.name}
              </h3>

              {/* Tagline */}
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginBottom: '20px',
                minHeight: '40px'
              }}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1
                }}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span style={{
                    fontSize: '18px',
                    color: 'var(--text-secondary)',
                    marginLeft: '4px'
                  }}>
                    {tier.period}
                  </span>
                )}
              </div>

              {tier.additionalCost && (
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-tertiary)',
                  marginBottom: '16px'
                }}>
                  {tier.additionalCost}
                </p>
              )}

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                paddingBottom: '24px',
                borderBottom: '1px solid var(--card-border)',
                minHeight: '60px'
              }}>
                {tier.description}
              </p>

              {/* Features */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '24px',
                flex: 1
              }}>
                {tier.features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <span style={{
                      color: 'var(--success)',
                      fontSize: '18px',
                      lineHeight: 1,
                      marginTop: '2px'
                    }}>
                      ✓
                    </span>
                    <span style={{
                      fontSize: '14px',
                      color: feature.startsWith('Everything') ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: feature.startsWith('Everything') ? 600 : 400
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div style={{
                padding: '12px',
                background: tier.color === 'blue' ? 'rgba(0, 120, 212, 0.05)' : 
                           tier.color === 'green' ? 'rgba(16, 124, 16, 0.05)' : 
                           'rgba(139, 92, 246, 0.05)',
                borderRadius: '8px',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  💡 {tier.note}
                </p>
              </div>

              {/* CTA Button */}
              <button style={{
                width: '100%',
                padding: '14px 24px',
                borderRadius: '10px',
                border: 'none',
                background: tier.popular ? 'linear-gradient(135deg, var(--accent), #4A9EFF)' : 
                           tier.color === 'purple' ? 'linear-gradient(135deg, #8B5CF6, #A78BFA)' :
                           'var(--card-bg)',
                color: tier.popular || tier.color === 'purple' ? 'white' : 'var(--text-primary)',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: tier.popular || tier.color === 'purple' ? 'none' : '2px solid var(--card-border)'
              }}
              onMouseEnter={(e) => {
                if (tier.popular || tier.color === 'purple') {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                } else {
                  e.target.style.background = 'var(--bg-secondary)';
                  e.target.style.borderColor = 'var(--accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (tier.popular || tier.color === 'purple') {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                } else {
                  e.target.style.background = 'var(--card-bg)';
                  e.target.style.borderColor = 'var(--card-border)';
                }
              }}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(16, 124, 16, 0.05), rgba(108, 203, 95, 0.05))',
          border: '1px solid rgba(16, 124, 16, 0.2)',
          borderRadius: '12px',
          padding: '32px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '12px'
          }}>
            The Value Proposition
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            We operate on a <strong>"Self-Funding"</strong> premise. By eliminating <strong>"GPU Starvation,"</strong> VELOCITY typically reduces cloud compute costs by <strong style={{ color: 'var(--success)' }}>~30%</strong>. 
            The savings from optimized infrastructure often exceed the cost of our platform.
          </p>
        </div>

        {/* FAQ or Additional Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }}
        className="pricing-grid-responsive">
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(0, 120, 212, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              marginBottom: '16px'
            }}>
              💰
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              Cost Savings
            </h4>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Average 30-50% reduction in cloud compute costs through automated GPU optimization and efficient resource allocation.
            </p>
          </div>

          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(16, 124, 16, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              marginBottom: '16px'
            }}>
              🌿
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              Carbon Reduction
            </h4>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              Reduce your carbon footprint while meeting CSRD, ESG, and other environmental compliance requirements.
            </p>
          </div>

          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '12px',
            padding: '24px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              marginBottom: '16px'
            }}>
              🚀
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              Automated Fixes
            </h4>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              AI-powered code optimization generates pull requests automatically, eliminating GPU starvation without developer intervention.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1200px) {
          .pricing-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .pricing-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Pricing;
