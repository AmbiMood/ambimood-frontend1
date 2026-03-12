// import React from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
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

//         {/* About Content */}
//         <div className="p-8">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">About AMBI MOOD</h1>
//             <p className="text-lg text-gray-600 mb-4">
//               AMBI MOOD is an innovative music recommendation app that uses emotion detection to suggest the perfect songs for your current mood.
//             </p>
//             <p className="text-lg text-gray-600">
//               Our advanced algorithms analyze your emotional state and provide personalized music recommendations to enhance your listening experience.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;





// import React from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
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
//       transition: 'all 0.3s ease',
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
//       maxWidth: '800px',
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
//       marginBottom: '24px',
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
//     divider: {
//       width: '60px',
//       height: '3px',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       borderRadius: '100px',
//       marginBottom: '40px',
//     },
//     description: {
//       fontSize: '1.1rem',
//       color: 'rgba(255,255,255,0.6)',
//       lineHeight: '1.8',
//       marginBottom: '20px',
//       fontWeight: '300',
//     },
//     cardsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
//       gap: '20px',
//       marginTop: '60px',
//     },
//     card: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '20px',
//       padding: '28px 24px',
//       backdropFilter: 'blur(10px)',
//       transition: 'all 0.3s ease',
//     },
//     cardEmoji: {
//       fontSize: '2rem',
//       marginBottom: '16px',
//       display: 'block',
//     },
//     cardTitle: {
//       fontSize: '1rem',
//       fontWeight: '700',
//       color: 'white',
//       marginBottom: '10px',
//     },
//     cardDesc: {
//       fontSize: '0.875rem',
//       color: 'rgba(255,255,255,0.45)',
//       lineHeight: '1.6',
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
//           <Link to="/about" style={styles.navLinkActive}>About</Link>
//           <Link to="/contact" style={styles.navLink}>Contact</Link>
//           <Link to="/signup" style={styles.navCta}>Sign Up</Link>
//           <Link to="/login" style={styles.navLink}>Login</Link>
//         </div>
//       </nav>

//       {/* Content */}
//       <div style={styles.content}>
//         <div style={styles.badge}>
//           <span style={styles.dot}></span>
//           About Us
//         </div>

//         <h1 style={styles.title}>
//           About{' '}
//           <span style={styles.titleAccent}>AMBI MOOD</span>
//         </h1>

//         <div style={styles.divider} />

//         <p style={styles.description}>
//           AMBI MOOD is an innovative music recommendation app that uses
//           emotion detection to suggest the perfect songs for your current mood.
//         </p>
//         <p style={styles.description}>
//           Our advanced algorithms analyze your emotional state and provide
//           personalized music recommendations to enhance your listening experience.
//         </p>

//         {/* Feature Cards */}
//         <div style={styles.cardsGrid}>
//           {[
//             {
//               emoji: '🎵',
//               title: 'Smart Music',
//               desc: 'AI-powered recommendations based on your real emotions.'
//             },
//             {
//               emoji: '📸',
//               title: 'Emotion Detection',
//               desc: 'Camera detects your mood instantly and accurately.'
//             },
//             {
//               emoji: '💜',
//               title: 'Personalized',
//               desc: 'Every playlist is unique and tailored just for you.'
//             },
//             {
//               emoji: '⚡',
//               title: 'Real-time',
//               desc: 'Instant mood analysis and music suggestions.'
//             },
//           ].map((item) => (
//             <div key={item.title} style={styles.card}>
//               <span style={styles.cardEmoji}>{item.emoji}</span>
//               <div style={styles.cardTitle}>{item.title}</div>
//               <div style={styles.cardDesc}>{item.desc}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;











import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const About = () => {
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    orb1: {
      position: 'fixed',
      width: '400px',
      height: '400px',
      background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
      top: '-100px',
      left: '-100px',
      borderRadius: '50%',
      pointerEvents: 'none',
    },
    orb2: {
      position: 'fixed',
      width: '350px',
      height: '350px',
      background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
      bottom: '-80px',
      right: '-80px',
      borderRadius: '50%',
      pointerEvents: 'none',
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10,10,15,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    },
    brandName: {
      fontSize: '1.4rem',
      fontWeight: '800',
      color: 'white',
      letterSpacing: '3px',
      fontFamily: 'serif',
      textDecoration: 'none',
    },
    brandAccent: { color: '#a78bfa' },
    navLinks: { display: 'flex', gap: '4px', alignItems: 'center' },
    navLink: {
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '100px',
      transition: 'all 0.3s ease',
    },
    navLinkActive: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '100px',
      background: 'rgba(139,92,246,0.2)',
      border: '1px solid rgba(139,92,246,0.3)',
    },
    navCta: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.85rem',
      fontWeight: '500',
      padding: '8px 20px',
      borderRadius: '100px',
      background: '#8b5cf6',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '140px 40px 120px', // increased bottom padding for back button
      position: 'relative',
      zIndex: 1,
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(139,92,246,0.15)',
      border: '1px solid rgba(139,92,246,0.4)',
      color: '#a78bfa',
      padding: '8px 20px',
      borderRadius: '100px',
      fontSize: '0.8rem',
      fontWeight: '500',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '32px',
    },
    dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      color: 'white',
      marginBottom: '24px',
      lineHeight: '1.1',
      fontFamily: 'serif',
      letterSpacing: '-1px',
    },
    titleAccent: {
      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    divider: {
      width: '60px',
      height: '3px',
      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      borderRadius: '100px',
      marginBottom: '40px',
    },
    description: {
      fontSize: '1.1rem',
      color: 'rgba(255,255,255,0.6)',
      lineHeight: '1.8',
      marginBottom: '20px',
      fontWeight: '300',
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      marginTop: '60px',
    },
    card: {
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(139,92,246,0.2)',
      borderRadius: '20px',
      padding: '28px 24px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
    },
    cardEmoji: { fontSize: '2rem', marginBottom: '16px', display: 'block' },
    cardTitle: { fontSize: '1rem', fontWeight: '700', color: 'white', marginBottom: '10px' },
    cardDesc: { fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6' },
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
          <Link to="/about" style={styles.navLinkActive}>About</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
          <Link to="/signup" style={styles.navCta}>Sign Up</Link>
          <Link to="/login" style={styles.navLink}>Login</Link>
        </div>
      </nav>

      <div style={styles.content}>
        <div style={styles.badge}>
          <span style={styles.dot}></span>
          About Us
        </div>

        <h1 style={styles.title}>
          About <span style={styles.titleAccent}>AMBI MOOD</span>
        </h1>

        <div style={styles.divider} />

        <p style={styles.description}>
          AMBI MOOD is an innovative music recommendation app that uses
          emotion detection to suggest the perfect songs for your current mood.
        </p>
        <p style={styles.description}>
          Our advanced algorithms analyze your emotional state and provide
          personalized music recommendations to enhance your listening experience.
        </p>

        <div style={styles.cardsGrid}>
          {[
            { emoji: '🎵', title: 'Smart Music', desc: 'AI-powered recommendations based on your real emotions.' },
            { emoji: '📸', title: 'Emotion Detection', desc: 'Camera detects your mood instantly and accurately.' },
            { emoji: '💜', title: 'Personalized', desc: 'Every playlist is unique and tailored just for you.' },
            { emoji: '⚡', title: 'Real-time', desc: 'Instant mood analysis and music suggestions.' },
          ].map((item) => (
            <div key={item.title} style={styles.card}>
              <span style={styles.cardEmoji}>{item.emoji}</span>
              <div style={styles.cardTitle}>{item.title}</div>
              <div style={styles.cardDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Back Button */}
      <BackButton />
    </div>
  );
};

export default About;