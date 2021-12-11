import {ItemType, Combination, Home , Lot, ItemAction} from "../common/types";

export const FETCH_HOMES = 'FETCH_HOMES'
export const FETCH_LOTS = 'FETCH_LOTS'
export const FETCH_COMBINATIONS = 'FETCH_COMBINATIONS'
export const UPDATE_FAVORITES = 'UPDATE_FAVORITES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'

export const fetchHomes = (homes: Home[]) => ({
    type: FETCH_HOMES,
    payload: {homes}
})

export const fetchLots = (lots: Lot[]) => ({
    type: FETCH_LOTS,
    payload: {lots}
})

export const fetchCombinations = (combinations: Combination[]) => ({
    type: FETCH_COMBINATIONS,
    payload: {combinations}
})

export const updateFavorites = (itemType: ItemType, itemAction: ItemAction, id: number) => ({
    type: UPDATE_FAVORITES,
    payload: {
        itemType,
        itemAction,
        id
    }
})

export const toggleFavorites = (itemType: ItemType) => ({
    type: TOGGLE_FAVORITES,
    payload: {itemType}
})
