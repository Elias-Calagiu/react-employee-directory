import React, { Component } from 'react'
import Card from "../components/Card"


export default class Home extends Component {
state = {
    employee: [],
    displayed: [],
    search:""
}

  
  componentDidMount() {
    this.searchEmployees();
  }

  
    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <div>
               
            </div>
            </div>
        )
    }
}
