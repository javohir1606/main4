import React from "react";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Menu } from "../components/menu/menu";
import { Media } from "../components/cantact/cantact";
import { Team } from "../components/team/team";
import { Footer } from "../components/footer/footer";
export const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <Menu />
    <Media />
    <Team />
    <Footer />
    </>
  );
};
