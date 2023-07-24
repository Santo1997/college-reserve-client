import SectionTitle from "../../../utilities/SectionTitle";

const CollegesCard = ({ popularClg }) => {
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
              <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
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
                <button className="btn btn-info text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegesCard;
