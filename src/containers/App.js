import React, { Component, Fragment } from 'react';
import UsersContainer from '../components/UsersContainer/UsersContainer.js';
import { ReactComponent as Logo } from '../assets/users-data-logo.svg';

import styles from './App.module.scss';

import { loadData } from '../data.js';

const URL = 'https://randomuser.me/api/?results=10';

class App extends Component {
	state = {
		isUsersDataContentReady: false,
		usersData: {},
	};

	componentDidMount() {
		console.log('[App] component did mount');
		(async () => {
			this.setState({
				isUsersDataContentReady: true,
				usersData: await loadData(URL),
			});
		})();
	}

	render() {
		console.log('[App] render');

		let content = <div>Please wait a moment, loading data ...</div>;
		if (this.state.isUsersDataContentReady) {
			content = <UsersContainer data={this.state.usersData} />;
		}

		return (
			<div className={styles.App}>
				<div className={styles.Logo}>
					<Logo />
					<h1>Browsing users data</h1>
				</div>
				<p>
					A deck of user cards from{' '}
					<a href='https://randomuser.me/' target='blank'>
						randomuser.me
					</a>
				</p>
				{content}
			</div>
		);
	}
}

export default App;