import React from 'react'
import Grid from "./Grid";
import {GridItem} from "../common/types";

import './styles/Page.css'
import {Outlet} from "react-router-dom";

type Props = {
    button: React.ReactNode
    items: React.ReactNode[]
}

const Page = ({button, items}: Props) => (
    <div className='page'>
        {button}
        <Outlet />
        <Grid items={items}/>
    </div>
)

export default Page