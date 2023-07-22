import ClgList from "../../loader/ClgList";
import SectionTitle from "../../loader/SectionTitle";
import ClgCard from "./ClgCard";

import { BiMenuAltRight } from "react-icons/bi";

const Colleges = () => {
  return (
    <div>
      <SectionTitle heading="Colleges"></SectionTitle>
      <div className="block md:hidden relative mb-28">
        <div className="text-right w-full absolute z-50">
          <details className="dropdown dropdown-end mb-5 border-2 border-info">
            <summary className="btn">
              <BiMenuAltRight className="text-3xl text-info" />
            </summary>
            <ul className="dropdown-content text-left p-4 shadow menu border-2 border-info z-[1] bg-base-100 rounded-lg w-48 mt-2">
              <ClgList />
            </ul>
          </details>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-3 relative">
        <ClgCard />

        <div className="p-5 hidden md:block">
          <h1 className="text-2xl text-info border-b-2 border-info mb-4">
            Colleges List
          </h1>
          <ul className="list-[square] list-inside ms-4 text-black">
            <ClgList />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
