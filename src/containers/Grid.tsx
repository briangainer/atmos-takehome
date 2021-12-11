import React from 'react'

import './styles/Grid.css'

type Props = {
    items: React.ReactNode[]
}

const Grid = ({items}: Props) => (
    <div className="grid">
        {items.length > 0 ? items : <h1>No favorites selected</h1>}
    </div>
)

export default Grid