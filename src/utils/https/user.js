import axios from "axios";

// const URL = process.env.REACT_APP_HOST + '/vehicles';
// const token = JSON.parse(localStorage.getItem("login-token"));

// export const postVehicleForm = (body) => {
//   return axios.post(URL, body,{ headers: {'x-access-token': token} });
// };

// const deleteURL = process.env.REACT_APP_HOST + '/vehicles/'+id;
// export const deleteVehicleId = (body) => {
//   return axios.delete(deleteURL, body);
// };

// const URL = process.env.NEXT_PUBLIC_API_URL + '/signIn';
const URL = `${process.env.REACT_APP_HOST}/users`;

export const getUsers = (token) => {
  return axios.get(URL, {
    headers: { "x-access-token": token },
  });
};

export const editUsers = (body, token) => {
  return axios.patch(URL, body, {
    headers: { "x-access-token": token },
  });
};
