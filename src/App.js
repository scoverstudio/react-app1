import About from "./components/About/About";
import Container from "./components/Container/Container.js";
import Favorite from "./components/Favorite/Favorite.js";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./Home/Home.js";
import { Routes, Route } from "react-router-dom";
import WrongPage from "./components/WrongPage/WrongPage";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route
            path="*"
            element={<WrongPage />}
          />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
