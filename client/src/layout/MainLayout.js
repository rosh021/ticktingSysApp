import React from "react";
import { Header } from "./header/Header";

export const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};
