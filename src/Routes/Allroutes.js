import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../Pages/Landing";
import ShowTv from "../Pages/ShowTv";
import Languages from "../Pages/Languages";
import Movies from "../Pages/Movies";
import TvShows from "../Pages/TvShows";
import MyList from "../Pages/MyList";
import Login from "../Pages/Login";
import Children from "../Pages/Children";
import { useSelector } from "react-redux";
import Search from "../Components/Search";
import RespoNav from "../Components/RespoNav";
// import New from "../Components/New";
// import Any from "../Pages/Any";

function Allroutes() {
  const isAuthorized = useSelector((state) => state?.Auth?.token);
  console.log(isAuthorized);
  return (
    <BrowserRouter>
      {isAuthorized ? (
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/show" element={<ShowTv />} />
          <Route exact path="/lang" element={<Languages />} />
          <Route exact path="/movie" element={<Movies />} />
          <Route exact path="/tv" element={<TvShows />} />
          <Route exact path="/list" element={<MyList />} />
          <Route exact path="/child" element={<Children />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/resnav" element={<RespoNav />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
export default Allroutes;
