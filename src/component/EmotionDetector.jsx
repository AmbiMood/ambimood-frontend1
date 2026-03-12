
// import React, { useRef, useState, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import * as faceapi from 'face-api.js';

// const EmotionDetector = () => {
//   const webcamRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const [moodText, setMoodText] = useState('');
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [showCamera, setShowCamera] = useState(false);
//   const [detectedEmotion, setDetectedEmotion] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [modelsLoaded, setModelsLoaded] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [showLanguageSelect, setShowLanguageSelect] = useState(false);
//   const [musicResult, setMusicResult] = useState('');

//   // ✅ Page load ஆகும்போதே models load பண்ணு
//   useEffect(() => {
//     const loadModels = async () => {
//       const MODEL_URL = '/models';
//       await Promise.all([
//         faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
//         faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
//       ]);
//       setModelsLoaded(true);
//       console.log('✅ Face models loaded!');
//     };
//     loadModels();
//   }, []);

//   // ✅ Camera photo — Emotion detect
//   const capturePhoto = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setShowCamera(false);
//     await analyzeEmotionFromBase64(imageSrc);
//   };

//   // ✅ Upload image — Emotion detect  
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       setUploadedImage(reader.result);
//       await analyzeEmotionFromBase64(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   // ✅ Core function — face-api.js use பண்ணி emotion detect
//   const analyzeEmotionFromBase64 = async (base64Image) => {
//     setLoading(true);
//     setDetectedEmotion('');
//     setSongs([]);

//     try {
//       // Image element create பண்ணு
//       const img = new Image();
//       img.src = base64Image;
//       await new Promise((resolve) => { img.onload = resolve; });

//       // face-api detect பண்ணும்
//       const detections = await faceapi
//         .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
//         .withFaceExpressions();

//       if (detections.length === 0) {
//         setDetectedEmotion('No face found! Try again 📸');
//         setLoading(false);
//         return;
//       }

//       // Expressions — highest score emotion எடு
//       const expressions = detections[0].expressions;
//       const emotion = Object.keys(expressions).reduce((a, b) =>
//         expressions[a] > expressions[b] ? a : b
//       );

//       setDetectedEmotion(emotion);
//       setShowLanguageSelect(true); // Language select காட்டு

//     } catch (error) {
//       console.error(error);
//       setDetectedEmotion('Error detecting emotion');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Language select பண்ணி songs fetch பண்ணு
//   const handleGetRecommendations = async (language) => {
//     setSelectedLanguage(language);
//     setShowLanguageSelect(false);
//     setLoading(true);
//     setSongs([]);

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/music/recommend?emotion=${detectedEmotion}&language=${language}`
//       );
//       const data = await response.json();
//       setSongs(data.songs || []);
//       setMusicResult(`${detectedEmotion} + ${language} songs 🎵`);
//     } catch (error) {
//       setMusicResult('Error fetching songs');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMoodSubmit = () => {
//     if (moodText.trim()) {
//       setDetectedEmotion(moodText.toLowerCase());
//       setShowLanguageSelect(true);
//     }
//   };

//   const quickMoods = [
//     { emoji: '😊', mood: 'happy' },
//     { emoji: '😢', mood: 'sad' },
//     { emoji: '⚡', mood: 'energetic' },
//     { emoji: '😌', mood: 'calm' },
//     { emoji: '❤️', mood: 'romantic' },
//     { emoji: '😠', mood: 'angry' },
//   ];

//   const languages = [
//     { code: 'tamil', label: '🎵 Tamil' },
//     { code: 'hindi', label: '🎵 Hindi' },
//     { code: 'english', label: '🎵 English' },
//     { code: 'telugu', label: '🎵 Telugu' },
//   ];

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       fontFamily: "'DM Sans', sans-serif",
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     orb1: { position: 'fixed', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
//     orb2: { position: 'fixed', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
//     content: { maxWidth: '800px', margin: '0 auto', padding: '80px 40px', position: 'relative', zIndex: 1 },
//     badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' },
//     dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
//     title: { fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'white', marginBottom: '12px', fontFamily: 'serif', letterSpacing: '-1px' },
//     titleAccent: { background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
//     subtitle: { color: 'rgba(255,255,255,0.45)', marginBottom: '48px', fontSize: '1rem', fontWeight: '300' },
//     card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '24px', padding: '36px', backdropFilter: 'blur(10px)', marginBottom: '24px' },
//     cardTitle: { fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '24px' },
//     btnCamera: { padding: '14px 36px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '100px', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", marginRight: '12px' },
//     btnUpload: { padding: '14px 36px', background: 'rgba(139,92,246,0.15)', border: '2px dashed rgba(139,92,246,0.5)', borderRadius: '100px', color: '#a78bfa', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
//     webcamStyle: { width: '100%', maxWidth: '480px', borderRadius: '16px', border: '2px solid rgba(139,92,246,0.4)', display: 'block', margin: '0 auto' },
//     cameraControls: { display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' },
//     btnCapture: { padding: '12px 28px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', borderRadius: '100px', color: '#86efac', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
//     btnCancel: { padding: '12px 28px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '100px', color: '#fca5a5', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
//     capturedResult: { textAlign: 'center', marginTop: '24px' },
//     capturedImg: { maxWidth: '280px', borderRadius: '16px', border: '2px solid rgba(139,92,246,0.3)', marginBottom: '16px' },
//     emotionBadge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', padding: '10px 24px', borderRadius: '100px', fontSize: '1rem', fontWeight: '600', marginBottom: '20px', textTransform: 'capitalize' },
//     orDivider: { display: 'flex', alignItems: 'center', gap: '16px', margin: '16px 0' },
//     orLine: { flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' },
//     orText: { color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '2px' },
//     moodInput: { width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', outline: 'none', marginBottom: '16px', boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif" },
//     btnSubmit: { width: '100%', padding: '14px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif" },
//     quickMoodsTitle: { fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' },
//     quickMoodsRow: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
//     moodChip: { padding: '8px 18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '100px', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
//     // Language select
//     languageCard: { background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', padding: '28px', textAlign: 'center', marginBottom: '24px' },
//     langTitle: { color: 'white', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' },
//     langGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' },
//     langBtn: { padding: '14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
//     // Song list
//     songCard: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '16px', padding: '16px 20px', marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
//     songInfo: { display: 'flex', alignItems: 'center', gap: '16px' },
//     songNumber: { color: '#a78bfa', fontWeight: '700', fontSize: '1rem', minWidth: '24px' },
//     songName: { color: 'white', fontWeight: '600', fontSize: '0.95rem' },
//     songArtist: { color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '2px' },
//     spotifyBtn: { padding: '8px 18px', background: '#1DB954', border: 'none', borderRadius: '100px', color: 'white', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', display: 'inline-block' },
//     loadingText: { color: '#a78bfa', textAlign: 'center', padding: '20px', fontSize: '1rem' },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       <div style={styles.content}>
//         <div style={styles.badge}><span style={styles.dot}></span>Mood Detection</div>

//         <h1 style={styles.title}>
//           Tell Us Your <span style={styles.titleAccent}>Mood</span>
//         </h1>
//         <p style={styles.subtitle}>
//           {modelsLoaded ? '✅ Ready To— Detect your emotion!' : '⏳ Loading AI models...'}
//         </p>

//         {/* Camera + Upload Card */}
//         <div style={styles.card}>
//           <div style={styles.cardTitle}>📸 Detect Emotion from Face</div>

//           {!showCamera && !capturedImage && !uploadedImage && (
//             <div style={{ textAlign: 'center' }}>
//               <button style={styles.btnCamera} onClick={() => setShowCamera(true)}>
//                 📷 Open Camera
//               </button>
//               <button style={styles.btnUpload} onClick={() => fileInputRef.current.click()}>
//                 🖼️ Upload Image
//               </button>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageUpload}
//               />
//             </div>
//           )}

//           {showCamera && (
//             <div>
//               <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" style={styles.webcamStyle} />
//               <div style={styles.cameraControls}>
//                 <button style={styles.btnCapture} onClick={capturePhoto}>📸 Capture</button>
//                 <button style={styles.btnCancel} onClick={() => setShowCamera(false)}>✕ Cancel</button>
//               </div>
//             </div>
//           )}

//           {(capturedImage || uploadedImage) && (
//             <div style={styles.capturedResult}>
//               <img src={capturedImage || uploadedImage} alt="Face" style={styles.capturedImg} />
//               {loading && <div style={styles.loadingText}>🔍 Analyzing your emotion...</div>}
//               {detectedEmotion && !loading && (
//                 <div style={styles.emotionBadge}>🎭 {detectedEmotion}</div>
//               )}
//               <button
//                 style={{ ...styles.btnCancel, marginTop: '12px', display: 'inline-block' }}
//                 onClick={() => { setCapturedImage(null); setUploadedImage(null); setDetectedEmotion(''); setSongs([]); setShowLanguageSelect(false); }}
//               >
//                 ↺ Try Again
//               </button>
//             </div>
//           )}
//         </div>

//         {/* OR Divider */}
//         <div style={styles.orDivider}>
//           <div style={styles.orLine} /><span style={styles.orText}>OR</span><div style={styles.orLine} />
//         </div>

//         {/* Type Mood Card */}
//         <div style={styles.card}>
//           <div style={styles.cardTitle}>✍️ Type Your Mood</div>
//           <input type="text" style={styles.moodInput} placeholder="happy, sad, energetic..." value={moodText} onChange={(e) => setMoodText(e.target.value)} autoComplete="off" />
//           <button style={styles.btnSubmit} onClick={handleMoodSubmit}>🎵 Find Music</button>
//           <div style={styles.quickMoodsTitle}>Quick Select</div>
//           <div style={styles.quickMoodsRow}>
//             {quickMoods.map((item) => (
//               <button key={item.mood} style={styles.moodChip} onClick={() => { setMoodText(item.mood); setDetectedEmotion(item.mood); setShowLanguageSelect(true); }}>
//                 {item.emoji} {item.mood}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Language Selection */}
//         {showLanguageSelect && detectedEmotion && (
//           <div style={styles.languageCard}>
//             <div style={styles.langTitle}>
//               🎭 Detected: <span style={{ color: '#a78bfa', textTransform: 'capitalize' }}>{detectedEmotion}</span>
//               <br />
//               <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: '400' }}>
//                 Choose your language 🌐
//               </span>
//             </div>
//             <div style={styles.langGrid}>
//               {languages.map((lang) => (
//                 <button key={lang.code} style={styles.langBtn} onClick={() => handleGetRecommendations(lang.code)}>
//                   {lang.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Loading Songs */}
//         {loading && songs.length === 0 && selectedLanguage && (
//           <div style={styles.loadingText}>⏳ Finding perfect songs for you...</div>
//         )}


//         {/* Songs List */}
//         {songs.length > 0 && (
//           <div style={styles.card}>
//             <div style={styles.cardTitle}>
//               🎵 {detectedEmotion} — {selectedLanguage} Songs
//             </div>
//             {songs.map((song, index) => (
//               <div key={index} style={styles.songCard}>

//                 {/* Album Art */}
//                 <img
//                   src={song.artwork}
//                   alt={song.name}
//                   style={{
//                     width: '52px',
//                     height: '52px',
//                     borderRadius: '10px',
//                     objectFit: 'cover',
//                     flexShrink: 0
//                   }}
//                 />

//                 {/* Song Info */}
//                 <div style={{ flex: 1, marginLeft: '14px' }}>
//                   <div style={styles.songName}>{song.name}</div>
//                   <div style={styles.songArtist}>{song.artist} • {song.album}</div>

//                   {/* 30s Preview Player */}
//                   {song.previewUrl && (
//                     <audio
//                       controls
//                       src={song.previewUrl}
//                       style={{
//                         width: '100%',
//                         height: '28px',
//                         marginTop: '8px',
//                         accentColor: '#8b5cf6'
//                       }}
//                     />
//                   )}
//                 </div>

//                 {/* iTunes Button */}

//                 href={song.itunesUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{
//                   padding: '8px 14px',
//                   background: 'linear-gradient(135deg, #fc3c44, #ff6b6b)',
//                   border: 'none',
//                   borderRadius: '100px',
//                   color: 'white',
//                   fontSize: '0.78rem',
//                   fontWeight: '600',
//                   cursor: 'pointer',
//                   textDecoration: 'none',
//                   flexShrink: 0,
//                   marginLeft: '10px'
//                 }}
//        <a>
//                 🎵 iTunes
//               </a>

//       </div>
//         ))}
//       </div>
// )}
// export default EmotionDetector;






// import React, { useRef, useState, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import * as faceapi from 'face-api.js';

// const EmotionDetector = () => {
//   const webcamRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const [moodText, setMoodText] = useState('');
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [showCamera, setShowCamera] = useState(false);
//   const [detectedEmotion, setDetectedEmotion] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [modelsLoaded, setModelsLoaded] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [showLanguageSelect, setShowLanguageSelect] = useState(false);

//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         const MODEL_URL = window.location.origin + '/models';
//         console.log('Loading from:', MODEL_URL);
//         await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
//         console.log('✅ TinyFaceDetector loaded');
//         await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
//         console.log('✅ FaceExpression loaded');
//         setModelsLoaded(true);
//       } catch (error) {
//         console.error('❌ Model load error:', error);
//       }
//     };
//     loadModels();
//   }, []);

//   const capturePhoto = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setShowCamera(false);
//     await analyzeEmotionFromBase64(imageSrc);
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       setUploadedImage(reader.result);
//       await analyzeEmotionFromBase64(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const analyzeEmotionFromBase64 = async (base64Image) => {
//     setLoading(true);
//     setDetectedEmotion('');
//     setSongs([]);
//     setShowLanguageSelect(false);

//     try {
//       const img = document.createElement('img');
//       img.src = base64Image;
//       img.style.display = 'none';
//       document.body.appendChild(img);

//       await new Promise((resolve, reject) => {
//         img.onload = resolve;
//         img.onerror = reject;
//       });

//       const detections = await faceapi
//         .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
//         .withFaceExpressions();

//       document.body.removeChild(img);

//       if (!detections || detections.length === 0) {
//         setDetectedEmotion('No face found! Try again 📸');
//         setLoading(false);
//         return;
//       }

//       const expressions = detections[0].expressions;
//       const emotion = Object.keys(expressions).reduce((a, b) =>
//         expressions[a] > expressions[b] ? a : b
//       );

//       console.log('Detected:', emotion, expressions);
//       setDetectedEmotion(emotion);
//       setShowLanguageSelect(true);

//     } catch (error) {
//       console.error('Detection error:', error);
//       setDetectedEmotion('Detection failed — try another photo');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGetRecommendations = async (language) => {
//   setSelectedLanguage(language);
//   setShowLanguageSelect(false);
//   setLoading(true);
//   setSongs([]);

//   // ✅ localStorage-லிருந்து email எடு
//   const userEmail = localStorage.getItem('userEmail') || '';

//   try {
//     const url = `http://localhost:5000/api/music/recommend?emotion=${detectedEmotion}&language=${language}&userEmail=${userEmail}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setSongs(data.songs || []);
//   } catch (error) {
//     console.error('Error:', error);
//   } finally {
//     setLoading(false);
//   }
// };


//   const handleMoodSubmit = () => {
//     if (moodText.trim()) {
//       setDetectedEmotion(moodText.toLowerCase());
//       setSongs([]);
//       setShowLanguageSelect(true);
//     }
//   };

//   const quickMoods = [
//     { emoji: '😊', mood: 'happy' },
//     { emoji: '😢', mood: 'sad' },
//     { emoji: '⚡', mood: 'energetic' },
//     { emoji: '😌', mood: 'calm' },
//     { emoji: '❤️', mood: 'romantic' },
//     { emoji: '😠', mood: 'angry' },
//   ];

//   const languages = [
//     { code: 'tamil', label: '🎵 Tamil' },
//     { code: 'hindi', label: '🎵 Hindi' },
//     { code: 'english', label: '🎵 English' },
//     { code: 'telugu', label: '🎵 Telugu' },
//   ];

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       fontFamily: "'DM Sans', sans-serif",
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     orb1: {
//       position: 'fixed', width: '400px', height: '400px',
//       background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
//       top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none',
//     },
//     orb2: {
//       position: 'fixed', width: '350px', height: '350px',
//       background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
//       bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none',
//     },
//     content: {
//       maxWidth: '800px', margin: '0 auto', padding: '80px 40px',
//       position: 'relative', zIndex: 1,
//     },
//     badge: {
//       display: 'inline-flex', alignItems: 'center', gap: '8px',
//       background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)',
//       color: '#a78bfa', padding: '8px 20px', borderRadius: '100px',
//       fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px',
//       textTransform: 'uppercase', marginBottom: '24px',
//     },
//     dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
//     title: {
//       fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'white',
//       marginBottom: '12px', fontFamily: 'serif', letterSpacing: '-1px',
//     },
//     titleAccent: {
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//     },
//     subtitle: {
//       color: 'rgba(255,255,255,0.45)', marginBottom: '48px', fontSize: '1rem', fontWeight: '300',
//     },
//     card: {
//       background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '24px', padding: '36px', backdropFilter: 'blur(10px)', marginBottom: '24px',
//     },
//     cardTitle: { fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '24px' },
//     btnCamera: {
//       padding: '14px 36px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none', borderRadius: '100px', color: 'white', fontSize: '1rem',
//       fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", marginRight: '12px',
//     },
//     btnUpload: {
//       padding: '14px 36px', background: 'rgba(139,92,246,0.15)',
//       border: '2px dashed rgba(139,92,246,0.5)', borderRadius: '100px',
//       color: '#a78bfa', fontSize: '1rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     webcamStyle: {
//       width: '100%', maxWidth: '480px', borderRadius: '16px',
//       border: '2px solid rgba(139,92,246,0.4)', display: 'block', margin: '0 auto',
//     },
//     cameraControls: { display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' },
//     btnCapture: {
//       padding: '12px 28px', background: 'rgba(34,197,94,0.15)',
//       border: '1px solid rgba(34,197,94,0.4)', borderRadius: '100px',
//       color: '#86efac', fontSize: '0.9rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     btnCancel: {
//       padding: '12px 28px', background: 'rgba(239,68,68,0.1)',
//       border: '1px solid rgba(239,68,68,0.3)', borderRadius: '100px',
//       color: '#fca5a5', fontSize: '0.9rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     capturedResult: { textAlign: 'center', marginTop: '24px' },
//     capturedImg: {
//       maxWidth: '280px', borderRadius: '16px',
//       border: '2px solid rgba(139,92,246,0.3)', marginBottom: '16px',
//     },
//     emotionBadge: {
//       display: 'inline-flex', alignItems: 'center', gap: '8px',
//       background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
//       color: '#a78bfa', padding: '10px 24px', borderRadius: '100px',
//       fontSize: '1rem', fontWeight: '600', marginBottom: '20px', textTransform: 'capitalize',
//     },
//     orDivider: { display: 'flex', alignItems: 'center', gap: '16px', margin: '16px 0' },
//     orLine: { flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' },
//     orText: { color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '2px' },
//     moodInput: {
//       width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', color: 'white',
//       fontSize: '0.95rem', outline: 'none', marginBottom: '16px',
//       boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif",
//     },
//     btnSubmit: {
//       width: '100%', padding: '14px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem',
//       fontWeight: '600', cursor: 'pointer', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif",
//     },
//     quickMoodsTitle: {
//       fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)',
//       textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px',
//     },
//     quickMoodsRow: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
//     moodChip: {
//       padding: '8px 18px', background: 'rgba(255,255,255,0.05)',
//       border: '1px solid rgba(139,92,246,0.2)', borderRadius: '100px',
//       color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     languageCard: {
//       background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)',
//       borderRadius: '20px', padding: '28px', textAlign: 'center', marginBottom: '24px',
//     },
//     langTitle: { color: 'white', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' },
//     langGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' },
//     langBtn: {
//       padding: '14px', background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px',
//       color: 'white', fontSize: '0.95rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     loadingText: { color: '#a78bfa', textAlign: 'center', padding: '20px', fontSize: '1rem' },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       <div style={styles.content}>
//         <div style={styles.badge}>
//           <span style={styles.dot}></span>Mood Detection
//         </div>

//         <h1 style={styles.title}>
//           Tell Us Your <span style={styles.titleAccent}>Mood</span>
//         </h1>
//         <p style={styles.subtitle}>
//           {modelsLoaded ? '✅ Ready To— Detect your emotion!' : '⏳ Loading AI models...'}
//         </p>

//         {/* Camera + Upload Card */}
//         <div style={styles.card}>
//           <div style={styles.cardTitle}>📸 Detect Emotion from Face</div>

//           {!showCamera && !capturedImage && !uploadedImage && (
//             <div style={{ textAlign: 'center' }}>
//               <button style={styles.btnCamera} onClick={() => setShowCamera(true)}>
//                 📷 Open Camera
//               </button>
//               <button style={styles.btnUpload} onClick={() => fileInputRef.current.click()}>
//                 🖼️ Upload Image
//               </button>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageUpload}
//               />
//             </div>
//           )}

//           {showCamera && (
//             <div>
//               <Webcam
//                 ref={webcamRef}
//                 audio={false}
//                 screenshotFormat="image/jpeg"
//                 style={styles.webcamStyle}
//               />
//               <div style={styles.cameraControls}>
//                 <button style={styles.btnCapture} onClick={capturePhoto}>📸 Capture</button>
//                 <button style={styles.btnCancel} onClick={() => setShowCamera(false)}>✕ Cancel</button>
//               </div>
//             </div>
//           )}

//           {(capturedImage || uploadedImage) && (
//             <div style={styles.capturedResult}>
//               <img
//                 src={capturedImage || uploadedImage}
//                 alt="Face"
//                 style={styles.capturedImg}
//               />
//               {loading && (
//                 <div style={styles.loadingText}>🔍 Analyzing your emotion...</div>
//               )}
//               {detectedEmotion && !loading && (
//                 <div style={styles.emotionBadge}>🎭 {detectedEmotion}</div>
//               )}
//               <button
//                 style={{ ...styles.btnCancel, marginTop: '12px', display: 'inline-block' }}
//                 onClick={() => {
//                   setCapturedImage(null);
//                   setUploadedImage(null);
//                   setDetectedEmotion('');
//                   setSongs([]);
//                   setShowLanguageSelect(false);
//                   setSelectedLanguage('');
//                 }}
//               >
//                 ↺ Try Again
//               </button>
//             </div>
//           )}
//         </div>

//         {/* OR Divider */}
//         <div style={styles.orDivider}>
//           <div style={styles.orLine} />
//           <span style={styles.orText}>OR</span>
//           <div style={styles.orLine} />
//         </div>

//         {/* Type Mood Card */}
//         <div style={styles.card}>
//           <div style={styles.cardTitle}>✍️ Type Your Mood</div>
//           <input
//             type="text"
//             style={styles.moodInput}
//             placeholder="happy, sad, energetic..."
//             value={moodText}
//             onChange={(e) => setMoodText(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleMoodSubmit()}
//             autoComplete="off"
//           />
//           <button style={styles.btnSubmit} onClick={handleMoodSubmit}>
//             🎵 Find Music
//           </button>
//           <div style={styles.quickMoodsTitle}>Quick Select</div>
//           <div style={styles.quickMoodsRow}>
//             {quickMoods.map((item) => (
//               <button
//                 key={item.mood}
//                 style={styles.moodChip}
//                 onClick={() => {
//                   setMoodText(item.mood);
//                   setDetectedEmotion(item.mood);
//                   setSongs([]);
//                   setShowLanguageSelect(true);
//                 }}
//               >
//                 {item.emoji} {item.mood}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Language Selection */}
//         {showLanguageSelect && detectedEmotion && (
//           <div style={styles.languageCard}>
//             <div style={styles.langTitle}>
//               🎭 Detected:{' '}
//               <span style={{ color: '#a78bfa', textTransform: 'capitalize' }}>
//                 {detectedEmotion}
//               </span>
//               <br />
//               <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: '400' }}>
//                 Choose your language 🌐
//               </span>
//             </div>
//             <div style={styles.langGrid}>
//               {languages.map((lang) => (
//                 <button
//                   key={lang.code}
//                   style={styles.langBtn}
//                   onClick={() => handleGetRecommendations(lang.code)}
//                 >
//                   {lang.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Loading Songs */}
//         {loading && songs.length === 0 && selectedLanguage && (
//           <div style={styles.loadingText}>⏳ Finding perfect songs for you...</div>
//         )}

//         {/* Songs List */}

//         {songs.length > 0 && (
//   <div style={styles.card}>
//     <div style={styles.cardTitle}>
//       🎵 {detectedEmotion} — {selectedLanguage} Songs ({songs.length})
//     </div>

//     {songs.map((song, index) => (
//       <div key={index} style={{
//         background: 'rgba(255,255,255,0.04)',
//         border: '1px solid rgba(139,92,246,0.15)',
//         borderRadius: '16px',
//         padding: '16px',
//         marginBottom: '12px',
//       }}>
//         {/* Top Row */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//           {song.artwork && (
//             <img src={song.artwork} alt={song.name}
//               style={{ width: '52px', height: '52px', borderRadius: '10px',
//                 objectFit: 'cover', marginRight: '14px' }}
//             />
//           )}
//           <div style={{ flex: 1 }}>
//             <div style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem' }}>
//               {index + 1}. {song.name}
//             </div>
//             <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '2px' }}>
//               {song.artist} • {song.album}
//             </div>
//           </div>

//           {/* ✅ Spotify Button — Full Song திறக்கும் */}
//           {song.spotifyUrl && (
//             <a href={song.spotifyUrl} target="_blank" rel="noreferrer"
//               style={{
//                 padding: '8px 16px',
//                 background: '#1DB954',
//                 borderRadius: '100px',
//                 color: 'white',
//                 fontSize: '0.8rem',
//                 fontWeight: '700',
//                 textDecoration: 'none',
//                 marginLeft: '10px',
//                 flexShrink: 0
//               }}>
//               ▶ Spotify
//             </a>
//           )}
//         </div>

//         {/* 30s Preview Player */}
//         {song.previewUrl ? (
//           <audio controls src={song.previewUrl}
//             style={{ width: '100%', marginTop: '4px' }} />
//         ) : (
//           <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
//             ▶ Spotify-ல Full Song கேக்கலாம் →{' '}
//             <a href={song.spotifyUrl} target="_blank" rel="noreferrer"
//               style={{ color: '#1DB954' }}>Open Spotify</a>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// })
// export default EmotionDetector;


// import React, { useRef, useState, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import * as faceapi from 'face-api.js';

// const EmotionDetector = () => {
//   const webcamRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const [moodText, setMoodText] = useState('');
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);
//   const [showCamera, setShowCamera] = useState(false);
//   const [detectedEmotion, setDetectedEmotion] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [modelsLoaded, setModelsLoaded] = useState(false);
//   const [songs, setSongs] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [showLanguageSelect, setShowLanguageSelect] = useState(false);
//   const [heartRate, setHeartRate] = useState(null);

//   useEffect(() => {
//     const loadModels = async () => {
//       try {
//         const MODEL_URL = window.location.origin + '/models';
//         console.log('Loading from:', MODEL_URL);
//         await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
//         console.log('✅ TinyFaceDetector loaded');
//         await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
//         console.log('✅ FaceExpression loaded');
//         setModelsLoaded(true);
//       } catch (error) {
//         console.error('❌ Model load error:', error);
//       }
//     };
//     loadModels();
//   }, []);

//   const capturePhoto = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setShowCamera(false);
//     await analyzeEmotionFromBase64(imageSrc);
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       setUploadedImage(reader.result);
//       await analyzeEmotionFromBase64(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const analyzeEmotionFromBase64 = async (base64Image) => {
//     setLoading(true);
//     setDetectedEmotion('');
//     setSongs([]);
//     setShowLanguageSelect(false);

//     try {
//       const img = document.createElement('img');
//       img.src = base64Image;
//       img.style.display = 'none';
//       document.body.appendChild(img);

//       await new Promise((resolve, reject) => {
//         img.onload = resolve;
//         img.onerror = reject;
//       });

//       const detections = await faceapi
//         .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
//         .withFaceExpressions();

//       document.body.removeChild(img);

//       if (!detections || detections.length === 0) {
//         setDetectedEmotion('No face found! Try again 📸');
//         setLoading(false);
//         return;
//       }

//       const expressions = detections[0].expressions;
//       const emotion = Object.keys(expressions).reduce((a, b) =>
//         expressions[a] > expressions[b] ? a : b
//       );

//       console.log('Detected:', emotion, expressions);
//       setDetectedEmotion(emotion);
//       setHeartRate(calculateHeartRate(emotion));
//       setShowLanguageSelect(true);

//     } catch (error) {
//       console.error('Detection error:', error);
//       setDetectedEmotion('Detection failed — try another photo');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGetRecommendations = async (language) => {
//     setSelectedLanguage(language);
//     setShowLanguageSelect(false);
//     setLoading(true);
//     setSongs([]);

//     const userEmail = localStorage.getItem('userEmail') || '';

//     try {
//       const url = `http://localhost:5000/api/music/recommend?emotion=${detectedEmotion}&language=${language}&userEmail=${userEmail}`;
//       const response = await fetch(url);
//       const data = await response.json();
//       setSongs(data.songs || []);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMoodSubmit = () => {
//     if (moodText.trim()) {
//       setDetectedEmotion(moodText.toLowerCase());
//       setSongs([]);
//       setShowLanguageSelect(true);
//     }
//   };


//   const calculateHeartRate = (emotion) => {
//     const bpmMap = {
//       happy: 85, angry: 105, sad: 65,
//       surprised: 95, fearful: 100, disgusted: 75,
//       neutral: 72, calm: 65, energetic: 110, romantic: 80
//     };
//     const base = bpmMap[emotion] || 72;
//     return base + Math.floor(Math.random() * 5);
//   };
  
//   const moodColors = {
//     happy: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
//     sad: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #1f3a5f 100%)',
//     angry: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #3d1a1a 100%)',
    
//     neutral: 'linear-gradient(135deg, #6e6eee 0%, #720cee 50%, #0d0d1a 100%)',
//     fearful: 'linear-gradient(135deg, #ff6a45 0%, #1a1030 50%, #2e3135 100%)',
//     disgusted: 'linear-gradient(135deg, #283628 0%, #0d1f0d 50%, #20312c 100%)',
//     surprised: 'linear-gradient(135deg, #1a1500 0%, #2d2000 50%, #1a0d00 100%)',
//   };
 

//   const languages = [
//     { code: 'tamil', label: '🎵 Tamil' },
//     { code: 'hindi', label: '🎵 Hindi' },
//     { code: 'english', label: '🎵 English' },
//     { code: 'telugu', label: '🎵 Telugu' },
//   ];

//   const styles = {
//     page: {
//       minHeight: '100vh',
//       //background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       background: moodColors[detectedEmotion] || 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
//       transition: 'background 1s ease',
//       fontFamily: "'DM Sans', sans-serif",
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     orb1: {
//       position: 'fixed', width: '400px', height: '400px',
//       background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
//       top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none',
//     },
//     orb2: {
//       position: 'fixed', width: '350px', height: '350px',
//       background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
//       bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none',
//     },
//     content: {
//       maxWidth: '800px', margin: '0 auto', padding: '80px 40px',
//       position: 'relative', zIndex: 1,
//     },
//     badge: {
//       display: 'inline-flex', alignItems: 'center', gap: '8px',
//       background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)',
//       color: '#a78bfa', padding: '8px 20px', borderRadius: '100px',
//       fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px',
//       textTransform: 'uppercase', marginBottom: '24px',
//     },
//     dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
//     title: {
//       fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'white',
//       marginBottom: '12px', fontFamily: 'serif', letterSpacing: '-1px',
//     },
//     titleAccent: {
//       background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
//     },
//     subtitle: {
//       color: 'rgba(255,255,255,0.45)', marginBottom: '48px', fontSize: '1rem', fontWeight: '300',
//     },
//     card: {
//       background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)',
//       borderRadius: '24px', padding: '36px', backdropFilter: 'blur(10px)', marginBottom: '24px',
//     },
//     cardTitle: { fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '24px' },
//     btnCamera: {
//       padding: '14px 36px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none', borderRadius: '100px', color: 'white', fontSize: '1rem',
//       fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", marginRight: '12px',
//     },
//     btnUpload: {
//       padding: '14px 36px', background: 'rgba(139,92,246,0.15)',
//       border: '2px dashed rgba(139,92,246,0.5)', borderRadius: '100px',
//       color: '#a78bfa', fontSize: '1rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     webcamStyle: {
//       width: '100%', maxWidth: '480px', borderRadius: '16px',
//       border: '2px solid rgba(139,92,246,0.4)', display: 'block', margin: '0 auto',
//     },
//     cameraControls: { display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' },
//     btnCapture: {
//       padding: '12px 28px', background: 'rgba(34,197,94,0.15)',
//       border: '1px solid rgba(34,197,94,0.4)', borderRadius: '100px',
//       color: '#86efac', fontSize: '0.9rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     btnCancel: {
//       padding: '12px 28px', background: 'rgba(239,68,68,0.1)',
//       border: '1px solid rgba(239,68,68,0.3)', borderRadius: '100px',
//       color: '#fca5a5', fontSize: '0.9rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     capturedResult: { textAlign: 'center', marginTop: '24px' },
//     capturedImg: {
//       maxWidth: '280px', borderRadius: '16px',
//       border: '2px solid rgba(139,92,246,0.3)', marginBottom: '16px',
//     },
//     emotionBadge: {
//       display: 'inline-flex', alignItems: 'center', gap: '8px',
//       background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
//       color: '#a78bfa', padding: '10px 24px', borderRadius: '100px',
//       fontSize: '1rem', fontWeight: '600', marginBottom: '20px', textTransform: 'capitalize',
//     },
//     orDivider: { display: 'flex', alignItems: 'center', gap: '16px', margin: '16px 0' },
//     orLine: { flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' },
//     orText: { color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '2px' },
//     moodInput: {
//       width: '100%', padding: '14px 18px', background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', color: 'white',
//       fontSize: '0.95rem', outline: 'none', marginBottom: '16px',
//       boxSizing: 'border-box', fontFamily: "'DM Sans', sans-serif",
//     },
//     btnSubmit: {
//       width: '100%', padding: '14px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
//       border: 'none', borderRadius: '12px', color: 'white', fontSize: '1rem',
//       fontWeight: '600', cursor: 'pointer', marginBottom: '24px', fontFamily: "'DM Sans', sans-serif",
//     },
//     quickMoodsTitle: {
//       fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)',
//       textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px',
//     },
//     quickMoodsRow: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
//     moodChip: {
//       padding: '8px 18px', background: 'rgba(255,255,255,0.05)',
//       border: '1px solid rgba(139,92,246,0.2)', borderRadius: '100px',
//       color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     languageCard: {
//       background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)',
//       borderRadius: '20px', padding: '28px', textAlign: 'center', marginBottom: '24px',
//     },
//     langTitle: { color: 'white', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' },
//     langGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' },
//     langBtn: {
//       padding: '14px', background: 'rgba(255,255,255,0.06)',
//       border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px',
//       color: 'white', fontSize: '0.95rem', fontWeight: '600',
//       cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//     },
//     loadingText: { color: '#a78bfa', textAlign: 'center', padding: '20px', fontSize: '1rem' },
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.orb1} />
//       <div style={styles.orb2} />

//       <div style={styles.content}>
//         <div style={styles.badge}>
//           <span style={styles.dot}></span>Mood Detection
//         </div>

//         <h1 style={styles.title}>
//           Tell Us Your <span style={styles.titleAccent}>Mood</span>
//         </h1>
//         <p style={styles.subtitle}>
//           {modelsLoaded ? '✅ Ready To— Detect your emotion!' : '⏳ Loading AI models...'}
//            <p style={{ ...styles.subtitle, fontSize: '0.85rem', marginTop: '10px' }}>
//           <span style={{ color: '#ff4444', fontSize: '1.5rem' }}>♪</span> Spotify app is required to play mood-based music recommendations !!
//         </p>
//         </p>

//         {/* Camera + Upload Card */}
//         <div style={styles.card}>
//           <div style={styles.cardTitle}>📸 Detect Emotion from Face</div>

//           {!showCamera && !capturedImage && !uploadedImage && (
//             <div style={{ textAlign: 'center' }}>
//               <button style={styles.btnCamera} onClick={() => setShowCamera(true)}>
//                 📷 Open Camera
//               </button>
//               <button style={styles.btnUpload} onClick={() => fileInputRef.current.click()}>
//                 🖼️ Upload Image
//               </button>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 accept="image/*"
//                 style={{ display: 'none' }}
//                 onChange={handleImageUpload}
//               />
//             </div>
//           )}

//           {showCamera && (
//             <div>
//               <Webcam
//                 ref={webcamRef}
//                 audio={false}
//                 screenshotFormat="image/jpeg"
//                 style={styles.webcamStyle}
//               />
//               <div style={styles.cameraControls}>
//                 <button style={styles.btnCapture} onClick={capturePhoto}>📸 Capture</button>
//                 <button style={styles.btnCancel} onClick={() => setShowCamera(false)}>✕ Cancel</button>
//               </div>
//             </div>
//           )}

//           {(capturedImage || uploadedImage) && (
//             <div style={styles.capturedResult}>
//               <img
//                 src={capturedImage || uploadedImage}
//                 alt="Face"
//                 style={styles.capturedImg}
//               />
//               {loading && (
//                 <div style={styles.loadingText}>🔍 Analyzing your emotion...</div>
//               )}
//               {detectedEmotion && !loading && (
//                 <div style={styles.emotionBadge}>🎭 {detectedEmotion}</div>
//               )}
//               {heartRate && !loading && (
//                 <div style={{
//                   display: 'inline-flex', alignItems: 'center', gap: '8px',
//                   background: 'rgba(239,68,68,0.15)',
//                   border: '1px solid rgba(239,68,68,0.4)',
//                   color: '#fca5a5', padding: '10px 24px',
//                   borderRadius: '100px', fontSize: '1rem',
//                   fontWeight: '600', marginLeft: '12px'
//                 }}>
//                   ❤️ {heartRate} BPM
//                 </div>
//               )}
//               <button
//                 style={{ ...styles.btnCancel, marginTop: '12px', display: 'inline-block' }}
//                 onClick={() => {
//                   setCapturedImage(null);
//                   setUploadedImage(null);
//                   setDetectedEmotion('');
//                   setSongs([]);
//                   setShowLanguageSelect(false);
//                   setSelectedLanguage('');
//                 }}
//               >
//                 ↺ Try Again
//               </button>
//             </div>
//           )}
//         </div>

//         {/* OR Divider */}
//         <div style={styles.orDivider}>
//           <div style={styles.orLine} />
//           <span style={styles.orText}>OR</span>
//           <div style={styles.orLine} />
//         </div>

        

//         {/* Language Selection */}
//         {showLanguageSelect && detectedEmotion && (
//           <div style={styles.languageCard}>
//             <div style={styles.langTitle}>
//               🎭 Detected:{' '}
//               <span style={{ color: '#a78bfa', textTransform: 'capitalize' }}>
//                 {detectedEmotion}
//               </span>
//               <br />
//               <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: '400' }}>
//                 Choose your language 🌐
//               </span>
//             </div>
//             <div style={styles.langGrid}>
//               {languages.map((lang) => (
//                 <button
//                   key={lang.code}
//                   style={styles.langBtn}
//                   onClick={() => handleGetRecommendations(lang.code)}
//                 >
//                   {lang.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Loading Songs */}
//         {loading && songs.length === 0 && selectedLanguage && (
//           <div style={styles.loadingText}>⏳ Finding perfect songs for you...</div>
//         )}

//         {/* Songs List */}
//         {songs.length > 0 && (
//           <div style={styles.card}>
//             <div style={styles.cardTitle}>
//               🎵 {detectedEmotion} — {selectedLanguage} Songs ({songs.length})
//             </div>

//             {songs.map((song, index) => (
//               <div key={index} style={{
//                 background: 'rgba(255,255,255,0.04)',
//                 border: '1px solid rgba(139,92,246,0.15)',
//                 borderRadius: '16px',
//                 padding: '16px',
//                 marginBottom: '12px',
//               }}>
//                 {/* Top Row */}
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                   {song.artwork && (
//                     <img
//                       src={song.artwork}
//                       alt={song.name}
//                       style={{
//                         width: '52px',
//                         height: '52px',
//                         borderRadius: '10px',
//                         objectFit: 'cover',
//                         marginRight: '14px'
//                       }}
//                     />
//                   )}
//                   <div style={{ flex: 1 }}>
//                     <div style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem' }}>
//                       {index + 1}. {song.name}
//                     </div>
//                     <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '2px' }}>
//                       {song.artist} • {song.album}
//                     </div>
//                   </div>

//                   {/* Spotify Button */}
//                   <button
//                     onClick={async () => {
//                       const email = localStorage.getItem('userEmail');
//                       if (!email) { alert(' Please Login!!'); return; }
//                       const res = await fetch('http://localhost:5000/api/save-favorite', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify({
//                           email,
//                           song: {
//                             name: song.name,
//                             artist: song.artist,
//                             image: song.artwork,
//                             url: song.spotifyUrl
//                           }
//                         })
//                       });
                    
//                     }}
//                   ></button>
//                   {song.spotifyUrl && (
//                     <a
//                       href={song.spotifyUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       style={{
//                         padding: '8px 16px',
//                         background: '#1DB954',
//                         borderRadius: '100px',
//                         color: 'white',
//                         fontSize: '0.8rem',
//                         fontWeight: '700',
//                         textDecoration: 'none',
//                         marginLeft: '10px',
//                         flexShrink: 0
//                       }}
//                     >
//                       ▶ Spotify
//                     </a>
//                   )}
//                 </div>

//                 {/* 30s Preview Player */}
//                 {song.previewUrl ? (
//                   <audio controls src={song.previewUrl} style={{ width: '100%', marginTop: '4px' }} />
//                 ) : (
//                   <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
//                     ▶ You can Listen Full Song in Spotify→{' '}
//                     <a
//                       href={song.spotifyUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       style={{ color: '#1DB954' }}
//                     >
//                       Open Spotify
//                     </a>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EmotionDetector;












import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import BackButton from './BackButton';

const EmotionDetector = () => {
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  const [moodText, setMoodText] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [detectedEmotion, setDetectedEmotion] = useState('');
  const [loading, setLoading] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [songs, setSongs] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [heartRate, setHeartRate] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = window.location.origin + '/models';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
        setModelsLoaded(true);
      } catch (error) {
        console.error('❌ Model load error:', error);
      }
    };
    loadModels();
  }, []);

  const capturePhoto = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
    await analyzeEmotionFromBase64(imageSrc);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      setUploadedImage(reader.result);
      await analyzeEmotionFromBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const analyzeEmotionFromBase64 = async (base64Image) => {
    setLoading(true);
    setDetectedEmotion('');
    setSongs([]);
    setShowLanguageSelect(false);

    try {
      const img = document.createElement('img');
      img.src = base64Image;
      img.style.display = 'none';
      document.body.appendChild(img);

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const detections = await faceapi
        .detectAllFaces(img, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      document.body.removeChild(img);

      if (!detections || detections.length === 0) {
        setDetectedEmotion('No face found! Try again 📸');
        setLoading(false);
        return;
      }

      const expressions = detections[0].expressions;
      const emotion = Object.keys(expressions).reduce((a, b) =>
        expressions[a] > expressions[b] ? a : b
      );

      setDetectedEmotion(emotion);
      setHeartRate(calculateHeartRate(emotion));
      setShowLanguageSelect(true);
    } catch (error) {
      console.error('Detection error:', error);
      setDetectedEmotion('Detection failed — try another photo');
    } finally {
      setLoading(false);
    }
  };

  const handleGetRecommendations = async (language) => {
    setSelectedLanguage(language);
    setShowLanguageSelect(false);
    setLoading(true);
    setSongs([]);

    const userEmail = localStorage.getItem('userEmail') || '';

    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/api/music/recommend?emotion=${detectedEmotion}&language=${language}&userEmail=${userEmail}`;
      const response = await fetch(url);
      //http://localhost:5000/api/music/recommend?
    //  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/music/recommend?
      const data = await response.json();
      setSongs(data.songs || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
     };

  const calculateHeartRate = (emotion) => {
    const bpmMap = {
      happy: 85, angry: 105, sad: 65,
      surprised: 95, fearful: 100, disgusted: 75,
      neutral: 72, calm: 65, energetic: 110, romantic: 80
    };
    const base = bpmMap[emotion] || 72;
    return base + Math.floor(Math.random() * 5);
  };

  const moodColors = {
    happy: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    sad: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #1f3a5f 100%)',
    angry: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #3d1a1a 100%)',
    neutral: 'linear-gradient(135deg, #6e6eee 0%, #720cee 50%, #0d0d1a 100%)',
    fearful: 'linear-gradient(135deg, #ff6a45 0%, #1a1030 50%, #2e3135 100%)',
    disgusted: 'linear-gradient(135deg, #283628 0%, #0d1f0d 50%, #20312c 100%)',
    surprised: 'linear-gradient(135deg, #1a1500 0%, #2d2000 50%, #1a0d00 100%)',
  };

  const languages = [
    { code: 'tamil', label: '🎵 Tamil' },
    { code: 'hindi', label: '🎵 Hindi' },
    { code: 'english', label: '🎵 English' },
    { code: 'telugu', label: '🎵 Telugu' },
  ];

  const styles = {
    page: {
      minHeight: '100vh',
      background: moodColors[detectedEmotion] || 'linear-gradient(135deg, #0a0a0f 0%, #1a0533 50%, #0d0d1a 100%)',
      transition: 'background 1s ease',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    orb1: { position: 'fixed', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)', top: '-100px', left: '-100px', borderRadius: '50%', pointerEvents: 'none' },
    orb2: { position: 'fixed', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', bottom: '-80px', right: '-80px', borderRadius: '50%', pointerEvents: 'none' },
    content: { maxWidth: '800px', margin: '0 auto', padding: '80px 40px 120px', position: 'relative', zIndex: 1 },
    badge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' },
    dot: { width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' },
    title: { fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: 'white', marginBottom: '12px', fontFamily: 'serif', letterSpacing: '-1px' },
    titleAccent: { background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' },
    subtitle: { color: 'rgba(255,255,255,0.45)', marginBottom: '48px', fontSize: '1rem', fontWeight: '300' },
    card: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '24px', padding: '36px', backdropFilter: 'blur(10px)', marginBottom: '24px' },
    cardTitle: { fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '24px' },
    btnCamera: { padding: '14px 36px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', border: 'none', borderRadius: '100px', color: 'white', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", marginRight: '12px' },
    btnUpload: { padding: '14px 36px', background: 'rgba(139,92,246,0.15)', border: '2px dashed rgba(139,92,246,0.5)', borderRadius: '100px', color: '#a78bfa', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    webcamStyle: { width: '100%', maxWidth: '480px', borderRadius: '16px', border: '2px solid rgba(139,92,246,0.4)', display: 'block', margin: '0 auto' },
    cameraControls: { display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' },
    btnCapture: { padding: '12px 28px', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', borderRadius: '100px', color: '#86efac', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    btnCancel: { padding: '12px 28px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '100px', color: '#fca5a5', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    capturedResult: { textAlign: 'center', marginTop: '24px' },
    capturedImg: { maxWidth: '280px', borderRadius: '16px', border: '2px solid rgba(139,92,246,0.3)', marginBottom: '16px' },
    emotionBadge: { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)', color: '#a78bfa', padding: '10px 24px', borderRadius: '100px', fontSize: '1rem', fontWeight: '600', marginBottom: '20px', textTransform: 'capitalize' },
    orDivider: { display: 'flex', alignItems: 'center', gap: '16px', margin: '16px 0' },
    orLine: { flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' },
    orText: { color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '2px' },
    languageCard: { background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.4)', borderRadius: '20px', padding: '28px', textAlign: 'center', marginBottom: '24px' },
    langTitle: { color: 'white', fontSize: '1.1rem', fontWeight: '700', marginBottom: '20px' },
    langGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' },
    langBtn: { padding: '14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" },
    loadingText: { color: '#a78bfa', textAlign: 'center', padding: '20px', fontSize: '1rem' },
  };

  return (
    <div style={styles.page}>
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.content}>
        <div style={styles.badge}><span style={styles.dot}></span>Mood Detection</div>
        <h1 style={styles.title}>Tell Us Your <span style={styles.titleAccent}>Mood</span></h1>
        <p style={styles.subtitle}>
          {modelsLoaded ? '✅ Ready To— Detect your emotion!' : '⏳ Loading AI models...'}
          <p style={{ ...styles.subtitle, fontSize: '0.85rem', marginTop: '10px' }}>
            <span style={{ color: '#ff4444', fontSize: '1.5rem' }}>♪</span> Spotify app is required to play mood-based music recommendations !!
          </p>
        </p>

        <div style={styles.card}>
          <div style={styles.cardTitle}>📸 Detect Emotion from Face</div>

          {!showCamera && !capturedImage && !uploadedImage && (
            <div style={{ textAlign: 'center' }}>
              <button style={styles.btnCamera} onClick={() => setShowCamera(true)}>📷 Open Camera</button>
              <button style={styles.btnUpload} onClick={() => fileInputRef.current.click()}>🖼️ Upload Image</button>
              <input type="file" ref={fileInputRef} accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
            </div>
          )}

          {showCamera && (
            <div>
              <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" style={styles.webcamStyle} />
              <div style={styles.cameraControls}>
                <button style={styles.btnCapture} onClick={capturePhoto}>📸 Capture</button>
                <button style={styles.btnCancel} onClick={() => setShowCamera(false)}>✕ Cancel</button>
              </div>
            </div>
          )}

          {(capturedImage || uploadedImage) && (
            <div style={styles.capturedResult}>
              <img src={capturedImage || uploadedImage} alt="Face" style={styles.capturedImg} />
              {loading && <div style={styles.loadingText}>🔍 Analyzing your emotion...</div>}
              {detectedEmotion && !loading && (
                <div style={styles.emotionBadge}>🎭 {detectedEmotion}</div>
              )}
              {heartRate && !loading && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#fca5a5', padding: '10px 24px', borderRadius: '100px', fontSize: '1rem', fontWeight: '600', marginLeft: '12px' }}>
                  ❤️ {heartRate} BPM
                </div>
              )}
              <button
                style={{ ...styles.btnCancel, marginTop: '12px', display: 'inline-block' }}
                onClick={() => {
                  setCapturedImage(null);
                  setUploadedImage(null);
                  setDetectedEmotion('');
                  setSongs([]);
                  setShowLanguageSelect(false);
                  setSelectedLanguage('');
                }}
              >↺ Try Again</button>
            </div>
          )}
        </div>

       

        {showLanguageSelect && detectedEmotion && (
          <div style={styles.languageCard}>
            <div style={styles.langTitle}>
              🎭 Detected: <span style={{ color: '#a78bfa', textTransform: 'capitalize' }}>{detectedEmotion}</span>
              <br />
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', fontWeight: '400' }}>Choose your language 🌐</span>
            </div>
            <div style={styles.langGrid}>
              {languages.map((lang) => (
                <button key={lang.code} style={styles.langBtn} onClick={() => handleGetRecommendations(lang.code)}>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && songs.length === 0 && selectedLanguage && (
          <div style={styles.loadingText}>⏳ Finding perfect songs for you...</div>
        )}

        {songs.length > 0 && (
          <div style={styles.card}>
            <div style={styles.cardTitle}>🎵 {detectedEmotion} — {selectedLanguage} Songs ({songs.length})</div>
            {songs.map((song, index) => (
              <div key={index} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.15)', borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  {song.artwork && (
                    <img src={song.artwork} alt={song.name} style={{ width: '52px', height: '52px', borderRadius: '10px', objectFit: 'cover', marginRight: '14px' }} />
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ color: 'white', fontWeight: '600', fontSize: '0.95rem' }}>{index + 1}. {song.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '2px' }}>{song.artist} • {song.album}</div>
                  </div>
                  {song.spotifyUrl && (
                    <a href={song.spotifyUrl} target="_blank" rel="noreferrer" style={{ padding: '8px 16px', background: '#1DB954', borderRadius: '100px', color: 'white', fontSize: '0.8rem', fontWeight: '700', textDecoration: 'none', marginLeft: '10px', flexShrink: 0 }}>
                      ▶ Spotify
                    </a>
                  )}
                </div>
                {song.previewUrl ? (
                  <audio controls src={song.previewUrl} style={{ width: '100%', marginTop: '4px' }} />
                ) : (
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
                    ▶ You can Listen Full Song in Spotify→{' '}
                    <a href={song.spotifyUrl} target="_blank" rel="noreferrer" style={{ color: '#1DB954' }}>Open Spotify</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✅ Back Button */}
      <BackButton />
    </div>
  );
};

export default EmotionDetector;