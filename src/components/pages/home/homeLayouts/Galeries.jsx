import SectionTitle from "../../../utilities/SectionTitle";

const Galeries = ({ clgData }) => {
  return (
    <div>
      <SectionTitle
        heading=" Celebrating Graduates Journey"
        subHeading="Each image in our gallery is a testament to the hard work and dedication that leads to academic achievement Join the graduates in celebrating their accomplishments as they embark on promising futures."
      ></SectionTitle>

      <div className="grid md:grid-cols-3 gap-2">
        {clgData.map((clg) => (
          <div className="card card-compact shadow-xl" key={clg._id}>
            <figure>
              <img src={clg.graduate} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{clg.college_name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeries;
