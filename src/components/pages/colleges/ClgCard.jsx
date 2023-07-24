const ClgCard = ({ clg, modalClick }) => {
  const { _id, college_name, admission_dates, rating, research_num } = clg;
  return (
    <div id={_id} className="card lg:card-side shadow-xl mb-3">
      <figure>
        <img
          src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg"
          className="w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-info">{college_name}</h2>
        <div className="badge badge-secondary badge-outline mb-4">
          Rating: {rating}
        </div>
        <ul>
          <li>Admission Date: {admission_dates?.[0]}</li>
          <li>Number of the Research: {research_num}</li>
        </ul>
        <div className="card-actions justify-end">
          <button
            onClick={() => modalClick(_id)}
            className="btn btn-info text-white"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClgCard;
