import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';

const Home = () => {
	return (
		<div>
			<p>Home</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
