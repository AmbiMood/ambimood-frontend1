// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login data:', formData);
//     alert('Login successful! (Demo)');
    
//     // Navigate to home page after login
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full">
//         <div className="bg-purple">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Login to your account
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                 placeholder="••••••••"
//               />
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember"
//                   name="remember"
//                   type="checkbox"
//                   checked={formData.remember}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
//             >
//               Login
//             </button>
//           </form>

//           <p className="mt-6 text-center text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Sign up here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;








// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

  

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError('');
//   setLoading(true);

//   try {
//     // ✅ Real backend login
//     const response = await fetch('http://localhost:5000/api/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         email: formData.email, 
//         password: formData.password 
//       })
//     });

//     const data = await response.json();

//     if (response.ok) {
//       // ✅ MongoDB-லிருந்து வந்த real name save பண்ணு
//       localStorage.setItem('userName', data.user.name);
//       localStorage.setItem('userEmail', data.user.email);
//       navigate('/');
//     } else {
//       setError(data.message);
//     }
//   } catch (err) {
//     setError('Cannot connect to server!');
//   } finally {
//     setLoading(false);
//   }
// };
  
// const styles = {
//     page: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '40px 16px',
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
//     card: {
//       background: 'rgba(255,255,255,0.04)',
//       border: '1px solid rgba(139,92,246,0.25)',
//       borderRadius: '24px',
//       padding: '48px 40px',
//       width: '100%',
//       maxWidth: '420px',
//       backdropFilter: 'blur(20px)',
//       position: 'relative',
//       zIndex: 1,
//     },
//     brand: {
//       textAlign: 'center',
//       marginBottom: '32px',
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
//     title: {
//       fontSize: '1.9rem',
//       fontWeight: '700',
//       color: 'white',
//       textAlign: 'center',
//       marginBottom: '8px',
//     },
//     subtitle: {
//       fontSize: '0.9rem',
//       color: 'rgba(255,255,255,0.45)',
//       textAlign: 'center',
//       marginBottom: '32px',
//     },
//     label: {
//       display: 'block',
//       fontSize: '0.78rem',
//       fontWeight: '500',
//       color: 'rgba(255,255,255,0.55)',
//       marginBottom: '8px',
//       letterSpacing: '0.5px',
//       textTransform: 'uppercase',
//     },
//     input: {
//       width: '100%',
//       padding: '14px 18px',
//       background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '12px',
//       color: 'white',
//       fontSize: '0.95rem',
//       outline: 'none',
//       marginBottom: '20px',
//       boxSizing: 'border-box',
//       fontFamily: "'DM Sans', sans-serif",
//     },
//     rememberRow: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '28px',
//     },
//     rememberLeft: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '8px',
//     },
//     checkbox: {
//       width: '16px',
//       height: '16px',
//       accentColor: '#8b5cf6',
//       cursor: 'pointer',
//     },
//     rememberText: {
//       fontSize: '0.85rem',
//       color: 'rgba(255,255,255,0.5)',
//     },
//     forgotLink: {
//       fontSize: '0.85rem',
//       color: '#a78bfa',
//       textDecoration: 'none',
//       fontWeight: '500',
//     },
//     btnPrimary: {
//       width: '100%',
//       padding: '15px',
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none',
//       borderRadius: '12px',
//       color: 'white',
//       fontSize: '1rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       marginBottom: '24px',
//       fontFamily: "'DM Sans', sans-serif",
//       letterSpacing: '0.3px',
//     },
//     btnDisabled: {
//       width: '100%',
//       padding: '15px',
//       background: 'rgba(255,255,255,0.1)',
//       border: 'none',
//       borderRadius: '12px',
//       color: 'rgba(255,255,255,0.3)',
//       fontSize: '1rem',
//       fontWeight: '600',
//       cursor: 'not-allowed',
//       marginBottom: '24px',
//     },
//     errorBox: {
//       background: 'rgba(239,68,68,0.1)',
//       border: '1px solid rgba(239,68,68,0.3)',
//       borderRadius: '10px',
//       padding: '12px 16px',
//       color: '#fca5a5',
//       fontSize: '0.875rem',
//       marginBottom: '20px',
//     },
//     divider: {
//       height: '1px',
//       background: 'rgba(255,255,255,0.08)',
//       margin: '0 0 24px',
//     },
//     signupText: {
//       textAlign: 'center',
//       fontSize: '0.875rem',
//       color: 'rgba(255,255,255,0.4)',
//     },
//     signupLink: {
//       color: '#a78bfa',
//       fontWeight: '600',
//       textDecoration: 'none',
//     },
//   };

//   return (
//     <div style={styles.page}>
//       {/* Background Orbs */}
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       <div style={styles.card}>

//         {/* Brand */}
//         <div style={styles.brand}>
//           <Link to="/" style={styles.brandName}>
//             AMBI <span style={styles.brandAccent}>MOOD</span>
//           </Link>
//         </div>

//         <h2 style={styles.title}>Welcome Back</h2>
//         <p style={styles.subtitle}>Login to your account 🎵</p>

//         {error && (
//           <div style={styles.errorBox}>❌ {error}</div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <label style={styles.label}>Email Address</label>
//           <input
//             name="email"
//             type="email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="you@example.com"
//             autoComplete="off"
//           />

//           <label style={styles.label}>Password</label>
//           <input
//             name="password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//             placeholder="••••••••"
//             autoComplete="new-password"
//           />

//           <div style={styles.rememberRow}>
//             <div style={styles.rememberLeft}>
//               <input
//                 id="remember"
//                 name="remember"
//                 type="checkbox"
//                 checked={formData.remember}
//                 onChange={handleChange}
//                 style={styles.checkbox}
//               />
//               <label htmlFor="remember" style={styles.rememberText}>
//                 Remember me
//               </label>
//             </div>
//             <a href="#" style={styles.forgotLink}>
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             style={loading ? styles.btnDisabled : styles.btnPrimary}
//           >
//             {loading ? '⏳ Logging in...' : '🔐 Login'}
//           </button>
//         </form>

//         <div style={styles.divider} />

//         <p style={styles.signupText}>
//           Don't have an account?{' '}
//           <Link to="/signup" style={styles.signupLink}>
//             Sign up here
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Login;







// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import BackButton from './BackButton';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '', remember: false });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email, password: formData.password })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('userName', data.user.name);
//         localStorage.setItem('userEmail', data.user.email);
//         navigate('/');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Cannot connect to server!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     page: { minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', fontFamily: "'DM Sans', sans-serif", position: 'relative', overflow: 'hidden' },
//     orb1: { position: 'fixed', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
//     orb2: { position: 'fixed', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
//     card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '24px', padding: '48px 40px', width: '100%', maxWidth: '420px', backdropFilter: 'blur(20px)', position: 'relative', zIndex: 1, marginBottom: '80px' },
//     brand: { textAlign: 'center', marginBottom: '32px' },
//     brandName: { fontSize: '1.4rem', fontWeight: '800', color: 'white', letterSpacing: '3px', fontFamily: 'serif', textDecoration: 'none' },
//     brandAccent: { color: '#a78bfa' },
//     title: { fontSize: '1.9rem', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '8px' },
//     subtitle: { fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: '32px' },
//     label: { display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'rgba(255,255,255,0.55)', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' },
//     input: { width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', outline: 'none', marginBottom: '20px', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" },
//     rememberRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' },
//     rememberLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
//     checkbox: { width: '16px', height: '16px', accentColor: '#8b5cf6', cursor: 'pointer' },
//     rememberText: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' },
//     forgotLink: { fontSize: '0.85rem', color: '#a78bfa', textDecoration: 'none', fontWeight: '500' },
//     btnPrimary: { width: '100%', padding: '15px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.3px' },
//     btnDisabled: { width: '100%', padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '12px', color: 'rgba(255,255,255,0.3)', fontSize: '1rem', fontWeight: '600', cursor: 'not-allowed', marginBottom: '24px' },
//     errorBox: { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#fca5a5', fontSize: '0.875rem', marginBottom: '20px' },
//     divider: { height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0 0 24px' },
//     signupText: { textAlign: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' },
//     signupLink: { color: '#a78bfa', fontWeight: '600', textDecoration: 'none' },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       <div style={styles.card}>
//         <div style={styles.brand}>
//           <Link to="/" style={styles.brandName}>AMBI <span style={styles.brandAccent}>MOOD</span></Link>
//         </div>
//         <h2 style={styles.title}>Welcome Back</h2>
//         <p style={styles.subtitle}>Login to your account 🎵</p>

//         {error && <div style={styles.errorBox}>❌ {error}</div>}

//         <form onSubmit={handleSubmit}>
//           <label style={styles.label}>Email Address</label>
//           <input name="email" type="email" required value={formData.email} onChange={handleChange} style={styles.input} placeholder="you@example.com" autoComplete="off" />
//           <label style={styles.label}>Password</label>
//           <input name="password" type="password" required value={formData.password} onChange={handleChange} style={styles.input} placeholder="••••••••" autoComplete="new-password" />

         

//           <button type="submit" disabled={loading} style={loading ? styles.btnDisabled : styles.btnPrimary}>
//             {loading ? '⏳ Logging in...' : '🔐 Login'}
//           </button>
//         </form>

//         <div style={styles.divider} />
//         <p style={styles.signupText}>
//           Don't have an account?{' '}
//           <Link to="/signup" style={styles.signupLink}>Sign up here</Link>
//         </p>
//       </div>

//       {/* ✅ Back Button */}
//       <BackButton />
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('userEmail', data.user.email);
        localStorage.setItem('authToken', data.token);  // ✅ Token store பண்ணுது
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Cannot connect to server!');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    page: { minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', fontFamily: "'DM Sans', sans-serif", position: 'relative', overflow: 'hidden' },
    orb1: { position: 'fixed', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
    orb2: { position: 'fixed', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
    card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '24px', padding: '48px 40px', width: '100%', maxWidth: '420px', backdropFilter: 'blur(20px)', position: 'relative', zIndex: 1, marginBottom: '80px' },
    brand: { textAlign: 'center', marginBottom: '32px' },
    brandName: { fontSize: '1.4rem', fontWeight: '800', color: 'white', letterSpacing: '3px', fontFamily: 'serif', textDecoration: 'none' },
    brandAccent: { color: '#a78bfa' },
    title: { fontSize: '1.9rem', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '8px' },
    subtitle: { fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: '32px' },
    label: { display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'rgba(255,255,255,0.55)', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' },
    input: { width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', outline: 'none', marginBottom: '20px', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" },
    rememberRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' },
    rememberLeft: { display: 'flex', alignItems: 'center', gap: '8px' },
    checkbox: { width: '16px', height: '16px', accentColor: '#8b5cf6', cursor: 'pointer' },
    rememberText: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' },
    forgotLink: { fontSize: '0.85rem', color: '#a78bfa', textDecoration: 'none', fontWeight: '500' },
    btnPrimary: { width: '100%', padding: '15px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.3px' },
    btnDisabled: { width: '100%', padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '12px', color: 'rgba(255,255,255,0.3)', fontSize: '1rem', fontWeight: '600', cursor: 'not-allowed', marginBottom: '24px' },
    errorBox: { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#fca5a5', fontSize: '0.875rem', marginBottom: '20px' },
    divider: { height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0 0 24px' },
    signupText: { textAlign: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' },
    signupLink: { color: '#a78bfa', fontWeight: '600', textDecoration: 'none' },
  };

  return (
    <div style={styles.page}>
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.card}>
        <div style={styles.brand}>
          <Link to="/" style={styles.brandName}>AMBI <span style={styles.brandAccent}>MOOD</span></Link>
        </div>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to your account 🎵</p>

        {error && <div style={styles.errorBox}>❌ {error}</div>}

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Email Address</label>
          <input name="email" type="email" required value={formData.email} onChange={handleChange} style={styles.input} placeholder="you@example.com" autoComplete="off" />
          <label style={styles.label}>Password</label>
          <input name="password" type="password" required value={formData.password} onChange={handleChange} style={styles.input} placeholder="••••••••" autoComplete="new-password" />

          <button type="submit" disabled={loading} style={loading ? styles.btnDisabled : styles.btnPrimary}>
            {loading ? '⏳ Logging in...' : '🔐 Login'}
          </button>
        </form>

        <div style={styles.divider} />
        <p style={styles.signupText}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.signupLink}>Sign up here</Link>
        </p>
      </div>

      <BackButton />
    </div>
  );
};

export default Login;