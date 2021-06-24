import { HeaderProps, FooterProps } from '../../Types/index';

export const HeaderProperties: HeaderProps = {
	items: [
		{ name: 'Home', path: '/' },
		{ name: 'Usuarios', path: '/users' },
		{ name: 'Details', path: '/' },
	],
	login: true,
};

export const FooterProperties: FooterProps = {
	left: [
		{ name: 'Home', path: '/' },
		{ name: 'Usuarios', path: '/' },
		{ name: 'Details', path: '/' },
	],
	center: [
		{ name: 'Home', path: '/' },
		{ name: 'Usuarios', path: '/' },
		{ name: 'Details', path: '/' },
	],
	rigth: [
		{ name: 'Home', path: '/' },
		{ name: 'Usuarios', path: '/' },
		{ name: 'Details', path: '/' },
	],
};
