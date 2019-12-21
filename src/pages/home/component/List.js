import React, { Component, Fragment } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <Fragment>
                {articleList.map((item) => (
                    <ListItem key={item.get('id')}>
                        <img className="list-img" src={item.get('img_url')} alt="120"></img>
                        <ListInfo>
                            <h3 className="title">{item.get('title')}</h3>
                            <p className="desc">{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                ))}

            </Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
    }
}

export default connect(mapStateToProps, null)(List);