import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 400) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <NavBar showed={show}>
        <NavLeft>
          <a href="/">
            Read<span>it</span>.
          </a>
        </NavLeft>
        <NavRight>
          <Link href="/">
            <NavLink>
              <a>Home</a>
            </NavLink>
          </Link>
          <Link href="#">
            <NavLink>
              <a>Articles</a>
            </NavLink>
          </Link>
          <Link href="#">
            <NavLink>
              <a>Team</a>
            </NavLink>
          </Link>
          <Link href="#">
            <NavLink>
              <a>Contact</a>
            </NavLink>
          </Link>
        </NavRight>
      </NavBar>
    </>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: transparent;
  align-items: center;
  color: white;
  top: 10px;
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
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
`;

const NavLeft = styled.div`
  font-size: 26px;
  font-family: "Poppins", sans-serif;
  margin-left: 50px;
  cursor: pointer;

  > a > span {
    color: #ffd369;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

const NavLink = styled.div`
  > a {
    margin: 0 20px;
    font-weight: 700;
    cursor: pointer;
  }
  &:hover {
    color: #ffd369;
    transition: 0.3s;
  }
`;
