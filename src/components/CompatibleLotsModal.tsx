import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Combination, Home, Lot} from "../common/types";
import LotCard from "./LotCard";
import Modal from "../containers/Modal";

type Props = {
    combinations: Combination[],
    lots: Lot[],
    homes: Home[]
}

const CompatibleLotsModal = ({combinations, lots, homes}: Props) => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()

    const { id } = useParams();
    const handleClose = () => {
        setShow(false)
        navigate('/homes')
    };

    const compatibleIds = combinations.filter(combo => combo.lotId.toString() === id).map(combo => combo.lotId)
    const compatibleLots = lots.filter(lot => compatibleIds.includes(lot.lotId))
    const items = compatibleLots.map(lot => <LotCard key={lot.lotId} lot={lot} />)

    const title = homes.find(home => home.homePlanId.toString() === id)?.name

    return (
        <Modal title={`View Compatible Lots for ${title}`} show={show} onHide={handleClose} items={items}/>
    );
}

const mapStateToProps = (state: any) => ({
    combinations: state.combinations,
    lots: state.inventory.lots,
    homes: state.inventory.homes
})

export default connect(mapStateToProps)(CompatibleLotsModal)