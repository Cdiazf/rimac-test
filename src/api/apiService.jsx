import axios from 'axios';

export const fetchUserData = async () => {
    try {
        const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/user.json');

        if (!response.data) {
            throw new Error('No data received');
        }

        return response.data;
    } catch (error) {
        // Log the error and re-throw it to ensure it is caught by tests or higher-level handlers
        console.error('Error fetching user data:', error.message);
        throw new Error(`Failed to fetch user data: ${error.message}`);
    }
};
