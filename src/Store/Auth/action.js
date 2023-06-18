import { LOGIN, LOGOUT } from "./actionType";
export const actionLogin = (value) => {
    return{
        type:LOGIN,
        payload: value
    };
};

export const Logout = () => {
    return{
        type:LOGOUT
    };
};