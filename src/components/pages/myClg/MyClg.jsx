import { BiMenuAltRight } from "react-icons/bi";
import SectionTitle from "../../loader/SectionTitle";
import MyClgCard from "./MyClgCard";
import { useContext } from "react";
import { ClgContext } from "../../../App";

const MyClg = () => {
  const clgData = useContext(ClgContext);
  return (
    <div>
      <SectionTitle heading="My Colleges"></SectionTitle>
      <div className="block md:hidden relative mb-28">
        <div className="text-right w-full absolute z-50">
          <details className="dropdown dropdown-end mb-5 border-2 border-info">
            <summary className="btn">
              <BiMenuAltRight className="text-3xl text-info" />
            </summary>
            <ul className="dropdown-content text-left p-4 shadow menu border-2 border-info z-[1] bg-base-100 rounded-lg w-48 mt-2">
              {clgData.map((clg) => (
                <li className="hover:text-info mb-2" key={clg._id}>
                  {clg.college_name}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-3 relative">
        <div className="p-5 hidden md:block">
          <h1 className="text-2xl text-info border-b-2 border-info mb-4">
            Colleges List
          </h1>
          <ul className="list-[square] list-inside ms-4 text-black">
            {clgData.map((clg) => (
              <li className="hover:text-info mb-2" key={clg._id}>
                {clg.college_name}
              </li>
            ))}
          </ul>
        </div>
        <MyClgCard />
      </div>
    </div>
  );
};

export default MyClg;
