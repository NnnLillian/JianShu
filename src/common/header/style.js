import styled from 'styled-components'
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display:block
    height:56px;
    width:100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    height:100%;
    width:960px;
    padding-left:12px;
    box-sizing:border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    &.left{float:left;}
    &.right{
        float:right;
        color:#969696
    }
    &.active{color:#ea6f5a}
    color:#333;
    line-height:26px;
    font-size:17px;
    width:auto;
    padding:15px;
    margin-right: 10px;
`;
export const SearchWrapper =styled.div`
    position: relative;
    top: 9px;
    float:left;
    height:38px;
    box-sizing: border-box;
    .slide-enter {
        transition: all .2s ease-out;
    }
    .slide-enter-active .slide-enter-done {
        width:240px;
    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exit-active .slide-exit-done{
        width:160px;
    }
    .iconfont{
        position: absolute;
        bottom: 4px;
        right: 5px;
        width: 30px;
        height: 30px!important;
        line-height: 30px!important;
        padding: 0!important;
        border-radius:15px;
        color: #969696;
        text-align: center;
        &.focused{
            background:#999;
            color:#fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border:none;
    outline:none;
    border-radius:40px;
    background:#eee
    box-sizing: border-box;
    &::placeholder{color:#999}
    &.focused{
        width:240px;
    }
`
export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height:100%
`
export const Button = styled.button`
    float:right;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    border: 1px solid #ea6f5a
    &.reg{
        color:#ea6f5a;
    }
    &.writing{
        background:#ea6f5a;
        color:#fff;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    // background: green;
`

export const SearchInfoTittle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`

export const SearchInfoList=styled.div`
    overflow: hidden;
`

export const SearchInfoItem=styled.a`
    display: block;
    float: left;
    line-height: 20px;
    font-size: 12px
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`