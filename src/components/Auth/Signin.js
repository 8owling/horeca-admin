import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import { Field, reduxForm } from 'redux-form'


const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}

const warn = values => {
    const warnings = {}
    // if (values.age < 19) {
    //     warnings.age = 'Hmm, you seem a bit young...'
    // }
    return warnings
}

class Signin extends Component {

    componentWillMount() {
        console.log("componentWillMount : ");
        console.log(this.props);
    }


    handleFormSubmit(formProps) {
        this.props.signinUser(formProps);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger' style={{ marginTop: 15, marginBottom: "-1rem" }}>
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    renderField = ({ input, placeholder, type, group, icon, value, meta: { touched, error, warning } }) => (
        <div className="form-group row">
            <div className="col-md-12">
                <div className={`input-group /*${group}*/`} >
                    <span className="input-group-addon"><i className={icon}></i></span>
                    <input {...input} placeholder={placeholder} type={type} className="form-control" />
                </div>
                {touched && (
                    (error &&
                        <span className="help-block" style={{ color: 'red' }}>
                            <i className="fa fa-exclamation-circle fa-lg"></i>&nbsp;{error}
                        </span>
                    )
                    ||
                    (warning &&
                        <span className="help-block" style={{ color: 'orange' }}>
                            <i className="fa fa-exclamation-circle fa-lg"></i>&nbsp;{warning}
                        </span>
                    )
                )}
            </div>
        </div>
    )

    render() {
        const { handleSubmit, pristine, /*reset,*/ submitting } = this.props;
        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card-group mb-0">
                                <div className="card p-2">

                                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                        <div className="card-block">
                                            <h1>Login</h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <Field
                                                name="username"
                                                component={this.renderField}
                                                placeholder="Username"
                                                type="text"
                                                group="mb-1"
                                                icon="icon-user"
                                            />
                                            <Field
                                                name="password"
                                                component={this.renderField}
                                                placeholder="Password"
                                                type="text"
                                                group="mb-2"
                                                icon="icon-lock"
                                            />
                                            <div className="row">
                                                <div className="col-6">
                                                    <button action='submit' className="btn btn-primary px-2" disabled={(pristine || submitting) && false} >Login</button>
                                                </div>
                                                <div className="col-6 text-right">
                                                    <button type="button" className="btn btn-link px-0">Forgot password?</button>
                                                </div>
                                            </div>
                                            {this.renderAlert()}
                                        </div>
                                    </form>

                                </div>
                                <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                                    <div className="card-block text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <button type="button" className="btn btn-primary active mt-1">Register Now!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        initialValues: {
            username: "b@b.com",
            password: "secret",
        }
    }
}
export default connect(mapStateToProps, actions)(reduxForm({
    form: 'signinForm',
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form
})(Signin));
