import { axios } from "axios";
import { DELETE_HISTORY } from "./actionString";

// import { deleteVehicleById } from "../../utils/https/auth";

export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";

export const deleteUser = (id) => {
    const deleteURL = process.env.REACT_APP_HOST + '/vehicles/'+id; 
    return (dispatch) => {
      axios
        .delete(deleteURL)
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
          
        });
    };
  };

  export const deleteDataUser = () => {
    return (dispatch) => {
      dispatch({
        type: GET_USER_DETAIL,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
  
  
      dispatch({
        type: POST_USER_CREATE,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
    };
  };