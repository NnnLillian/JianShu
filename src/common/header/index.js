import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'

const Header = (props) => {
    return (
    <HeaderWrapper>
        <Logo />
        <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide"
                >
                    <NavSearch
                        className={props.focused ? "focused" : ""}
                        onFocus={props.handleSearchFocus}
                        onBlur={props.handleSearchBlur}
                    ></NavSearch>
                </CSSTransition>
                <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe600;</i>
            </SearchWrapper>

            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">
                <i className="iconfont">&#xe601;</i>
            </NavItem>
        </Nav>
        <Addition>
            <Button className="writing">
                <i className="iconfont">&#xe63a;</i>写文章</Button>
            <Button className="reg">注册</Button>
        </Addition>
    </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.inputFocusAction());
        },
        handleSearchBlur() {
            dispatch(actionCreators.inputBlurAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);