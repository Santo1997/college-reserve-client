import SearchBar from "../../utilities/SearchBar";
import Intro from "./homeLayouts/Intro";
import CollegesCard from "./homeLayouts/CollegesCard";
import AddClgInfo from "./homeLayouts/AddClgInfo";
import Galeries from "./homeLayouts/Galeries";
import RegisterInfo from "./homeLayouts/RegisterInfo";
import Research from "./homeLayouts/Research";
import Review from "./homeLayouts/Review";
import { useEffect, useState } from "react";
import useDataLoader from "../../../hooks/useDataLoader";

const Home = () => {
  const [infoData] = useDataLoader("getAllClg");
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredColleges = infoData.filter(
    (clg) =>
      clg.college_name &&
      clg.college_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const sortedColleges = infoData.sort((a, b) => b.rating - a.rating);
    setColleges(sortedColleges);
  }, [infoData]);

  const popularClg = colleges.slice(0, 3);

  return (
    <>
      <SearchBar onChange={setSearchTerm} filteredColleges={filteredColleges} />
      <Intro />
      <CollegesCard popularClg={popularClg} />
      <AddClgInfo />
      <Galeries infoData={infoData} />
      <RegisterInfo />
      <Research infoData={infoData} />
      <Review />
    </>
  );
};

export default Home;
