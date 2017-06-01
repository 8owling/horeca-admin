import React, { Component } from 'react';
//import './utils/prism'

export default class Container extends Component {
    render() {
        const { language, children } = this.props

        console.log(this.props)
        return (



            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        {children()}
                    </div>
                </div>
            </div>



        )
    }
    componentDidMount() {
        console.log("66666666")
    }
    componentDidUpdate() {
        //window.Prism.highlightAll()
    }
}
