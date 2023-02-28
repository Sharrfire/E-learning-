import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./features/Auth/components/login-register/Login";
// import Login from "./features/Auth/components/login-register/Login";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import CourseDetail from "./pages/courseDetail/CourseDetail";
import Course from "./pages/courseList/Course";
import Home from "./pages/home/Home";
import PersonalInfo from "./pages/personalInfo/PersonalInfo";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
