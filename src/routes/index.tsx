import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Generate from "../pages/generate";
import User from "../pages/user";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="generate" element={<Generate />} />
        <Route path=":disciplineId" element={<User />} />
        <Route path="*" element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
