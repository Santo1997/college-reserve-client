import SectionTitle from "../../../utilities/SectionTitle";

const Research = ({ infoData }) => {
  return (
    <div>
      <SectionTitle
        heading="Student Research Showcase"
        subHeading="Every research paper displayed in our showcase goes through a rigorous evaluation process to ensure academic excellence. These papers demonstrate students' commitment to producing scholarly work of the highest quality."
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-2">
        {infoData.map((clg) => (
          <div className="card md:card-side shadow-xl md:h-40" key={clg._id}>
            <figure>
              <img
                src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg"
                className="md:h-full md:w-56 "
              />
            </figure>
            <div className="card-body p-3">
              <h2 className="card-title">{clg.college_name}</h2>
              <p>
                <span>{clg.research_history?.substring(0, 80) + "....."}</span>
                <br />
                <span>
                  <a href="">{clg.research}</a>
                </span>
              </p>
              <div className="card-actions justify-end relative">
                <button className="btn btn-info btn-sm absolute bottom-0">
                  Watch
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
