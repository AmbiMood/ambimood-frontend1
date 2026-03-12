// import React from 'react';
// import { Router, Routes, Route } from 'react-router-dom';
// import Signup from './component/Signup';
// import Home from './component/Home';
// import Login from './component/Login';
// import About from './component/About';
// import Contact from './component/Contact';
// import Profile from './component/Profile';
// import EmotionDetector from './component/EmotionDetector';
// const App = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/About" element={<About />} />
//                  <Route path="/Contact" element={<Contact />} />
//                  <Route path="/Profile" element={<Profile />} />
//                   <Route path="/detect-mood" element={<EmotionDetector />} />
//             </Routes>
//         </>
//     );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // All pages import pannunga
// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/Contact';
// import Login from './component/Login';
// import Signup from './component/Signup';
// import Profile from './component/Profile';
// import EmotionDetector from './component/EmotionDetector';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/"            element={<Home />} />
//         <Route path="/about"       element={<About />} />
//         <Route path="/contact"     element={<Contact />} />
//         <Route path="/login"       element={<Login />} />
//         <Route path="/signup"      element={<Signup />} />
//         <Route path="/profile"     element={<Profile />} />
//         <Route path="/detect-mood" element={<EmotionDetector />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
import EmotionDetector from './component/EmotionDetector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/login"       element={<Login />} />
        <Route path="/signup"      element={<Signup />} />
        <Route path="/profile"     element={<Profile />} />
        <Route path="/detect-mood" element={<EmotionDetector />} />
      </Routes>
    </Router>
  );
}

export default App;