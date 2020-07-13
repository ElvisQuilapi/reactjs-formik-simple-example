import React, { Component } from 'react'
import '@primer/css/core/index.scss';
import './App.scss'
import Formik from './components/Formik'


class App extends Component {
    render() {
        return (
            <div className=" d-flex flex-justify-around m-5">
                <div className="p-5 border bg-gray-light">
                    <Formik />
                </div>
            </div>  
        )
    }
}

export default App
