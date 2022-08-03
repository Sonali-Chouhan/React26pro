import { GET_API } from "../Actiontype";
const initialState = {
  List: []
};
export const reducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_API:
      console.log("actiontype", action.payload);
      return { ...state,
        List: action.payload.data
      };

    default:
      return state;
  }
};