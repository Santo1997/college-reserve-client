import { Link } from "react-router-dom";

const ClgData = ({ clg }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden absolute right-0 z-50">
      <div className="card card-compact shadow-xl bg-white">
        <figure>
          <img src={clg.college_image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-info">{clg.college_name}</h2>
          <ul>
            <li>
              <span className="font-bold">Admission: </span>
              {clg.admission_dates[0]}
            </li>
            <li>
              <span className="font-bold">Events: </span>
              {clg.events[0]}
            </li>
            <li>
              <span className="font-bold">Sports: </span>
              {clg.sports[0]}
            </li>
            <li>
              <span className="font-bold">Research Work: </span>
              {clg.research_history.substring(0, 135) + "....."}
            </li>
          </ul>
          <div className="card-actions justify-center mt-2">
            <Link to="/colleges">
              <button className="btn btn-info text-white">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClgData;
