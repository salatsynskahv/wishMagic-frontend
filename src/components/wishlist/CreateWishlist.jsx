import React, {useState} from "react";
import Modal from "../utils/Modal";

export const CreateWishlist = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <button
                    className="bg-blue-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setShowModal(prevState => !prevState)}
                >
                    Open Modal
                </button>

                <Modal showModal={showModal} setShowModal={setShowModal}>
                </Modal>
            </div>

        </div>
    )
}