import React, { Component } from 'react'

import './bill-popup.styles.scss'

import CustomButton from '../custom-button/custom-button.components';
import { Link } from 'react-router-dom';

class BillPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bill: {
                "name": "",
                "estimative": "",
                "real": "",
                "date": "",
                "method": "",
                "status": "unpaid",
                "type" : ""
            }
        };
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state); 
    }

    handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        if (this.props.bill != null) {
            this.setState({ bill: this.props.bill })
            console.log(this.props.bill)
        }
    }
    
    render() {  
        return (  
            <div className='popup'>  
                <div className='inner'>
                    <span className='popup-button x' onClick={ this.props.closePopup } />
                    {console.log(this.props.bill)}
                    <h3>{ this.props.bill == null ? 'Add a New Bill' : 'Edit Bill' }</h3>
                    <form onSubmit={ this.handleSubmit }>
                        <div className='input-div'>
                            <label for='type'>Is it a bill or a money to receive?</label>
                            <select
                                name='type'
                                type='select'
                                onChange={this.handleChange}
                                value={this.state.bill.type}>
                                <option value="bill">Bill</option>
                                <option value="to receive">To Receive</option>
                            </select>
                        </div>
                        <div className='input-div'>
                            <label for='name'>Bill Name:</label>
                            <input 
                                name='name'
                                type='text'
                                text={ this.state.bill.name }
                                placeholder='i.e. Energy'
                                onChange={ this.handleChange }
                                value={ this.state.bill.name }
                                required
                            />
                        </div>
                        <div className='input-div'>
                            <label for='date'>Payment Day:</label>
                            <input 
                                name='date'
                                type='number'
                                placeholder='00'
                                text={ this.state.bill.date }
                                min='1' 
                                max='30'
                                onChange={ this.handleChange }
                                value={ this.state.bill.date }
                            />
                        </div>
                        <div className='input-div'>
                            <label for='method'>Payment Method:</label>
                            <input 
                                name='method'
                                type='text'
                                placeholder='i.e. Direct Debit'
                                text={ this.state.bill.method }
                                onChange={ this.handleChange }
                                value={ this.state.bill.method }
                                required
                            />
                        </div>
                        <div className='input-div'>
                            <label for='estimative'>Monthly Estimative Amount:</label>
                            <input 
                                name='estimative'
                                type='number'
                                placeholder='£0.00'
                                min='0'
                                onChange={ this.handleChange }
                                value={ this.state.bill.estimative }
                                required
                            />
                        </div>
                        <div className='input-div'>
                            <label for='real'>This Month Amount:</label>
                            <input 
                                name='real'
                                type='text'
                                placeholder='£0.00'
                                onChange={ this.handleChange }
                                value={ this.state.bill.real }
                                required
                            />
                        </div>
                        <div className='input-div'>
                            <label for='paid'>Is this bill paid?</label>
                            <input 
                                name='paid'
                                type='checkbox'
                                checked={ this.state.bill.status }
                                onChange={ this.handleChange }
                                value={ this.state.bill.status }
                            />
                        </div>
                        <CustomButton type='submit' value='Add Bill'  />
                        
                    </form>
                    
                </div>  
            </div>  
        );  
    }  
}

export default BillPopup;