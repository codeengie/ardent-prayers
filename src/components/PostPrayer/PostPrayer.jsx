import { useContext, useState } from 'react';
import ModalContext from '../../store/modal-context.jsx';
import './PostPrayer.scss';
import Button from '../Button/Button.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import FormTextArea from '../FormTextArea/FormTextArea.jsx';

const PostPrayer = () => {
	const ctxPostPrayer = useContext(ModalContext);
	const toggleClass = ctxPostPrayer.isModalOpen ? 'post-prayer post-prayer--show' : 'post-prayer';

	// Set the initial state of the inputs
	const [inputValue, setInputValue] = useState({ name: '', title: '', message: '' });
	const { name, title, message } = inputValue;

	// This single method handles setting the input value for all fields
	const handleChange = event => {
		// Using spread syntax to add our field properties and set value using field name
		setInputValue({
			...inputValue,
			[event.target.name]: event.target.value
		});
	}

	const handleSubmit = () => {
		console.log('Form submitted', name, title, message);
	}

	return (
		<div className={toggleClass}>
			<form className="post-prayer__form">
				<h2 className="post-prayer__form-title">Post A New Prayer</h2>
				<FormInput
					id="name"
					label="Name"
					onChange={handleChange}
					value={name}
					type="text"
				/>
				<FormInput
					id="title"
					label="Title"
					onChange={handleChange}
					value={title}
					type="text"
				/>
				<FormTextArea
					id="message"
					label="Message"
					maxCount="300"
					onChange={handleChange}
					value={message}
				/>
			</form>
			<Button cName="post-prayer__button" onClick={handleSubmit} text="Post Prayer"/>
		</div>
	)
}

export default PostPrayer;
