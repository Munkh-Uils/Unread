import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./controllers/Header";
import { Home } from "./controllers/Home";
import { Menu } from "./controllers/Menu";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;