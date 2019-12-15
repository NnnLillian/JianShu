import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTittle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'

class Header extends Component {

    getListArea(show){
        if (show) {
            return (
                <SearchInfo >
                    <SearchInfoTittle>
                        热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTittle>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? "focused" : ""}
                                onFocus={this.props.handleSearchFocus}
                                onBlur={this.props.handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe600;</i>
                        {this.getListArea(this.props.focused)}
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
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
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