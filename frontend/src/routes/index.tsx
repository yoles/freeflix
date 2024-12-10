import { Route, Routes } from "react-router-dom";
import {WelcomePage} from "@src/home/Welcome.tsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}/>
    </Routes>
  );
}
