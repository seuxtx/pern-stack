// src/components/Home.js

import React from 'react';
import Loadouts from './Loadouts';
import Classes from './Classes';
import RandomWeapons from './RandomWeapons'; // Import the new component
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Team Fortress 2 Loadouts</h1>
            <Classes />
            <Loadouts />
            <RandomWeapons /> {/* Add the RandomWeapons component here */}
        </div>
    );
};

export default Home;
