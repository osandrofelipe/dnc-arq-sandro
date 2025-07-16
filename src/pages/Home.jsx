import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsLists";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <Header/>
      <div className="container">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
