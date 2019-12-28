import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4836/53373f4ac9ffa9b41d0aaf07f8ceaafe25d5a366.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}

            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    bindEvents() {
        window.addEventListener("scroll", this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getTopicListAction());
        },
        changeScrollTopShow() {
            let toggle = false;
            if (document.documentElement.scrollTop > 400) {
                toggle = true;
            }
            dispatch(actionCreators.changeScrollTopShowAction(toggle))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);