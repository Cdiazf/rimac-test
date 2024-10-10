import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {fetchUserData} from "../api/apiService.jsx";
import { describe,beforeAll,afterAll ,afterEach,it,expect } from 'vitest'; // Ensure Vitest is imported for mocking

describe('fetchUserData', () => {
    let mock;

    beforeAll(() => {
        // Create an instance of MockAdapter
        mock = new MockAdapter(axios);
    });

    afterEach(() => {
        // Reset the mock after each test
        mock.reset();
    });

    
    afterAll(() => {
        // Restore the default behavior of axios
        mock.restore();
    });

    it('should fetch user data successfully', async () => {
        const mockData = { name: 'John Doe', age: 30 }; // Adjust this to match the expected response structure
        // Mock the GET request
        mock.onGet('https://rimac-front-end-challenge.netlify.app/api/user.json').reply(200, mockData);

        const data = await fetchUserData();
        expect(data).toEqual(mockData); // Expect the returned data to match the mock data
    });

    it('should throw an error when the fetch fails', async () => {
        // Mock the GET request to return an error
        mock.onGet('https://rimac-front-end-challenge.netlify.app/api/user.json').reply(500);

        await expect(fetchUserData()).rejects.toThrow('Request failed with status code 500');
    });
});
