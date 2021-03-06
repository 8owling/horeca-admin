import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { browserHistory } from 'react-router';

class SignOut extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    }

    componentWillMount() {
        this.props.signoutUser();
        browserHistory.push('/signin');
    }

    render() {
        return (
            <div>Sorry to see you go...</div>
        );
    }
}

export default connect(null, actions)(SignOut);