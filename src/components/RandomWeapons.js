// src/components/RandomWeapons.js

import React, { useState } from 'react';
import './RandomWeapons.css';

// Sample data representing weapons for each class
const classWeapons = {
    Scout: [
        { name: 'Scattergun', image: 'https://wiki.teamfortress.com/w/images/1/1d/Scattergun_icon.png' },
        { name: 'Force-A-Nature', image: 'https://wiki.teamfortress.com/w/images/c/cd/Force-a-Nature_icon.png' },
    ],
    Soldier: [
        { name: 'Rocket Launcher', image: 'https://wiki.teamfortress.com/w/images/7/7f/Rocket_Launcher_icon.png' },
        { name: 'Direct Hit', image: 'https://wiki.teamfortress.com/w/images/a/aa/Direct_Hit_icon.png' },
    ],
    Pyro: [
        { name: 'Flamethrower', image: 'https://wiki.teamfortress.com/w/images/4/44/Flamethrower_icon.png' },
        { name: 'Degreaser', image: 'https://wiki.teamfortress.com/w/images/6/68/Degreaser_icon.png' },
    ],
    Demoman: [
        { name: 'Grenade Launcher', image: 'https://wiki.teamfortress.com/w/images/2/27/Grenade_Launcher_icon.png' },
        { name: 'Stickybomb Launcher', image: 'https://wiki.teamfortress.com/w/images/4/4a/Stickybomb_Launcher_icon.png' },
    ],
    Heavy: [
        { name: 'Minigun', image: 'https://wiki.teamfortress.com/w/images/1/1d/Minigun_icon.png' },
        { name: 'Sasha', image: 'https://wiki.teamfortress.com/w/images/9/9d/Sasha_icon.png' },
    ],
    Engineer: [
        { name: 'Wrench', image: 'https://wiki.teamfortress.com/w/images/d/d1/Wrench_icon.png' },
        { name: 'Building Tools', image: 'https://wiki.teamfortress.com/w/images/a/ad/Building_Tools_icon.png' },
    ],
    Medic: [
        { name: 'Medigun', image: 'https://wiki.teamfortress.com/w/images/7/7f/Medigun_icon.png' },
        { name: 'Ubersaw', image: 'https://wiki.teamfortress.com/w/images/4/48/Ubersaw_icon.png' },
    ],
    Sniper: [
        { name: 'Sniper Rifle', image: 'https://wiki.teamfortress.com/w/images/e/e6/Sniper_Rifle_icon.png' },
        { name: 'Sydney Sleeper', image: 'https://wiki.teamfortress.com/w/images/e/eb/Sydney_Sleeper_icon.png' },
    ],
    Spy: [
        { name: 'Butterfly Knife', image: 'https://wiki.teamfortress.com/w/images/8/8b/Butterfly_Knife_icon.png' },
        { name: 'Revolver', image: 'https://wiki.teamfortress.com/w/images/7/7e/Revolver_icon.png' },
    ],
};

const RandomWeapons = () => {
    const [weapons, setWeapons] = useState([]);

    const getRandomWeapons = () => {
        const randomWeapons = Object.keys(classWeapons).map(className => {
            const weaponsArray = classWeapons[className];
            const randomWeapon = weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
            return { className, ...randomWeapon };
        });
        setWeapons(randomWeapons);
    };

    return (
        <div className="random-weapons-container">
            <h2>Random Weapons</h2>
            <button onClick={getRandomWeapons} className="random-weapons-button">Show Random Weapons</button>
            <div className="random-weapons-grid">
                {weapons.map((weapon, index) => (
                    <div className="random-weapon-item" key={index}>
                        <img src={weapon.image} alt={weapon.name} className="random-weapon-image" />
                        <h3>{weapon.name}</h3>
                        <p>{weapon.className}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomWeapons;
