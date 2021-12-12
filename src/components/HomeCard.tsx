import React from 'react'
import {Home, ItemType} from "../common/types";
import Card from "../containers/Card";
import {connect} from "react-redux";
import {useFavoriteCardCallbacks} from "./hooks/useFavoriteCardCallbacks";

type Props = {
    home: Home
    favorites: number[]
}

const HomeCard = ({home, favorites}: Props) => {
    const id = home.homePlanId
    const image = home.image
    const title = <div>{home.name}</div>
    const subtitle = (
        <div>
            <div>{`${home.numBeds} bed, ${home.numBaths} bath, ${home.sqft} sqft`}</div>
            <div>{home.tags.toString()}</div>
        </div>
    )
    const description = <div>{home.description}</div>
    const link = `/homes/${id}`
    const isFavorite = favorites.includes(id)

    const {addFavorite, removeFavorite} = useFavoriteCardCallbacks(ItemType.HOME, id)

    return (
        <Card
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
    )
}

const mapStateToProps = (state: any) => ({
    favorites: state.favorites.homes
})

export default connect(mapStateToProps)(HomeCard)
