import { useContext } from 'react';
import ModalContext from '../../store/modal-context.jsx';
import './PostPrayer.scss';
import Button from '../Button/Button.jsx';
import FormInput from '../FormInput/FormInput.jsx';
import useInput from '../../hooks/use-input.jsx';
import FormTextArea from '../FormTextArea/FormTextArea.jsx';
import PrayersContext from '../../store/prayers-context.jsx';

// Put this outside because it's not a function that requires to be rebuilt if the component is rebuilt
const isInputEmpty = value => value.trim() !== '';

const PostPrayer = () => {
	const ctxModal = useContext(ModalContext);
	const ctxPrayers = useContext(PrayersContext);
	const toggleClass = ctxModal.isModalOpen ? 'post-prayer post-prayer--show' : 'post-prayer';
	let formIsValid = false;

	// Name input
	const {
		inputValue: nameValue,
		inputIsInvalid: nameIsInvalid,
		handleBlur: nameHandleBlur,
		handleChange: nameHandleChange,
		handleFocus: nameHandleFocus,
		reset: nameReset
	} = useInput(isInputEmpty);

	// Title input
	const {
		inputValue: titleValue,
		inputIsInvalid: titleIsInvalid,
		handleBlur: titleHandleBlur,
		handleChange: titleHandleChange,
		handleFocus: titleHandleFocus,
		reset: titleReset
	} = useInput(isInputEmpty);

	// Message textarea
	const {
		inputValue: messageValue,
		inputIsInvalid: messageIsInvalid,
		handleBlur: messageHandleBlur,
		handleChange: messageHandleChange,
		handleFocus: messageHandleFocus,
		reset: messageReset
	} = useInput(isInputEmpty);

	// Check if form is valid
	if (nameValue && titleValue && messageValue) {
		formIsValid = true;
	}

	// Submit form
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		// Create form data object
		const formData = {
			formName: nameValue,
			formTitle: titleValue,
			formMessage: messageValue
		}

		// Invoke API and post prayer
		const response = await ctxPrayers.postNewPrayer(formData);

		// If there was an error posting the prayer, let the user know to try again
		if (response !== '200') {
			return;
		}

		// Reset form fields
		nameReset();
		titleReset();
		messageReset();

		// Close the form
		ctxModal.onModalClick();
	}

	return (
		<div className={toggleClass}>
			<form className="post-prayer__form">
				<h2 className="post-prayer__form-title">Post A New Prayer</h2>
				<FormInput
					id="name"
					hasError={nameIsInvalid}
					label="Name"
					onBlur={nameHandleBlur}
					onChange={nameHandleChange}
					onFocus={nameHandleFocus}
					value={nameValue}
					type="text"
				/>
				<FormInput
					id="title"
					hasError={titleIsInvalid}
					label="Title"
					onBlur={titleHandleBlur}
					onChange={titleHandleChange}
					onFocus={titleHandleFocus}
					value={titleValue}
					type="text"
				/>
				<FormTextArea
					id="message"
					hasError={messageIsInvalid}
					label="Message"
					maxCount="300"
					onBlur={messageHandleBlur}
					onChange={messageHandleChange}
					onFocus={messageHandleFocus}
					value={messageValue}
				/>
			</form>
			<Button cName="post-prayer__button" disableButton={!formIsValid} onClick={handleSubmit} text="Post Prayer"/>
		</div>
	)
}

export default PostPrayer;
