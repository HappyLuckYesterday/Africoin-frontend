// import logo from './logo.svg';
import "./App.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
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
import AdminFAQPage from "./pages/AdminFAQPage";
import AdminBlogPage from "./pages/AdminBlogsPage";
import AdminUsersPage from "./pages/AdminUsersPage";
import Logout from "./pages/Logout";
import BlogViewPage from "./pages/BlogViewPage";
import AdminContactsPage from "./pages/AdminContactsPage";

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
  const myauth = useSelector((state: any) => state.auth);

  return (
    <div className="App min-h-screen h-full flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <Routes>
          {!myauth.isAuthenticated && (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogViewPage />} />
              <Route path="/swap" element={<SwapPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/example" element={<LuxuryHotels />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
          {myauth.isAuthenticated && (
            <>
              <Route path="/" element={<AdminUsersPage />} />
              <Route path="/admin/faq" element={<AdminFAQPage />} />
              <Route path="/admin/blog" element={<AdminBlogPage />} />
              <Route path="/admin/user" element={<AdminUsersPage />} />
              <Route path="/admin/contact" element={<AdminContactsPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
