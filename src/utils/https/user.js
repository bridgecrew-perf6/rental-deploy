import axios from "axios";

const URL = process.env.REACT_APP_HOST + '/vehicles'; 
const token = JSON.parse(localStorage.getItem("login-token"));

export const postVehicleForm = (body) => {
  return axios.post(URL, body,{ headers: {'x-access-token': token} });
};


// const deleteURL = process.env.REACT_APP_HOST + '/vehicles/'+id; 
// export const deleteVehicleId = (body) => {
//   return axios.delete(deleteURL, body);
// };