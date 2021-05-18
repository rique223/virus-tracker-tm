import axios from "axios";
import { baseURL } from "../constants";
import { apiKey } from "../utils/NAOCOMITAISSOAQUI";

// Axios instance created for better scalability and ease of use of the Request package
const apiCovid = axios.create({
	baseURL,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		Authorization: `${apiKey}`,
		"Content-Type": "application/json",
	},
});

export default apiCovid;
