import React from "react";

function Table(props) {
    if (props.currentPage === "") {
        return (
            <table className="header table table-white">
                <thead className="thead-white">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByLast()}>Last Name</a></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByCity()}>City</a></th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByCountry()}>Country</a></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.results.map(result => (
                            <tr key={result.cell}>
                                <th scope="row">
                                    <a href="#singlePage" onClick={() => props.handlePageChange({ result })}>
                                        <img src={result.picture.thumbnail} className="picture" alt="http://placekitten.com/200/300"></img>
                                    </a>
                                </th>
                                <td>{result.name.first}</td>
                                <td>{result.name.last}</td>
                                <td>{result.cell}</td>
                                <td>{result.email}</td>
                                <td>{result.location.street.number} {result.location.street.name}</td>
                                <td>{result.location.city}</td>
                                <td>{result.location.country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    } else if (typeof props.currentPage === "string") {
        let matches = props.results.filter(result => {
            return (result.name.first + " " + result.name.last).substring(0, props.currentPage.length).toLowerCase() === props.currentPage.toLowerCase();
        })
        return (
            <table className="header table table-white">
                <thead className="thead-white">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByLast()}>Last Name</a></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByCity()}>City</a></th>
                        <th scope="col"><a href="#name" className="alert alert-white" onClick={() => props.sortByCountry()}>Country</a></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map(result => (
                            <tr key={result.cell}>
                                <th scope="row">
                                    <a href="#singlePage" className="" onClick={() => props.handlePageChange({ result })}>
                                        <img src={result.picture.thumbnail} className="picture" alt="http://placekitten.com/200/300"></img>
                                    </a>
                                </th>
                                <td>{result.name.first}</td>
                                <td>{result.name.last}</td>
                                <td>{result.cell}</td>
                                <td>{result.email}</td>
                                <td>{result.location.street.number} {result.location.street.name}</td>
                                <td>{result.location.city}</td>
                                <td>{result.location.country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    } else {
        return (
            <div>
                <div className="card mb-3 bg-light">
                    <div className="row no-gutters">
                        <div className="photo col-md-4">
                            <img src={props.currentPage.result.picture.large} className="card-img border border-dark" alt="http://placekitten.com/200/300" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text">Username: {props.currentPage.result.login.username}</p>
                                <p className="card-text">Name: {props.currentPage.result.name.first} {props.currentPage.result.name.last}</p>
                                <p className="card-text">Phone Number: {props.currentPage.result.cell}</p>
                                <p className="card-text">Email: {props.currentPage.result.email}</p>
                                <p className="card-text">Address: {props.currentPage.result.location.street.number} {props.currentPage.result.location.street.name}</p>
                                <p className="card-text">City: {props.currentPage.result.location.city}</p>
                                <p className="card-text">Country: {props.currentPage.result.location.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;