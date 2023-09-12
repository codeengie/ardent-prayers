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
