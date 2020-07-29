import React from "react";

function Table(props) {
    if (props.currentPage === "") {
        return (
            <table className="header">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><a href="name" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="name" onClick={() => props.sortByLast()}>Last Name</a></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
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
            <table className="header">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><a href="#name" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="#name" onClick={() => props.sortByLast()}>Last Name</a></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        matches.map(result => (
                            <tr key={result.cell}>
                                <th scope="row">
                                    <a href="#singlePage" onClick={() => props.handlePageChange({ result })}>
                                        <img src={result.pictures.thumbnail} className="picture" alt="http://placekitten.com/200/300"></img>
                                    </a>
                                </th>
                                <td>{result.name.first}</td>
                                <td>{result.name.last}</td>
                                <td>{result.cell}</td>
                                <td>{result.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}