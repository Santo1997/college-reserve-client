import { useContext, useState } from "react";
import SectionTitle from "../../utilities/SectionTitle";
import ClgCard from "./ClgCard";
import { BiMenuAltRight } from "react-icons/bi";
import useDataLoader from "../../../hooks/useDataLoader";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Colleges = () => {
  const [infoData] = useDataLoader("getAllClg");
  const { user } = useContext(AuthContext);
  const [clsID, setClsID] = useState(null);
  const navigate = useNavigate();
  const loaction = useLocation();
  const [selectedCollege, setSelectedCollege] = useState(null);

  const scrollToDiv = (to) => {
    const divElement = document.getElementById(to);
    if (to !== null) {
      divElement.scrollIntoView({ behavior: "smooth" });
    }

    setSelectedCollege(to);
  };

  const modalClick = (id) => {
    if (!user) {
      return navigate("/signin", {
        state: { from: loaction },
        replace: true,
      });
    }

    setClsID(id);
    window.my_modal_5.showModal();
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
              {infoData.map((clg) => (
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
          {infoData.map((clg) => (
            <div
              key={clg._id}
              style={{
                display:
                  selectedCollege === null || selectedCollege === clg._id
                    ? "block"
                    : "none",
              }}
            >
              <ClgCard clg={clg} modalClick={modalClick} />
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
            {infoData.map((clg) => (
              <li className="hover:text-info mb-2" key={clg._id}>
                <button onClick={() => scrollToDiv(clg._id)}>
                  {clg.college_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              document.getElementById("my_modal_5").close();
            }}
          >
            ✕
          </button>
          <div className="card-body">
            {infoData.map((clg) => {
              if (clg._id === clsID) {
                return (
                  <div key={clg._id}>
                    <h1 className="card-title text-2xl mb-3 text-info">
                      {clg.college_name}
                    </h1>
                    <ul>
                      <li>
                        <span className="font-bold">Admission: </span>
                        <ul className="ps-3 list-disc list-inside">
                          {clg.admission_dates.map((dates, index) => (
                            <li key={index}>{dates}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">Events: </span>
                        <ul className="ps-3 list-disc list-inside">
                          {clg.events.map((event, index) => (
                            <li key={index}>{event}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">Sports: </span>
                        <ul className="ps-3 list-disc list-inside">
                          {clg.sports.map((sport, index) => (
                            <li key={index}>{sport}</li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <span className="font-bold">Research Work: </span>
                        {clg.research_history}
                      </li>
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Colleges;
