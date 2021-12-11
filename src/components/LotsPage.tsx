import React from 'react'
import {ItemType, Lot} from "../common/types";
import {connect, useDispatch} from "react-redux";
import {toggleFavorites} from "../actions";
import Page from "../containers/Page";
import {favorites} from "../reducers/favorites";
import LotCard from "./LotCard";

type Props = {
    lots: Lot[],
    favorites: number[],
    showFavorites: boolean
}

const LotsPage = ({lots, favorites, showFavorites}: Props) => {
    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleFavorites(ItemType.LOT))
    const button = <button onClick={onClick}>{showFavorites ? 'Show All' : 'Show Favorite Lots'}</button>

    const filteredLots = showFavorites ? lots.filter(lot => favorites.includes(lot.lotId)) : lots
    const lotCards = filteredLots.map(lot => <LotCard key={lot.lotId} lot={lot} />)

    return (
        <Page button={button} items={lotCards}/>
    )
}

const mapStateToProps = (state: any) => ({
    lots: state.inventory.lots,
    favorites: state.favorites.lots,
    showFavorites: state.favorites.showFavoriteLots
})

export default connect(mapStateToProps)(LotsPage)