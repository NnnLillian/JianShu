import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {

    render() {
        const { topicList } = this.props;
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-img' src={item.get('img_url')} alt="" />
                                {item.get('topic_msg')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList']),
    }
}

export default connect(mapStateToProps, null)(Topic);