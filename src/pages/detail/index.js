import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends PureComponent {
    render() {
        const { title,content }=this.props;
        return (
            <DetailWrapper className="DetailWrapper">
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}}>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail();
    }
}

const mapStateToProps = (state)=>{
    return ({
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    })
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getDetail(){
            dispatch(actionCreators.getDetailAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);