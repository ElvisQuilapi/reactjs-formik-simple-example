import React from 'react'

const InputElement = (props) => {
    const { label, inputname, valid } = props
    return (
        <div className="form-group warn">
            <div className="form-group-header">
                <label htmlFor={inputname}>{label}</label>
            </div>
            <div className="form-group-body">
                <input
                    id={inputname}
                    name={inputname}
                    autoComplete="off"
                    className="form-control"
                    { ...props }
                />
            </div>
            { valid[inputname] ? <p className="note warning">{ valid[inputname]  }</p> : null}
        </div>
    )
}

export default InputElement
