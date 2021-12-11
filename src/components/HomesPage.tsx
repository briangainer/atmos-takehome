import React from 'react'
import {connect, useDispatch} from "react-redux";
import {Home, ItemType} from "../common/types";
import {toggleFavorites} from "../actions";
import Page from "../containers/Page";
import HomeCard from "./HomeCard";

type Props = {
    homes: Home[],
    favorites: number[],
    showFavorites: boolean
}

const HomesPage = ({homes, favorites, showFavorites}: Props) => {
    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleFavorites(ItemType.HOME))
    const button = <button onClick={onClick}>{showFavorites ? 'Show All' : 'Show Favorite Homes'}</button>

    const filteredHomes = (showFavorites ? homes.filter(home => favorites.includes(home.homePlanId)) : homes)
    const homeCards = filteredHomes.map(home => <HomeCard key={home.homePlanId} home={home} />)

    return (
        <Page button={button} items={homeCards}/>
    )
}

const mapStateToProps = (state: any) => ({
    homes: state.inventory.homes,
    favorites: state.favorites.homes,
    showFavorites: state.favorites.showFavoriteHomes,
})

export default connect(mapStateToProps)(HomesPage)