import React from 'react'
import styled from 'styled-components'

const TopSectionStyle = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background-color:transparent;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding-top:4rem;
    z-index:99;
`;
const Logo = styled.h1`
    margin:0;
    color:#fff;
    font-weight:700;
    font-size:4rem; 
`
const Slogan = styled.h1`
    margin:0;
    color:#fff;
    font-weight:700;
    font-size:2.5rem;
    margin-top:1em; 
`
function TopSection() {
    return (
        <TopSectionStyle>
            <Logo>Global</Logo>
            <Slogan>KeepIt cool for safe</Slogan>
        </TopSectionStyle>
    )
}

export default TopSection