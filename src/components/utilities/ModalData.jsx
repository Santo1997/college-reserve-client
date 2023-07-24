const ModalData = ({ clg }) => {
  return (
    <div>
      <h1 className="card-title text-2xl mb-3 text-info">{clg.college_name}</h1>
      <ul>
        <li>
          <span className="font-bold">Admission: </span>
          <ul className="ps-3 list-disc list-inside">
            {clg.admission_dates.map((dates, index) => (
              <li key={index}>{dates}</li>
            ))}
          </ul>
        </li>
        <li>
          <span className="font-bold">Events: </span>
          <ul className="ps-3 list-disc list-inside">
            {clg.events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </li>
        <li>
          <span className="font-bold">Sports: </span>
          <ul className="ps-3 list-disc list-inside">
            {clg.sports.map((sport, index) => (
              <li key={index}>{sport}</li>
            ))}
          </ul>
        </li>
        <li>
          <span className="font-bold">Research Work: </span>
          {clg.research_history}
        </li>
      </ul>
    </div>
  );
};

export default ModalData;
