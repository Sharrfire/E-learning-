import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./features/Auth/components/login-register/Login";
// import Login from "./features/Auth/components/login-register/Login";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import CourseDetail from "./pages/courseDetail/CourseDetail";
import Course from "./pages/courseList/Course";
import Home from "./pages/home/Home";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";
import NotFoundPage from './pages/home/notFounPage/NotFoundPage';

function App() {
  const userName = localStorage.getItem("USER_LOGIN");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/detail">
          <Route
            path=":courseId"
            element={
              <>
                <Header />
                <CourseDetail />
                <Footer />
              </>
            }
          />
        </Route>
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />{" "}
        <Route
          path="/blog"
          element={
            <>
              <Header />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/courseList"
          element={
            <>
              <Header />
              <Course />
              <Footer />
            </>
          }
        />  <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />             
               <Footer />
            </>
          }
        />
        {userName && <Route path="/personalInfo" element={<PersonalInfo />} />}
        {userName && (
          <Route
            path="/login"
            element={<Navigate replace to="/personalInfo" />}
          />
        )}
        {!userName && (
          <Route path="/personalInfo" element={<Navigate replace to="/" />} />
        )}
        {!userName && <Route path="/login" element={<Login />} />}
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
