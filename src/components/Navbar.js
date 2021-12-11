import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
        </li>
        </ul>
        </div>

        <div className={`float-end form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <div className={`rounded-circle bg-${props.mode==='light'?'dark':'light'} color-dot`} onClick={props.toggleMode}></div>
        </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
}