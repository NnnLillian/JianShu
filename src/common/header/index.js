import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTittle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'

class Header extends Component {

    getListArea() {
        const { focused, list } = this.props;
        if (focused) {
            return (
                <SearchInfo >
                    <SearchInfoTittle>
                        热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTittle>
                    <SearchInfoList>
                        {list.map((item) => (
                            <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        ))}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleSearchBlur, handleSearchFocus } =this.props;
        return (
            <HeaderWrapper>
                <Logo />
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
                                onFocus={handleSearchFocus}
                                onBlur={handleSearchBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont" : "iconfont"}>&#xe600;</i>
                        {this.getListArea()}
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
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus() {
            dispatch(actionCreators.getListAction())
            dispatch(actionCreators.inputFocusAction());
        },
        handleSearchBlur() {
            dispatch(actionCreators.inputBlurAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);