import React from "react";
import {connect} from "react-redux";
import {Combination, Home, Lot} from "../common/types";
import HomeCard from "./HomeCard";
import Modal from "../containers/Modal";
import {useHomesForModal} from "./hooks/useHomesForModal";

type Props = {
    combinations: Combination[]
    homes: Home[]
    lots: Lot[]
}

const CompatibleHomesModal = ({combinations, homes, lots}: Props) => {
    const {compatibleHomes, title, show, handleClose} = useHomesForModal(combinations, homes, lots)

    const items = compatibleHomes.map(home => <HomeCard key={home.homePlanId} home={home}/>)

    return <Modal title={`View Compatible Homes for ${title}`} show={show} onHide={handleClose} items={items} />
}

const mapStateToProps = (state: any) => ({
    combinations: state.combinations,
    homes: state.inventory.homes,
    lots: state.inventory.lots,
})

export default connect(mapStateToProps)(CompatibleHomesModal)
