import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Home from '../views/Home/index';
import Users from '../views/Users/index';
import NotFound from '../views/NotFound/index';

const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/users' component={Users} />
					<Route exact path='/*' component={NotFound} />
				</Switch>
			</Layout>
		</Router>
	);
};

export default App;
