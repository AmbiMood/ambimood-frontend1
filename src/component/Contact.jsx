// import React from 'react';
// import { Link } from 'react-router-dom';

// const Contact = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         {/* Navigation */}
//         <nav className="bg-white shadow-md">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//               <div className="flex items-center">
//                 <h1 className="text-2xl font-bold text-indigo-600">AMBI MOOD</h1>
//               </div>
//               <div className="flex space-x-8">
//                 <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
//                 <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
//                 <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
//                 <Link to="/signup" className="text-gray-700 hover:text-indigo-600 transition">SignUp</Link>
//                 <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition">Login</Link>
//                 <Link to="/profile" className="text-gray-700 hover:text-indigo-600 transition">Profile</Link>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Contact Content */}
//         <div className="p-8">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
//             <p className="text-lg text-gray-600 mb-6">Get in touch with the AMBI MOOD team</p>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <p className="text-gray-700 mb-2">Email: support@ambimood.com</p>
//               {/* <p className="text-gray-700">Phone: +1 (555) 123-4567</p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       fontFamily: "'DM Sans', sans-serif",
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     orb1: {
//       position: 'fixed',
//       width: '400px',
//       height: '400px',
//       background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
//       top: '-100px',
//       left: '-100px',
//       borderRadius: '50%',
//       pointerEvents: 'none',
//     },
//     orb2: {
//       position: 'fixed',
//       width: '350px',
//       height: '350px',
//       background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
//       bottom: '-80px',
//       right: '-80px',
//       borderRadius: '50%',
//       pointerEvents: 'none',
//     },
//     navbar: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       zIndex: 100,
//       padding: '20px 40px',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       background: 'rgba(10,10,15,0.8)',
//       backdropFilter: 'blur(20px)',
//       borderBottom: '1px solid rgba(255,255,255,0.05)',
//     },
//     brandName: {
//       fontSize: '1.4rem',
//       fontWeight: '800',
//       color: 'white',
//       letterSpacing: '3px',
//       fontFamily: 'serif',
//       textDecoration: 'none',
//     },
//     brandAccent: {
//       color: '#a78bfa',
//     },
//     navLinks: {
//       display: 'flex',
//       gap: '4px',
//       alignItems: 'center',
//     },
//     navLink: {
//       color: 'rgba(255,255,255,0.6)',
//       textDecoration: 'none',
//       fontSize: '0.85rem',
//       fontWeight: '500',
//       padding: '8px 16px',
//       borderRadius: '100px',
//     },
//     navLinkActive: {
//       color: 'white',
//       textDecoration: 'none',
//       fontSize: '0.85rem',
//       fontWeight: '500',
//       padding: '8px 16px',
//       borderRadius: '100px',
//       background: 'rgba(139,92,246,0.2)',
//       border: '1px solid rgba(139,92,246,0.3)',
//     },
//     navCta: {
//       color: 'white',
//       textDecoration: 'none',
//       fontSize: '0.85rem',
//       fontWeight: '500',
//       padding: '8px 20px',
//       borderRadius: '100px',
//       background: '#8b5cf6',
//     },
//     content: {
//       maxWidth: '900px',
//       margin: '0 auto',
//       padding: '140px 40px 80px',
//       position: 'relative',
//       zIndex: 1,
//     },
//     badge: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       background: 'rgba(139,92,246,0.15)',
//       border: '1px solid rgba(139,92,246,0.4)',
//       color: '#a78bfa',
//       padding: '8px 20px',
//       borderRadius: '100px',
//       fontSize: '0.8rem',
//       fontWeight: '500',
//       letterSpacing: '1px',
//       textTransform: 'uppercase',
//       marginBottom: '32px',
//     },
//     dot: {
//       width: '6px',
//       height: '6px',
//       background: '#a78bfa',
//       borderRadius: '50%',
//     },
//     title: {
//       fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//       fontWeight: '800',
//       color: 'white',
//       marginBottom: '16px',
//       lineHeight: '1.1',
//       fontFamily: 'serif',
//       letterSpacing: '-1px',
//     },
//     titleAccent: {
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//     },
//     subtitle: {
//       fontSize: '1.1rem',
//       color: 'rgba(255,255,255,0.5)',
//       marginBottom: '48px',
//       fontWeight: '300',
//     },
//     divider: {
//       width: '60px',
//       height: '3px',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       borderRadius: '100px',
//       marginBottom: '40px',
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '32px',
//     },
//     infoCard: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '20px',
//       padding: '32px',
//       backdropFilter: 'blur(10px)',
//     },
//     infoTitle: {
//       fontSize: '1.2rem',
//       fontWeight: '700',
//       color: 'white',
//       marginBottom: '24px',
//     },
//     infoItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '16px',
//       marginBottom: '20px',
//     },
//     infoIcon: {
//       width: '44px',
//       height: '44px',
//       background: 'rgba(139,92,246,0.15)',
//       border: '1px solid rgba(139,92,246,0.3)',
//       borderRadius: '12px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '1.2rem',
//       flexShrink: 0,
//     },
//     infoLabel: {
//       fontSize: '0.75rem',
//       color: 'rgba(255,255,255,0.4)',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//       marginBottom: '4px',
//     },
//     infoValue: {
//       fontSize: '0.9rem',
//       color: 'rgba(255,255,255,0.8)',
//       fontWeight: '500',
//     },
//     formCard: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '20px',
//       padding: '32px',
//       backdropFilter: 'blur(10px)',
//     },
//     formTitle: {
//       fontSize: '1.2rem',
//       fontWeight: '700',
//       color: 'white',
//       marginBottom: '24px',
//     },
//     label: {
//       display: 'block',
//       fontSize: '0.78rem',
//       fontWeight: '500',
//       color: 'rgba(255,255,255,0.5)',
//       marginBottom: '8px',
//       letterSpacing: '0.5px',
//       textTransform: 'uppercase',
//     },
//     input: {
//       width: '100%',
//       padding: '12px 16px',
//       background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '10px',
//       color: 'white',
//       fontSize: '0.9rem',
//       outline: 'none',
//       marginBottom: '16px',
//       boxSizing: 'border-box',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     textarea: {
//       width: '100%',
//       padding: '12px 16px',
//       background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '10px',
//       color: 'white',
//       fontSize: '0.9rem',
//       outline: 'none',
//       marginBottom: '20px',
//       boxSizing: 'border-box',
//       resize: 'vertical',
//       minHeight: '100px',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     btnPrimary: {
//       width: '100%',
//       padding: '13px',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none',
//       borderRadius: '10px',
//       color: 'white',
//       fontSize: '0.95rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     successBox: {
//       background: 'rgba(34,197,94,0.1)',
//       border: '1px solid rgba(34,197,94,0.3)',
//       borderRadius: '10px',
//       padding: '12px 16px',
//       color: '#86efac',
//       fontSize: '0.875rem',
//       marginBottom: '16px',
//       textAlign: 'center',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       {/* Background Orbs */}
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       {/* Navbar */}
//       <nav style={styles.navbar}>
//         <Link to="/" style={styles.brandName}>
//           AMBI <span style={styles.brandAccent}>MOOD</span>
//         </Link>
//         <div style={styles.navLinks}>
//           <Link to="/" style={styles.navLink}>Home</Link>
//           <Link to="/about" style={styles.navLink}>About</Link>
//           <Link to="/contact" style={styles.navLinkActive}>Contact</Link>
//           <Link to="/signup" style={styles.navCta}>Sign Up</Link>
//           <Link to="/login" style={styles.navLink}>Login</Link>
//         </div>
//       </nav>

//       {/* Content */}
//       <div style={styles.content}>
//         <div style={styles.badge}>
//           <span style={styles.dot}></span>
//           Contact Us
//         </div>

//         <h1 style={styles.title}>
//           Get in <span style={styles.titleAccent}>Touch</span>
//         </h1>

//         <div style={styles.divider} />

//         <p style={styles.subtitle}>
//           Have questions? We'd love to hear from you!
//         </p>

//         <div style={styles.grid}>

//           {/* Left - Info */}
//           <div style={styles.infoCard}>
//             <div style={styles.infoTitle}>Contact Information</div>

//             {[
//               { emoji: '📧', label: 'Email', value: 'ambimood2026@gmail.com' },
//               { emoji: '📍', label: 'Location', value: 'Chennai, India' },
//               { emoji: '📞', label: 'Contact', value: '9940231639' },
//               { emoji: '💬', label: 'Response Time', value: 'Within 24 hours' },
//             ].map((item) => (
//               <div key={item.label} style={styles.infoItem}>
//                 <div style={styles.infoIcon}>{item.emoji}</div>
//                 <div>
//                   <div style={styles.infoLabel}>{item.label}</div>
//                   <div style={styles.infoValue}>{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right - Form */}
//           <div style={styles.formCard}>
//             <div style={styles.formTitle}>Send a Message</div>

//             {submitted && (
//               <div style={styles.successBox}>
//                 ✅ Message sent successfully!
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               <label style={styles.label}>Your Name</label>
//               <input
//                 name="name"
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="Enter you name"
//                 autoComplete="off"
//               />

//               <label style={styles.label}>Email Address</label>
//               <input
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="you@example.com"
//                 autoComplete="off"
//               />

//               <label style={styles.label}>Message</label>
//               <textarea
//                 name="message"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 style={styles.textarea}
//                 placeholder="How can we help you?"
//               />

//               <button type="submit" style={styles.btnPrimary}>
//                 📨 Send Message
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    orb1: { position: 'fixed', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
    orb2: { position: 'fixed', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
    navbar: { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' },
    brandName: { fontSize: '1.4rem', fontWeight: '800', color: 'white', letterSpacing: '3px', fontFamily: 'serif', textDecoration: 'none' },
    brandAccent: { color: '#a78bfa' },
    navLinks: { display: 'flex', gap: '4px', alignItems: 'center' },
    navLink: { color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', padding: '8px 16px', borderRadius: '100px' },
    navLinkActive: { color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', padding: '8px 16px', borderRadius: '100px', background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)' },
    navCta: { color: 'white', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '500', padding: '8px 20px', borderRadius: '100px', background: '#8b5cf6' },
    content: { maxWidth: '900px', margin: '0 auto', padding: '140px 40px 120px', position: 'relative', zIndex: 1 },
    badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '32px' },
    dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
    title: { fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', color: 'white', marginBottom: '16px', lineHeight: '1.1', fontFamily: 'serif', letterSpacing: '-1px' },
    titleAccent: { background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
    subtitle: { fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', marginBottom: '48px', fontWeight: '300' },
    divider: { width: '60px', height: '3px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', borderRadius: '100px', marginBottom: '40px' },
    grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' },
    infoCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', padding: '32px', backdropFilter: 'blur(10px)' },
    infoTitle: { fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '24px' },
    infoItem: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' },
    infoIcon: { width: '44px', height: '44px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 },
    infoLabel: { fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' },
    infoValue: { fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', fontWeight: '500' },
    formCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '20px', padding: '32px', backdropFilter: 'blur(10px)' },
    formTitle: { fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '24px' },
    label: { display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'rgba(255,255,255,0.5)', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' },
    input: { width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '10px', color: 'white', fontSize: '0.9rem', outline: 'none', marginBottom: '16px', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" },
    textarea: { width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '10px', color: 'white', fontSize: '0.9rem', outline: 'none', marginBottom: '20px', boxSizing: 'border-box', resize: 'vertical', minHeight: '100px', fontFamily: "'DM Sans', sans-serif" },
    btnPrimary: { width: '100%', padding: '13px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '10px', color: 'white', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    successBox: { background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#86efac', fontSize: '0.875rem', marginBottom: '16px', textAlign: 'center' },
  };

  return (
    <div style={styles.page}>
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <nav style={styles.navbar}>
        <Link to="/" style={styles.brandName}>
          AMBI <span style={styles.brandAccent}>MOOD</span>
        </Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/about" style={styles.navLink}>About</Link>
          <Link to="/contact" style={styles.navLinkActive}>Contact</Link>
          <Link to="/signup" style={styles.navCta}>Sign Up</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </div>
      </nav>

      <div style={styles.content}>
        <div style={styles.badge}><span style={styles.dot}></span>Contact Us</div>
        <h1 style={styles.title}>Get in <span style={styles.titleAccent}>Touch</span></h1>
        <div style={styles.divider} />
        <p style={styles.subtitle}>Have questions? We'd love to hear from you!</p>

        <div style={styles.grid}>
          <div style={styles.infoCard}>
            <div style={styles.infoTitle}>Contact Information</div>
            {[
              { emoji: '📧', label: 'Email', value: 'ambimood2026@gmail.com' },
              { emoji: '📍', label: 'Location', value: 'Chennai, India' },
              { emoji: '📞', label: 'Contact', value: '9940231639' },
              { emoji: '💬', label: 'Response Time', value: 'Within 24 hours' },
            ].map((item) => (
              <div key={item.label} style={styles.infoItem}>
                <div style={styles.infoIcon}>{item.emoji}</div>
                <div>
                  <div style={styles.infoLabel}>{item.label}</div>
                  <div style={styles.infoValue}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.formCard}>
            <div style={styles.formTitle}>Send a Message</div>
            {submitted && <div style={styles.successBox}>✅ Message sent successfully!</div>}
            <form onSubmit={handleSubmit}>
              <label style={styles.label}>Your Name</label>
              <input name="name" type="text" required value={formData.name} onChange={handleChange} style={styles.input} placeholder="Enter your name" autoComplete="off" />
              <label style={styles.label}>Email Address</label>
              <input name="email" type="email" required value={formData.email} onChange={handleChange} style={styles.input} placeholder="you@example.com" autoComplete="off" />
              <label style={styles.label}>Message</label>
              <textarea name="message" required value={formData.message} onChange={handleChange} style={styles.textarea} placeholder="How can we help you?" />
              <button type="submit" style={styles.btnPrimary}>📨 Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Back Button */}
      <BackButton />
    </div>
  );
};

export default Contact;