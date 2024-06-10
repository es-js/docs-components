import { resolve } from 'path'

export default {
	title: 'EsJS Docs Components',
	description: 'Componentes para interactuar con Editor EsJS y Ejecutar EsJS',
	themeConfig: {
		logo: 'https://es.js.org/assets/logo.png',
		repo: 'https://github.com/es-js/docs-components',
		outline: [1, 3],
		sidebar: [
			{
				text: '@es-js/docs-components',
				items: [
					{ text: 'Introduction', link: '/' },
					{ text: 'Getting Started', link: '/guide/' },
				],
			},
			{
				text: 'Componentes',
				items: [
					{ text: 'EsEditor', link: '/components/es-editor' },
          { text: 'EsEjecutar', link: '/components/es-ejecutar' },
				],
			},
		],
	},
	vite: {
		resolve: {
			alias: {
				'@es-js/docs-components': resolve(__dirname, '../../src'),
			},
			dedupe: ['vue'], // avoid error when using dependencies that also use Vue
		},
	},
}
