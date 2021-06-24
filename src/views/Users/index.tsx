import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import './index.css';

const Users = ({ getUsers, users, loading, newPage }: any) => {
	const handleClickUsers = () => {
		getUsersHome();
	};

	const getUsersHome = async () => {
		try {
			await getUsers(newPage);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsersHome();
		return () => {
			getUsersHome();
		};
	}, []);

	console.log(users, newPage, loading);

	return (
		<div className='users'>
			<div className='users__container'>
				{loading ? (
					<p className='users__container__loading'>Loading...</p>
				) : (
					<ul className='users__container__list'>
						{users.map((item: any) => (
							<li key={item.id} className='users__container__list__item'>
								<img
									src={item.avatar}
									alt={item.first_name}
									className='users__container__list__item__img'
								/>
								<p className='users__container__list__item__name'>
									{item.first_name} {item.last_name}
								</p>
								<p className='users__container__list__item__email'>
									{item.email}
								</p>
							</li>
						))}
					</ul>
				)}
				<div className='users__container__button'>
					<button className='users__container__more'>Volver</button>
					{newPage < 3 && (
						<button
							onClick={handleClickUsers}
							className='users__container__more'
						>
							Ver más
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (reducers: any) => {
	const { usersReducer } = reducers;
	return usersReducer;
};

const mapDispatchToProps = {
	...usersActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
