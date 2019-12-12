import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleSearchFocus = this.handleSearchFocus.bind(this);
        this.handleSearchBlur=this.handleSearchBlur.bind(this);
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                        <NavSearch
                            className={this.state.focused ? "focused" : ""}
                            onFocus={this.handleSearchFocus}
                            onBlur={this.handleSearchBlur}
                        ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? "focused iconfont" : "iconfont"}>&#xe600;</i>
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

    handleSearchFocus() {
        this.setState({
            focused: true
        })
    }

    handleSearchBlur(){
        this.setState({
            focused: false,
        })
    }
}

export default Header;