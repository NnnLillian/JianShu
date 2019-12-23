import styled from 'styled-components';

export const HomeWrapper = styled.div `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    // height: 300px;
`

export const HomeLeft = styled.div `
    margin-left: 15px;
    padding-top: 30px;
    padding-left: 15px;
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
    width: 280px;
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

export const ListItem = styled.div `
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

export const ListInfo = styled.div `
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

export const RecommendWrapper = styled.div `
    padding-bottom: 4px;
    min-height: 228px;
    position: relative;
`

export const RecommendItem = styled.div `
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
    background: url(${(props)=>props.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div `
    width: 280px;
    margin: 30px 0 0;
    text-align: left;
    span{
        font-size: 14px;
        color: #969696;
    }
`

export const WriterSwitch = styled.span `
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left
        font-size: 14px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const WriterItem = styled.div `
    margin-top: 15px;
    line-height: 20px;
    img{
        float: left;
        width: 46px;
        height: 46px;
        margin-right: 10px;
        border-radius: 50%;
        border: 1px solid #ddd;
    }
    .writer-name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    .introduce{
        font-size: 12px;
        color: #969696;
        margin: 2px 0 10px;
    }
    .follow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
`

export const WriterMore = styled.button `
    margin-top: 20px;
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
`

export const LoadMore = styled.div `
    border-radius: 20px;
    background-color: #a5a5a5;
    margin: 30px 0;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    color: #fff;
    cursor:pointer;
`

export const BackTop = styled.div `
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1040;
    color: #333;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    display: block;
`