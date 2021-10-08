import React from 'react';
import styled from 'styled-components';
import "./Animation.css"
import { motion } from 'framer-motion';
import Computer from '../images/Computer.svg';
import Emp from '../images/Emp.svg';
import Em from '../images/Em.svg';
import E from '../images/E.svg';
import Theme from "../images/Theme.svg"
const ab="https://www.thecodingsheep.com/"


export const Extra = styled("section")`
background-image: linear-gradient(to right, rgb(32, 40, 119), rgb(55, 46, 149), rgb(83, 49, 177), rgb(114, 48, 205), rgb(150, 41, 230));
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  padding:1rem;
  margin:-1rem;
  justify-content: center;
  align-items: center;
 
  background:white;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 200vh;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const HeroSection= () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2,type:"spring",stiffness:10 }}
          >
         
          </motion.h1>
        
          
        </ColumnLeft>
        <ColumnRight>
  
          
          <div className="Animation">
            
        <motion.div>
          <Image
            src={Computer}
            className="comp"
            alt='planet'
            initial={{x:300,y:-250}}
            animate={{ y: -10 }}
  transition={{ type: "spring", stiffness: 20 }}
          
          />
   
          <Image
            src={Emp}
            alt='planet'
            initial={{x:100,y:-250}}
            animate={{ y: -10 }}
  transition={{ type: "spring", stiffness: 5 }}
          />
          <Image
            src={Em}
            alt='planet'
            initial={{x:100,y:-250}}
            animate={{ y: -10 }}
  transition={{ type: "spring", stiffness: 5 }}
          />
          <Image
            src={E}
            alt='planet'
            initial={{x:100,y:-250}}
            animate={{ y: -10 }}
  transition={{ type: "spring", stiffness: 5 }}
          />
         
                 </motion.div>
                 </div>
                 
        </ColumnRight>
      </Container>
    </Section>

  );
};

export default HeroSection;