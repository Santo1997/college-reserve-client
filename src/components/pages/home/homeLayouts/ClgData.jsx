const ClgData = ({ clg }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden absolute right-0 z-50">
      <div className="card card-compact shadow-xl bg-white">
        <figure>
          <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-info">{clg.college_name}</h2>
          <ul>
            <li>
              <span className="font-bold">Admission: </span>
              {clg.admission_dates[0]}
              {/* <ul className="ps-3 list-disc list-inside">
                    {clg.admission_dates.map((dates, index) => (
                      <li key={index}>{dates}</li>
                    ))}
                  </ul> */}
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
            <button className="btn btn-info text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClgData;
