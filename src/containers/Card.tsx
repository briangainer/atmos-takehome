import React from 'react'
import {GridItem} from "../common/types";

import './styles/Card.css'
import {Link, useLocation} from "react-router-dom";

type Props = {
    item: GridItem
}

const Card = ({item}: Props) => {
    const {image, title, subtitle, description, subdomain} = item

    const location = useLocation()

    return (
        <div className="card">
            <Link to={subdomain} state={{backgroundLocation: location}}>
                <img src={image}/>
                <div>{title}</div>
                <div>{subtitle}</div>
                <div>{description}</div>
            </Link>
        </div>

    )
}

export default Card