import React, {useState} from "react";

import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {Combination, Home, Lot} from "../common/types";

import HomeCard from "./HomeCard";
import Modal from "../containers/Modal";

type Props = {
    combinations: Combination[]
    homes: Home[]
    lots: Lot[]
}

const CompatibleHomesModal = ({combinations, homes, lots}: Props) => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()

    let { id } = useParams();
    const handleClose = () => {
        setShow(false)
        navigate('/lots')
    };

    const compatibleIds = combinations.filter(combo => combo.lotId.toString() === id).map(combo => combo.homePlanId)
    const compatibleHomes = homes.filter(home => compatibleIds.includes(home.homePlanId))
    const items = compatibleHomes.map(home => <HomeCard key={home.homePlanId} home={home} />)

    const title = lots.find(lot => lot.lotId.toString() === id)?.address

    return (
        <Modal
            title={`View Compatible Homes for ${title}`}
            show={show}
            onHide={handleClose}
            items={items}
        />
    );
}

const mapStateToProps = (state: any) => ({
    combinations: state.combinations,
    homes: state.inventory.homes,
    lots: state.inventory.lots,
})

export default connect(mapStateToProps)(CompatibleHomesModal)