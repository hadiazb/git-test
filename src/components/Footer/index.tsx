import React from 'react';
import { Link } from 'react-router-dom';

import { FooterProps } from '../../Types/index';
import './index.css';

const Footer = ({ left, center, rigth }: FooterProps) => {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<nav className='footer__container__nav'>
					<ul className='items'>
						{left.map((item, index) => (
							<li key={index}>
								<Link to='/'>{item?.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<nav className='footer__container__nav'>
					<ul className='items'>
						{center.map((item, index) => (
							<li key={index}>
								<Link to='/'>{item?.name}</Link>
							</li>
						))}
					</ul>
				</nav>
				<nav className='footer__container__nav'>
					<ul className='items'>
						{rigth.map((item, index) => (
							<li key={index}>
								<Link to='/'>{item?.name}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
