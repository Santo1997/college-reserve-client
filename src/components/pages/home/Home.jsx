import SearchBar from "../../utilities/SearchBar";
import Intro from "./homeLayouts/Intro";
import CollegesCard from "./homeLayouts/CollegesCard";
import AddButton from "../../utilities/AddButton";
import AddClgInfo from "./homeLayouts/AddClgInfo";
import Galeries from "./homeLayouts/Galeries";
import RegisterInfo from "./homeLayouts/RegisterInfo";
import Research from "./homeLayouts/Research";
import Review from "./homeLayouts/Review";
import { useContext, useEffect, useState } from "react";
import { ClgContext } from "../../../App";

const Home = () => {
  const clgData = useContext(ClgContext);
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredColleges = clgData.filter((clg) =>
    clg.college_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const sortedColleges = clgData.sort((a, b) => b.rating - a.rating);
    setColleges(sortedColleges);
  }, [clgData]);

  const popularClg = colleges.slice(0, 3);

  return (
    <>
      <SearchBar onChange={setSearchTerm} filteredColleges={filteredColleges} />
      <Intro />
      <CollegesCard popularClg={popularClg} />
      <AddButton button="View More" />
      <AddClgInfo />
      <Galeries clgData={clgData} />
      <RegisterInfo />
      <Research clgData={clgData} />
      <Review />
    </>
  );
};

export default Home;
