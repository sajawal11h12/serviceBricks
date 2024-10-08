import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './components/Home/Home';
import Feature from './components/Features/Feature.jsx';
import Documentation from './components/Documentation/Documentation';
import Consulting from './components/Consulting/Consulting';
import About from './components/About/About';
import Signup from './components/Signup/Signup.jsx';
import Register from './components/Signin/Signin.jsx';
import GetStarted from './components/Get-Started/GetStarted.jsx';
import Price from './components/Price/Price.jsx'
import Conditions from './components/Conditions/Conditions.jsx';
import  FAQs from './components/FAQs/FAQs.jsx'
import Privacy from './components/Privacy Policy/Privacy.jsx'
import  News from './components/News/News.jsx';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="features" element={<Feature />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="about" element={<About />} />


        <Route path="Faqs" element={<FAQs />} />
        <Route path="Policy" element={<Privacy/>} />
        <Route path="conditions" element={< Conditions/>} />
        <Route path="News" element={< News/>} />

        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Register/>}/>
        <Route path="price" element={<Price />} />
        <Route path="getstarted" element={<GetStarted />} />

        {/* Redirect from root path to Home */}
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
