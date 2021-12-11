import React from 'react'
import {ItemType, Lot} from "../common/types";
import {connect, useDispatch} from "react-redux";
import {toggleFavorites} from "../actions";
import Page from "../containers/Page";

type Props = {
    lots: Lot[],
    favorites: number[],
    showFavorites: boolean
}

const LotsPage = ({lots, favorites, showFavorites}: Props) => {
    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleFavorites(ItemType.LOT))
    const button = <button onClick={onClick}>{showFavorites ? 'Show All' : 'Show Favorite Lots'}</button>

    const items = mapLotsToCards(showFavorites ? lots.filter(lot => lot.lotId in favorites) : lots)

    return (
        <Page button={button} items={items}/>
    )
}

const mapLotsToCards = (lots: Lot[]) => lots.map(lot => ({
    image: lot.image,
    title: lot.address,
    subtitle: lot.acres,
    description: lot.description,
    subdomain: `/lots?id=${lot.lotId}`
}))

const mapStateToProps = (state: any) => ({
    lots: state.inventory.lots,
    favorites: state.favorites.lots,
    showFavorites: state.favorites.showFavoriteLots
})

export default connect(mapStateToProps)(LotsPage)