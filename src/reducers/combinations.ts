import {FETCH_COMBINATIONS} from "../actions";
import {Combination} from "../common/types";

const DEFAULT_STATE: Combination[] = []

export const combinations = (state = DEFAULT_STATE, action: any) => {
    return action.type === FETCH_COMBINATIONS ? action.payload.combinations : state
}
