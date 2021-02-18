import React, { Component } from 'react'
import Card from "../components/Card"
import API from "../utils/API"
import EmployeeInfo from "../components/EmployeeInfo"

export default class Home extends Component {
    state = {
        employee: [],
        displayed: [],
        search: ""
    }


    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = BASEURL => {
        API.search(BASEURL)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    handleSearch = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    };
    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <div>
                    <label>Search</label>
                    <input onChange={this.handleSearch} type="text" name="search" value={this.state.search} />
                    {this.state.employee.map(employee => <Card data={employee} onChange={this.handleSearch} />)}
                </div>
            </div>
        )
    }
}
