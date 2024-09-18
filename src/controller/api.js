import apiKey from "../../key/api_key.json";

// Helper function to fetch data from API.
async function fetchApi(url) {
  let response = await fetch(url, { mode: "cors" });
  let data = await response.json();
  return data;
}

// Dealling with the communication with 3rd party API.
const API = () => {
  // Fetch data from visualcrossing.
  const visualcrossing = async (city) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey.visualcrossing}&contentType=json`;
    return fetchApi(url);
  };

  // Fetch data from giphy.
  const giphy = async (keyword) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey.giphy}&q=${keyword}&limit=1&offset=0&rating=g&lang=en`;
    return fetchApi(url);
  };

  return { visualcrossing, giphy };
};

const api = API();

export default api;
