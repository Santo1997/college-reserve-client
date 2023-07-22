import { useContext } from "react";
import SectionTitle from "../../loader/SectionTitle";
import { ClgContext } from "../../../App";

const Admission = () => {
  const clgData = useContext(ClgContext);
  return (
    <div>
      <SectionTitle heading="Admission"></SectionTitle>
      <div className="hero  place-items-stretch">
        <div className="hero-content flex-col lg:flex-row items-start">
          <div className="text-left w-full">
            <h1 className="text-3xl font-bold mb-4 text-info">
              Select Your College Now
            </h1>
            <ul className="list-[square] list-inside text-black">
              {clgData.map((clg) => (
                <li className="hover:text-info mb-2" key={clg._id}>
                  {clg.college_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="card  w-full shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Select College</span>
                </label>
                <span className="input p-3 input-bordered col-span-3 border-info text-info">
                  College Name
                </span>
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Candidate Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Candidate Name"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Phone number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Date of birth</span>
                </label>
                <input
                  type="text"
                  placeholder="Date of birth"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image"
                  className="input input-bordered col-span-3 setInput"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
