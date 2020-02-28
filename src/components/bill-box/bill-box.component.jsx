import React from 'react';

import './bill-box.styles.scss'

const isPaid = paid => {
    if (paid === "paid") {
        return <i className="fa fa-check"></i>;
    } else {
        return "";
    }
} 

export const BillBox = props => (
    <div className={'billbox-container ' + (props.bill.type === "bill" ? 'bill' : 'to-receive') }>
        <h1>{props.bill.name}</h1>
        <p>{props.bill.date}</p>
        <p>{props.bill.paymentType}</p>
        <p><span>{props.bill.estimative}</span></p>
        <p><span>{props.bill.real}</span></p>
        <p>{isPaid(props.bill.status)}</p>
    </div>
)