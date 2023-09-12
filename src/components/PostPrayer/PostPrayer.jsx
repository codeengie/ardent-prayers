import './PostPrayer.scss';
import Button from '../Button/Button.jsx';

const PostPrayer = () => {
	const handleSubmit = () => {
		console.log('Form submitted');
	}

	return (
		<div className="post-prayer">
			<form className="post-prayer__form">
				<h2 className="post-prayer__form-title">Post A New Prayer</h2>
				<div className="post-prayer__form-wrap">
					<label className="post-prayer__form-label" htmlFor="name">Name</label>
					<input className="post-prayer__form-field" id="name" type="text"/>
				</div>
				<div className="post-prayer__form-wrap">
					<label className="post-prayer__form-label" htmlFor="title">Title</label>
					<input className="post-prayer__form-field" id="title" type="text"/>
				</div>
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
