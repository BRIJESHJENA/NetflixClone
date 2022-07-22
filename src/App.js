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
import List from "./Component/List";
import AboutProduct from "./Component/AboutProduct";
import AboutProduct1 from "./Component/AboutProduct1";
import AboutProduct2 from "./Component/AboutProduct2";
import AboutProduct3 from "./Component/AboutProduct3";
import AboutProduct4 from "./Component/AboutProduct4";

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="popular" element={<Popular/>}/>
        <Route path="series" element={<Series/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="details/:id" element={<AboutProduct /> }/>
        <Route path="details1/:id" element={<AboutProduct1 /> }/>
        <Route path="details2/:id" element={<AboutProduct2 /> }/>
        <Route path="details3/:id" element={<AboutProduct3 /> }/>
        <Route path="details4/:id" element={<AboutProduct4 /> }/>
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
