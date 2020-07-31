import React, { Component } from "react";
import Api from "../utils/Api";
import Table from "./Table";
import Navbar from "./Navbar";

class Container extends Component {
    state = {
        result: [],
        search: "",
        currentPage: ""
    }
    componentDidMount() {
        this.searchEmployee()
    }
    searchEmployee = () => {
        Api.getUsers()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    }
    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    };

    handleInputChange = (event) => {
        this.handlePageChange(event.target.value)
    }

    sortByFirst = () => {
        let firstName = this.state.result.sort(compare)
        function compare(a, b) {
            const nameA = a.name.first.toUpperCase();
            const nameB = b.name.first.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        this.setState({ result: firstName })
    }
    sortByLast = () => {
        let lastName = this.state.result.sort(compare)
        function compare(a, b) {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        this.setState({ result: lastName });
    };

    render() {
        if (this.state.result) {
            return (
                <div className="container-sm">
                    <Navbar
                        handlePageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                        handleInputChange={this.handleInputChange}
                    />
                    <Table
                        results={this.state.result}
                        handlePageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                        sortByFirst={this.sortByFirst}
                        sortByLast={this.sortByLast}
                    />
                </div>
            )
        }
        else {
            return <div>No Results</div>
        }
    };

};

export default Container;