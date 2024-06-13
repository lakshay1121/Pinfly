import axios from "axios";

const API_KEY = "PIXABY_API_KEY";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true";

  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let val = key == "q" ? encodeURIComponent(params[key]) : params[key];

    url += `&${key}=${val}`;
  });

  console.log("final url", url);

  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const {data} = response;
    return {success:true,data};
  } catch (err) {
    console.log("got error", err);
    return { success: false, msg: err.message };
  }
};
