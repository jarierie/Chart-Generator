import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = ["#26001b", "#810034", "#ff005c", "#025955"];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  background-color: #0d0d0d;
`;

const HeadingContainer = styled.div`
  width: 80%;
  margin-top: 50px;
  h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 50px;
    color: white;
    font-weight: lighter;
  }
`;

const ChartCardContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ChartCard = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  background-color: ${(props) => colors[props.props]};
  color: white;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 5px 10px 5px;
  :hover {
    transform: scale(1.05);
    transition: 0.5s;
    cursor: pointer;
  }

  h1 {
    font-size: 32px;
    font-weight: 300px;
  }

  p {
    font-size: 46px;
    font-weight: 500;
  }
`;

const ChartCollection = () => {
  const data = useSelector((state) => state.charts);

  return (
    <>
      <Container>
        <HeadingContainer>
          <h1>My Charts</h1>
        </HeadingContainer>
        <ChartCardContainer>
          {data.map((data) => {
            return (
              <>
                <Link to={`/chart/${data.title.text}`}>
                  <ChartCard props={Math.floor(Math.random() * 4)}>
                    <h1>{data.title.text}</h1>
                    <p>{`${data.type} Chart`}</p>
                  </ChartCard>
                </Link>
              </>
            );
          })}
          <ChartCard props={Math.floor(Math.random() * 4)}>
            <h1>Title</h1>
            <p>Line Chart</p>
          </ChartCard>
        </ChartCardContainer>
      </Container>
    </>
  );
};

export default ChartCollection;
