import About from "../About/About";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;