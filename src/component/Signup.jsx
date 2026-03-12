// import  { useState } from 'react';
// import { Link} from 'react-router-dom';

// const Signup = () => {
//     // const navigate = useNavigate();
//     // navigate('/signup');
    
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Signup data:', formData);
//     alert('Signup successful! (Demo)');
    
//     // Navigate to signup page after signup
    
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Join us today and get started
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                 placeholder="John Doe"
//               />
//             </div>

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

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                 placeholder="••••••••"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
//             >
//               Sign Up
//             </button>
//           </form>

//           <p className="mt-6 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Login here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
  
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Step 1: Form Submit - OTP Send
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('OTP sent! Check your email 📧');
//         setTimeout(() => setStep(2), 1500);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Cannot connect to server! Make sure backend is running.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Step 2: OTP Verify
//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: formData.email,
//           otp: otp
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('✅ Signup Successful! Redirecting...');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Network error!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Resend OTP
//   const handleResendOTP = async () => {
//     setLoading(true);
//     setError('');
//     setSuccess('');
//     try {
//       const response = await fetch('http://localhost:5000/api/resend-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSuccess('New OTP sent! Check your email 📧');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Error resending OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-xl shadow-lg p-8">

//           {/* ======= STEP 1: SIGNUP FORM ======= */}
//           {step === 1 && (
//             <>
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-extrabold text-gray-900">
//                   Create Account
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-600">
//                   Join us today and get started
//                 </p>
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                   ❌ {error}
//                 </div>
//               )}

//               {/* Success Message */}
//               {success && (
//                 <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//                   ✅ {success}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                     placeholder="••••••••"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                     Confirm Password
//                   </label>
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
//                     placeholder="••••••••"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
//                 >
//                   {loading ? '⏳ Sending OTP...' : '📧 Send OTP & Sign Up'}
//                 </button>
//               </form>

//               <p className="mt-6 text-center text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Login here
//                 </Link>
//               </p>
//             </>
//           )}

//           {/* ======= STEP 2: OTP VERIFICATION ======= */}
//           {step === 2 && (
//             <>
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-extrabold text-gray-900">
//                   Verify Email
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-600">
//                   OTP sent to <span className="font-semibold text-indigo-600">{formData.email}</span>
//                 </p>
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                   ❌ {error}
//                 </div>
//               )}

//               {/* Success Message */}
//               {success && (
//                 <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//                   ✅ {success}
//                 </div>
//               )}

//               <form onSubmit={handleVerifyOTP} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
//                     Enter 6-Digit OTP
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     maxLength="6"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                     placeholder="000000"
//                   />
//                   <p className="text-xs text-center text-gray-500 mt-2">
//                     📬 Check your Gmail inbox (also check spam folder)
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading || otp.length !== 6}
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
//                 >
//                   {loading ? '⏳ Verifying...' : '✅ Verify OTP'}
//                 </button>

//                 <div className="flex justify-between items-center">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setStep(1);
//                       setError('');
//                       setSuccess('');
//                       setOtp('');
//                     }}
//                     className="text-sm text-gray-600 hover:text-gray-800 font-medium"
//                   >
//                     ← Change Email
//                   </button>

//                   <button
//                     type="button"
//                     onClick={handleResendOTP}
//                     disabled={loading}
//                     className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold disabled:text-gray-400"
//                   >
//                     🔄 Resend OTP
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;





// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
  
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('OTP sent! Check your email 📧');
//         setTimeout(() => setStep(2), 1500);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Cannot connect to server! Make sure backend is running.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/api/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email, otp: otp })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess('✅ Signup Successful! Redirecting to Login...');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Network error!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     setLoading(true);
//     setError('');
//     setSuccess('');
//     try {
//       const response = await fetch('http://localhost:5000/api/resend-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSuccess('New OTP sent! 📧');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Error resending OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full">
//         <div className="bg-white rounded-xl shadow-lg p-8">

//           {/* STEP 1: Signup Form */}
//           {step === 1 && (
//             <>
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-extrabold text-gray-900">
//                   Create Account
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-600">
//                   Join AMBI MOOD today!
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                   ❌ {error}
//                 </div>
//               )}
//               {success && (
//                 <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//                   ✅ {success}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Password
//                   </label>
//                   <input
//                     name="password"
//                     type="password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="••••••••"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Confirm Password
//                   </label>
//                   <input
//                     name="confirmPassword"
//                     type="password"
//                     required
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="••••••••"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400 transition"
//                 >
//                   {loading ? '⏳ Sending OTP...' : '📧 Send OTP & Sign Up'}
//                 </button>
//               </form>

//               <p className="mt-6 text-center text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Login here
//                 </Link>
//               </p>
//             </>
//           )}

//           {/* STEP 2: OTP Verify */}
//           {step === 2 && (
//             <>
//               <div className="text-center mb-8">
//                 <h2 className="text-3xl font-extrabold text-gray-900">
//                   Verify Email
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-600">
//                   OTP sent to{' '}
//                   <span className="font-semibold text-indigo-600">
//                     {formData.email}
//                   </span>
//                 </p>
//               </div>

//               {error && (
//                 <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
//                   ❌ {error}
//                 </div>
//               )}
//               {success && (
//                 <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//                   ✅ {success}
//                 </div>
//               )}

//               <form onSubmit={handleVerifyOTP} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
//                     Enter 6-Digit OTP
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     maxLength="6"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     placeholder="000000"
//                   />
//                   <p className="text-xs text-center text-gray-500 mt-2">
//                     📬 Check Gmail inbox + Spam folder
//                   </p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={loading || otp.length !== 6}
//                   className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400 transition"
//                 >
//                   {loading ? '⏳ Verifying...' : '✅ Verify OTP'}
//                 </button>

//                 <div className="flex justify-between items-center">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setStep(1);
//                       setError('');
//                       setSuccess('');
//                       setOtp('');
//                     }}
//                     className="text-sm text-gray-600 hover:text-gray-800"
//                   >
//                     ← Change Email
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleResendOTP}
//                     disabled={loading}
//                     className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold"
//                   >
//                     🔄 Resend OTP
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;






// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
  
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           password: formData.password
//         })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSuccess('OTP sent! Check your email 📧');
//         setTimeout(() => setStep(2), 1500);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Cannot connect to server! Make sure backend is running.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleVerifyOTP = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:5000/api/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email, otp: otp })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('userName', formData.name);
//       localStorage.setItem('userEmail', formData.email);
//         setSuccess('Signup Successful! Redirecting...');
//         setTimeout(() => navigate('/login'), 2000);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Network error!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     setLoading(true);
//     setError('');
//     setSuccess('');
//     try {
//       const response = await fetch('http://localhost:5000/api/resend-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email })
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSuccess('New OTP sent! 📧');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Error resending OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
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
//       position: 'absolute',
//       width: '400px',
//       height: '400px',
//       background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
//       top: '-100px',
//       left: '-100px',
//       borderRadius: '50%',
//       pointerEvents: 'none',
//     },
//     orb2: {
//       position: 'absolute',
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
//       maxWidth: '440px',
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
//     emailHighlight: {
//       color: '#a78bfa',
//       fontWeight: '600',
//     },
//     label: {
//       display: 'block',
//       fontSize: '0.8rem',
//       fontWeight: '500',
//       color: 'rgba(255,255,255,0.6)',
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
//       transition: 'border-color 0.3s',
//       marginBottom: '20px',
//       boxSizing: 'border-box',
//     },
//     otpInput: {
//       width: '100%',
//       padding: '18px',
//       background: 'rgba(255,255,255,0.06)',
//       border: '2px solid rgba(139,92,246,0.3)',
//       borderRadius: '16px',
//       color: 'white',
//       fontSize: '2rem',
//       fontWeight: '700',
//       textAlign: 'center',
//       letterSpacing: '12px',
//       outline: 'none',
//       marginBottom: '8px',
//       boxSizing: 'border-box',
//     },
//     otpHint: {
//       fontSize: '0.78rem',
//       color: 'rgba(255,255,255,0.35)',
//       textAlign: 'center',
//       marginBottom: '24px',
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
//       transition: 'all 0.3s ease',
//       marginBottom: '24px',
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
//     successBox: {
//       background: 'rgba(34,197,94,0.1)',
//       border: '1px solid rgba(34,197,94,0.3)',
//       borderRadius: '10px',
//       padding: '12px 16px',
//       color: '#86efac',
//       fontSize: '0.875rem',
//       marginBottom: '20px',
//     },
//     divider: {
//       height: '1px',
//       background: 'rgba(255,255,255,0.08)',
//       margin: '24px 0',
//     },
//     bottomRow: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     linkBtn: {
//       background: 'none',
//       border: 'none',
//       color: 'rgba(255,255,255,0.45)',
//       fontSize: '0.85rem',
//       cursor: 'pointer',
//       padding: '0',
//     },
//     resendBtn: {
//       background: 'none',
//       border: 'none',
//       color: '#a78bfa',
//       fontSize: '0.85rem',
//       fontWeight: '600',
//       cursor: 'pointer',
//       padding: '0',
//     },
//     loginText: {
//       textAlign: 'center',
//       fontSize: '0.875rem',
//       color: 'rgba(255,255,255,0.4)',
//     },
//     loginLink: {
//       color: '#a78bfa',
//       fontWeight: '600',
//       textDecoration: 'none',
//     },
//     stepIndicator: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '8px',
//       marginBottom: '32px',
//     },
//     stepDot: (active) => ({
//       width: active ? '24px' : '8px',
//       height: '8px',
//       borderRadius: '100px',
//       background: active
//         ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
//         : 'rgba(255,255,255,0.15)',
//       transition: 'all 0.3s ease',
//     }),
//   };

//   return (
//     <div style={styles.page}>
//       {/* Background orbs */}
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       <div style={styles.card}>

//         {/* Brand */}
//         <div style={styles.brand}>
//           <div style={styles.brandName}>
//             AMBI <span style={styles.brandAccent}>MOOD</span>
//           </div>
//         </div>

//         {/* Step Indicator */}
//         <div style={styles.stepIndicator}>
//           <div style={styles.stepDot(step === 1)} />
//           <div style={styles.stepDot(step === 2)} />
//         </div>

//         {/* STEP 1: Signup Form */}
//         {step === 1 && (
//           <>
//             <h2 style={styles.title}>Create Account</h2>
//             <p style={styles.subtitle}>Join AMBI MOOD today ✨</p>

//             {error && <div style={styles.errorBox}>❌ {error}</div>}
//             {success && <div style={styles.successBox}>✅ {success}</div>}

//             <form onSubmit={handleSubmit}>
//               <label style={styles.label}>Full Name</label>
//               <input
//                 name="name"
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="Enter you name"
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

//               <label style={styles.label}>Password</label>
//               <input
//                 name="password"
//                 type="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="••••••••"
//                 autoComplete="off"
//               />

//               <label style={styles.label}>Confirm Password</label>
//               <input
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 style={{...styles.input, marginBottom: '28px'}}
//                 placeholder="••••••••"
//                 autoComplete="new-password"
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 style={loading ? styles.btnDisabled : styles.btnPrimary}
//               >
//                 {loading ? '⏳ Sending OTP...' : '📧 Send OTP & Sign Up'}
//               </button>
//             </form>

//             <div style={styles.loginText}>
//               Already have an account?{' '}
//               <Link to="/login" style={styles.loginLink}>
//                 Login here
//               </Link>
//             </div>
//           </>
//         )}

//         {/* STEP 2: OTP Verify */}
//         {step === 2 && (
//           <>
//             <h2 style={styles.title}>Verify Email</h2>
//             <p style={styles.subtitle}>
//               OTP sent to{' '}
//               <span style={styles.emailHighlight}>{formData.email}</span>
//             </p>

//             {error && <div style={styles.errorBox}>❌ {error}</div>}
//             {success && <div style={styles.successBox}>✅ {success}</div>}

//             <form onSubmit={handleVerifyOTP}>
//               <input
//                 type="text"
//                 required
//                 maxLength="6"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//                 style={styles.otpInput}
//                 placeholder="000000"
//               />
//               <p style={styles.otpHint}>
//                 📬 Check Gmail inbox + Spam folder
//               </p>

//               <button
//                 type="submit"
//                 disabled={loading || otp.length !== 6}
//                 style={
//                   loading || otp.length !== 6
//                     ? styles.btnDisabled
//                     : styles.btnPrimary
//                 }
//               >
//                 {loading ? '⏳ Verifying...' : '✅ Verify OTP'}
//               </button>
//             </form>

//             <div style={styles.divider} />

//             <div style={styles.bottomRow}>
//               <button
//                 onClick={() => {
//                   setStep(1);
//                   setError('');
//                   setSuccess('');
//                   setOtp('');
//                 }}
//                 style={styles.linkBtn}
//               >
//                 ← Change Email
//               </button>
//               <button
//                 onClick={handleResendOTP}
//                 disabled={loading}
//                 style={styles.resendBtn}
//               >
//                 🔄 Resend OTP
//               </button>
//             </div>
//           </>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Signup;







import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); setSuccess('');
    if (formData.password !== formData.confirmPassword) { setError('Passwords do not match!'); return; }
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password })
      });
      const data = await response.json();
      if (response.ok) { setSuccess('OTP sent! Check your email 📧'); setTimeout(() => setStep(2), 1500); }
      else setError(data.message);
    } catch (err) {
      setError('Cannot connect to server! Make sure backend is running.');
    } finally { setLoading(false); }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userName', formData.name);
        localStorage.setItem('userEmail', formData.email);
        setSuccess('Signup Successful! Redirecting...');
        setTimeout(() => navigate('/login'), 2000);
      } else setError(data.message);
    } catch (err) { setError('Network error!'); }
    finally { setLoading(false); }
  };

  const handleResendOTP = async () => {
    setLoading(true); setError(''); setSuccess('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      const data = await response.json();
      if (response.ok) setSuccess('New OTP sent! 📧');
      else setError(data.message);
    } catch (err) { setError('Error resending OTP'); }
    finally { setLoading(false); }
  };

  const styles = {
    page: { minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px', fontFamily: "'DM Sans', sans-serif", position: 'relative', overflow: 'hidden' },
    orb1: { position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
    orb2: { position: 'absolute', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
    card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '24px', padding: '48px 40px', width: '100%', maxWidth: '440px', backdropFilter: 'blur(20px)', position: 'relative', zIndex: 1, marginBottom: '80px' },
    brand: { textAlign: 'center', marginBottom: '32px' },
    brandName: { fontSize: '1.4rem', fontWeight: '800', color: 'white', letterSpacing: '3px', fontFamily: 'serif' },
    brandAccent: { color: '#a78bfa' },
    title: { fontSize: '1.9rem', fontWeight: '700', color: 'white', textAlign: 'center', marginBottom: '8px' },
    subtitle: { fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: '32px' },
    emailHighlight: { color: '#a78bfa', fontWeight: '600' },
    label: { display: 'block', fontSize: '0.8rem', fontWeight: '500', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', letterSpacing: '0.5px', textTransform: 'uppercase' },
    input: { width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', outline: 'none', marginBottom: '20px', boxSizing: 'border-box' },
    otpInput: { width: '100%', padding: '18px', background: 'rgba(255,255,255,0.06)', border: '2px solid rgba(139,92,246,0.3)', borderRadius: '16px', color: 'white', fontSize: '2rem', fontWeight: '700', textAlign: 'center', letterSpacing: '12px', outline: 'none', marginBottom: '8px', boxSizing: 'border-box' },
    otpHint: { fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '24px' },
    btnPrimary: { width: '100%', padding: '15px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '24px', letterSpacing: '0.3px' },
    btnDisabled: { width: '100%', padding: '15px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '12px', color: 'rgba(255,255,255,0.3)', fontSize: '1rem', fontWeight: '600', cursor: 'not-allowed', marginBottom: '24px' },
    errorBox: { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#fca5a5', fontSize: '0.875rem', marginBottom: '20px' },
    successBox: { background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#86efac', fontSize: '0.875rem', marginBottom: '20px' },
    divider: { height: '1px', background: 'rgba(255,255,255,0.08)', margin: '24px 0' },
    bottomRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    linkBtn: { background: 'none', border: 'none', color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', cursor: 'pointer', padding: '0' },
    resendBtn: { background: 'none', border: 'none', color: '#a78bfa', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', padding: '0' },
    loginText: { textAlign: 'center', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' },
    loginLink: { color: '#a78bfa', fontWeight: '600', textDecoration: 'none' },
    stepIndicator: { display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '32px' },
    stepDot: (active) => ({ width: active ? '24px' : '8px', height: '8px', borderRadius: '100px', background: active ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' : 'rgba(255,255,255,0.15)', transition: 'all 0.3s ease' }),
  };

  return (
    <div style={styles.page}>
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.card}>
        <div style={styles.brand}>
          <div style={styles.brandName}>AMBI <span style={styles.brandAccent}>MOOD</span></div>
        </div>

        <div style={styles.stepIndicator}>
          <div style={styles.stepDot(step === 1)} />
          <div style={styles.stepDot(step === 2)} />
        </div>

        {step === 1 && (
          <>
            <h2 style={styles.title}>Create Account</h2>
            <p style={styles.subtitle}>Join AMBI MOOD today ✨</p>
            {error && <div style={styles.errorBox}>❌ {error}</div>}
            {success && <div style={styles.successBox}>✅ {success}</div>}
            <form onSubmit={handleSubmit}>
              <label style={styles.label}>Full Name</label>
              <input name="name" type="text" required value={formData.name} onChange={handleChange} style={styles.input} placeholder="Enter your name" />
              <label style={styles.label}>Email Address</label>
              <input name="email" type="email" required value={formData.email} onChange={handleChange} style={styles.input} placeholder="you@example.com" autoComplete="off" />
              <label style={styles.label}>Password</label>
              <input name="password" type="password" required value={formData.password} onChange={handleChange} style={styles.input} placeholder="••••••••" autoComplete="off" />
              <label style={styles.label}>Confirm Password</label>
              <input name="confirmPassword" type="password" required value={formData.confirmPassword} onChange={handleChange} style={{ ...styles.input, marginBottom: '28px' }} placeholder="••••••••" autoComplete="new-password" />
              <button type="submit" disabled={loading} style={loading ? styles.btnDisabled : styles.btnPrimary}>
                {loading ? '⏳ Sending OTP...' : '📧 Send OTP & Sign Up'}
              </button>
            </form>
            <div style={styles.loginText}>
              Already have an account?{' '}
              <Link to="/login" style={styles.loginLink}>Login here</Link>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 style={styles.title}>Verify Email</h2>
            <p style={styles.subtitle}>OTP sent to <span style={styles.emailHighlight}>{formData.email}</span></p>
            {error && <div style={styles.errorBox}>❌ {error}</div>}
            {success && <div style={styles.successBox}>✅ {success}</div>}
            <form onSubmit={handleVerifyOTP}>
              <input type="text" required maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} style={styles.otpInput} placeholder="000000" />
              <p style={styles.otpHint}>📬 Check Gmail inbox + Spam folder</p>
              <button type="submit" disabled={loading || otp.length !== 6} style={loading || otp.length !== 6 ? styles.btnDisabled : styles.btnPrimary}>
                {loading ? '⏳ Verifying...' : '✅ Verify OTP'}
              </button>
            </form>
            <div style={styles.divider} />
            <div style={styles.bottomRow}>
              <button onClick={() => { setStep(1); setError(''); setSuccess(''); setOtp(''); }} style={styles.linkBtn}>← Change Email</button>
              <button onClick={handleResendOTP} disabled={loading} style={styles.resendBtn}>🔄 Resend OTP</button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Back Button */}
      <BackButton />
    </div>
  );
};

export default Signup;