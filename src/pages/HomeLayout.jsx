import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Header } from "../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar className="align-element" />
      <main className="align-element">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
