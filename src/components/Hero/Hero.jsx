import './Hero.scss';

/**
 * Import all hero images
 * @link https://vitejs.dev/guide/features.html#glob-import
 */
const images = import.meta.glob('../../assets/images/hero-*w.webp');
const breakpoints = [];

// Iterate over the keys of the image object
for (const path in images) {
	images[path]().then(image => {
		let imgData = {};
		const matched = image.default.match(/\d+/); // `match()` returns an array

		imgData.width = matched[0];
		imgData.path = image.default;

		breakpoints.push(imgData);
	});
}

const Hero = () => {
	const imageSizes = breakpoints
		.map(breakpoint => `(max-width: ${breakpoint.width}px) ${breakpoint.width}w`).toString();
	const imageSources = breakpoints
		.map(breakpoint => `${breakpoint.path} ${breakpoint.width}w`).toString();
	const fallback = breakpoints.find(element => element.width === '1200');

	return (
		<div className="hero">
			<img
				alt="A man praying with his head down, hands closed together with fingers crossed."
				className="hero__bg"
				height="200"
				sizes={imageSizes}
				srcSet={imageSources}
				src={fallback.path}
				width="286"
			/>
			<blockquote className="hero__verse">
				<p className="hero__text">Don&rsquo;t worry about anything; instead, pray about everything.</p>
				<cite className="hero__book">Philippians 4:6 NLT</cite>
			</blockquote>
		</div>
	)
}

export default Hero;
