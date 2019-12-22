import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterSwitch, WriterItem, WriterMore } from '../style'
import { actionCreators } from '../store'

class Writer extends Component {

    render() {
        const { handleChangeWriterPage, writerList, writerPage } = this.props;

        let writerPageList = [];
        if (writerList.size) {
            for (let i = (writerPage - 1) * 2; i < writerPage * 2; i++) {
                writerPageList.push(writerList.get(i));
            }
        }

        return (
            <WriterWrapper>
                <span>推荐作者</span>
                <WriterSwitch onClick={() => handleChangeWriterPage(this.spinIcon)}>
                    <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe612;</i>
                    换一批
                </WriterSwitch>
                {
                    writerPageList.map((item) => (
                        <WriterItem key={item.get('id')}>
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
        writerPage: state.getIn(['home', 'writerPage'])
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeWriterPage(spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            dispatch(actionCreators.changeWriterPageAction());
        }
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(Writer);