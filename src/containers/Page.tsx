import React from 'react'
import {Outlet} from "react-router-dom";
import Grid from "./Grid";

import './styles/Page.css'

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
