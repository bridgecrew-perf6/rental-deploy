import axios from "axios";

const URL = process.env.REACT_APP_HOST + "/";

export const getPop = () => {
  return axios.get(URL + "history/rate");
};

export const filterVehicle = (limit, type, search, location) => {
  const FilterURL = `${process.env.REACT_APP_HOST}/vehicles?page=1&limit=${limit}&types=${type}&name=${search}&location=${location}`;
  return axios.get(FilterURL);
};

const AddURL = `${process.env.REACT_APP_HOST}/vehicles`;
export const addVehicle = (body, token) => {
  return axios.post(AddURL, body, {
    headers: {
      "content-type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

export const getVehicleId = (id) => {
  return axios.get(URL + "vehicles/" + id);
};

// const AddURLEdit = `${process.env.REACT_APP_HOST}/vehicles/${id}`;
export const editVehicle = (body, token, id) => {
  const URLedit = URL + "vehicle/" + id;
  return axios.patch(URLedit, body, {
    headers: {
      "content-type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

export const postPayment = (body) => {
  //token
  return axios.post(URL + "history", body);
};
