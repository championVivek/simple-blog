import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bounce, fadeInUp } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const BannerContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100%;

  @media (max-width: 700px) {
    height: 85vh;
    background-position: center center;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    height: 100vh;
    background-position: center center;
  }
`;

export const Overlay = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
  opacity: 0.8;
  background: linear-gradient(45deg, #f200ff 0%, #ffba42 100%);

  @media (max-width: 700px) {
    height: 85vh;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    height: 100vh;
  }
`;

export const BannerData = styled.div`
  padding-left: 100px;
  margin-right: auto;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  color: white;
  animation: 0.6s ${fadeInUpAnimation};
  top: 80px;
  width: 100%;
  position: absolute;
  z-index: 2;

  > span {
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: 700px) {
    padding-left: 15px;
    top: 100px;

    > span {
      font-size: 30px;
    }
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    padding-left: 150px;
    align-items: flex-start;
  }
`;

export const BannerTitle = styled.div`
  > h2 {
    font-size: 10vw;
    font-family: "Poppins", sans-serif;
  }

  > h1 {
    margin: 150px 180px;
    font-size: 10vw;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 700px) {
    > h2 {
      font-size: 9vh;
    }

    h1 {
      margin: 0;
    }
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    h1 {
      margin: 0;
    }
  }
`;

export const BannerParagraph = styled.div`
  > p {
    font-size: 18px;
    font-weight: 700;
    margin-right: 600px;
    word-wrap: break-word;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 700px) {
    > p {
      margin-right: 0;
    }
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    > p {
      margin-right: 0;
    }
  }
`;

export const Arrow = styled(FontAwesomeIcon)`
  font-size: 35px;
  margin-top: 60px;
  cursor: pointer;
  animation: 1.8s ${bounceAnimation} linear infinite;
`;
