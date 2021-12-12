import React from 'react'
import {Lot} from "../common/types";
import {connect} from "react-redux";
import Page from "../containers/Page";
import LotCard from "./LotCard";
import {useLotsForPage} from "./hooks/useLotsForPage";

type Props = {
    lots: Lot[],
    favorites: number[],
    showFavorites: boolean
}

const LotsPage = ({lots, favorites, showFavorites}: Props) => {
    const {filteredLots, onClick} = useLotsForPage(lots, favorites, showFavorites)

    const lotCards = filteredLots.map(lot => <LotCard key={lot.lotId} lot={lot} />)

    const button = <button onClick={onClick}>{showFavorites ? 'Show All Lots' : 'Show Favorite Lots'}</button>

    return <Page button={button} items={lotCards}/>
}

const mapStateToProps = (state: any) => ({
    lots: state.inventory.lots,
    favorites: state.favorites.lots,
    showFavorites: state.favorites.showFavoriteLots
})

export default connect(mapStateToProps)(LotsPage)
