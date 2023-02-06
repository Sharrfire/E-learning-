import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/components/Footer/Footer";
import Header from "./layouts/components/Header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
