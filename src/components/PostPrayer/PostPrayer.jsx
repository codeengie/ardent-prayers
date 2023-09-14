import { useContext } from 'react';
import ModalContext from '../../store/modal-context.jsx';
import './PostPrayer.scss';
import Button from '../Button/Button.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import FormTextArea from '../FormTextArea/FormTextArea.jsx';

const PostPrayer = () => {
	const ctxPostPrayer = useContext(ModalContext);
	const toggleClass = ctxPostPrayer.isModalOpen ? 'post-prayer post-prayer--show' : 'post-prayer';

	const handleSubmit = () => {
		console.log('Form submitted');
	}

	return (
		<div className={toggleClass}>
			<form className="post-prayer__form">
				<h2 className="post-prayer__form-title">Post A New Prayer</h2>
				<FormInput id="name" label="Name" type="text"/>
				<FormInput id="title" label="Title" type="text"/>
				<FormTextArea id="message" label="Message" maxCount="300"/>
			</form>
			<Button cName="post-prayer__button" onClick={handleSubmit} text="Post Prayer"/>
		</div>
	)
}

export default PostPrayer;
