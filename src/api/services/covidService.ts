import { AxiosResponse } from "axios";
import apiCovid from "../covidAPI";

export const get = async (city: string): Promise<AxiosResponse<Models.RootObject>> => {
  try {
    const response = await apiCovid.get<Models.RootObject>(`/dataset/covid19/caso_full/data?city=${city}&is_last=True`);

    return response;
  } catch (err) {
    console.log("Ops, algo deu errado", err);

    throw err;
  }
};