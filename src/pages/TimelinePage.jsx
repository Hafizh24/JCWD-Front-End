import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTweet } from "../redux/tweetSlice";
import Tweet from "../components/Tweet";
import UserAccountMenu from "../components/UserAccountMenu";
import Sidebar from "../components/Sidebar";
import { setData } from "../redux/userSlice";

const TimelinePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:2000/tweets")
      .then((response) => {
        // console.log(response.data);
        dispatch(setTweet(response.data));
      })
      .catch((error) => {
        console.error("Error fetching tweets:", error);
      });

    axios
      .get("http://localhost:2000/users")
      .then((response) => {
        // console.log(response.data);
        dispatch(setData(response.data));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [dispatch]);

  return (
    <>
      <div className="flex mx-8">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-1/2">
          <Tweet />
        </div>
        <div className="w-1/4">
          <UserAccountMenu />
        </div>
      </div>
    </>
  );
};

export default TimelinePage;
