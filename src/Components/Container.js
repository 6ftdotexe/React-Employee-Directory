{/* Import all components and the api.js to access axios for the API call */ }
import React, { Component } from "react";
import Table from "./Table";
import Navbar from "./Navbar";
import API from "../utils/Api";
import { createPortal } from "react-dom";

class Container extends Component {
    state = {
        result: [],
        search: "",
        currentPage: ""
    };
    componentDidMount() {
        this.searchEmployee()
    };
    searchEmployee = () => {
        API.getUsers()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    };
    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    };
    sortByFirst = () => {
        let firstName = this.state.result.sort(compare)
        function compare(a, b) {
            const nameA = a.name.first.toUpperCase();
            const nameB = b.name.first.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                compare = -1;
            }
            return comparison;
        }
        this.setState({ result: firstName });
    };
    sortByLast = () => {
        let lastName = this.state.result.sort(compare)
        function compare(a, b) {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                compare = -1;
            }
            return comparison;
        }
        this.setState({ result: lastName });
    };

}