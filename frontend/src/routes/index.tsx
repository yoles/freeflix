import { Route, Routes } from "react-router-dom";
import {WelcomePage} from "../home/Welcome.tsx";
import {MovieDetail} from "../movies/MovieDetail.tsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}/>
      <Route path="/movie/:movieId" element={<MovieDetail />}/>
    </Routes>
  );
}
