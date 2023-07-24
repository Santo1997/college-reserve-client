import SectionTitle from "../../utilities/SectionTitle";
import { useForm } from "react-hook-form";
import api from "../../utilities/axiosAccess";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useDataLoader from "../../../hooks/useDataLoader";

const Admission = () => {
  const [infoData] = useDataLoader("getAllClg");
  const navigate = useNavigate();
  const from = "/my_college";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newCandidate = {
      clgName: data.clg,
      candidName: data.candidName,
      subject: data.subject,
      email: data.email,
      phone: data.phone,
      address: data.address,
      birth: data.birth,
      img: data.img,
      about: "Let's write somthing about you (350 words)",
    };

    api.post("/postCandidates", newCandidate).then((res) => {
      if (res.data.insertedId) {
        reset();
        navigate(from, { replace: true });
      } else {
        if (res.data === "existCandite") {
          toast.error("Candidate Alreday Exist");
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle heading="Admission"></SectionTitle>
      <div className="hero">
        <div className="hero-content flex-col w-full lg:w-3/6">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold text-info">
              Select Your College Now
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">Select College</span>
                </label>
                <select
                  {...register("clg", { required: true })}
                  className="select select-info w-full col-span-3"
                >
                  <option value="dfgh">Select College</option>
                  {infoData.map((clg) => (
                    <option
                      value={clg.college_name}
                      className="hover:text-info mb-2"
                      key={clg._id}
                    >
                      {clg.college_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Candidate Name
                    {errors.candidName && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Candidate Name"
                  className="input input-bordered col-span-3 setInput"
                  {...register("candidName", { required: true })}
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Subject
                    {errors.subject && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered col-span-3 setInput"
                  {...register("subject", { required: true })}
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Email
                    {errors.email && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered col-span-3 setInput"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Phone number
                    {errors.phone && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="input input-bordered col-span-3 setInput"
                  {...register("phone", { required: true })}
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Address
                    {errors.address && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered col-span-3 setInput"
                  {...register("address", { required: true })}
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Date of birth
                    {errors.birth && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="date"
                  placeholder="Date of birth"
                  className="input input-bordered col-span-3 setInput"
                  {...register("birth", { required: true })}
                />
              </div>
              <div className="form-control grid grid-cols-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Image
                    {errors.img && (
                      <span className="text-sm text-red-600">*</span>
                    )}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Image"
                  className="input input-bordered col-span-3 setInput"
                  {...register("img", { required: true })}
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
