import { useEffect, useState } from "react";
import Link from "next/link";
import *  as S from "./style"

export default function Navbar() {
  const [show, handleShow] = useState(false);
  const [toggleState, setToggleState] = useState(false);

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
      <S.NavBar showed={show}>
        <S.Bars
          onClick={() => setToggleState(toggleState === false ? true : false)}
        />
        <S.NavLeft>
          <a href="/">
            Read<span>it</span>.
          </a>
        </S.NavLeft>
        <S.NavRight showed={show} toggleState={toggleState}>
          <Link href="/">
            <S.NavLink>
              <a>Home</a>
            </S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>
              <a>Articles</a>
            </S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>
              <a>Team</a>
            </S.NavLink>
          </Link>
          <Link href="#">
            <S.NavLink>
              <a>Contact</a>
            </S.NavLink>
          </Link>
        </S.NavRight>
      </S.NavBar>
    </>
  );
}
