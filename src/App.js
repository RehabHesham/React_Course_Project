import "./App.css";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import PostDetails from "./Components/PostDetails";
import PageNotFound from "./Components/PageNotFound";
import MyNavbar from "./Components/Navbar/MyNavbar";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/postDetails/:postID" element={<PostDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
