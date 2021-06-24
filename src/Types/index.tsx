export interface Route {
	name: string;
	path: string;
}

export interface HeaderProps {
	items: [Route, Route, Route];
	login: boolean;
}

export interface FooterProps {
	left: [Route?, Route?, Route?, Route?, Route?, Route?, Route?];
	center: [Route?, Route?, Route?, Route?, Route?, Route?, Route?];
	rigth: [Route?, Route?, Route?, Route?, Route?, Route?, Route?];
}

export interface LayoutProps {
	children: JSX.Element[] | JSX.Element;
}
