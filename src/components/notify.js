import React, { useState } from 'react';
import CloseIcon from "../assets/svg/close.svg";

function Notify() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="fixed inset-x-0 flex justify-center"> {/* Centering wrapper horizontally */}
            {isOpen && (
                <div className="bg-ghost dark:bg-brightgray p-4 bg-opacity-40 dark:bg-opacity-40 backdrop-blur-lg rounded-2xl items-center flex flex-col sm:flex-row justify-between">
                    <div className="mb-4 sm:mb-0 text-center sm:text-left">
                        <h1>Open to work! Check out my portfolio :) If you're interested, feel free to <a href="mailto:williamvdm@live.nl" className="underline">contact me</a>!</h1>
                    </div>
                    <button onClick={handleClose} className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none">
                        <img className="min-w-4 w-4" src={CloseIcon} alt="Close notification" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Notify;
