import { actionTypes } from './index';
import axios from 'axios';
import { actionCreators } from '../../../common/header/store';

export const loginAction = (account, password) => {
    return (dispatch) => {
        console.log("");
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(
            (res) => {
                const result = res.data.data;
                if (result) {
                    dispatch(changeLogin())
                } else {
                    alert("登陆失败");
                }
            }
        ).catch(
            () => {
                console.log("get login.json error")
            }
        )
    }
}

export const logoutAction = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: false,
})


const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true,
})
