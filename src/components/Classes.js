// src/components/Classes.js

import React from 'react';
import './Classes.css';

// Sample data representing all TF2 classes
const classes = [
    {
        id: 1,
        name: 'Scout',
        description: 'A fast and agile character who excels at hit-and-run tactics.',
        image: 'https://wiki.teamfortress.com/w/images/6/69/Scout.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Scout'
    },
    {
        id: 2,
        name: 'Soldier',
        description: 'A versatile class that uses rocket launchers for high damage.',
        image: 'https://wiki.teamfortress.com/w/images/7/7b/Soldier.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Soldier'
    },
    {
        id: 3,
        name: 'Pyro',
        description: 'A close-range class that uses fire to deal damage.',
        image: 'https://wiki.teamfortress.com/w/images/c/c8/Pyro.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Pyro'
    },
    {
        id: 4,
        name: 'Demoman',
        description: 'An explosive expert who uses grenades and sticky bombs.',
        image: 'https://wiki.teamfortress.com/w/images/f/fd/Demoman.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Demoman'
    },
    {
        id: 5,
        name: 'Heavy',
        description: 'A tanky class with a powerful minigun.',
        image: 'https://wiki.teamfortress.com/w/images/0/08/Heavy.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Heavy'
    },
    {
        id: 6,
        name: 'Engineer',
        description: 'A supportive class that builds turrets and teleports.',
        image: 'https://wiki.teamfortress.com/w/images/d/d8/Engineer.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Engineer'
    },
    {
        id: 7,
        name: 'Medic',
        description: 'A healer who can revive and support teammates.',
        image: 'https://wiki.teamfortress.com/w/images/2/26/Medic.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Medic'
    },
    {
        id: 8,
        name: 'Sniper',
        description: 'A long-range marksman with a rifle.',
        image: 'https://wiki.teamfortress.com/w/images/8/8f/Sniper.png',
        wikiLink: 'https://wiki.teamfortress.com/wiki/Sniper'
    },
    {
        id: 9,
        name: 'Spy',
        description: 'A stealthy class that can disguise as enemies.',
        image: 'https://wiki.teamfortress.com/w/images/3/36/Spy.png',
        wikiLink: 'https://wiki.teamfortress.com/w/images/3/3e/Spy'
    }
];

const Classes = () => {
    return (
        <div className="classes-container">
            <h1 className="classes-title">TF2 Classes</h1>
            <div className="classes-grid">
                {classes.map(classItem => (
                    <div className="class-item" key={classItem.id}>
                        <a href={classItem.wikiLink} target="_blank" rel="noopener noreferrer" className="class-link">
                            <img src={classItem.image} alt={classItem.name} className="class-image" />
                            <div className="tooltip">{classItem.description}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
