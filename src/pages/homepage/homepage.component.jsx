import React, { Component } from 'react';

import './homepage.styles.scss';

import { Link } from 'react-router-dom';
import BoxList from '../../components/box-list/box-list.component';

class HomePage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			active: false
		}
	}

	toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

	render() {
		return(
			<div className='homepage'>
				<div id='title'>
					<h1>Main</h1>
					<Link to={ this.state.active ? '/' : '/account' } onClick={ this.toggleClass }>
						<i className={ this.state.active ? 'arrow-down' : '' }></i>
						<label>Settings</label>
					</Link>
				</div>
				<BoxList bills={ this.props.bills } payday={ this.props.payday }/>
			</div>
		)
	}
}

export default HomePage;