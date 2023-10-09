import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimelinePage from "./pages/TimelinePage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";
import Required from "./components/Required";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/timeline",
    element: <Required />,
    children: [{ path: "/timeline", element: <TimelinePage /> }],
  },
]);

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
