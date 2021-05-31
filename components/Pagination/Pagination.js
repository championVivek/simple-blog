import styled from "styled-components";

export default function Pagination() {
  return (
    <>
      <Container>
        <Page>
          <PageNumber>
            <span>&#60;</span>
          </PageNumber>
          <PageNumber>
            <span style={{ backgroundColor: "#ffd369", color: "white" }}>
              1
            </span>
          </PageNumber>
          <PageNumber>
            <span>2</span>
          </PageNumber>

          <PageNumber>
            <span>3</span>
          </PageNumber>

          <PageNumber>
            <span>4</span>
          </PageNumber>
          <PageNumber>
            <span>&#62;</span>
          </PageNumber>
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

const PageNumber = styled.li`
  margin-left: 5px;

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
