import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import TimelinePage from "./pages/TimelinePage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

function App() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/users/${id}`);
      // console.log(response.data);
      dispatch(setUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={id ? <Navigate to="/timeline" /> : <LoginPage />} />
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/timeline" element={id ? <TimelinePage /> : <Navigate to="/" />} />
        {/* <Route path="/timeline" element={<TimelinePage />} /> */}
      </Routes>
      {/* <TimelinePage /> */}
    </>
  );
}

export default App;
