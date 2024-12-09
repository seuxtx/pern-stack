// src/components/RandomWeapons.js

import React, { useState } from 'react';
import './RandomWeapons.css';

// Sample data representing weapons for each class
const classWeapons = {
    Scout: [
        { name: 'Scattergun', image: 'https://wiki.teamfortress.com/w/images/1/1d/Scattergun_icon.png' },
        { name: 'Force-A-Nature', image: 'https://wiki.teamfortress.com/w/images/c/cd/Force-a-Nature_icon.png' },
        { name: 'ShortStop', image: 'https://wiki.teamfortress.com/w/images/9/91/Shortstop.png' },
        { name: 'Sodapopper', image: 'https://wiki.teamfortress.com/w/images/f/f1/Soda_Popper.PNG' },
        { name: 'BabyFaceBlaster', image: 'https://wiki.teamfortress.com/w/images/thumb/b/b1/Babyfaceblaster.png/250px-Babyfaceblaster.png' },
        { name: 'Back Scatter', image: 'https://wiki.teamfortress.com/w/images/0/0f/Back_Scatter.png' },
    ],
    Soldier: [
        { name: 'Rocket Launcher', image: 'https://wiki.teamfortress.com/w/images/7/7f/Rocket_Launcher_icon.png' },
        { name: 'Direct Hit', image: 'https://wiki.teamfortress.com/w/images/a/aa/Direct_Hit_icon.png' },
        { name: 'Cow Mangler', image: 'https://wiki.teamfortress.com/w/images/2/2c/RED_Cow_Mangler_5000.png' },
        { name: 'Black Box', image: 'https://wiki.teamfortress.com/w/images/4/41/Blackbox.png' },
        { name: 'Rocket Jumper', image: 'https://wiki.teamfortress.com/w/images/d/d8/Rocket_Jumper.png' },
        { name: 'Beggar Bazooka', image: 'https://wiki.teamfortress.com/w/images/5/50/Beggar%27s_Bazooka.png' },
        { name: 'Air Strike', image: 'https://wiki.teamfortress.com/w/images/a/a2/Air_Strike.png' },
        { name: 'Original', image: 'https://wiki.teamfortress.com/w/images/7/7f/Original.png' },
        { name: 'Libetry Launcher', image: 'https://wiki.teamfortress.com/w/images/e/e2/Liberty_Launcher.png' }
        
    ],
    Pyro: [
        { name: 'Flamethrower/Reskins', image: 'https://wiki.teamfortress.com/w/images/4/44/Flamethrower_icon.png' },
        { name: 'Degreaser', image: 'https://wiki.teamfortress.com/w/images/6/68/Degreaser_icon.png' },
        { name: 'BackBurner', image: 'https://wiki.teamfortress.com/w/images/f/f2/RedBackburnerTilt.png' },
        { name: 'Phlog', image: 'https://wiki.teamfortress.com/w/images/7/77/RED_Phlogistinator.png' },
        { name: 'Dragon Fury', image: 'https://wiki.teamfortress.com/w/images/9/94/RED_Dragon%27s_Fury.png' },
        
    ],
    Demoman: [
        { name: 'Grenade Launcher', image: 'https://wiki.teamfortress.com/w/images/2/27/Grenade_Launcher_icon.png' },
        { name: 'Loch n Load', image: 'https://wiki.teamfortress.com/w/images/4/48/LochnLoad.png' },
        { name: 'Loose Cannon', image: 'https://wiki.teamfortress.com/w/images/3/36/Loose_Cannon.png' },
        { name: 'Iron Bomber', image: 'https://wiki.teamfortress.com/w/images/5/54/Iron_Bomber.png' },
        { name: 'Wee booties', image: 'https://wiki.teamfortress.com/w/images/5/53/Ali_Baba%27s_Wee_Booties.PNG' },
        { name: 'BASE Jumper', image: 'https://wiki.teamfortress.com/w/images/0/06/B.A.S.E._Jumper.png' }
        
    ],
    Heavy: [
        { name: 'Minigun', image: 'https://wiki.teamfortress.com/w/images/1/1d/Minigun_icon.png' },
        { name: 'Sasha', image: 'https://wiki.teamfortress.com/w/images/9/9d/Sasha_icon.png' },
        { name: 'BrassBeast', image: 'https://wiki.teamfortress.com/w/images/3/38/Brass_Beast.png' },
        { name: 'Tomislav', image: 'https://wiki.teamfortress.com/w/images/3/37/Tomislav.PNG' },
        { name: 'Huo-Long Heater', image: 'https://wiki.teamfortress.com/w/images/3/3d/RED_Huo-Long_Heater.png' }
    ],
    Engineer: [
        { name: 'Wrench', image: 'https://wiki.teamfortress.com/w/images/d/d1/Wrench_icon.png' },
        { name: 'GunSlinger', image: 'https://wiki.teamfortress.com/w/images/e/e7/RED_Gunslinger.png' },
        { name: 'Jag', image: 'https://wiki.teamfortress.com/w/images/7/78/Jag.png' },
        { name: 'Southern Hospitality', image: 'https://wiki.teamfortress.com/w/images/1/1f/Southern_Hospitality.png' },
        { name: 'Eureka Effect', image: 'https://wiki.teamfortress.com/w/images/8/83/Eureka_Effect_RED.png' }
        
    ],
    Medic: [
        { name: 'Medigun', image: 'https://wiki.teamfortress.com/w/images/7/7f/Medigun_icon.png' },
        { name: 'Kritkrieg', image: 'https://wiki.teamfortress.com/w/images/1/19/RED_Kritzkrieg.png' },
        { name: 'Quick-Fix', image: 'https://wiki.teamfortress.com/w/images/0/07/Quick-Fix_RED.png' },
        { name: 'Vaccinator', image: 'https://wiki.teamfortress.com/w/images/7/72/RED_Vaccinator.png' },
    ],
    Sniper: [
        { name: 'Sniper Rifle/reskin', image: 'https://wiki.teamfortress.com/w/images/e/e6/Sniper_Rifle_icon.png' },
        { name: 'Sydney Sleeper', image: 'https://wiki.teamfortress.com/w/images/e/eb/Sydney_Sleeper_icon.png' },
        { name: 'Machina/reskin', image: 'https://wiki.teamfortress.com/w/images/b/bd/Machina.png' },
        { name: 'Huntsman', image: 'https://wiki.teamfortress.com/w/images/7/75/Huntsman.png' },
        { name: 'Bazaar Bargain', image: 'https://wiki.teamfortress.com/w/images/1/16/Bazaar_Bargain.PNG' },
        { name: 'Classic', image: 'https://wiki.teamfortress.com/w/images/5/57/Classic.png' },
        { name: 'Hitmans Heatmaker', image: 'https://wiki.teamfortress.com/w/images/0/0d/Hitman%27s_Heatmaker.png' },
    ],
    Spy: [
        { name: 'Butterfly Knife', image: 'https://wiki.teamfortress.com/w/images/8/8b/Butterfly_Knife_icon.png' },
        { name: 'Your Eternal Reward', image: 'https://wiki.teamfortress.com/w/images/d/db/RED_Eternal_Reward.png' },
        { name: 'Kunai', image: 'https://wiki.teamfortress.com/w/images/2/24/Conniver%27s_Kunai.png' },
        { name: 'Spy-cicle', image: 'https://wiki.teamfortress.com/w/images/9/9a/Spy-cicle.png' },
        { name: 'Big Earner', image: 'https://wiki.teamfortress.com/w/images/b/be/Bigearner.PNG' },
        
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
