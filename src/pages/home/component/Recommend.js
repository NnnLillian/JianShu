import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends Component {
    render() {
        const { recommendList } = this.props;
        return (
            <RecommendWrapper className="RecommendWrapper">
                {
                    recommendList.map((item) => (
                        <RecommendItem
                            className="RecommendItem"
                            key={item.get('id')}
                            imgUrl={item.get('img_url')}>
                        </RecommendItem>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        recommendList: state.getIn(['home', 'recommendList'])
    })
}

export default connect(mapStateToProps, null)(Recommend);