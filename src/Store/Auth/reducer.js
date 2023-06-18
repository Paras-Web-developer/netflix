import { LOGIN, LOGOUT } from "./actionType";

const initState = {
  email: null,
  email_verified: null,
  password: null,
  token: null,
};
const Authentication = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return (state = action.payload);
    case LOGOUT:
      return (state = initState);
    default:
      return state;
  }
};
export default Authentication;
