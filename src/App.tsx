// import logo from './logo.svg';
import "./App.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import SwapPage from "./pages/SwapPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LuxuryHotels from "./components/Table/LuxuryHotels";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { jwtDecode } from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import store from "./redux/store";
import { SET_CURRENT_USER } from "./redux/reducers/actionTypes/types";

if (localStorage.token) {
  const token = localStorage.token;
  // if there is a token set axios headers for all requests
  setAuthToken(localStorage.token);
  const decoded = jwtDecode(token);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/swap" element={<SwapPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/example" element={<LuxuryHotels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
