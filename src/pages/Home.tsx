import { Cards } from "@/components/layouts/Cards.tsx";
import { Header } from "@/components/layouts/Header.tsx";
import { Heading } from "@/components/layouts/Heading.tsx";
import { Presentation } from "@/components/layouts/Presentation.tsx";

const Home = () => (
  <div className="page">
    <Header />
    <Heading />
    <Cards />
    <Presentation />
  </div>
);

export default Home;
