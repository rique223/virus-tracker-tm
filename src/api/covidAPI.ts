import axios from "axios";
import { baseURL } from "../constants";
import { apiKey } from "../utils/NAOCOMITAISSOAQUI";

// Axios instance created for better scalability and ease of use of the Request package
const apiCNPJ = axios.create({
  baseURL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Authorization: `${apiKey}`,
  },
});

export default apiCNPJ;
