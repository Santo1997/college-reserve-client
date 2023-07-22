const MyClgCard = () => {
  return (
    <div className="col-span-2">
      <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Candidate name</h2>
          <ul>
            <li>Candidate Email</li>
            <li>Phone number</li>
            <li>Subject</li>
            <li>Date of Birth</li>
            <li>Address</li>
          </ul>
          <div className="card-actions justify-start mt-5">
            <button className="btn btn-primary">Add a Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClgCard;
