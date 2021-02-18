import React, { Component } from 'react'
import Card from "../components/Card"
import API from "../utils/API"
import EmployeeInfo from "../components/EmployeeInfo"

export default class Home extends Component {
    state = {
        employee: [],
        // displayed: [],
        search: ""
    }

   
    componentDidMount() {
        this.randomEmployees();
    }
    randomEmployees = () => {
        API.search()
            .then(res => this.setState({ employee: res.data.results}))
            .catch(err => console.log(err));
        
    };
    
    

    handleSearch = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        })
    //     const id=event.target.getAttribute("data-id");
    //     const stateCopy=[...this.state.employee]
    //     stateCopy.forEach(obj=>{
    //         if(obj.id==id){
    //             obj[name]=value
    //         }
    //     })
    //     // this.setState({employee:stateCopy})
    }
    


    handleFormSubmit = event => {
        event.preventDefault();
        this.handleSearch(this.state.search);
    };
    render() {
        return (
            <div>
                <h1>Employee Directory</h1>
                <div>
                    <input onChange={this.handleSearch} type="text" name="search" value={this.state.search} />
                    <button onClick={this.handleFormSubmit} className="btn btn-primary">
                        Search
                    </button>
                    {this.state.employee.map(employee => <Card data={employee} onChange={this.handleSearch} />)}
                    
                </div>
            </div>
        )
    }

}
