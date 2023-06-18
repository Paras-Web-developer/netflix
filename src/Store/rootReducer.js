import { combineReducers } from "redux";
import Authentication from "./Auth/reducer";

const rootReducers = combineReducers({
    Auth:Authentication,
});
export default rootReducers;