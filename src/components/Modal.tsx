import React from 'react'
import {useNavigate, useParams} from "react-router-dom";

const Modal = () => {
    let navigate = useNavigate();
    let { id } = useParams<"id">();

    let buttonRef = React.useRef<HTMLButtonElement>(null);

    function onDismiss() {
        navigate(-1);
    }

    // if (!image) return null;

    return (
        <div
            aria-labelledby="label"
        >
            <div
                style={{
                    display: "grid",
                    justifyContent: "center",
                    padding: "8px 8px"
                }}
            >
                <h1 id="label" style={{ margin: 0 }}>
                    Hi!!!!
                </h1>

                <button
                    style={{ display: "block" }}
                    ref={buttonRef}
                    onClick={onDismiss}
                >
                    Close
                </button>
            </div>
        </div>
    );
}
export default Modal
