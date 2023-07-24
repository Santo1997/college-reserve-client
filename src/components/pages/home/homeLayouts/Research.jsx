import { Link } from "react-router-dom";
import SectionTitle from "../../../utilities/SectionTitle";

const Research = ({ infoData }) => {
  const showCase = infoData.slice(0, 4);
  return (
    <div>
      <SectionTitle
        heading="Student Research Showcase"
        subHeading="Every research paper displayed in our showcase goes through a rigorous evaluation process to ensure academic excellence. These papers demonstrate students' commitment to producing scholarly work of the highest quality."
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {showCase.map((clg) => (
          <div className="card md:card-side shadow-xl h-fit" key={clg._id}>
            <figure>
              <img src={clg.college_image} className="md:h-full md:w-56 " />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title">{clg.college_name}</h2>
              <p>
                <span>{clg.research_history?.substring(0, 80) + "....."}</span>
                <br />
                <span>{clg.research}</span>
              </p>
              <div className="card-actions justify-end me-5">
                <Link to={clg.research}>
                  <button className="btn btn-info btn-sm text-white">
                    Watch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
