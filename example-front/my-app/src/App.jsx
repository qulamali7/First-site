import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Add from "./pages/Add";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/add" element={<Add/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
