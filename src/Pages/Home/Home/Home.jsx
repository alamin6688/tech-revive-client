import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Revive | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
