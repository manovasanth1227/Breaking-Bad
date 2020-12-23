import React, { useState } from "react";
import useFetchCharaters from "../DataFetcher/charactersDataFetch";
import Character from "../Components/Character";
import "../spinkit.min.css";
import "../spinkit.css";
import "../App.css";
import DataPagination from "../Components/DataPagination";
function HomeScreen() {
  const [page, setPage] = useState(1);
  let offset = 0;
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetchCharaters(page, offset, search);

  const inputHandler = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="outer">
      <div className="search-box">
        <h1 style={{ color: "#e79e4f" }}>Breaking Bad Characters</h1>
        <input type="text" onChange={inputHandler} placeholder="Search here" />
      </div>

      <div className="container ">
        {error && <h1>{error}</h1>}
        {data.length === 0 && <h1 style={{ color: "#af2d2d" }}>Not found</h1>}
        {loading ? (
          <div className="sk-swing loader">
            <div className="sk-swing-dot"></div>
            <div className="sk-swing-dot"></div>
          </div>
        ) : (
          data.map((item) => {
            let arr = item.name.split(" ");
            let name = arr.join("+");
            return (
              <Character
                key={item.char_id}
                author={name}
                id={item.char_id}
                img={item.img}
                name={item.name}
                occupation={item.occupation}
                dob={item.birthday}
                status={item.status}
              />
            );
          })
        )}
      </div>
      {loading
        ? ""
        : !search && (
            <DataPagination
              page={page}
              setPage={setPage}
              hasNextPage={search ? false : page <= 6}
            />
          )}
    </div>
  );
}

export default HomeScreen;
