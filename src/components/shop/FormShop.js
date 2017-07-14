

import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Field, reduxForm } from 'redux-form'
import axios from 'axios';
import { Link } from 'react-router';

import FormData from 'form-data'


//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Container from '../containers/container'

const API_URL = 'http://192.168.4.161/laravel_study/public/test_api';



//submit ไม่ได้ เพราะบันทึกแล้ว Error
const validate = values => {
    const errors = {}
    if (!values.shop_name) {
        errors.shop_name = 'Required'
    }
    return errors
}


//Submit ได้ แต่จะขึ้นแจ้งเตือน 
const warn = values => {
    const warnings = {}
    // if (values.age < 19) {
    //     warnings.age = 'Hmm, you seem a bit young...'
    // }
    return warnings
}


class FormShop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Upload Image
            file: '',
            imagePreviewUrl: ''
        }

        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }



    componentWillMount() {
        console.log("componentWillMount : This is FormShop");
        console.log(this.props)
    }

    handleFormSubmit(formProps) {




        console.log(this.state.file);
        axios.post(`${API_URL}`, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data;`,
            },
            "shop_name": formProps.shop_name,
            "description": formProps.description,
            "sale": formProps.sale,
            "imageFile": this.state.file.File
        })
            .then(res => {
                // If request is good
                // - Update state to indicate user in authenticated

                ////////dispatch({ type: AUTH_USER });
                // - Save the JWT token
                localStorage.setItem('token', res.data.token);
                // - Redirect to the route '/feature'

                //////// browserHistory.push('/');

            }).catch(function (err) {
                // If request is bad
                // - Show an error to the user
                console.log(err.response.data.message);

            });


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
                    {/*<span className="input-group-addon"><i className={icon}></i></span>*/}
                    <input {...input} placeholder={placeholder} type={type} className="form-control" />
                </div>
                {touched && (
                    (error &&
                        <span className="help-block" style={{ color: 'red' }}>
                            <i className="fa fa-exclamation-circle fa-lg"></i> error : &nbsp;{error}
                        </span>
                    )
                    ||
                    (warning &&
                        <span className="help-block" style={{ color: 'orange' }}>
                            <i className="fa fa-exclamation-circle fa-lg"></i> warning : &nbsp;{warning}
                        </span>
                    )
                )}
            </div>
        </div>
    )

    render() {

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} width='100px' />);
        }



        const { handleSubmit, pristine, /*reset,*/ submitting } = this.props;
        return (
            <Container>
                <div className="card-header">
                    <strong>Horizontal</strong> Form
              </div>

                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-horizontal ">
                    <div className="card-block">
                        <div className="form-group">
                            <p className="text-muted">ชื่อร้านค้า</p>
                            <Field
                                name="shop_name"
                                id="shop_name"
                                component={this.renderField}
                                placeholder="ชื่อร้านค้า"
                                type="text"
                            />

                            <p className="text-muted">รายละเอียด</p>
                            <Field
                                name="description"
                                id="description"
                                component={this.renderField}
                                placeholder="รายละเอียด"
                                type="textarea"
                            />

                            <p className="text-muted">Sale</p>
                            <Field
                                name="sale"
                                id="sale"
                                component={this.renderField}
                                placeholder="Sale"
                                type="text"
                            />

                            {/*<div className="form-group">
                            <label for="street">รายละเอียด</label>
                            <input type="text" className="form-control" id="description" placeholder="รายละเอียด" />
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-12">
                                <label for="city">Sale</label>
                                <select id="select" name="select" className="form-control" size="1">
                                    <option value="0">Please select</option>
                                    <option value="1">Sale #1</option>
                                    <option value="2">Sale #2</option>
                                    <option value="3">Sale #3</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-12">
                                <label for="postal-code">รูป</label>
                                <input type="text" className="form-control" id="postal-code" placeholder="Postal Code" />
                            </div>
                        </div>
                        */}

                            <p className="text-muted">รูปร้านค้า</p>
                            <input id="imageFile" name="imageFile" type="file" onChange={this._handleImageChange} />

                            {/*<Field
                                name="imageFile"
                                id="imageFile"
                                component={this.renderField}
                                placeholder="Image"
                                type="file"
                                onChange={this._handleImageChange}
                            />*/}



                        </div>
                        {$imagePreview}
                    </div>
                    <div className="card-footer">
                        <button action='submit' className="btn btn-primary" disabled={(pristine || submitting) && false} > Submit</button>&nbsp;
                        <Link to={'/shop/addshop/'} >
                            <button type="reset" className="btn btn-danger"> Cancel</button>&nbsp;
                            </Link>
                    </div>
                    {this.renderAlert()}
                </form>


            </Container >

        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.shop.error,
    }
}

//export default connect(mapStateToProps, actions)(FormShop);

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'signinForm',
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form
})(FormShop));