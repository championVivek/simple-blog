import * as S from "./style"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


export default function Banner({ ThisIsBlog }) {
  return (
    <>
      <S.BannerContainer>
        <S.Overlay />
        <S.BannerData>
          {ThisIsBlog ? null : <span>Hello! Welcome to</span>}
          <S.BannerTitle>
            {ThisIsBlog ? <h1>Blog Single</h1> : <h2>Readit blog</h2>}
          </S.BannerTitle>
          <S.BannerParagraph>
            {ThisIsBlog ? null : (
              <p>
                {" "}
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            )}
          </S.BannerParagraph>
          {ThisIsBlog ? null : <S.Arrow icon={faArrowDown} />}
        </S.BannerData>
      </S.BannerContainer>
    </>
  );
}
