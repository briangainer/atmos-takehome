import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Combination, Home, Lot} from "../../common/types";

export const useHomesForModal = (combinations: Combination[], homes: Home[], lots: Lot[]) => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()

    const { id } = useParams();
    const handleClose = () => {
        setShow(false)
        navigate('/lots')
    };

    const compatibleIds = combinations.filter(combo => combo.lotId.toString() === id).map(combo => combo.homePlanId)
    const compatibleHomes = homes.filter(home => compatibleIds.includes(home.homePlanId))

    const title = lots.find(lot => lot.lotId.toString() === id)?.address

    return {compatibleHomes, title, show, handleClose}
}
