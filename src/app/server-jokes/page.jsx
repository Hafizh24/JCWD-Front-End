import React from "react";

async function getData() {
  const response = await fetch("https://official-joke-api.appspot.com/jokes/ten");

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
}

const ServerJokes = async () => {
  const data = await getData();
  return (
    <main>
      <h1>Here are some Jokes!</h1>
      <ul>
        {data.map((joke) => (
          <li key={joke.id}>
            {joke.setup} - {joke.punchline}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ServerJokes;
