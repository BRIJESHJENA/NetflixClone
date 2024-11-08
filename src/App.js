import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Component/Movies";
import Popular from "./Component/NewPopular";
import Series from "./Component/TvShows";
// import List from "./Component/List";
import AboutProduct from "./Component/AboutProduct";
import AboutProduct1 from "./Component/AboutProduct1";
import AboutProduct2 from "./Component/AboutProduct2";
import AboutProduct4 from "./Component/AboutProduct4";
import AboutProduct5 from "./Component/AboutProduct5";
import AboutProduct6 from "./Component/AboutProduct6";
import AboutProduct7 from "./Component/AboutProduct7";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="popular" element={<Popular />} />
        <Route path="series" element={<Series />} />
        {/* <Route path="list" element={<List />} /> */}
        <Route path="documentry/:id" element={<AboutProduct />} />
        <Route path="top_rated/:id" element={<AboutProduct1 />} />
        <Route path="comedy/:id" element={<AboutProduct2 />} />
        {/* <Route path="details3/:id" element={<AboutProduct3 />} /> */}
        <Route path="romance/:id" element={<AboutProduct4 />} />
        <Route path="trending/:id" element={<AboutProduct5 />} />
        <Route path="series/:id" element={<AboutProduct6 />} />
        <Route path="movies/:id" element={<AboutProduct7 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
