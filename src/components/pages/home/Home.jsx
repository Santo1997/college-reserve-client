import SearchBar from "../../loader/SearchBar";
import Intro from "./homeLayouts/Intro";
import CollegesCard from "./homeLayouts/CollegesCard";
import AddButton from "../../loader/AddButton";
import AddClgInfo from "./homeLayouts/AddClgInfo";
import Galeries from "./homeLayouts/Galeries";
import RegisterInfo from "./homeLayouts/RegisterInfo";
import Research from "./homeLayouts/Research";
import Review from "./homeLayouts/Review";

const Home = () => {
  return (
    <>
      <SearchBar /> {/*  onSearch={handleSearch} */}
      <Intro />
      <CollegesCard />
      <AddButton button="View More" />
      <AddClgInfo />
      <Galeries />
      <RegisterInfo />
      <Research />
      <Review />
    </>
  );
};

export default Home;
