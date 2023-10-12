"use client";

import React, { useEffect, useState } from "react";

const ClientJokes = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-10&amount=5"
      );
      const { jokes } = await response.json();
      console.log(jokes);
      setData(jokes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <h1>Here are some Jokes!</h1>
      <ul>
        {data.map((joke) => (
          <li key={joke.id}>
            {joke.setup} - {joke.delivery}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ClientJokes;
