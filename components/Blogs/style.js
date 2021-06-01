import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 380px;
  overflow: hidden;
  max-width: 1210px;
  margin-top: 90px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 700px) {
    margin: 50px 10px;
    height: fit-content;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    margin: 50px 10px;
    height: fit-content;
  }
`;

export const Image = styled.div`
  height: 380px;
  margin-right: 30px;
  width: 65%;
  cursor: pointer;

  > a > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Blog = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    display: flex;
  }
`;

export const Type = styled.h3`
  font-weight: 500;
  font-size: 14px;
  margin: 20px 0;
  color: rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
`;

export const Details = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  width: 35%;
  cursor: pointer;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.div`
  padding-bottom: 30px;
  height: 220px;

  > a {
    font-size: 35px;
    line-height: 1.3;
    color: #000;
    font-family: "Noto Sans KR", sans-serif;
    cursor: pointer;
  }

  ${Details}:hover & > a {
    transition: 0.3s all ease;
    color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 700px) {
   height: fit-content;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    height: fit-content;

    > a {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
`;

export const SocialIcon = styled(FontAwesomeIcon)`
  color: black;
`;

export const Social = styled.div`
  opacity: 0;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  > div {
    list-style-type: none;
    margin-right: 10px;
    display: grid;
    place-items: center;
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  div:hover {
    transition: 0.3s all ease;
    background: #ffd369;
    color: #000000;
  }

  ${Details}:hover & {
    padding-bottom: 20px;
    opacity: 1;
    transition: 0.5s all ease;
  }

  @media (max-width: 700px) {
    opacity: 1;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    opacity: 1;
  }
`;

export const Time = styled.div`
  color: rgba(0, 0, 0, 0.3);
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;

  > span {
    border-left: 3px solid lightgray;
    height: 20px;
    margin: 0 5px;
  }

  ${Details}:hover & {
    color: #000;
    transition: 0.5s all ease;
  }
`;
