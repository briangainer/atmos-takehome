import React from 'react'
import {connect} from "react-redux";
import {Home} from "../common/types";
import Page from "../containers/Page";
import HomeCard from "./HomeCard";
import {useHomesForPage} from "./hooks/useHomesForPage";

type Props = {
    homes: Home[],
    favorites: number[],
    showFavorites: boolean
}

const HomesPage = ({homes, favorites, showFavorites}: Props) => {
    const {filteredHomes, onClick} = useHomesForPage(homes, favorites, showFavorites)

    const homeCards = filteredHomes.map(home => <HomeCard key={home.homePlanId} home={home}/>)

    const button = <button onClick={onClick}>{showFavorites ? 'Show All Homes' : 'Show Favorite Homes'}</button>

    return <Page button={button} items={homeCards}/>
}

const mapStateToProps = (state: any) => ({
    homes: state.inventory.homes,
    favorites: state.favorites.homes,
    showFavorites: state.favorites.showFavoriteHomes,
})

export default connect(mapStateToProps)(HomesPage)
