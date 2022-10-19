import { Route, Routes } from "react-router-dom";

import { Films } from "../pages/Films";
import { Main } from "../pages/Main";


export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/films" element={<Films/>} />
    </Routes>
  );
};