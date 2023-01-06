import { useState, useEffect } from "react";

import User from "./User";

const colors = ["#0c9bbd", "red", "orange", "green"];

const RandomUserTwo = () => {
  const [num, setNum] = useState(0);
  const [searchChange, setSearchChange] = useState("");
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem("user") || undefined
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      let url = `https://randomuser.me/api/?seed=${searchWord}`;
      if (searchWord === undefined) {
        url = "https://randomuser.me/api/";
      }
      const res = await fetch(url);
      const data = await res.json();
      setData(data.results);
      localStorage.setItem("user", searchWord);
    };

    fetchUser();
  }, [searchWord]);

  useEffect(() => {}, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      console.log("i am running");
      setNum((prevNum) => (prevNum === 3 ? 0 : prevNum + 1));
    }, 7000);

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[num],
        transition: "background-color 4s"
      }}
      className="container"
    >
      <div className="person">
        {data?.map((data) => (
          <User key={data.id.value} data={data} />
        ))}
      </div>
      <div className="form-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchWord(searchChange);
            setSearchChange("");
          }}
        >
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            onChange={(e) => setSearchChange(e.target.value)}
            value={searchChange}
            name="searchWord"
            placeholder="Username"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RandomUserTwo;