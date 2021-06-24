import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import { HeaderProps } from '../../Types/index';

const Header = ({ items, login }: HeaderProps) => {
	return (
		<div className='header'>
			<div className='header__container'>
				<p className='header__container__logo'>Logo</p>
				<nav className='header__container__nav'>
					<ul className='items'>
						{items.map((item, index) => (
							<li key={index}>
								<Link to={item.path}>{item.name}</Link>
							</li>
						))}
						{login ? (
							<li>
								<Link to='/login'> Login</Link>
							</li>
						) : (
							<li>
								<Link to='/logout'> Logout</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
