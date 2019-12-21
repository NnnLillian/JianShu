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
        border-radius: 6px;
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
    border-bottom: 1px solid #f0f0f0;
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

export const ListItem = styled.div`
    position: relative;
    min-height: 140px;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    line-height: 20px;
    .list-img{
        width: 150px;
        position: absolute;
        top: 50%;
        margin-top: -60px;
        right: 0;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
    }
`

export const ListInfo = styled.div`
    padding-right: 165px;
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;    
    }
`