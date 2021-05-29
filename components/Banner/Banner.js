import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bounce, fadeInUp } from "react-animations";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const bounceAnimation = keyframes`${bounce}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export default function Banner({ ThisIsBlog }) {
  return (
    <>
      <BannerContainer>
        <Overlay />
        <BannerData>
          {ThisIsBlog ? null : <span>Hello! Welcome to</span>}
          <BannerTitle>
            {ThisIsBlog ? <h1>Blog Single</h1> : <h2>Readit blog</h2>}
          </BannerTitle>
          <BannerParagraph>
            {ThisIsBlog ? null : (
              <p>
                {" "}
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            )}
          </BannerParagraph>
          {ThisIsBlog ? null : <Arrow icon={faArrowDown} />}
        </BannerData>
      </BannerContainer>
    </>
  );
}

const BannerContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const Overlay = styled.div`
  height: 100vh;
  position: relative;
  z-index: 0;
  opacity: 0.8;
  background: linear-gradient(45deg, #f200ff 0%, #ffba42 100%);
`;

const BannerData = styled.div`
  padding-left: 100px;
  margin-right: auto;
  margin-left: auto;
  color: white;
  animation: 0.6s ${fadeInUpAnimation};
  top: 160px;
  position: absolute;
  z-index: 2;

  > span {
    font-size: 20px;
    font-weight: 700;
  }
`;

const BannerTitle = styled.div`

  > h2 {
    font-size: 10vw;
    font-family: "Poppins", sans-serif;
  }

  > h1 {
    margin: 150px 180px;
    font-size: 10vw;
    font-family: "Poppins", sans-serif;
  }
`;

const BannerParagraph = styled.div`
  > p {
    font-size: 18px;
    font-weight: 700;
    margin-right: 600px;
    word-wrap: break-word;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
  }
`;

const Arrow = styled(FontAwesomeIcon)`
  font-size: 35px;
  margin-top: 60px;
  cursor: pointer;
  animation: 1.8s ${bounceAnimation} linear infinite;
`;
