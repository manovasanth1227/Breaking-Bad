import React from "react";
import useFetchQuote from "../DataFetcher/useFetchQuote";
const Quote = ({ name }) => {
  let arr = name.split(" ");
  name = arr.join("+");
  const { loading, error, data } = useFetchQuote(name);
  return (
    <div className="quote">
      {data.length !== 0 && !loading && (
        <h2>
          q u o t e s{" "}
          <span style={{ display: "block" }}>&#8595; &#8595; &#8595;</span>
        </h2>
      )}
      {error && <h1>{error}</h1>}
      {loading ? (
        <div className="sk-flow">
          <div className="sk-flow-dot"></div>
          <div className="sk-flow-dot"></div>
          <div className="sk-flow-dot"></div>
        </div>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        data &&
        data.map((i) => {
          return <p key={i.quote_id}>{i.quote}</p>;
        })
      )}
    </div>
  );
};

export default Quote;
