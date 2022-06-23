import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)],

	server: {
		fsServe: {
			root: '../'
		}
	},

	ssr: false,

	kit: {
		adapter: adapter()
	}
};
