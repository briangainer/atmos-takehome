import React from 'react'

export type Home = {
    homePlanId: number,
    name: string,
    numBeds: number,
    numBaths: number,
    sqft: number,
    tags: string[],
    description: string,
    image: string,
}

export type Lot = {
    lotId: number,
    address: string,
    acres: number,
    description: string,
    image: string,
}

export type Combination = {
    homePlanId: number,
    lotId: number
}

export type GridItem = {
    image: string
    title: React.ReactNode
    subtitle: React.ReactNode
    description: React.ReactNode
    subdomain: string
}

export enum ItemType {
    HOME,
    LOT
}

export enum ItemAction {
    ADD,
    REMOVE
}
