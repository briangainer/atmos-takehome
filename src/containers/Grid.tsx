import React from 'react'
import {GridItem} from "../common/types";
import Card from "./Card";

import './styles/Grid.css'

type Props = {
    items: GridItem[]
}

const Grid = ({items}: Props) => (
    <div className="grid">
        {items.length > 0 ? items.map(item => <Card item={item}/>) : <h1>No favorites selected</h1>}
    </div>
)

export default Grid