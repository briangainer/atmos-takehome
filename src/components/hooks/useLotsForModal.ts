import {Combination, Home, Lot} from "../../common/types";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const useLotsForModal = (combinations: Combination[], lots: Lot[], homes: Home[]) => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()

    const { id } = useParams();
    const handleClose = () => {
        setShow(false)
        navigate('/homes')
    };

    const compatibleIds = combinations.filter(combo => combo.homePlanId.toString() === id).map(combo => combo.lotId)
    const compatibleLots = lots.filter(lot => compatibleIds.includes(lot.lotId))

    const title = homes.find(home => home.homePlanId.toString() === id)?.name

    return {compatibleLots, title, show, handleClose}
}
