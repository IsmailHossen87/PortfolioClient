import Contact from './Contract';
import Hero from './Hero';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Project></Project>
            <Contact ></Contact>
        </div>
    );
};

export default Home;