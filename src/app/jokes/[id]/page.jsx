import React from "react";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-10&amount=5"
  );
  const { jokes } = await res.json();
  return jokes.map((joke) => ({
    id: joke.id.toString(),
  }));
};

export const getProps = async (params) => {
  console.log(params.id);
  const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${params.id}`, {
    next: { revalidate: 10 },
  });
  const data = await response.json();

  return data;
};

const staticJokes = async ({ params }) => {
  const data = await getProps(params);
  return (
    <>
      <main>
        <h1>Here are some Jokes!</h1>
        <ul>
          <li key={data.id}>
            {data.setup} - {data.delivery}
          </li>
        </ul>
      </main>
    </>
  );
};

export default staticJokes;
