import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/prueba-actividad-2' : '';

const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: basePath
		}
	}
};

export default config;
