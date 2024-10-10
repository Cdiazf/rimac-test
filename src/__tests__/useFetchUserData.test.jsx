import { renderHook, act } from "@testing-library/react";
import { useFetchUserData } from "../hooks/useFetchUserData";
import { vi,beforeEach,test, describe,expect } from 'vitest';
import {fetchUserData} from "../api/apiService.jsx"; // Ensure Vitest is imported for mocking

// Mock the fetchUserData function
vi.mock("../api/apiService", () => ({
    fetchUserData: vi.fn(),
}));

describe("useFetchUserData hook", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("should fetch user data successfully", async () => {
        // Mock successful response
        const mockData = { name: "John Doe", age: 30 };
        fetchUserData.mockResolvedValue(mockData);

        // Use renderHook to run the hook
        const { result } = renderHook(() => useFetchUserData());

        // Check initial state
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(null);

        // Perform the async operation
        let userData;
        await act(async () => {
            userData = await result.current.getUserData();
        });

        // Assert the data and state
        expect(userData).toEqual(mockData);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(null);
    });

    test("should handle error when fetching data fails", async () => {
        // Mock a failure
        const mockError = new Error("Network error");
        fetchUserData.mockRejectedValue(mockError);

        // Use renderHook to run the hook
        const { result } = renderHook(() => useFetchUserData());

        // Check initial state
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(null);

        // Perform the async operation and expect it to throw
        await act(async () => {
            try {
                await result.current.getUserData();
            } catch (error) {
                // This should be the thrown error
                expect(error).toBe(mockError);
            }
        });

        // Assert the error and state
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(mockError);
    });

    test("should set loading to true while fetching data", async () => {
        // Mock the response
        const mockData = { name: "John Doe", age: 30 };
        fetchUserData.mockResolvedValue(mockData);

        // Use renderHook to run the hook
        const { result } = renderHook(() => useFetchUserData());

        // Check initial state
        expect(result.current.loading).toBe(false);

        // Trigger the async operation and verify loading state
        act(() => {
            result.current.getUserData();
        });

        // Loading should be true while fetching
        expect(result.current.loading).toBe(true);

        // Wait for the async operation to complete
        await act(async () => {
            await result.current.getUserData();
        });

        // After the fetch, loading should be false
        expect(result.current.loading).toBe(false);
    });
});
