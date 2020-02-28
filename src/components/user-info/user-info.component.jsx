import React, { Component } from 'react';

import './user-info.styles.scss';
import { Link } from 'react-router-dom';
import HOMEPAGE_DATA from '../../pages/homepage/homepage.data';

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = HOMEPAGE_DATA
    }
    
    handleSubmit = event => {
        event.preventDefault();
        /*this.setState({ payday: "" }, console.log(this.state)); */
    }

    handleChange = event => {
        const { value } = event.target;
        /*this.setState({ payday: value });*/
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>Please provide your payment day:</label>
                <input 
                    name='payday' 
                    type='number' 
                    placeholder='00' 
                    min='1' 
                    max='30'
                    onChange={ this.handleChange }
                    value={ this.state.payday }
                    required
                />
                <Link to="/">
                    <input type='submit' value='Submit Form'/>
                </Link>
            </form>
        )
    }
}

export default UserInfo;