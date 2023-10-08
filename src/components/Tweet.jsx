import React from "react";
import TweetForm from "./TweetForm";
import TweetList from "./TweetList";

const Tweet = () => {
  return (
    <>
      <div>
        <div className="border p-4">
          <h1 className=" text-3xl">Home</h1>
        </div>
        <TweetForm />
        <TweetList />
      </div>
    </>
  );
};

export default Tweet;
