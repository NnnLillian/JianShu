import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    right
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getTopicListAction());
        }
    }
}

export default connect(null, mapDispatchToProps)(Home);