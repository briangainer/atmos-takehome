import React from 'react'
import {Home, ItemAction, ItemType} from "../common/types";
import Card from "../containers/Card";
import {connect, useDispatch} from "react-redux";
import {updateFavorites} from "../actions";

type Props = {
    home: Home
    favorites: number[]
}

const HomeCard = ({home, favorites}: Props) => {
    const id = home.homePlanId
    const image = home.image
    const title = <div>{home.name}</div>
    const subtitle = <div>{home.numBeds}</div>
    const description = <div>{home.description}</div>
    const link = `/homes/${id}`

    const dispatch = useDispatch()

    const isFavorite = favorites.includes(id)
    const addFavorite = () => {
        dispatch(updateFavorites(ItemType.HOME, ItemAction.ADD, id))
    }
    const removeFavorite = () => {
        dispatch(updateFavorites(ItemType.HOME, ItemAction.REMOVE, id))
    }

    return <Card
                id={id}
                image={image}
                title={title}
                subtitle={subtitle}
                description={description}
                isFavorite={isFavorite}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                link={link}
            />
}

const mapStateToProps = (state: any) => ({
    favorites: state.favorites.homes
})

export default connect(mapStateToProps)(HomeCard)
