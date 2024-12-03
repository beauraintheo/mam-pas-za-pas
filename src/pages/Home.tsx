import { Cards } from "@/components/layouts/Cards.tsx";
import { Footer } from "@/components/layouts/Footer.tsx";
import { Header } from "@/components/layouts/Header.tsx";
import { Heading } from "@/components/layouts/Heading.tsx";
import { Presentation } from "@/components/layouts/Presentation.tsx";
import { Questions } from "@/components/layouts/Questions.tsx";

const Home = () => (
  <div className="page">
    <Header />
    <Heading />
    <Cards />
    <Presentation />
    <Questions />
    <Footer />
  </div>
);

export default Home;
