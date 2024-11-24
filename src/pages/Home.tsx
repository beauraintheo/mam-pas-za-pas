import { Cards } from "@/components/layouts/Cards.tsx";
import { Header } from "@/components/layouts/Header.tsx";
import { Heading } from "@/components/layouts/Heading.tsx";

const Home = () => (
  <div className="page">
    <Header />
    <Heading />
    <Cards />
  </div>
);

export default Home;
