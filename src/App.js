import React from "react";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
