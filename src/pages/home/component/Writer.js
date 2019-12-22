import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterSwitch, WriterItem, WriterMore } from '../style'

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <span>推荐作者</span>
                <WriterSwitch>
                    <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe612;</i>
                    换一批
                </WriterSwitch>
                {
                    this.props.writerList.map((item) => (
                        <WriterItem>
                            <img src={item.get('img_url')} alt="" />
                            <span className="follow">+ 关注</span>
                            <h3 className="writer-name">{item.get('name')}</h3>
                            <p className="introduce">{item.get('introduce')}</p>
                        </WriterItem>
                    ))
                }
                <WriterMore>
                    查看全部 >
                </WriterMore>
            </WriterWrapper>
        )
    }
}

const MapStateToProps = (state) => {
    return ({
        writerList: state.getIn(['home', 'writerList']),
    })
}

export default connect(MapStateToProps, null)(Writer);