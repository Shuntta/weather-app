

// fetch.js
import api from "./apikey";

const fetchData = async (query) => {
  try {
    // Obter dados atuais
    const currentResponse = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
    const currentData = await currentResponse.json();

    // Obter previsão do tempo diário
    const forecastResponse = await fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`);
    const forecastData = await forecastResponse.json();

    // Retornar um objeto combinado com dados atuais e previsão diária
    return {
      ...currentData,
      daily: forecastData.list,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
