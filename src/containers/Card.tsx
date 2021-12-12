import React from 'react'
import {Link} from "react-router-dom";

import './styles/Card.css'

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
    const button = isFavorite ? <button onClick={removeFavorite}>❤️</button> : <button onClick={addFavorite}>🤍</button>

    return (
        <div className="card">
            {button}
            <Link to={link}>
                <img src={image}/>
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <div className="description">{description}</div>
            </Link>
        </div>

    )
}

export default Card
