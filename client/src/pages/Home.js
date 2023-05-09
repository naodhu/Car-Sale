// src/pages/Home.js
import SearchForm from "../components/SearchForm";

// import Filter from "../components/Filter";
import Navbar from "../components/Navbar";
import CarList from "../components/CarList";
import Footer from "../components/Footer";
// import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchForm />
      <CarList />
      <Footer />
    </>
  );
};

export default Home;
