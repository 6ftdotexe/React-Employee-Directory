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
    }
    sortByCity = () => {
        let City = this.state.result.sort(compare)
        function compare(a, b) {
            const cityA = a.location.city.toUpperCase();
            const cityB = b.location.city.toUpperCase();
            let comparison = 0;
            if (cityA > cityB) {
                comparison = 1;
            } else if (cityA < cityB) {
                comparison = -1;
            }
            return comparison;
        }
        this.setState({ result: City })
    }
    sortByCountry = () => {
        let Country = this.state.result.sort(compare)
        function compare(a, b) {
            const countryA = a.location.country.toUpperCase();
            const countryB = b.location.country.toUpperCase();
            let comparison = 0;
            if (countryA > countryB) {
                comparison = 1;
            } else if (countryA < countryB) {
                comparison = -1;
            }
            return comparison;
        }
        this.setState({ result: Country })
    }
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
                        sortByCity={this.sortByCity}
                        sortByCountry={this.sortByCountry}
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