import { flask_Api } from "../../ApiEndPoints";
import axios from "axios";

export const logedIn = (data: any) => {
	return axios.post(`${flask_Api()}/logIn`, data);
};
