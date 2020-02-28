import React, { Component } from 'react';

import './homepage.styles.scss';

import { Link } from 'react-router-dom';
import BoxList from '../../components/box-list/box-list.component';
import BillPopup from '../../components/bill-popup/bill-popup.component'

class HomePage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			active: false,
			showPopup: false
		}
	}

	toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
	};

    togglePopup() {
        this.setState({  
            showPopup: !this.state.showPopup
        });  
    }

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
				<span className='popup-button +' onClick={this.togglePopup.bind(this)} />
                { this.state.showPopup ?  
                    <BillPopup  
						closePopup={ this.togglePopup.bind(this) }
                    />  
                : null  }  
			</div>
		)
	}
}

export default HomePage;