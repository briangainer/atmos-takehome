import {useDispatch} from "react-redux";
import {toggleFavorites} from "../../actions";
import {Home, ItemType} from "../../common/types";

export const useHomesForPage = (homes: Home[], favorites: number[], showFavorites: boolean) => {
    const filteredHomes = showFavorites ? homes.filter(home => favorites.includes(home.homePlanId)) : homes

    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleFavorites(ItemType.HOME))

    return {filteredHomes, onClick}
}
