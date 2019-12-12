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
    width:160px;
    height:38px;
    box-sizing: border-box;
    .iconfont{
        position: absolute;
        bottom: 4px;
        right: 5px;
        width: 30px;
        height: 30px!important;
        line-height: 30px!important;
        padding: 0!important;
        border-radius:15px;
        // background:green;
        color: #969696!important;
        text-align: center;
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