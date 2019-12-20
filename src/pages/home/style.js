import styled from 'styled-components';

export const HomeWrapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    // height: 300px;
`

export const HomeLeft = styled.div `
    margin-left: 15px;
    padding: 15px;
    width: 625px;
    float: left
    .banner-img {
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div `
    padding-top: 30px;
    width: 240px;
    float: right
`

export const TopicWrapper = styled.div `
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0 10px 0;
`

export const TopicItem = styled.div `
    background-color: #f5f5f5;
    color: inherit;
    padding: 5px 10px 5px 5px;
    border-radius: 4px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    margin-right: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    .topic-img{
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        margin-right: 8px;
        border-radius: 2px;
    }
`


