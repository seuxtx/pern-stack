// // src/App.js

// import React, { useState, useEffect } from 'react';
// import Loadouts from './components/Loadout';
// import AddLoadout from './components/addloadout';

// const App = () => {
//     const [loadoutsChanged, setLoadoutsChanged] = useState(false);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchCurrentUser = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/current_user', {
//                     credentials: 'include', // Include credentials for session
//                 });
//                 const data = await response.json();
//                 setUser(data);
//             } catch (error) {
//                 console.error("Error fetching user:", error);
//             }
//         };

//         fetchCurrentUser();
//     }, []);

//     const handleLoadoutAdded = () => {
//         setLoadoutsChanged(prev => !prev);
//     };

//     const handleLogout = async () => {
//         await fetch('http://localhost:5000/api/logout', {
//             credentials: 'include',
//         });
//         setUser(null);
//     };

//     return (
//         <div>
//             <h1>Team Fortress 2 Loadouts Manager</h1>
//             {user ? (
//                 <div>
//                     <h2>Welcome, {user.displayName}</h2>
//                     <button onClick={handleLogout}>Logout</button>
//                 </div>
//             ) : (
//                 <a href="http://localhost:5000/auth/steam">Login with Steam</a>
//             )}
//             <AddLoadout onLoadoutAdded={handleLoadoutAdded} />
//             <Loadouts loadoutsChanged={loadoutsChanged} />
//         </div>
//     );
// };

// export default App;
// src/App.js

import React from 'react';
import Home from './components/Home';
import './App.css'; // Add your global styles here

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
