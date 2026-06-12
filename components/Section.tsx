'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Brain, 
  Sparkles, 
  Shield, 
  Zap, 
  Workflow, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Send, 
  CheckCircle,
  ArrowRight,
  MessageCircle
} from 'lucide-react'

interface SectionProps {
  title: string
}

export default function Section({ title }: SectionProps) {
  // Setup ID for navigation links
  const sectionId = title.toLowerCase().replace(/\s+/g, '-')

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    
    setIsSubmitting(true)
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  // Renders the correct content based on the section title
  const renderSectionContent = () => {
    switch (title) {
      case 'Services':
        return (
          <div className="grid">
            <motion.div variants={itemVariants}>
              <div className="card">
                <div className="card-icon"><Cpu size={24} /></div>
                <h3 className="card-title">Intelligent Automation</h3>
                <p className="card-text">
                  Integrate robust LLM-driven workflows that automate routine operations, content creation, and ticket management.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="card">
                <div className="card-icon"><Brain size={24} /></div>
                <h3 className="card-title">Cognitive Analytics</h3>
                <p className="card-text">
                  Analyze massive structured and unstructured datasets to uncover hidden patterns and predict future market trends.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="card">
                <div className="card-icon"><Sparkles size={24} /></div>
                <h3 className="card-title">Autonomous Agents</h3>
                <p className="card-text">
                  Deploy context-aware virtual employees capable of navigating complex tasks and resolving user queries natively.
                </p>
              </div>
            </motion.div>
          </div>
        )

      case 'Products':
        return (
          <div className="grid">
            <motion.div variants={itemVariants}>
              <div className="card">
                <span className="product-tag">Data Ingestion</span>
                <h3 className="card-title">Griffin Core</h3>
                <p className="card-text">
                  The centralized foundation layer that ingests, cleanses, and vectorizes multi-source enterprise data in real-time.
                </p>
                <a href="#contact" className="product-link">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="card">
                <span className="product-tag">Agent Platform</span>
                <h3 className="card-title">Griffin Agent Studio</h3>
                <p className="card-text">
                  A visual editor to construct, prompt-engineer, test, and release specialized agents into your production pipelines.
                </p>
                <a href="#contact" className="product-link">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="card">
                <span className="product-tag">Governance</span>
                <h3 className="card-title">Griffin Security Shield</h3>
                <p className="card-text">
                  An active firewall layer verifying inputs and model responses for PII leaks, prompt injection, and hallucination.
                </p>
                <a href="#contact" className="product-link">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )

      case 'Why Choose Us':
        return (
          <div className="feature-list">
            <motion.div variants={itemVariants}>
              <div className="feature-img-container">
                <div className="ambient-glow" style={{ opacity: 0.2, filter: 'blur(30px)' }}></div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', zIndex: 1 }}>
                  <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
                    <Shield size={64} style={{ color: '#8b5cf6' }} className="animate-pulse" />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8', letterSpacing: '1px', textTransform: 'uppercase' }}>Secure Core Active</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="feature-items">
                <div className="feature-item">
                  <div className="feature-item-icon"><Shield size={16} /></div>
                  <div className="feature-item-content">
                    <h4>Enterprise-Grade Security</h4>
                    <p>Comprehensive encryption, strict SOC2 compliance guardrails, and role-based access management.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-item-icon"><Zap size={16} /></div>
                  <div className="feature-item-content">
                    <h4>Sub-Second Latency</h4>
                    <p>Inference caches and distributed API gateways make response compilation instantaneous.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-item-icon"><Workflow size={16} /></div>
                  <div className="feature-item-content">
                    <h4>Seamless Integrations</h4>
                    <p>Native connectors for Slack, Salesforce, HubSpot, Teams, AWS, and custom database APIs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case 'Testimonials':
        return (
          <div className="grid">
            <motion.div variants={itemVariants}>
              <div className="card testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-quote">
                  "Griffin AI transformed our customer support pipeline overnight. The autonomous agent performance is stellar, resolving 80% of customer requests without developer intervention."
                </p>
                <div className="testimonial-user">
                  <div className="testimonial-avatar">SJ</div>
                  <div className="testimonial-info">
                    <h4>Sarah Jenkins</h4>
                    <p>CTO at ApexTech</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="card testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-quote">
                  "The Griffin Security Shield gave our compliance team peace of mind. We can stream sensitive customer data to models knowing PII is completely sanitized and secure."
                </p>
                <div className="testimonial-user">
                  <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)' }}>MC</div>
                  <div className="testimonial-info">
                    <h4>Michael Chen</h4>
                    <p>VP of Engineering at CloudScale</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="card testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-quote">
                  "We automated over 70% of our manual billing and invoice reconciliation processes in less than a month. The investment paid for itself in efficiency gains immediately."
                </p>
                <div className="testimonial-user">
                  <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' }}>ER</div>
                  <div className="testimonial-info">
                    <h4>Elena Rostova</h4>
                    <p>Director of Operations at NexusCorp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case 'Contact':
        return (
          <div className="contact-grid">
            <motion.div variants={itemVariants}>
              <div className="contact-info">
                <div className="contact-method">
                  <div className="contact-method-icon"><Mail size={22} /></div>
                  <div className="contact-method-details">
                    <h4>Email Us</h4>
                    <p>hello@griffinaire.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-method-icon"><Phone size={22} /></div>
                  <div className="contact-method-details">
                    <h4>Call Us</h4>
                    <p>+1 (555) 234-AIOS</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-method-icon" style={{ color: '#25D366' }}><MessageCircle size={22} /></div>
                  <div className="contact-method-details">
                    <h4>WhatsApp Chat</h4>
                    <a href="https://wa.me/919700437350" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
                      +91 9700437350
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-method-icon"><MapPin size={22} /></div>
                  <div className="contact-method-details">
                    <h4>Headquarters</h4>
                    <p>Suite 800, 42 Cybernetic Way, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="contact-form-card">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="form-name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      id="form-name"
                      name="name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="Enter your name" 
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="form-email" className="form-label">Work Email</label>
                    <input 
                      type="email" 
                      id="form-email"
                      name="email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      className="form-input" 
                      placeholder="name@company.com" 
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="form-message" className="form-label">Message</label>
                    <textarea 
                      id="form-message"
                      name="message" 
                      value={formState.message}
                      onChange={handleInputChange}
                      className="form-textarea" 
                      placeholder="Tell us about your AI requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message <Send size={15} style={{ marginLeft: '8px' }} />
                      </>
                    )}
                  </button>
                  
                  {submitSuccess && (
                    <div className="form-success-message">
                      <CheckCircle size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                      Message sent successfully! Our AI team will reach out shortly.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        )

      default:
        return (
          <div className="grid">
            <div className="card">Premium Content</div>
            <div className="card">Premium Content</div>
            <div className="card">Premium Content</div>
          </div>
        )
    }
  }

  return (
    <section id={sectionId} className="section">
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="section-container">
            <div className="section-header">
              <span className="section-subtitle">{title}</span>
              <h2 className="section-title">
                {title === 'Services' && 'AI Services Built For Scale'}
                {title === 'Products' && 'Our Software Infrastructure'}
                {title === 'Why Choose Us' && 'Designed For Modern Enterprises'}
                {title === 'Testimonials' && 'Trusted By Innovative Organizations'}
                {title === 'Contact' && 'Let\'s Discuss Your AI Project'}
              </h2>
              <p className="section-desc">
                {title === 'Services' && 'Leverage custom agent automation, analysis, and data mapping designed for massive enterprise workflows.'}
                {title === 'Products' && 'Explore our range of platform utilities engineered to manage, govern, and coordinate model operations.'}
                {title === 'Why Choose Us' && 'Accelerate pipelines with absolute reliability, strict compliance controls, and edge performance.'}
                {title === 'Testimonials' && 'Discover how we help technology teams elevate efficiency, cut latency, and automate operations.'}
                {title === 'Contact' && 'Submit details about your system requirements and receive architectural guidance from our engineering team.'}
              </p>
            </div>
            
            {renderSectionContent()}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
