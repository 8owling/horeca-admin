import React, { Component } from 'react';


export default class Container extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
