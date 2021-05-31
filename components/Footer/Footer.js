import Image from "next/image";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export default function Footer() {
  return (
    <>
      <S.Container>
        <S.Details>
          <S.Brand>
            <S.BrandLogo>
              <a href="/">
                Read<span>it</span>.
              </a>
            </S.BrandLogo>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <S.Social>
              <div>
                <S.SocialIcon icon={faTwitter} />
              </div>
              <div>
                <S.SocialIcon icon={faFacebookF} />
              </div>
              <div>
                <S.SocialIcon icon={faInstagram} />
              </div>
            </S.Social>
          </S.Brand>
          <S.News>
            <S.Title>Latest News</S.Title>
            <S.NewsCard>
              <Image src="/images/car.jpeg" height={180} width={180} />
              <S.NewsLink>
                <p>Even the all-powerful Pointing has no control about</p>
                <span>Oct. 16, 2019 Admin 19</span>
              </S.NewsLink>
            </S.NewsCard>
            <S.NewsCard>
              <Image src="/images/bagpack.jpeg" height={180} width={180} />
              <S.NewsLink>
                <p>Even the all-powerful Pointing has no control about</p>
                <span>Oct. 16, 2019 Admin 19</span>
              </S.NewsLink>
            </S.NewsCard>
          </S.News>
          <S.Information>
            <S.Title>Information</S.Title>
            <S.Links>
              <span>&#62;</span> Home
            </S.Links>
            <S.Links>
              <span>&#62;</span> About
            </S.Links>
            <S.Links>
              <span>&#62;</span> Articles
            </S.Links>
            <S.Links>
              <span>&#62;</span> Contact
            </S.Links>
          </S.Information>
          <S.Questions>
            <S.Title>Have a Questions?</S.Title>
            <S.Address>
              <FontAwesomeIcon icon={faLocationArrow} />
              <address>
                203 Fake St. Mountain View, San Francisco, California, USA
              </address>
            </S.Address>
            <S.Phone>
              <FontAwesomeIcon icon={faPhone} />
              <span>+2 392 3929 210</span>
            </S.Phone>
            <S.Email>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@yourcompany.com</span>
            </S.Email>
          </S.Questions>
        </S.Details>
        <S.Copyright>
          Copyright ©2021 All rights reserved | This template is made by Vivek
          kumar
        </S.Copyright>
      </S.Container>
    </>
  );
}
