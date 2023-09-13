import { useContext } from 'react';
import ModalContext from '../../store/modal-context.jsx';
import './PostPrayer.scss';
import Button from '../Button/Button.jsx';
import FormInput from '../FormInput/FormInput.jsx';

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
				<div className="post-prayer__form-wrap">
					<label className="post-prayer__form-label" htmlFor="message">Message</label>
					<textarea className="post-prayer__form-textarea" id="message" maxLength="300"></textarea>
				</div>
			</form>
			<Button cName="post-prayer__button" onClick={handleSubmit} text="Post Prayer"/>
		</div>
	)
}

export default PostPrayer;
