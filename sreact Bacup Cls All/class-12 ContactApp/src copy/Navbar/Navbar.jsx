import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link className="navbar-brand" to='/'>Contact App Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"> <Link className="nav-link" to="/contacts">Contact App</Link></li>
                        <li className="nav-list"> <Link className="nav-link" to="/contacts1">Contact App1</Link></li> {/* 111111 */}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
