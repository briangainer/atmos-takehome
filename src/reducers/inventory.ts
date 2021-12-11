import {FETCH_HOMES, FETCH_LOTS} from "../actions";

const DEFAULT_STATE = {
    homes: [],
    lots: []
}

export const inventory = (state = DEFAULT_STATE, action: any) => {
    switch (action.type) {
        case FETCH_HOMES:
            return {...state, homes: action.payload.homes}
        case FETCH_LOTS:
            return {...state, lots: action.payload.lots}
        default:
            return state

    }
}
