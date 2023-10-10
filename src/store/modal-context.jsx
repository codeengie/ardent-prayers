/**
 * The modal-context is crude in that it just simply toggles a boolean to show or display. A future iteration
 * should allow an in between stage when it closes.
 * @todo Extend modal to fade in/out and removing itself as to not affect other dom elements
 */

import React, { useState } from 'react';

const ModalContext = React.createContext({
	isModalOpen: false
});

export const ModalContextProvider = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalState = () => {
		document.body.classList.toggle('noscroll');
		setIsModalOpen(!isModalOpen);
	}

	return <ModalContext.Provider value={{isModalOpen: isModalOpen, onModalClick: handleModalState}}>{props.children}</ModalContext.Provider>
}

export default ModalContext;
