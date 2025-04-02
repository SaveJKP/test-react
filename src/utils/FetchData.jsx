import axios from "axios";


export async function fetchDataUser( method = "get") {
  try {
    const response = await axios[method]("https://jsd5-mock-backend.onrender.com/members");
    return response.data;
  } catch (err) {
    console.error("Failed to fetch data:", err);
    return [];
  }
}

