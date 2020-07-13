import React, { useState } from 'react'
import { useFormik } from 'formik'

import InputElement from './parts/InputElement'
import { validate } from '../utlis/formikValid'

const Formik = () => {
    const [data, setData] = useState([])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            setData(JSON.stringify(values))
        }
    })
    return (
        <div>
            <div className="flash">
                <h2>React Formik Example Basic</h2>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <InputElement
                    label="First Name"
                    inputname="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    valid={formik.errors}
                />

                <InputElement
                    label="Last Name"
                    inputname="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    valid={formik.errors}
                />

                <InputElement
                    label="Email"
                    inputname="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    valid={formik.errors}
                />

                <button
                    type="submit"
                    className="btn btn-primary mr-2"
                    disabled={!formik.dirty}
                >
                    Submit
                </button>
            </form>
            
            <div className="flash mt-3 flash-warn">
                <pre>{data}</pre>
            </div>
        </div>
    )
}

export default Formik
