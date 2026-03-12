// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// const Home=()=> {
//   const navigate = useNavigate();
//   const handleSignup = () => { 
//     navigate("/signup"); 
//   }
//   return (
//     <>
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Navigation */}
//       <nav className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-indigo-600">AMBI MOOD</h1>
//             </div>
//             <div className="flex space-x-8">
//               <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
//               <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">About</Link>
//               <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition" >Contact</Link>
//             <Link to="/signup" className="text-gray-700 hover:text-indigo-600 transition" onClick={handleSignup}>SignUp</Link>
//             <Link to="/login" className="text-gray-700 hover:text-indigo-600 transition">Login</Link>
//             <Link to="/profile" className="text-gray-700 hover:text-indigo-600 transition">Profile</Link>
        
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center">
//           <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
//             Welcome to Our Emotion Based Music Recommendation App!
//           </h2>
//           {/* <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Build amazing experiences with modern web technologies. Fast, reliable, and beautiful.
//           </p> */}
//           <div className="flex justify-center space-x-4 mt-15">
//             <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
//               Get Started
//             </button>
//             {/* <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border border-indigo-600">
//               Learn More
//             </button> */}
//           </div>
//         </div>
// </div>
// </div>
//          </>
//   );
// }
// export default Home;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/detect-mood');
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar">
        
//         <h1 className="logo">AMBI MOOD</h1>
//         <div className="nav-links">
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           <a href="/contact">Contact</a>
//           <a href="/signup">SignUp</a>
//           <a href="/login">Login</a>
//           <a href="/profile">Profile</a>
//         </div>
//       </nav>

//       <div className="hero-section">
//         <h1>Welcome to Our Emotion Based Music Recommendation App!</h1>
//         <button className="btn-get-started" onClick={handleGetStarted}>
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;




//ithu than tevaiy
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/detect-mood');
//   };

//   return (
//     <div className="home-container">
//       {/* Navbar-a simple-a veikalam or remove pannalam */}
//       <nav className="navbar">
//         <div className="nav-links">
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           <a href="/contact">Contact</a>
//           <a href="/signup">SignUp</a>
//           <a href="/login">Login</a>
//           <a href="/profile">Profile</a>
//         </div>
//       </nav>

//       <div className="hero-section">
//         {/* Logo-va inga add pannunga */}
//         <h1 className="main-logo">AMBI MOOD</h1>
//         <h2 className="tagline">Welcome to Our Emotion Based Music Recommendation App!</h2>
//         <button className="btn-get-started" onClick={handleGetStarted}>
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
//ithu varaikum


// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="nav-brand">
//           AMBI <span>MOOD</span>
//         </div>
//         <div className="nav-links">
//           <a href="/">Home</a>
//           <a href="/about">About</a>
//           <a href="/contact">Contact</a>
//           <a href="/signup" className="nav-cta">Sign Up</a>
//           <a href="/login">Login</a>
//         </div>
//       </nav>

//       {/* Hero */}
//       <div className="hero-section">
//         <div className="hero-badge">
//           <span className="dot"></span>
//           AI Powered Music
//         </div>

//         <h1 className="main-logo">
//           AMBI <span className="highlight">MOOD</span>
//         </h1>

//         <p className="tagline">
//           Your emotions, your music. Let AI detect your mood
//           and curate the perfect soundtrack for every moment.
//         </p>

//         <div className="hero-buttons">
//           <button
//             className="btn-get-started"
//             onClick={() => navigate('/signup')}
//           >
//             Get Started Free →
//           </button>
//           <a href="/about" className="btn-secondary">
//             Learn More
//           </a>
//         </div>

//         {/* Mood Cards */}
//         <div className="mood-showcase">
//           {[
//             { emoji: '😊', mood: 'Happy' },
//             { emoji: '😢', mood: 'Sad' },
//             { emoji: '⚡', mood: 'Energetic' },
//             { emoji: '😌', mood: 'Calm' },
//             { emoji: '❤️', mood: 'Romantic' },
//             { emoji: '😠', mood: 'Angry' },
//           ].map((item) => (
//             <div key={item.mood} className="mood-card">
//               <span className="emoji">{item.emoji}</span>
//               <span className="mood-name">{item.mood}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles = Array.from({ length: 80 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 2 + 0.5,
//       dx: (Math.random() - 0.5) * 0.4,
//       dy: (Math.random() - 0.5) * 0.4,
//       opacity: Math.random() * 0.5 + 0.2,
//     }));

//     let animId;
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         p.x += p.dx;
//         p.y += p.dy;
//         if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
//         ctx.fill();
//       });

//       // Draw connecting lines
//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach(p2 => {
//           const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - dist / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         });
//       });

//       animId = requestAnimationFrame(animate);
//     };
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener('resize', handleResize);
//     return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize); };
//   }, []);

//   const navLinks = ['Home', 'About', 'Contact', 'SignUp', 'Login', 'Profile'];
//   const navRoutes = ['/', '/about', '/contact', '/signup', '/login', '/profile'];

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 70%, #0f0c29 100%)',
//       position: 'relative',
//       overflow: 'hidden',
//       fontFamily: "'Cinzel', serif",
//     }}>
//       {/* Animated mesh background */}
//       <div style={{
//         position: 'fixed', inset: 0, zIndex: 0,
//         background: 'radial-gradient(ellipse at 20% 50%, rgba(120,40,200,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(255,80,120,0.2) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(40,120,255,0.2) 0%, transparent 50%)',
//       }} />

//       {/* Particle Canvas */}
//       <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }} />

//       {/* Floating 3D orbs */}
//       {[
//         { size: 300, top: '-100px', left: '-100px', color: 'rgba(120,40,200,0.25)', delay: '0s' },
//         { size: 200, top: '60%', right: '-60px', color: 'rgba(255,80,120,0.2)', delay: '2s' },
//         { size: 150, top: '30%', left: '60%', color: 'rgba(40,200,255,0.15)', delay: '4s' },
//       ].map((orb, i) => (
//         <div key={i} style={{
//           position: 'fixed',
//           width: orb.size, height: orb.size,
//           top: orb.top, left: orb.left, right: orb.right,
//           background: `radial-gradient(circle at 35% 35%, ${orb.color}, transparent 70%)`,
//           borderRadius: '50%',
//           filter: 'blur(40px)',
//           animation: `float 8s ease-in-out ${orb.delay} infinite alternate`,
//           zIndex: 1,
//           pointerEvents: 'none',
//         }} />
//       ))}

//       {/* Navbar */}
//       <nav style={{
//         position: 'fixed', top: 0, left: 0, right: 0,
//         zIndex: 100,
//         padding: '20px 40px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         background: 'rgba(15,12,41,0.4)',
//         backdropFilter: 'blur(20px)',
//         borderBottom: '1px solid rgba(255,255,255,0.06)',
//       }}>
//         <div style={{
//           fontSize: '1.2rem',
//           fontWeight: '700',
//           color: 'white',
//           letterSpacing: '4px',
//           fontFamily: "'Cinzel', serif",
//           background: 'linear-gradient(135deg, #fff 30%, #c4b5fd)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//         }}>
//           AMBI MOOD
//         </div>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           {navLinks.map((link, i) => (
//             <a key={link} href={navRoutes[i]} style={{
//               color: 'rgba(255,255,255,0.65)',
//               textDecoration: 'none',
//               fontSize: '0.78rem',
//               fontWeight: '500',
//               letterSpacing: '1px',
//               padding: '8px 16px',
//               borderRadius: '100px',
//               border: '1px solid rgba(255,255,255,0.08)',
//               background: 'rgba(255,255,255,0.04)',
//               transition: 'all 0.3s ease',
//               fontFamily: "'DM Sans', sans-serif",
//             }}
//             onMouseEnter={e => {
//               e.target.style.background = 'rgba(139,92,246,0.25)';
//               e.target.style.color = 'white';
//               e.target.style.borderColor = 'rgba(139,92,246,0.5)';
//             }}
//             onMouseLeave={e => {
//               e.target.style.background = 'rgba(255,255,255,0.04)';
//               e.target.style.color = 'rgba(255,255,255,0.65)';
//               e.target.style.borderColor = 'rgba(255,255,255,0.08)';
//             }}>
//               {link}
//             </a>
//           ))}
//         </div>
//       </nav>

//       {/* Hero */}
//       <div style={{
//         position: 'relative', zIndex: 10,
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         padding: '120px 40px 80px',
//       }}>
//         {/* Badge */}
//         <div style={{
//           display: 'inline-flex', alignItems: 'center', gap: '8px',
//           background: 'rgba(139,92,246,0.15)',
//           border: '1px solid rgba(139,92,246,0.4)',
//           color: '#c4b5fd',
//           padding: '8px 20px',
//           borderRadius: '100px',
//           fontSize: '0.75rem',
//           letterSpacing: '2px',
//           textTransform: 'uppercase',
//           marginBottom: '32px',
//           fontFamily: "'DM Sans', sans-serif",
//           animation: 'fadeInDown 0.8s ease both',
//         }}>
//           <span style={{ width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
//            Music Experience
//         </div>

//         {/* Main Title - 3D Effect */}
//         <h1 style={{
//           fontSize: 'clamp(3.5rem, 10vw, 8rem)',
//           fontWeight: '900',
//           color: 'white',
//           letterSpacing: '-2px',
//           lineHeight: 1,
//           marginBottom: '8px',
//           fontFamily: "'Cinzel', serif",
//           textShadow: `
//             0 1px 0 rgba(255,255,255,0.4),
//             0 2px 0 rgba(200,150,255,0.3),
//             0 4px 0 rgba(150,100,255,0.2),
//             0 8px 0 rgba(100,50,200,0.15),
//             0 16px 30px rgba(0,0,0,0.5),
//             0 0 80px rgba(139,92,246,0.3)
//           `,
//           animation: 'fadeInDown 0.8s ease 0.2s both',
//           transform: 'perspective(500px) rotateX(5deg)',
//         }}>
//           AMBI
//         </h1>
//         <h1 style={{
//           fontSize: 'clamp(3.5rem, 10vw, 8rem)',
//           fontWeight: '900',
//           letterSpacing: '-2px',
//           lineHeight: 1,
//           marginBottom: '32px',
//           fontFamily: "'Cinzel', serif",
//           background: 'linear-gradient(135deg, #c4b5fd 0%, #f0abfc 40%, #fb7185 70%, #fbbf24 100%)',
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//           textShadow: 'none',
//           filter: 'drop-shadow(0 8px 30px rgba(196,181,253,0.4))',
//           animation: 'fadeInDown 0.8s ease 0.3s both',
//           transform: 'perspective(500px) rotateX(5deg)',
//         }}>
//           MOOD
//         </h1>

//         {/* Tagline */}
//         <p style={{
//           fontSize: 'clamp(1rem, 2vw, 1.3rem)',
//           color: 'rgba(255,255,255,0.5)',
//           maxWidth: '600px',
//           lineHeight: 1.7,
//           marginBottom: '48px',
//           fontFamily: "'DM Sans', sans-serif",
//           fontWeight: '300',
//           letterSpacing: '0.5px',
//           animation: 'fadeInUp 0.8s ease 0.5s both',
//         }}>
//           Emotion Based Music Recommendation System!🎵!
//         </p>

//         {/* CTA Button - 3D */}
//         <div style={{ animation: 'fadeInUp 0.8s ease 0.7s both' }}>
//           <button
//             onClick={() => navigate('/detect-mood')}
//             style={{
//               padding: '18px 56px',
//               background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
//               border: 'none',
//               borderRadius: '100px',
//               color: 'white',
//               fontSize: '1rem',
//               fontWeight: '700',
//               letterSpacing: '2px',
//               cursor: 'pointer',
//               fontFamily: "'DM Sans', sans-serif",
//               textTransform: 'uppercase',
//               boxShadow: '0 8px 32px rgba(139,92,246,0.4), 0 2px 0 rgba(255,255,255,0.2) inset, 0 -4px 0 rgba(0,0,0,0.3) inset',
//               transform: 'perspective(200px) rotateX(5deg)',
//               transition: 'all 0.3s ease',
//               position: 'relative',
//             }}
//             onMouseEnter={e => {
//               e.target.style.transform = 'perspective(200px) rotateX(5deg) translateY(-4px) scale(1.05)';
//               e.target.style.boxShadow = '0 16px 48px rgba(139,92,246,0.6), 0 2px 0 rgba(255,255,255,0.2) inset, 0 -4px 0 rgba(0,0,0,0.3) inset';
//             }}
//             onMouseLeave={e => {
//               e.target.style.transform = 'perspective(200px) rotateX(5deg)';
//               e.target.style.boxShadow = '0 8px 32px rgba(139,92,246,0.4), 0 2px 0 rgba(255,255,255,0.2) inset, 0 -4px 0 rgba(0,0,0,0.3) inset';
//             }}
//           >
//             🎵 Get Started
//           </button>
//         </div>

//         {/* Feature Pills */}
//         <div style={{
//           display: 'flex', gap: '16px', marginTop: '64px', flexWrap: 'wrap', justifyContent: 'center',
//           animation: 'fadeInUp 0.8s ease 0.9s both',
//         }}>
//           {['😊 Emotion Detection', '🎵 5 Languages', '💓 Heart Rate'].map(feat => (
//             <div key={feat} style={{
//               padding: '10px 20px',
//               background: 'rgba(255,255,255,0.04)',
//               border: '1px solid rgba(255,255,255,0.1)',
//               borderRadius: '100px',
//               color: 'rgba(255,255,255,0.6)',
//               fontSize: '0.82rem',
//               fontFamily: "'DM Sans', sans-serif",
//               backdropFilter: 'blur(10px)',
//             }}>
//               {feat}
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
//         @keyframes fadeInDown {
//           from { opacity: 0; transform: translateY(-30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           from { transform: translateY(0px) scale(1); }
//           to { transform: translateY(-30px) scale(1.05); }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(0.8); }
//         }
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { overflow-x: hidden; }
//       `}</style>
//     </div>
//   );
// };

// export default Home;






import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverBtn, setHoverBtn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Musical note particles
    const notes = ['♪', '♫', '♬', '♩', '🎵', '🎶'];
    const particles = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.random() * 60 + 260, // purple to pink range
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        p.hue += 0.2;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1, i + 5).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${(p1.hue + p2.hue) / 2}, 70%, 60%, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize); };
  }, []);

  const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'SignUp', href: '/signup' },
    { label: 'Login', href: '/login' },
    { label: 'Profile', href: '/profile' },
  ];

  return (
    <div onMouseMove={handleMouseMove} style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #050510 0%, #0d0520 25%, #160830 50%, #0a0318 75%, #020208 100%)',
      position: 'relative', overflow: 'hidden',
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      {/* Dynamic mouse-follow glow */}
      <div style={{
        position: 'fixed', zIndex: 2, pointerEvents: 'none',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
        transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        transition: 'transform 0.1s ease',
      }} />

      {/* Animated aurora background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 10% 20%, rgba(139,92,246,0.2) 0%, transparent 40%),
          radial-gradient(ellipse at 90% 80%, rgba(236,72,153,0.15) 0%, transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 10%, rgba(16,185,129,0.08) 0%, transparent 30%)
        `,
        animation: 'auroraShift 10s ease-in-out infinite alternate',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 3, pointerEvents: 'none' }} />

      {/* Floating orbs */}
      {[
        { w: 350, h: 350, top: '-80px', left: '-80px', color1: 'rgba(139,92,246,0.3)', color2: 'rgba(168,85,247,0.1)', delay: '0s' },
        { w: 250, h: 250, bottom: '-60px', right: '-60px', color1: 'rgba(236,72,153,0.25)', color2: 'rgba(244,114,182,0.1)', delay: '3s' },
        { w: 180, h: 180, top: '40%', left: '5%', color1: 'rgba(59,130,246,0.2)', color2: 'transparent', delay: '6s' },
        { w: 120, h: 120, top: '20%', right: '8%', color1: 'rgba(16,185,129,0.15)', color2: 'transparent', delay: '1.5s' },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'fixed', zIndex: 2, pointerEvents: 'none',
          width: orb.w, height: orb.h,
          top: orb.top, left: orb.left, bottom: orb.bottom, right: orb.right,
          background: `radial-gradient(circle at 40% 40%, ${orb.color1}, ${orb.color2})`,
          borderRadius: '50%', filter: 'blur(50px)',
          animation: `floatOrb 8s ease-in-out ${orb.delay} infinite alternate`,
        }} />
      ))}

      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '16px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(5,5,16,0.6)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(139,92,246,0.1)',
      }}>
        <div style={{
          fontSize: '1.1rem', fontWeight: '800', letterSpacing: '4px',
          background: 'linear-gradient(135deg, #c4b5fd, #f0abfc, #fb7185)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          fontFamily: "'Cinzel Decorative', cursive",
        }}>
          AMBI MOOD
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{
              color: 'rgba(196,181,253,0.6)',
              textDecoration: 'none',
              fontSize: '0.92rem', fontWeight: '600', letterSpacing: '0.5px',
              padding: '7px 14px', borderRadius: '8px',
              transition: 'all 0.25s ease',
              border: '1px solid transparent',
            }}
            onMouseEnter={e => {
              e.target.style.color = '#e9d5ff';
              e.target.style.background = 'rgba(139,92,246,0.15)';
              e.target.style.borderColor = 'rgba(139,92,246,0.3)';
            }}
            onMouseLeave={e => {
              e.target.style.color = 'rgba(196,181,253,0.6)';
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'transparent';
            }}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '120px 40px 80px',
      }}>

        {/* Pill badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          padding: '6px 6px 6px 16px',
          background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1))',
          border: '1px solid rgba(139,92,246,0.25)',
          borderRadius: '100px', marginBottom: '40px',
          animation: 'fadeSlideDown 0.7s ease both',
        }}>
          <span style={{ color: 'rgba(196,181,253,0.8)', fontSize: '0.75rem', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Emotion Music
          </span>
          <span style={{
            padding: '4px 12px', borderRadius: '100px',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            color: 'white', fontSize: '0.7rem', fontWeight: '700', letterSpacing: '1px',
          }}>NEW</span>
        </div>

        {/* Giant title */}
        <div style={{ marginBottom: '24px', animation: 'fadeSlideDown 0.7s ease 0.15s both' }}>
          <div style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: '900', lineHeight: 0.9,
            fontFamily: "'Cinzel Decorative', cursive",
            letterSpacing: '-3px',
            color: 'white',
            textShadow: `
              0 0 40px rgba(139,92,246,0.5),
              0 0 80px rgba(139,92,246,0.2),
              0 4px 0 rgba(139,92,246,0.4),
              0 8px 0 rgba(100,50,200,0.3),
              0 16px 40px rgba(0,0,0,0.8)
            `,
            transform: 'perspective(800px) rotateX(8deg)',
            display: 'inline-block',
          }}>
            AMBI
          </div>
          <br />
          <div style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: '900', lineHeight: 0.9,
            fontFamily: "'Cinzel Decorative', cursive",
            letterSpacing: '-3px',
            background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 35%, #fb923c 65%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 30px rgba(167,139,250,0.5))',
            transform: 'perspective(800px) rotateX(8deg)',
            display: 'inline-block',
            animation: 'shimmer 4s linear infinite',
          }}>
            MOOD
          </div>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
          color: 'rgba(196,181,253,0.55)',
          maxWidth: '520px', lineHeight: 1.8,
          marginBottom: '52px', fontWeight: '300', letterSpacing: '0.3px',
          animation: 'fadeSlideUp 0.7s ease 0.3s both',
        }}>
           Emotion Based Music Recommendation System!🎵!
        </p>

        {/* CTA */}
        <div style={{ animation: 'fadeSlideUp 0.7s ease 0.45s both' }}>
          <button
            onClick={() => navigate('/detect-mood')}
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            style={{
              padding: '0',
              background: 'none', border: 'none', cursor: 'pointer',
              position: 'relative',
            }}>
            <div style={{
              padding: '18px 60px',
              background: hoverBtn
                ? 'linear-gradient(135deg, #7c3aed, #db2777)'
                : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              borderRadius: '100px',
              color: 'white',
              fontSize: '0.95rem', fontWeight: '700', letterSpacing: '2px',
              textTransform: 'uppercase',
              boxShadow: hoverBtn
                ? '0 20px 60px rgba(139,92,246,0.7), 0 0 0 1px rgba(255,255,255,0.1) inset'
                : '0 8px 32px rgba(139,92,246,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset',
              transform: hoverBtn ? 'translateY(-4px) scale(1.04)' : 'translateY(0) scale(1)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
              🎵 &nbsp; Detect My Mood
            </div>
          </button>
        </div>

       

        {/* Feature chips */}
        <div style={{
          display: 'flex', gap: '10px', marginTop: '48px', flexWrap: 'wrap', justifyContent: 'center',
          animation: 'fadeSlideUp 0.7s ease 0.75s both',
        }}>
          {['😊 Happy', '😢 Sad', '😠 Angry', '😱 Fearful', '😲 Surprised','😐Neutral','🤢Disgusted'].map(mood => (
          
            <div key={mood} style={{
              padding: '8px 16px',
              background: 'rgba(139,92,246,0.06)',
              border: '1px solid rgba(139,92,246,0.15)',
              borderRadius: '100px',
              color: 'rgba(196,181,253,0.5)',
              fontSize: '0.78rem',
              backdropFilter: 'blur(10px)',
            }}>{mood}</div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@700&family=Space+Grotesk:wght@300;400;500;700&display=swap');
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatOrb {
          from { transform: translateY(0) scale(1) rotate(0deg); }
          to { transform: translateY(-40px) scale(1.1) rotate(10deg); }
        }
        @keyframes auroraShift {
          from { opacity: 0.7; filter: hue-rotate(0deg); }
          to { opacity: 1; filter: hue-rotate(30deg); }
        }
        @keyframes shimmer {
          0% { filter: drop-shadow(0 0 30px rgba(167,139,250,0.5)) hue-rotate(0deg); }
          50% { filter: drop-shadow(0 0 50px rgba(244,114,182,0.6)) hue-rotate(20deg); }
          100% { filter: drop-shadow(0 0 30px rgba(167,139,250,0.5)) hue-rotate(0deg); }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; cursor: default; }
        a { font-family: 'Space Grotesk', sans-serif; }
      `}</style>
    </div>
  );
};

export default Home;





