import React from 'react'
import {ItemType, Lot} from "../common/types";
import Card from "../containers/Card";
import {connect} from "react-redux";
import {useFavoriteCardCallbacks} from "./hooks/useFavoriteCardCallbacks";

type Props = {
    lot: Lot
    favorites: number[]
}

const LotCard = ({lot, favorites}: Props) => {
    const id = lot.lotId
    const image = lot.image
    const title = <div>{lot.address}</div>
    const subtitle = <div>{`${lot.acres} acres`}</div>
    const description = <div>{lot.description}</div>
    const link = `/lots/${id}`
    const isFavorite = favorites.includes(id)

    const {addFavorite, removeFavorite} = useFavoriteCardCallbacks(ItemType.LOT, id)

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
    favorites: state.favorites.lots
})

export default connect(mapStateToProps)(LotCard)
