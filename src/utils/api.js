import axios from 'axios';

const API_BASE_URL = "https://bus-api-e9c6a0ccdpasf6fm.canadacentral-01.azurewebsites.net/api";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/User`);
    return response.data;
  } catch (error) {
    console.error("User API Error:", error);
    throw error;
  }
};

export const getBusStoppages = async (fromStationId, toStationId, routeId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/BusRoute/stoppages?fromStationId=${fromStationId}&toStationId=${toStationId}&routeId=${routeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Stoppage API Error:", error);
    throw error;
  }
};
