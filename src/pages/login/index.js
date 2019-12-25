import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const { handleClickLogin, login } = this.props;

        if (!login) {
            return (
                <LoginWrapper className="LoginWrapper">
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => { this.account = input }}></Input>
                        <Input placeholder="密码" type="password" ref={(input) => { this.password = input }}></Input>
                        <Button onClick={() => handleClickLogin(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"></Redirect>
        }

    }

    componentDidMount() {

    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login']),
})


const mapDispatchToProps = (dispatch) => ({
    handleClickLogin(account, password) {
        dispatch(actionCreators.loginAction(account.value, password.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)