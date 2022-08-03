import { GET_API } from "../Actiontype";
import axios from "axios";
export const getApi = () => {
  return dispatch => {
    return axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      dispatch({
        type: GET_API,
        payload: data
      });
    }).catch(error => {
      dispatch({
        type: "ERROR",
        payload: error.response
      });
    });
  };
};