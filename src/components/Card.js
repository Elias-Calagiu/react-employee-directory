import React from 'react'
import EmployeeInfo from './EmployeeInfo'

export default function Card(props) {
    return (
        <div className="myCards">
            <EmployeeInfo data={props.data} onChange={props.onChange}/>
        </div>
    )
}
