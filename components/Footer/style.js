import styled, { keyframes } from "styled-components";
import { fadeInUp } from "react-animations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const Container = styled.div`
  background-color: #222831;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  padding: 80px;
  width: 100%;

  @media (max-width: 700px) {
    height: fit-content;
    padding: 20px;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    justify-content: space-around;
    height: fit-content;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const Copyright = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;

  @media (max-width: 700px) {
    font-weight: bold;
    font-size: 15px;
    margin-top: 30px;
    text-align: center;
  }
`;

export const Brand = styled.div`
  flex: 0.25;

  > p {
    font-size: 20px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.7);
    word-wrap: break-word;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    flex: 0.33;
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  color: white;
`;

export const Social = styled.div`
  padding-bottom: 30px;
  display: flex;
  margin-top: 50px;
  animation: 1s ${fadeInUpAnimation};
  align-items: center;
  cursor: pointer;

  > div {
    margin-right: 10px;
    display: grid;
    place-items: center;
    height: 50px;
    width: 50px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
  }

  div:hover {
    transition: 0.3s all ease;
    background: #ffd369;
  }
`;

export const BrandLogo = styled.div`
  font-size: 35px;
  cursor: pointer;
  color: #fff;
  padding-bottom: 30px;

  > a > span {
    color: #ffd369;
  }
`;

export const Information = styled.div`
  color: white;
  flex: 0.25;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    flex: 0.33;
  }
`;

export const Links = styled.div`
  padding: 10px;
  cursor: pointer;

  > span {
    padding-right: 10px;
  }

  &:hover {
    transition: 0.3s all ease;
    color: #ffd369;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;

  @media (max-width: 700px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

export const News = styled.div`
  padding: 0 30px;
  flex: 0.25;

  @media (max-width: 700px) {
    padding: 0;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    flex: 0.33;
  }
`;
export const NewsCard = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 701px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const NewsLink = styled.div`
  padding-left: 20px;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  padding: 20px;
  cursor: pointer;

  > span {
    font-size: 10px;
    padding-top: 10px;
  }

  p:hover {
    transition: 0.3s all ease;
    color: #ffd369;
  }
`;

export const Questions = styled.div`
  flex: 0.25;
  color: white;

  @media (min-width: 701px) and (max-width: 1024px) {
    flex: 1;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  > address {
    margin-left: 10px;
    font-style: normal;
    word-wrap: break-word;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 700px) {
    margin-top: 50px;
  }
`;

export const Phone = styled.div`
  padding: 10px 0;
  cursor: pointer;

  > span {
    margin-left: 10px;
  }

  &:hover {
    transition: 0.3s all ease;
    color: #ffd369;
  }
`;

export const Email = styled.div`
  padding: 10px 0;
  cursor: pointer;

  > span {
    margin-left: 10px;
  }

  &:hover {
    transition: 0.3s all ease;
    color: #ffd369;
  }
`;
