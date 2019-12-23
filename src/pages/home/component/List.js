import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'

class List extends PureComponent {
    render() {
        const { articleList, getMoreList, articlePage } = this.props;
        return (
            <Fragment>
                {articleList.map((item) => (
                    <Link className="link" key={item.get('id')} to='/detail'>
                        <ListItem>
                            <img className="list-img" src={item.get('img_url')} alt="120"></img>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick={() => getMoreList(articlePage)}>阅读更多</LoadMore>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        articlePage: state.getIn(['home', 'articlePage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(articlePage) {
            dispatch(actionCreators.getMoreListAction(articlePage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);