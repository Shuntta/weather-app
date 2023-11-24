

import api from "./apikey";

const fetchData = async (query) => {
  try {
    const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
