import React, { Component } from 'react'

import './bill-popup.styles.scss'

import CustomButton from '../custom-button/custom-button.components';
import { Link } from 'react-router-dom';

class NewBillPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state); 
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    render() {  
        return (  
            <div className='popup'>  
                <div className='inner'>
                    <i onClick={ this.props.closePopup }>X</i>
                    <h3>New Bill:</h3>
                    <form onSubmit={ this.handleSubmit }>
                        <div className='input-div'>
                            <label for='bill'>Bill Name:</label>
                            <input 
                            name='bill'
                            type='text'
                            placeholder='bill'
                            onChange={ this.handleChange }
                            value={ this.state.bill }
                            required />
                        </div>
                        <div className='input-div'>
                            <label for='bill'>Bill Name:</label>
                            <input 
                            name='bill'
                            type='text'
                            placeholder='bill'
                            onChange={ this.handleChange }
                            value={ this.state.bill }
                            required />
                        </div>
                        <div className='input-div'>
                            <label for='date'>Payment Day:</label>
                            <input 
                            name='date'
                            type='number'
                            placeholder='00' 
                            min='1' 
                            max='30'
                            onChange={ this.handleChange }
                            value={ this.state.date }
                            required />
                        </div>
                        <div className='input-div'>
                            <label for='method'>Payment Method:</label>
                            <input 
                            name='method'
                            type='text'
                            placeholder='Bank Transfer'
                            onChange={ this.handleChange }
                            value={ this.state.method }
                            required />
                        </div>
                        <div className='input-div'>
                            <label for='estimative'>Monthly Estimative Amount:</label>
                            <input 
                            name='estimative'
                            type='number'
                            placeholder='£0.00'
                            min='0'
                            onChange={ this.handleChange }
                            value={ this.state.estimative }
                            required />
                        </div>
                        <div className='input-div'>
                            <label for='real'>This Month Amount:</label>
                            <input 
                            name='real'
                            type='text'
                            placeholder='Bank Transfer'
                            onChange={ this.handleChange }
                            value={ this.state.real }
                            required />
                        </div>
                        <div className='input-div'>
                            <label for='status'>Is this bill paid?</label>
                            <input 
                            name='status'
                            type='checkbox'
                            placeholder='Bank Transfer'
                            onChange={ this.handleChange }
                            value={ this.state.method }
                            required />
                        </div>
                        <CustomButton type='submit' value='Add Bill'  />
                        
                    </form>
                    
                </div>  
            </div>  
        );  
    }  
}

export default NewBillPopup;