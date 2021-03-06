import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        this.props.getDetail(this.props.match.params.id);
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
        getDetail(id){
            dispatch(actionCreators.getDetailAction(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));