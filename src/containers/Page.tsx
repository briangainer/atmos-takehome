import React from 'react'
import Grid from "./Grid";
import {GridItem} from "../common/types";

import './styles/Page.css'

type Props = {
    button: React.ReactNode
    items: GridItem[]
}

const Page = ({button, items}: Props) => (
    <div className='page'>
        {button}
        <Grid items={items}/>
    </div>
)

export default Page