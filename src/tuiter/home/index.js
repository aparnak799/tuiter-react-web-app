import "./index.css";
import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const Home = () => (
  <>
    <h4>Home</h4>
    <WhatsHappening />
    <TuitsList />
  </>
);

export default Home;