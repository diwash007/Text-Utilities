import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} fade show`} role="alert">
            { props.alert.msg }
        </div>
    )
}
