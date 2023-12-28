// commonApi.js

// const API_BASE_URL = "http://localhost:3003";

import axios from "axios";
// import { TOKEN } from "../constant/appConstants";

const commonApi = async ({ method, endpoint, payload }) => {
  const url = `http://localhost:3003/${endpoint}`;

  try {
    const response = await axios.request({
      method,
      url,
      data: payload,
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

// const commonApi = async (endpoint, method = "GET", data = null) => {
//   const url = `${API_BASE_URL}${endpoint}`;

//   try {
//     const response = await fetch(url, {
//       method,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: data ? JSON.stringify(data) : null,
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch data: ${response.status} ${response.statusText}`
//       );
//     }

//     return response.json();
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };

export default commonApi;
