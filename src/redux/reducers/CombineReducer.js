import { combineReducers } from "redux";
import BatReducer from "./BatReducer";
import BallReducer from "./BallReducer";

export default combineReducers({
    bat:BatReducer,
    ball:BallReducer
})