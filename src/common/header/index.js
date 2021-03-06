import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTittle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'

class Header extends Component {

    getListArea() {
        const { focused, mouseIn, list, page, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        let resList = [];

        if (list.size) {
            for (let i = (page - 1) * 4; i < page * 4; i++) {
                resList.push(
                    <SearchInfoItem key={list.get(i)}>{list.get(i)}</SearchInfoItem>
                );
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTittle>
                        热门搜索
                            <SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe612;</i>
                            换一批
                            </SearchInfoSwitch>
                    </SearchInfoTittle>
                    <SearchInfoList>
                        {resList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleSearchBlur, handleSearchFocus, list, login, handleClickLogout } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? "focused" : ""}
                                onFocus={() => handleSearchFocus(list)}
                                onBlur={handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe600;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    {
                        login ?
                            <NavItem className="right" onClick={handleClickLogout}>退出</NavItem> :
                            <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe601;</i>
                    </NavItem>
                </Nav>
                <Addition>
                    <Link to="/writer">
                        <Button className="writing">
                            <i className="iconfont">&#xe63a;</i>写文章</Button>
                        <Button className="reg">注册</Button>
                    </Link>
                </Addition>
            </HeaderWrapper >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.get('header').get('list'),
        page: state.getIn(['header', 'page']),
        totalPages: state.getIn(['header', 'totalPages']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getListAction())
            }
            dispatch(actionCreators.inputFocusAction());
        },
        handleSearchBlur() {
            dispatch(actionCreators.inputBlurAction());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnterAction());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeaveAction());
        },
        handleChangePage(spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            dispatch(actionCreators.changePageAction());
        },
        handleClickLogout() {
            dispatch(loginActionCreators.logoutAction());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);