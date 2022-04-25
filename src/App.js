import React from 'react';
import './App.css';
import styled from "styled-components"
import Navbar from './Navbar';
import RGB from './RGB';
// import { FaGithub} from "react-icons/fa"
// import { FiChevronDown } from "react-icons/fi"
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Container = styled.section`
    overflow: hidden;
    background-color: pink;
`;
function App() {
  return (
   <Container>
     {/* <h2>hello</h2> */}
      <Navbar/>
      {/* <FaGithub/>
      <FiChevronDown/> */}
      <RGB/>
      {/* <ExpandMoreIcon/> */}
   </Container>
  );
}

export default App;