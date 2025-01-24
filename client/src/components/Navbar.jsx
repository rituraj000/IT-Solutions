import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn, LogoutUser } = useAuth();

    const handleLogout = () => {
        LogoutUser(); // Call the logout function to remove the token
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">Ritu WebSite</a>
                    </div>

                    <nav>
                        <ul>
                            <li><NavLink to="/"> Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/service"> Service</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>

                            {isLoggedIn ? (
                                <li><NavLink to={"/logout"} onClick={handleLogout}>Logout</NavLink></li>
                            ) : (
                                <>
                                    <li><NavLink to="/register"> Register</NavLink></li>
                                    <li><NavLink to="/login"> Login</NavLink></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
