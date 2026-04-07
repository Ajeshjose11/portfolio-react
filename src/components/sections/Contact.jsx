import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../Card';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAIL_PUBLIC
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid var(--card-border)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    marginBottom: '32px'
  };

  const labelStyles = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--text-secondary)',
    marginBottom: '4px'
  };

  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '64px', textAlign: 'center' }}
        >
          Get In <span className="text-gradient">Touch</span>
        </motion.h2>

        <div className="grid-12">
          <div style={{ gridColumn: 'span 12', lg: 'span 5' }} className="contact-info-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'var(--gradient-primary)', borderRadius: '12px', color: 'white' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '700' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>ajeshjose11@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'var(--gradient-primary)', borderRadius: '12px', color: 'white' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '700' }}>Phone</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+91 8590389472</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ padding: '12px', background: 'var(--gradient-primary)', borderRadius: '12px', color: 'white' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontWeight: '700' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>Ernakulam, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 12', lg: 'span 7' }} className="contact-form-col">
            <Card>
              <form onSubmit={handleSubmit}>
                <div>
                  <label style={labelStyles}>Full Name</label>
                  <motion.input
                    whileFocus={{ borderColor: 'var(--primary-1)' }}
                    style={inputStyles}
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label style={labelStyles}>Email Address</label>
                  <motion.input
                    whileFocus={{ borderColor: 'var(--primary-2)' }}
                    style={inputStyles}
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label style={labelStyles}>Message</label>
                  <motion.textarea
                    whileFocus={{ borderColor: 'var(--primary-3)' }}
                    style={{ ...inputStyles, resize: 'none' }}
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can I help you?"
                  />
                </div>

                <button 
                  type="submit" 
                  className="send-btn"
                  disabled={status === 'sending'}
                >
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span>{status === 'sending' ? 'Sending...' : 'Send'}</span>
                </button>

                {status === 'success' && (
                  <p style={{ color: '#10b981', marginTop: '16px', textAlign: 'center', fontWeight: '600' }}>
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    <p style={{ color: '#ef4444', fontWeight: '600', marginBottom: '8px' }}>
                      Failed to send message.
                    </p>
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .contact-info-col { grid-column: span 5 !important; }
          .contact-form-col { grid-column: span 7 !important; }
        }

        .send-btn {
          font-family: inherit;
          font-size: 18px;
          background: linear-gradient(to bottom, #4dc7d9 0%,#66a6ff 100%);
          color: white;
          padding: 0.8em 1.2em;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 25px;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s;
          cursor: pointer;
          width: 100%;
        }

        .send-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
        }

        .send-btn:active {
          transform: scale(0.95);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .send-btn span {
          display: block;
          margin-left: 0.4em;
          transition: all 0.3s;
        }

        .send-btn svg {
          width: 18px;
          height: 18px;
          fill: white;
          transition: all 0.3s;
        }

        .send-btn .svg-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.2);
          margin-right: 0.5em;
          transition: all 0.3s;
        }

        .send-btn:hover .svg-wrapper {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .send-btn:hover svg {
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
};

export default Contact;
