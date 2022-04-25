import React,{useState} from "react";
import styled from "styled-components"

const RGB = () => {
    const [currentColor, setCurrentColor] = useState("rgb(255,255,255)");
    function randomRGB(){
        return Math.floor(Math.random() * 256);
    }
    function getRandomColor() {
        const color ='rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
        console.log(color);
        return color;
    }
    return(
    <Background bck={currentColor}>
        <Container>
            <h2 text={currentColor}>Background Color: <ColorName text={currentColor}>{currentColor}</ColorName></h2> 
            <Button border={currentColor} onClick={()=>setCurrentColor(getRandomColor())}>Click Me</Button>
        </Container>
    </Background>
    )
}
const Background = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    /* border: 1px solid black; */
    justify-content:center;
    align-items: center;
    transition: all 1s ease-in-out;
    background: ${(props) => props.bck};
`
const Container = styled.div`
    display: flex;
    width:60%;
    height: 50%;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    /* border: 1px solid black; */
    h2{
        background-color: rgb(51, 49, 49);
        font-size: 3em;
        padding:10px;
        color: white;
        border-radius:10px;
    }
`
const Button = styled.button`
    font-size: 1.5em;
    width: 35%;
    height: 25%;
    padding: 10px;
    letter-spacing: 3px;
    border: 4px solid ${(props) => props.border};
    border-radius: 10px;
    font-weight: 700;
    transition: 1s; 
    /* background-color: ${(props) => props.bckcolor}; */
    cursor: pointer;
`
const ColorName = styled.span`
    padding:10px;
    transition: color 1s ease-in-out; 
    color: ${(props) => props.text};
`
export default RGB;