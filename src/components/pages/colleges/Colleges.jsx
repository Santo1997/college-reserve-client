import { useState } from "react";
import SectionTitle from "../../utilities/SectionTitle";
import ClgCard from "./ClgCard";
import { BiMenuAltRight } from "react-icons/bi";
import useDataLoader from "../../../hooks/useDataLoader";

const Colleges = () => {
  const [clgData] = useDataLoader();
  const [selectedCollege, setSelectedCollege] = useState(null);

  const scrollToDiv = (to) => {
    const divElement = document.getElementById(to);
    if (to !== null) {
      divElement.scrollIntoView({ behavior: "smooth" });
    }

    setSelectedCollege(to);
  };

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
              {clgData.map((clg) => (
                <li className="hover:text-info mb-2" key={clg._id}>
                  <button className="btn" onClick={() => scrollToDiv(clg._id)}>
                    {clg.college_name}
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-3 relative">
        <div className="col-span-2">
          {clgData.map((clg) => (
            <div
              key={clg._id}
              style={{
                display:
                  selectedCollege === null || selectedCollege === clg._id
                    ? "block"
                    : "none",
              }}
            >
              <ClgCard clg={clg} />
            </div>
          ))}
        </div>

        <div className="p-5 hidden md:block min-h-[calc(100vh-500px)]">
          <h1 className="text-2xl text-info border-b-2 border-info mb-4">
            Colleges List
          </h1>
          <ul className="list-[square] list-inside ms-4 text-black h-fit">
            <li className="hover:text-info mb-2">
              <button onClick={() => scrollToDiv(null)}>All College</button>
            </li>
            {clgData.map((clg) => (
              <li className="hover:text-info mb-2" key={clg._id}>
                <button onClick={() => scrollToDiv(clg._id)}>
                  {clg.college_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Colleges;
