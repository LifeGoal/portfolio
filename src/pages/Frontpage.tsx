import Home from "../sections/Home";
import About from "../sections/About";
import Competence from "../sections/Competence";
import CareerJourney from "../sections/CareerJourney";

const Frontpage = () => {
    return (
        <main className="flex-1">
            <Home />
            <About />
            <Competence />
            <CareerJourney />
        </main>
    )
}

export default Frontpage;