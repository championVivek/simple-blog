import styled from "styled-components";
import Blockcontent from "@sanity/block-content-to-react";

export default function BlogPage({ blogTitle, blogImage, body }) {
  return (
    <>
      <Container>
        <BlogImage>
          <img src={blogImage} alt="" />
        </BlogImage>
        <BlogTitle>{blogTitle}</BlogTitle>
        <BlogContent>
          <Blockcontent blocks={body} />
        </BlogContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BlogTitle = styled.h3`
  font-family: "Rubik", sans-serif;
  font-size: 50px;
  text-transform: uppercase;
  padding: 20px;
`;

const BlogImage = styled.div`
  > img {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
    margin-bottom: 25px;
  }
`;

const BlogContent = styled.div`
  max-width: 70%;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-indent: 45px;
  line-height: 1.5;
  text-align: justify;
  letter-spacing: 1.5px;
`;
