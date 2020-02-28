import React, { Component } from 'react';

import './bill-box.styles.scss';

import BillPopup from '../../components/bill-popup/bill-popup.component'

class BillBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        }
    }
    isPaid = paid => {
        if (paid === "paid") {
            return <i className="fa fa-check"></i>;
        } else {
            return "";
        }
    }

    togglePopup() {
        this.setState({  
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return(
            <div>
                <div 
                className={'billbox-container ' + (this.props.bill.type === "bill" ? 'bill' : 'to-receive') }
                onClick={ this.togglePopup.bind(this) }
                >
                    <h1>{this.props.bill.name}</h1>
                    <p>{this.props.bill.date}</p>
                    <p>{this.props.bill.method}</p>
                    <p><span>{this.props.bill.estimative}</span></p>
                    <p><span>{this.props.bill.real}</span></p>
                    <p>{this.isPaid(this.props.bill.status)}</p>
                </div>
                <div>
                    { this.state.showPopup ?  
                        <BillPopup  
                            closePopup={ this.togglePopup.bind(this) }
                            bill={ this.props.bill }
                        />  
                    : null  }
                </div>
            </div>
        )
    }
}

export default BillBox