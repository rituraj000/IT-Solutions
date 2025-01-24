import React from 'react';
import { useAuth } from '../store/auth';

const Header = () => {
    const { user, logout, isLoggedIn } = useAuth();

    return (
        <header>
            {/* ...existing code... */}
            {isLoggedIn() ? (
                <>
                    <span>Welcome, {user.name}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <button>Login</button>
                    <button>Register</button>
                </>
            )}
            {/* ...existing code... */}
        </header>
    );
};

export default Header;
