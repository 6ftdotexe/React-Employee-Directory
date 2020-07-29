import React from "react";

export default function Navbar(props) {
    if (typeof props.currentPage === "string") {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#home" onclick={() => props.handlePageChange("")}>Home</a>
                <form className="form">
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
                <a href="#home" onClick={() => props.handlePageChange("")}>Home</a>
            </nav>
        )
    }
}