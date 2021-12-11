import {combineReducers} from "redux";
import {inventory} from "./inventory";
import {combinations} from "./combinations";
import {favorites} from "./favorites";

export default combineReducers({
    inventory,
    combinations,
    favorites
})
