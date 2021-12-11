import React from "react";
import {Home, ItemAction, ItemType} from "./types";
import {updateFavorites} from "../actions";

// @ts-ignore
export const mapHomesToCards = (homes: Home[], favorites: number[]=[]) => homes.map(home => ({
    id: home.homePlanId,
    image: home.image,
    title: <div>{home.name}</div>,
    subtitle: <div>{home.numBeds}</div>,
    description: <div>{home.description}</div>,
    subdomain: `/homes/${home.homePlanId}`,
    isFavorite: home.homePlanId in favorites
}))