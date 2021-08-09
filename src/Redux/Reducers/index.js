import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";

export const rootReducer = combineReducers({
    register:registerReducer,
    login:loginReducer
})