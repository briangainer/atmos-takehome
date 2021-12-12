import {useDispatch} from "react-redux";
import {toggleFavorites} from "../../actions";
import {ItemType, Lot} from "../../common/types";

export const useLotsForPage = (lots: Lot[], favorites: number[], showFavorites: boolean) => {
    const filteredLots = showFavorites ? lots.filter(lot => favorites.includes(lot.lotId)) : lots

    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleFavorites(ItemType.LOT))

    return {filteredLots, onClick}
}
