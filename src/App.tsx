import React, {useEffect} from 'react';

import {Routes, Route} from "react-router-dom";
import './App.css';
import HomesPage from "./components/HomesPage";
import LotsPage from "./components/LotsPage";
import Sidebar from "./components/Sidebar";
import {API} from "./api";
import {useDispatch} from "react-redux";
import {fetchCombinations, fetchHomes, fetchLots} from "./actions";
import {Combination, Home, Lot} from "./common/types";

const WelcomePage = () => (
    <div>
        <h1>Welcome to Atmos!</h1>
    </div>
)

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        API.getHomePlans().then((homes: Home[]) => dispatch(fetchHomes(homes)))
        API.getLots().then((lots: Lot[]) => dispatch(fetchLots(lots)))
        API.getCombinations().then((combinations: Combination[]) => dispatch(fetchCombinations(combinations)))
    })

    return (
        <div>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/homes" element={<HomesPage/>}/>
                <Route path="/lots" element={<LotsPage/>}/>
            </Routes>

        </div>
    )
}

export default App;
