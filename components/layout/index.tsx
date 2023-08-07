import Css from "./index.module.css";
import React, { useEffect } from "react";
import { HeaderBuscador } from "../header-buscador";
import { Footer } from "../footer";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <HeaderBuscador></HeaderBuscador>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
};
