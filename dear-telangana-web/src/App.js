// import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import VideoForm from "./components/videos/VideoForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/video",
        element: <VideoForm />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
