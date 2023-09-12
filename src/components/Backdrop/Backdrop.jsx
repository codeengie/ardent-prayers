import { useContext } from 'react';
import ModalContext from '../../store/modal-context.jsx';
import './Backdrop.scss';

const Backdrop = () => {
	const ctxBackdrop = useContext(ModalContext)
	const toggleClass = ctxBackdrop.isModalOpen ? 'backdrop backdrop--show' : 'backdrop'; // 'backdrop backdrop--show'

	return (
		<div className={toggleClass} onClick={ctxBackdrop.onModalClick}></div>
	)
}

export default Backdrop;
