import SectionTitle from "../../../loader/SectionTitle";

const CollegesCard = () => {
  return (
    <div>
      <SectionTitle
        heading="Popular College"
        subHeading="Discover the latest and most sought-after College styles that are captivating the art world. From abstract and surreal to vintage and modern, explore the diverse range of popular College aesthetics."
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="card card-compact shadow-xl">
          <figure>
            <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-info">college_name</h2>
            <ul>
              <li>admission_dates</li>
              <li>events</li>
              <li>research_history</li>
              <li>sports</li>
            </ul>
            <div className="card-actions justify-center">
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact shadow-xl">
          <figure>
            <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-info">college_name</h2>
            <ul>
              <li>admission_dates</li>
              <li>events</li>
              <li>research_history</li>
              <li>sports</li>
            </ul>
            <div className="card-actions justify-center">
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact shadow-xl">
          <figure>
            <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-info">college_name</h2>
            <ul>
              <li>admission_dates</li>
              <li>events</li>
              <li>research_history</li>
              <li>sports</li>
            </ul>
            <div className="card-actions justify-center">
              <button className="btn btn-info">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesCard;
