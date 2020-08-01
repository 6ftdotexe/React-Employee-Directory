import React from "react";

export default function Navbar(props) {
    if (typeof props.currentPage === "string") {
        return (
            <nav className="navbar navbar-light bg-white font-weight-bold text-uppercase">
                <a href="#home" className="alert alert-dark" onclick={() => props.handlePageChange("")}>Home</a>
                <header className="header text-dark">Employee Directory</header>
                <form className="form-inline">
                    <input
                        value={props.currentPage}
                        name="currentPage"
                        onChange={props.handleInputChange}
                        type="text" placeholder="Search Name" />
                </form>
            </nav>
        )
    }
    else {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#home" className="alert alert-dark justify-content-center" onClick={() => props.handlePageChange("")}>Home</a>
            </nav>
        )
    }
}