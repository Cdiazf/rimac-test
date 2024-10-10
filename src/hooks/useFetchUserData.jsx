// hooks/useFetchUserData.js
import { useState } from "react";
import {fetchUserData} from "../api/apiService.jsx";

export const useFetchUserData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        setLoading(true);
        setError(null); // Reset error state before fetching
        try {
            const data = await fetchUserData();
            setUserData(data); // Store user data if needed
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // Ensure loading is set to false regardless of success or failure
        }
    };

    return { getUserData, loading, error, userData };
};