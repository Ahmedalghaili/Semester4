import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Home/Icon.jpeg'; // Replace with the correct path to your logo
import axios from 'axios';
import { useUser } from '../components/UserContext'; // Import the user context

export default function Header() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user: loggedInUser, setUser: setLoggedInUser } = useUser(); // Use the context to get and set the logged-in user
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedInUser) {
            // Fetch user data from your API
            axios.get(`http://localhost/semester4/my-project/src/Report/get_user.php?user_id=${loggedInUser.id}`)
                .then(response => {
                    setUser(response.data);
                    setLoading(false); // Set loading to false after data is fetched
                })
                .catch(error => {
                    console.error('There was an error fetching the user data!', error);
                    setLoading(false); // Set loading to false even if there's an error
                });
        } else {
            setLoading(false); // If there's no loggedInUser, stop loading
        }
    }, [loggedInUser]);

    const handleLogout = () => {
        // Clear the user context
        setLoggedInUser(null);
        // Optionally, clear any authentication tokens here
        navigate('/login'); // Redirect to login page
    };

    const handleLogin = () => {
        navigate('/login'); // Redirect to login page
    };

    console.log(loggedInUser);

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <nav className="space-x-4 text-sm">
                <Link to="/report" className="text-gray-700 hover:text-blue-600 font-medium">Report</Link>
                <Link to="/chart1" className="text-gray-700 hover:text-blue-600 font-medium">Statistics</Link>
                <Link to="/view-complaints" className="text-gray-700 hover:text-blue-600 font-medium">Complaints</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            </nav>
            <div className="flex items-center space-x-2 text-sm">
                {loading ? (
                    <span>Loading...</span>
                ) : user ? (
                    <>
                        <span className="text-gray-700 font-medium">{user.name}</span>
                        <img src={user.photo_path} alt="User" className="h-6 w-6 rounded-full border-2 border-gray-300" />
                        <button onClick={handleLogout} className="text-gray-700 hover:text-blue-600 font-medium">Logout</button>
                    </>
                ) : (
                    <button onClick={handleLogin} className="text-gray-700 hover:text-blue-600 font-medium">Login</button>
                )}
            </div>
        </header>
    );
}
