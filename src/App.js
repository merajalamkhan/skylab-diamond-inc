
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Components/Home1';
import About from './Components/About';
import Product from './Components/Product';
import Erorr from './Components/Erorr';
import MoreSkylabStory from './Components/About/MoreSkylabStory';
import SkylabCommitment from './Components/About/SkylabCommitment';
import SkylabProcessOfBrilliance from './Components/About/SkylabProcessOfBrilliance';
import Foundation from './Components/Foundation';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import { MDBContainer, MDBSpinner } from 'mdb-react-ui-kit';
import 'react-tooltip/dist/react-tooltip.css'
import LoginForm from './Components/Inventory/LoginForm';
import SignupForm from './Components/Inventory/SignupForm';
import Dashboard from './Backend/Components/Dashboard';
import Jewelery from './Backend/Components/Jewelery';
import JeweleryView from './Backend/Components/Jewelery/JeweleryView';
import Diamonds from './Backend/Components/Diamonds';
import DiamondsTable from './Backend/Components/Diamond/DiamondsTable';
import Notifications from './Backend/Components/Notifications';
import Search from './Backend/Components/Search';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay, you can replace this with actual data fetching
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        // Show spinner while loading
        <MDBContainer style={{height:'100vh'}}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <MDBSpinner role='status'>
                     <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        </MDBContainer>
            
      
      ) : (
        // Show content after loading
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/moreskylabstory" element={<MoreSkylabStory />} />
          <Route path="/skylabcommitment" element={<SkylabCommitment />} />
          <Route path="/skylabProcessOfBrilliance" element={<SkylabProcessOfBrilliance />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/signupForm" element={<SignupForm />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/JeweleryView/:jeweleryId" element={<JeweleryView />} />
          <Route path="/diamond" element={<Diamonds />} />
          <Route path="/diamondtable" element={<DiamondsTable />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/search" element={<Search />} />

          <Route path="*" element={<Erorr />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;

