// import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NewsHome from "./components/news/NewsHome";
import VideoForm from "./components/videos/VideoForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPlayes from "./components/videos/VideoPlayes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "video",
        element: <VideoForm />,
      },
      {
        path: "video/play",
        element: <VideoPlayes />,
      },
      { path: "/news", element: <NewsHome /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
