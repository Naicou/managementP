import axios from 'axios';

const BASE_URL = 'http://localhost'; // Change this to match your PHP server URL

const api = {
  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/register.php`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  loginUser: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login.php`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  // Add more APIs here
  
};



export default api;
