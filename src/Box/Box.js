import React from 'react'
import { Row, Col, Drawer } from "antd";
import styled from 'styled-components';
import Container from "../common/Container";
import Animation from "../../src/animation/Animation"
const Box = () => {

    const Extra = styled("section")`
background-image: linear-gradient(to right, rgb(32, 40, 119), rgb(55, 46, 149), rgb(83, 49, 177), rgb(114, 48, 205), rgb(150, 41, 230));
  position: absolute;
  width: 100vw;
  top:0;
  height:200vh;
 
  z-index:-1;
  margin-right: 80px;
  margin-left: -130px;
  padding-bottom: 2rem;
`;

    return (
      <Extra>
        
             <div class="container-fluid">
  <div class="row">
    
    <div class="sty" >
   
    </div>
  
  </div>
  
<Animation />
</div>
</Extra>
    )
}

export default Box
