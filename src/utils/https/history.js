import axios from "axios";

const URL = process.env.REACT_APP_HOST + "/";

export const historyById = (token) => {
  return axios.get(URL + "history", {
    headers: { "x-access-token": token },
  });
};

export const delHistory = (id) => {
  // const URLDelete = `${process.env.API_URL}/history/${id}` ;
  return axios.delete(URL + "history/" + id);
};
