import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({ username: "", email: "" }); // Update to store user data

    const isLoggedIn = !!token;

    const storeTokenInLS = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const LogoutUser = useCallback(() => {
        localStorage.removeItem("token");
        setToken("");
        setUser({ username: "", email: "" }); // Reset user data
    }, []);

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("User data fetched:", data); // Log the fetched user data
                // Update to access username and email directly
                setUser({ username: data.username, email: data.email }); // Store username and email
            } else if (response.status === 401) {
                console.error("Unauthorized: Invalid token");
                LogoutUser();
            } else {
                console.error("Error fetching user data");
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token]);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }} // Provide user data
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
