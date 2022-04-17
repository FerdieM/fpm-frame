import React from 'react';
import GlobalStyle from './globalStyle';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import PricingPage from './pages/PricingPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
