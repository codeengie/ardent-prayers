import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = (props) => {
	return (
		<ReCAPTCHA
			className={props.cName}
			onChange={props.onChange}
			ref={props.refVal}
			sitekey={props.apikey}
		/>
	)
}

export default Recaptcha;
