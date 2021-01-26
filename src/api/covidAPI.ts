import axios from "axios";
import { baseURL } from "../constants";
import { apiKey } from "../utils/NAOCOMITAISSOAQUI"

const apiCNPJ = axios.create({
  baseURL,
  headers: { 
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `${apiKey}`
  },
});

export default apiCNPJ;