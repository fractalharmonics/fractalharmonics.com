// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	site: "https://fractalharmonics.com",
  	base: "/",
	integrations: [
		starlight({
			title: 'Fractal Harmonics',
			plugins: [starlightThemeRapide()],
			customCss: [
		        './src/styles/custom.css',
			],
			tableOfContents: false,			
			//social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fractalharmonics' }],
			sidebar: [
				{
					label: 'Field Guide',
					items: [
						{ label: 'Orientation', slug: 'field-guide/orientation' },						
						{ label: 'Harmonic Series', slug: 'field-guide/harmonic-series' },
						{ label: 'Remembering', slug: 'field-guide/remembering' },
					],
				},
				{
					label: 'Lexicon',
					autogenerate: { directory: 'lexicon' },
				},
			],
		}),
	],
});