import AOS from "aos";
import { useEffect } from "react";
import styled from "styled-components";
import { mainStyle } from "../styles/GlobalStyled";
import "aos/dist/aos.css";

const SSection = styled.div`
  padding: ${mainStyle.padding};
  padding-top: 200px;
  padding-bottom: 200px;
`;

const Title = styled.div`
  font-size: 100px;
  font-weight: 900;
  letter-spacing: -3px;
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Con = styled.div`
  width: 30%;
  height: 500px;
  background-color: lightgray;
  &:nth-child(2) {
    margin-top: 300px;
  }
  &:nth-child(3) {
    margin-top: 600px;
  }
`;

export const Section = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <SSection>
      <Title>This Is Title Area</Title>
      <ConWrap>
        <Con data-aos="zoom-in"></Con>
        <Con data-aos="flip-left"></Con>
        <Con data-aos="flip-right"></Con>
      </ConWrap>
    </SSection>
  );
};
