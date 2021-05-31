import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1200px) / 2);
  background: transparent;
  height: 85px;
  align-items: center;
  color: white;
  width: 100%;
  top: 10px;
  position: absolute;
  right: 0;
  z-index: 3;

  ${({ showed }) =>
    showed &&
    `box-shadow: 6px -7px 20px -6px rgb(0 0 0 / 75%);
  z-index: 3;
  position: fixed;
  top: 0;
  color: #000;
  background-color: white;
  `}

  @media (max-width: 700px) {
    top: 0;
    background-color: black;
    position: relative;
    color: white;
    height: 65px;

    ${({ showed }) =>
      showed &&
      `box-shadow: 6px -7px 20px -6px rgb(0 0 0 / 75%);
     z-index: 3;
     position: fixed;
     top: 0;
     color: #000;
     background-color: white;
  `}
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    top: 0;
    height: 65px;
    position: relative;
    background-color: black;

    ${({ showed }) =>
      showed &&
      `box-shadow: 6px -7px 20px -6px rgb(0 0 0 / 75%);
     z-index: 3;
     position: fixed;
     top: 0;
     color: #000;
     background-color: white;
  `}
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: gray;

  @media (max-width: 700px) {
    display: block;
    position: absolute;
    top: 18px;
    right: 20px;
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media (min-width: 701px) and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 50px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLeft = styled.div`
  font-size: 26px;
  display: flex;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  > a > span {
    color: #ffd369;
  }

  @media (max-width: 700px) {
    margin-left: 10px;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    margin-left: 30px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;

    ${({ toggleState }) =>
      toggleState &&
      `display: block;
     position: absolute;
     width: 100%;
     top: 55px;
     height: auto;
     background-color: black;
  `}

    ${({ showed }) =>
      showed &&
      `
     background-color: white;
  `}
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    display: none;

    ${({ toggleState }) =>
      toggleState &&
      `display: block;
       position: absolute;
       width: 100%;
       top: 55px;
       height: auto;
       background-color: black;
`}
    ${({ showed }) =>
      showed &&
      `
     background-color: white;
  `}
  }
`;

export const NavLink = styled.div`
  > a {
    margin: 0 20px;
    font-weight: 700;
    cursor: pointer;
  }
  &:hover {
    color: #ffd369;
    transition: 0.3s;
  }

  @media (max-width: 700px) {
    padding: 15px;
  }

  @media (min-width: 701px) and (max-width: 1024px) {
    padding: 15px;

    > a {
      font-size: 20px;
    }
  }
`;
