import { Blog } from "../Blog";
import { Founderpage } from "./Founderpage";
import { Goal } from "./Goal";
import { Hero } from "./Hero";
import { Love } from "./Love";
import { Mission } from "./Mission";
import { NewsLetter } from "./NewsLetter";
import { Partner } from "./Partner";
import { ReformMedia } from "./ReformMedia";
import { Service } from "./Service";

const Home = () => {
  return (
    <>
      <Hero />
      <Goal />
      <Service />
      <Love />
      <Mission />
      <Blog />
      <ReformMedia />
      <Founderpage />
      <Partner />
      <NewsLetter />
    </>
  );
};

export default Home;
