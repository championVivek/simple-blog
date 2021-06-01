import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

export default function Pagination({
  data,
  RenderComponent,
  pageLimit,
  dataLimit,
}) {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handlePages();
  }, [data]);

  const handlePages = () => {
    const page = Math.ceil(data.length / dataLimit);
    setPages(page);
  };

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {!data.length ? (
        <>No posts</>
      ) : (
        getPaginatedData().map((post, index) => (
          <RenderComponent
            key={index}
            image={post.mainImage}
            type={post.type}
            title={post.title}
            date={post.publishedAt}
            readingTime={post.readingTime}
          />
        ))
      )}
      <Container>
        <Page>
          <PagePrev onClick={goToPreviousPage} currentPage={currentPage}>
            <span>&#60;</span>
          </PagePrev>
          {getPaginationGroup().map((item, index) => (
            <PageNumber
              key={index}
              onClick={changePage}
              item={item}
              currentPage={currentPage}
            >
              <span>{item}</span>
            </PageNumber>
          ))}
          <PageNext
            onClick={goToNextPage}
            pages={pages}
            currentPage={currentPage}
          >
            <span>&#62;</span>
          </PageNext>
        </Page>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const Page = styled.ul`
  display: flex;
  list-style-type: none;
  cursor: pointer;

  @media (max-width: 700px) {
    margin-left: -25px;
  }
`;

const PagePrev = styled.li`
  margin-left: 5px;

  ${(props) =>
    props.currentPage === 1 &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `};
  > span {
    color: gray;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
  span:hover {
    transition: 0.3s all ease;
    background-color: #ffd369;
    color: #fff;
  }
`;

const PageNext = styled.li`
  margin-left: 5px;

  pointer-events: ${(props) =>
    props.currentPage === props.pages ? "none" : "auto"};

  opacity: ${(props) => (props.currentPage === props.pages ? "0.5" : "1")};

  > span {
    color: gray;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
  span:hover {
    transition: 0.3s all ease;
    background-color: #ffd369;
    color: #fff;
  }
`;

const PageNumber = styled.li`
  margin-left: 5px;

  > span {
    background-color: ${(props) =>
      props.currentPage === props.item ? "#ffd369" : "white"};
    color: gray;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
  span:hover {
    transition: 0.3s all ease;
    background-color: #ffd369;
    color: #fff;
  }
`;
