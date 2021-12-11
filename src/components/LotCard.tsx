import React from 'react'
import {ItemAction, ItemType, Lot} from "../common/types";
import Card from "../containers/Card";
import {connect, useDispatch} from "react-redux";
import {updateFavorites} from "../actions";

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

    const dispatch = useDispatch()

    const isFavorite = favorites.includes(id)
    const addFavorite = () => {
        dispatch(updateFavorites(ItemType.LOT, ItemAction.ADD, id))
    }
    const removeFavorite = () => {
        dispatch(updateFavorites(ItemType.LOT, ItemAction.REMOVE, id))
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
    favorites: state.favorites.lots
})

export default connect(mapStateToProps)(LotCard)