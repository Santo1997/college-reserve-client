const ClgCard = ({ clg }) => {
  const {
    college_name,
    college_image,
    admission_dates,

    rating,
  } = clg;
  return (
    <div className="card lg:card-side shadow-xl mb-3">
      <figure>
        <img
          src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg"
          className="w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{college_name}</h2>
        <div className="badge badge-secondary badge-outline mb-4">
          Rating: {rating}
        </div>
        <ul>
          <li>Admission Date: {admission_dates[0]}</li>
          <li>Number of the Research: {}</li>
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ClgCard;
