import React, { Fragment } from 'react';

import Header from '../Header/index';
import Footer from '../Footer/index';

import { LayoutProps } from '../../Types/index';
import { HeaderProperties, FooterProperties } from './Properties';

const Layout = ({ children }: LayoutProps) => {
	return (
		<Fragment>
			<Header {...HeaderProperties} />
			{children}
			<Footer {...FooterProperties} />
		</Fragment>
	);
};

export default Layout;
