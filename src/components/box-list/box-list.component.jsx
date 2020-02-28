import React, { Component } from 'react';

import { BillBox } from '../bill-box/bill-box.component';

import './box-list.styles.scss'
import NewBillPopup from '../bill-popup/bill-popup.component';

class BoxList extends Component {
    constructor(props) {
        super(props);

        this.state = { showPopup: false };
    }

    sortBills = (bills, payday) => {
        let sorted = bills.sort((a, b) => this.dateAdjust(a.date, payday) - this.dateAdjust(b.date, payday));
        return sorted.sort((a, b) => (b.type > a.type) ? 1 : ((a.type > b.type) ? -1 : 0));    
    }

    dateAdjust = (date, payday) => {
        let adjusted = parseInt(date);
        if(adjusted < payday) { adjusted = adjusted + 30 }
        return adjusted;
    }

    togglePopup() {
        this.setState({  
            showPopup: !this.state.showPopup
        });  
    }

    render() {
        return(
            <div className='box-list'>
                <div className='list-title'>
                    <h1>Bill</h1>
                    <h2>Date</h2>
                    <h2>Method</h2>
                    <h2>Estim.</h2>
                    <h2>Real</h2>
                    <h2>Status</h2>
                </div>
                { this.props.bills != '' ? 
                this.sortBills(this.props.bills, this.props.payday).map(bill => (
                    <BillBox key={bill.name} bill={bill}/>
                )) : <div className='no-bills'>You have no registered bills.</div> }
                <button onClick={this.togglePopup.bind(this)}> + </button>
                { this.state.showPopup ?  
                    <NewBillPopup  
                        closePopup={this.togglePopup.bind(this)}  
                    />  
                : null  }  
            </div>
        )
    }
}

export default BoxList