import { useContext, useState } from "react";
import SectionTitle from "../../../utilities/SectionTitle";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useDataLoader from "../../../../hooks/useDataLoader";
import ModalData from "../../../utilities/ModalData";

const CollegesCard = ({ popularClg }) => {
  const [infoData] = useDataLoader("getAllClg");
  const { user } = useContext(AuthContext);
  const [clgID, setClgID] = useState(null);
  const navigate = useNavigate();
  const loaction = useLocation();

  const modalClick = (id) => {
    if (!user) {
      return navigate("/signin", {
        state: { from: loaction },
        replace: true,
      });
    }
    setClgID(id);
    window.my_modal_5.showModal();
  };

  return (
    <div>
      <SectionTitle
        heading="Popular College"
        subHeading="Discover the latest and most sought-after College styles that are captivating the art world. From abstract and surreal to vintage and modern, explore the diverse range of popular College aesthetics."
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
        {popularClg.map((clg) => (
          <div className="card card-compact shadow-xl" key={clg._id}>
            <figure>
              <img src={clg.college_image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-info">{clg.college_name}</h2>
              <ul>
                <li>
                  <span className="font-bold">Admission: </span>
                  {clg.admission_dates?.[0]}
                </li>
                <li>
                  <span className="font-bold">Events: </span>
                  {clg.events?.[0]}
                </li>
                <li>
                  <span className="font-bold">Sports: </span>
                  {clg.sports?.[0]}
                </li>
                <li>
                  <span className="font-bold">Research Work: </span>
                  {clg.research_history?.substring(0, 135) + "....."}
                </li>
              </ul>
              <div className="card-actions justify-center mt-2">
                <button
                  onClick={() => modalClick(clg._id)}
                  className="btn btn-info text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
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
              if (clg._id === clgID) {
                return <ModalData clg={clg} key={clg._id} />;
              }
              return null;
            })}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CollegesCard;
