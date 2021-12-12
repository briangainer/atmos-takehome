import React from "react";
import {connect} from "react-redux";
import {Combination, Home, Lot} from "../common/types";
import LotCard from "./LotCard";
import Modal from "../containers/Modal";
import {useLotsForModal} from "./hooks/useLotsForModal";

type Props = {
    combinations: Combination[],
    lots: Lot[],
    homes: Home[]
}

const CompatibleLotsModal = ({combinations, lots, homes}: Props) => {
    const {compatibleLots, title, show, handleClose} = useLotsForModal(combinations, lots, homes)

    const items = compatibleLots.map(lot => <LotCard key={lot.lotId} lot={lot} />)

    return <Modal title={`View Compatible Lots for ${title}`} show={show} onHide={handleClose} items={items}/>
}

const mapStateToProps = (state: any) => ({
    combinations: state.combinations,
    lots: state.inventory.lots,
    homes: state.inventory.homes
})

export default connect(mapStateToProps)(CompatibleLotsModal)
