import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./features/Auth/components/login-register/Login";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import CourseDetail from "./pages/courseDetail/CourseDetail";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
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
          <Route path="/login" element={<Login />} />
          <Route
            path="/detail"
            element={
              <>
                <Header />
                <CourseDetail /> <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
