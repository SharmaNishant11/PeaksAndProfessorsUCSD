import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  
  // Logic states
  const [submitted, setSubmitted] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Input states to track typing and clear errors
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Only proceed if all required fields are filled
    if (firstName && lastName && email && message) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID',    // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',   // Replace with your EmailJS Template ID
        form.current!, 
        'YOUR_PUBLIC_KEY'     // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
      })
      .catch((err) => {
        console.error('Email failed to send:', err);
      });
    }
  };

  // SUCCESS SCREEN
  if (isSent) {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '100px 20px' }}>
        <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '40px' }} />
        <h1 style={{ fontSize: '60px', fontWeight: '900' }}>Thank you!</h1>
        <p style={{ fontSize: '24px' }}>Expect to hear from us soon.</p>
        <Link to="/" style={{ color: '#1a2238', fontWeight: 'bold', marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* HEADER SECTION */}
      <header style={{ padding: '20px 60px', display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto', marginRight: '60px' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '40px', fontSize: '24px' }}>
          <Link to="/spotlight" style={navLinkStyle}>Spotlight</Link>
          <Link to="/history" style={navLinkStyle}>History</Link>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/contact" style={{ ...navLinkStyle, fontWeight: 'bold' }}>Contact</Link>
          <Link to="/faq" style={navLinkStyle}>FAQ</Link>
        </nav>
      </header>

      <main style={{ textAlign: 'center', padding: '60px 20px', maxWidth: '800px', margin: '0 auto', flex: 1 }}>
        <h1 style={{ fontSize: '80px', fontWeight: '900', margin: '0 0 40px 0' }}>Contact Us</h1>
        
        <div style={{ marginBottom: '60px', lineHeight: '1.6', fontSize: '18px' }}>
          <p>Have any questions, concerns, hopes, or dreams that you want to share?</p>
          <p>We would love to hear from you.</p>
          <p style={{ marginTop: '30px' }}>Contact us using the form below or e-mail us at <strong>peaksandprofessors@ucsd.edu</strong>.</p>
          <p>We'll be in touch as asap as possible!</p>
        </div>

        {/* ERROR BANNER */}
        {submitted && (!firstName || !lastName || !email || !message) && (
          <div style={errorBannerStyle}>
            ⓘ Form submission failed. Review the following information: Name, Email Address, and Message.
          </div>
        )}

        <form ref={form} onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'grid', gap: '35px' }}>
          
          {/* NAME ROW */}
          <div>
            <label style={mainLabelStyle}>Name</label>
            <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
              <div style={{ flex: 1 }}>
                {submitted && !firstName && <div style={inlineErrorStyle}>ⓘ First Name is required.</div>}
                <input name="first_name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} 
                  style={submitted && !firstName ? errorInputBoxStyle : inputBoxStyle} />
                <p style={subLabelStyle}>First Name (required)</p>
              </div>
              <div style={{ flex: 1 }}>
                {submitted && !lastName && <div style={inlineErrorStyle}>ⓘ Last Name is required.</div>}
                <input name="last_name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
                  style={submitted && !lastName ? errorInputBoxStyle : inputBoxStyle} />
                <p style={subLabelStyle}>Last Name (required)</p>
              </div>
            </div>
          </div>

          {/* EMAIL ROW */}
          <div>
            <label style={mainLabelStyle}>Email Address <span style={requiredSpan}>(required)</span></label>
            {submitted && !email && <div style={inlineErrorStyle}>ⓘ Email Address is required.</div>}
            <input name="user_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              style={submitted && !email ? { ...errorInputBoxStyle, width: '100%' } : { ...inputBoxStyle, width: '100%', marginTop: '10px' }} />
          </div>

          {/* SUBJECT ROW */}
          <div>
            <label style={mainLabelStyle}>Subject <span style={requiredSpan}>(required)</span></label>
            <div style={{ position: 'relative', marginTop: '10px' }}>
              <select name="subject" style={{ ...inputBoxStyle, width: '100%', appearance: 'none' }}>
                <option value="General Question">General Question</option>
                <option value="Trip">Your Trip - Concerns, Cancellations, or Other</option>
                <option value="Feedback">Feedback - Your Trip, Trip Lead, Website, or Other</option>
                <option value="Suggestion">Suggestion - Peak or Professor</option>
                <option value="Other">Other</option>
              </select>
              <div style={arrowStyle}>⌄</div>
            </div>
          </div>

          {/* MESSAGE ROW */}
          <div>
            <label style={mainLabelStyle}>Message <span style={requiredSpan}>(required)</span></label>
            {submitted && !message && <div style={inlineErrorStyle}>ⓘ Message is required.</div>}
            <textarea name="message" rows={8} value={message} onChange={(e) => setMessage(e.target.value)}
              style={submitted && !message ? { ...errorInputBoxStyle, width: '100%' } : { ...inputBoxStyle, width: '100%', marginTop: '10px' }} />
          </div>

          <button type="submit" style={submitButtonStyle}>SUBMIT</button>
        </form>
      </main>

      {/* FOOTER SECTION */}
      <footer style={{ backgroundColor: '#1a2238', color: 'white', padding: '70px 20px', textAlign: 'center', marginTop: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', fontWeight: 'bold', fontSize: '14px' }}>
          <Link to="/history" style={footerLink}>ABOUT</Link>
          <Link to="/faq" style={footerLink}>FAQ</Link>
          <Link to="/contact" style={footerLink}>CONTACT US</Link>
        </div>
      </footer>
    </div>
  );
}

// --- CSS STYLES ---
const errorBannerStyle = { backgroundColor: '#c34a4a', color: 'white', padding: '15px', textAlign: 'left' as const, marginBottom: '30px', fontSize: '14px', fontWeight: 'bold' };
const inlineErrorStyle = { backgroundColor: '#c34a4a', color: 'white', padding: '8px 12px', fontSize: '13px', marginBottom: '5px', display: 'inline-block' };
const errorInputBoxStyle = { padding: '15px', border: '1px solid #c34a4a', backgroundColor: '#f9ebeb', fontSize: '16px', boxSizing: 'border-box' as const, width: '100%' };
const navLinkStyle = { textDecoration: 'none', color: '#000' };
const footerLink = { textDecoration: 'none', color: 'white' };
const mainLabelStyle = { fontSize: '18px', fontWeight: '600' };
const subLabelStyle = { fontSize: '12px', color: '#666', marginTop: '8px' };
const requiredSpan = { fontSize: '14px', color: '#666', fontWeight: 'normal' };
const inputBoxStyle = { padding: '15px', border: '1px solid #ccc', backgroundColor: '#fcfcfc', fontSize: '16px', boxSizing: 'border-box' as const, width: '100%' };
const arrowStyle = { position: 'absolute' as const, right: '15px', top: '12px', fontSize: '20px', pointerEvents: 'none' as const, color: '#333' };
const submitButtonStyle = { backgroundColor: '#1a1a1a', color: 'white', padding: '18px 50px', border: 'none', fontWeight: 'bold', fontSize: '16px', width: 'fit-content', cursor: 'pointer', marginTop: '10px', letterSpacing: '1px' };