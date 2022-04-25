import React from 'react'
import styled from 'styled-components'
const Navbar =()=>
{
    return(
    <Nav>
        <Logo>Color Flip</Logo>
        <Menu>
            <Menulink href="">RGB</Menulink>
        </Menu>
    </Nav>
    )
}
const Nav = styled.nav`
    padding: 0 2rem;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    height: 10vh;
    /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
    `;
const Logo = styled.h2`
    display: flex;
    /* border: 1px solid black; */
    justify-content:center;
    letter-spacing: 5px;
    font-weight: 300;
    color: #2f97d3;
    flex-grow: 1;
    font-size: 1.9em;
`
const Menu = styled.div`
    /* border: 1px solid black; */
    /* border: 1px solid black; */
    letter-spacing: 3px;
    flex-grow: 2;
    display: flex;
    justify-content: center;
    gap: 2rem;
    /* width: 30%; */
    `
const Menulink = styled.a`
    /* border: 1px solid black; */
    font-size: 1.5rem;
    letter-spacing: 3px;
    display: flex;
    justify-content: center;
    color: #2f97d3;
    font-weight: 300;
    text-decoration: none;
    transition: all 0.2s ease-in;
    &:hover {
        transform: scale(1.1);
        font-weight: 700;
    }
`
export default Navbar;