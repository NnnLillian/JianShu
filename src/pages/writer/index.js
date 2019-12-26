import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render() {
        const { login } = this.props;

        if (login) {
            return (
                <div>写文章</div>
            )
        } else {
            return <Redirect to="/login"></Redirect>
        }

    }

    componentDidMount() {

    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login']),
})

export default connect(mapStateToProps, null)(Writer)