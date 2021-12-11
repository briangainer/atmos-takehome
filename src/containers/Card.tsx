import React from 'react'

import './styles/Card.css'
import {Link} from "react-router-dom";

type Props = {
    id: number
    image: string
    title: React.ReactNode
    subtitle: React.ReactNode
    description: React.ReactNode
    link: string
    isFavorite: boolean
    addFavorite: () => void
    removeFavorite: () => void
}

const Card = ({image, title, subtitle, description, link, isFavorite, addFavorite, removeFavorite}: Props) => {
    const button = isFavorite ? <button onClick={() => removeFavorite()}>(-) remove from favorite</button> : <button onClick={() => addFavorite()}>(+) add to favorite</button>

    return (
        <div className="card">
            {button}
            <Link to={link}>
                <img src={image}/>
                <div>{title}</div>
                <div>{subtitle}</div>
                <div>{description}</div>
            </Link>
        </div>

    )
}

export default Card