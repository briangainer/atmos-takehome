import {TOGGLE_FAVORITES, UPDATE_FAVORITES} from "../actions";
import {ItemAction, ItemType} from "../common/types";

const DEFAULT_STATE = {
    homes: [],
    lots: [],
    showFavoriteHomes: false,
    showFavoriteLots: false,
}

export const favorites = (state = DEFAULT_STATE, action: any) => {
    console.log(action)
    switch (action.type) {
        case UPDATE_FAVORITES:
            const {itemType, itemAction, id} = action.payload

            if (itemAction === ItemAction.ADD) {
                if (itemType === ItemType.HOME) {
                    return {...state, homes: [...state.homes, id]}
                } else if (itemType === ItemType.LOT) {
                    return {...state, lots: [...state.lots, id]}
                }

            } else if (itemAction === ItemAction.REMOVE) {
                if (itemType === ItemType.HOME) {
                    return {...state, homes: state.homes.filter(tid => tid != id)}
                } else if (itemType === ItemType.LOT) {
                    return {...state, lots: state.lots.filter(tid => tid != id)}
                }
            }
            return state

        case TOGGLE_FAVORITES:
            if (action.payload.itemType === ItemType.HOME) {
                return {...state, showFavoriteHomes: !state.showFavoriteHomes}
            }
            return {...state, showFavoriteLots: !state.showFavoriteLots}
        default:
            return state
    }
}
