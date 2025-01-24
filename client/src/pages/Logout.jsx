import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"; // Ensure this path is correct

const Logout = () => {
    const { LogoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        LogoutUser();
        navigate('/login');
    }, [LogoutUser, navigate]);

    return null;
};

export default Logout;