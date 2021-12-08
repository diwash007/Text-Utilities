import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
        <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
        </ul>
        </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
}