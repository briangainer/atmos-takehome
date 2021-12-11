import React from 'react'
import {connect, useDispatch} from "react-redux";
import {Home, ItemType} from "../common/types";
import {toggleFavorites} from "../actions";
import Page from "../containers/Page";

type Props = {
    homes: Home[],
    favorites: number[],
    showFavorites: boolean
}

const HomesPage = ({homes, favorites, showFavorites}: Props) => {
    const dispatch = useDispatch()
    const onClick = () => dispatch(toggleFavorites(ItemType.HOME))
    const button = <button onClick={onClick}>{showFavorites ? 'Show All' : 'Show Favorite Homes'}</button>


    const items = mapHomesToCards(showFavorites ? homes.filter(home => home.homePlanId in favorites) : homes)

    return (
        <Page button={button} items={items}/>
    )
}

const mapHomesToCards = (homes: Home[]) => homes.map(home => ({
    image: home.image,
    title: <div>{home.name}</div>,
    subtitle: <div>{home.numBeds}</div>,
    description: <div>{home.description}</div>,
    subdomain: `/homes?id=${home.homePlanId}`
}))

const mapStateToProps = (state: any) => ({
    homes: state.inventory.homes,
    favorites: state.favorites.homes,
    showFavorites: state.favorites.showFavoriteHomes
})

export default connect(mapStateToProps)(HomesPage)