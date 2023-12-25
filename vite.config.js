/**
 * Modified the original build config to output different `index.html` files based on environment. Although,
 * I did manage to accomplish the task with `vite-plugin-html` it appears this plugin is no longer maintained
 * and does not rename the output template html file. Plus, it also includes the template directory into the
 * 'dist' folder. I worked around this by placing the prod version of `index.html` in the root, its Mickey Mouse
 * but it will do for now. @todo Find a suitable replacement for 'vite-plugin-html'
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * Review "Configuring Vite" page if you need to add conditional
 * changes to configuration.
 * @link https://vitejs.dev/config/
 * @link https://vitejs.dev/guide/env-and-mode.html
 */

// Build config
let params = {
	template: 'src/templates/index.dev.html',
	inject: {
		data: {
			title: 'Ardent Prayers - Share Your Prayers and Find Support',
			desc: 'Join our online prayer wall to connect with a community of believers. Share your prayers, find support, and uplift others in faith. Experience the power of collective prayer.',
			url: 'https://ardentprayers.com',
			image: 'https://ardentprayers.com/app.jpg',
			keywords: 'Prayer wall, online prayer community, prayer support, collective prayer, faith community, spiritual connection, prayer requests, spiritual growth, faith journey'
		}
	}
};

// Vite config
let options = {
	plugins: [
		react(),
		createHtmlPlugin(params)
	]
};

export default defineConfig(({ command, mode }) => {
	if (mode === 'production') {
		params.template = 'index.html';
		params.inject.data.bots = `<meta name="robots" content="index, follow">`;
		params.inject.data.gtag = `
			<script defer src="https://www.googletagmanager.com/gtag/js?id=G-YV2ZE1LRM0"></script>
			<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YV2ZE1LRM0');</script>
		`;
	}

	return options;
});
