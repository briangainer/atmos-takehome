import React, {useEffect, useState} from 'react';

import {Routes, Route, useNavigate, useParams, useLocation} from "react-router-dom";
import './App.css';
import HomesPage from "./components/HomesPage";
import LotsPage from "./components/LotsPage";
import Sidebar from "./components/Sidebar";
import {API} from "./api";
import {useDispatch} from "react-redux";
import {fetchCombinations, fetchHomes, fetchLots} from "./actions";
import {Combination, Home, Lot} from "./common/types";
import CompatibleLotsModal from "./components/CompatibleLotsModal";
import CompatibleHomesModal from "./components/CompatibleHomesModal";

const WelcomePage = () => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
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
                <Route path="/homes" element={<HomesPage/>}>
                    <Route path=":id" element={<CompatibleLotsModal />} />
                </Route>
                <Route path="/lots" element={<LotsPage/>}>
                    <Route path=":id" element={<CompatibleHomesModal />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;
