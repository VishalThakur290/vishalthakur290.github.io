import React from 'react';
import { Routes, Route } from 'react-router';
import Description from './components/Description';
import Home from './components/Home';

const App = () => {
    return (
        <div className="mainBody">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forecast" element={<Description />} />
            </Routes>
            <p className='watermark'>Made with <span style={{ color: 'red' }}>&#10084;</span> by <a target="_blank" rel="noreferrer" href='https://www.instagram.com/vishal.thakur25/'>Vishal Thakur</a></p>
        </div>
    );
};
export default App;