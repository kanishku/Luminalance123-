import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gigs from './pages/Gigs/Gigs';
import Gig from './pages/Gig/Gig';
import Orders from './pages/Orders';
import Mygigs from './pages/Mygigs';
import Add from './pages/Add/Add';
import Messages from './pages/Messages';
import Message from './pages/Message';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gig" element={<Gig />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/mygigs" element={<Mygigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<Message />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
