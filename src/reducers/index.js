import operation from "./operation";
import createSum from "./createSum";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    operation,
    createSum
});

export default rootReducer;