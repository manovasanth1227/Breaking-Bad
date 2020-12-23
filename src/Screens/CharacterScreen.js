import React from "react";
import { Row, Col } from "react-bootstrap";
import useFetchCharaterDetails from "../DataFetcher/useFetchCharacterDetails";
import "./Character.css";
import Quote from "../Components/Quote";
export const CharacterScreen = ({ match }) => {
  const { data, loading, error } = useFetchCharaterDetails(
    match.params.id,
    match.params.author
  );
  return (
    <div style={{ height: "100vh" }}>
      {error && <h1>{error}</h1>}
      {loading ? (
        <div className="sk-swing loader">
          <div className="sk-swing-dot"></div>
          <div className="sk-swing-dot"></div>
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : data.length !== 0 ? (
        <Row className="container-character">
          <div className="card">
            <div className="box">
              <img src={`${data[0].img}`} alt={data[0].name}></img>
            </div>
          </div>
          <Col className="content col-6">
            <h1>{data[0].name}</h1>
            <h5>
              Occupation <span style={{ color: "#cc0e74" }}>&#8594;</span>{" "}
              {data[0].occupation.toString()}
            </h5>
            <h5>
              Date Of Birth <span style={{ color: "#cc0e74" }}>&#8594;</span>{" "}
              {data[0].birthday}
            </h5>
            <h5>
              Nickname <span style={{ color: "#cc0e74" }}>&#8594;</span>{" "}
              {data[0].nickname}
            </h5>
            <h5>
              Status <span style={{ color: "#cc0e74" }}>&#8594;</span>{" "}
              {data[0].status}
            </h5>
            <h5>Portrayed by {data[0].portrayed}</h5>
            {data[0].appearance && (
              <h5>
                Appeared in <span style={{ color: "#cc0e74" }}>&#8594;</span>{" "}
                {data[0].appearance.toString()}
              </h5>
            )}
            <Quote
              key={data[0].char_id}
              style={{ margin: "0" }}
              name={data[0].name}
            />
          </Col>
        </Row>
      ) : (
        <h1 style={{ color: "#af2d2d" }}>Not found</h1>
      )}
    </div>
    // <div></div>
  );
};
