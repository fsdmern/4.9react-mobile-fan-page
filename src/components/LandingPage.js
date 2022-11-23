import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import FanPage from './FanPage';
import '../style.css';

function LandingPage() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{textDecoration: 'none', color: 'white'}}>
            About
          </Link>
        </li>
        <li>
          <Link to="/fanpage" style={{textDecoration: 'none', color: 'white'}}>
            Fan Page
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fanpage" element={<FanPage />} />
      </Routes>
    </div>
  );
}

export default LandingPage;
