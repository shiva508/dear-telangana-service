// import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import VideoForm from "./components/videos/VideoForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <VideoForm></VideoForm>
    </>
  );
}

export default App;
