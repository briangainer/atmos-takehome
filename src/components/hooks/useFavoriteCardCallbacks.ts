import {useDispatch} from "react-redux";
import {updateFavorites} from "../../actions";
import {ItemAction, ItemType} from "../../common/types";

export const useFavoriteCardCallbacks = (itemType: ItemType, id: number) => {
    const dispatch = useDispatch()
    const addFavorite = () => {
        dispatch(updateFavorites(itemType, ItemAction.ADD, id))
    }
    const removeFavorite = () => {
        dispatch(updateFavorites(itemType, ItemAction.REMOVE, id))
    }

    return {addFavorite, removeFavorite}
}
