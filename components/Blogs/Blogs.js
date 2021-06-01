import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import * as S from "./style";
import moment from "moment";

export default function Blogs({ image, type, title, date, readingTime }) {
  var fomatedDate = moment(date).format("DD-MM-YYYY");

  return (
    <>
      <S.Container>
        <S.Blog>
          {image && (
            <S.Image>
              <Link href={`/post/${title.toLowerCase().replace(/\s+/g, "-")}`}>
                <a>
                  <img src={image} alt={title} />
                </a>
              </Link>
            </S.Image>
          )}
          <S.Details>
            <S.Type>{type}</S.Type>
            <Link href={`/post/${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <S.Title>
                <a>{title}</a>
              </S.Title>
            </Link>
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
            <S.Time>
              {fomatedDate} <span /> {readingTime}
            </S.Time>
          </S.Details>
        </S.Blog>
      </S.Container>
    </>
  );
}
