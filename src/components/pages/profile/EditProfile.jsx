import { useLoaderData, useNavigate } from "react-router-dom";
import useDataLoader from "../../../hooks/useDataLoader";
import { useForm } from "react-hook-form";
import api from "../../utilities/axiosAccess";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

const EditProfile = () => {
  const [infoData, refetch] = useDataLoader("getCandidate");
  const clgInfo = useLoaderData();
  const [loader, setLoader] = useState(true);
  const [editData, setEditData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (infoData.length > 0) {
      setEditData(infoData[0]);
      setLoader(false);
    }
  }, [infoData]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { _id, candidName, subject, email, phone, address, birth, img, about } =
    editData;

  const onSubmit = (data) => {
    const updateCandidate = {
      clgName: data.clg,
      candidName: data.candidName,
      subject: data.subject,
      email: data.email,
      phone: data.phone,
      address: data.address,
      birth: data.birth,
      img: data.img,
      about: data.about,
    };

    api.put(`/updateCandidate/${_id}`, updateCandidate).then((res) => {
      if (res.data.modifiedCount > 0) {
        reset();
        refetch();
        toast.success("Profile Updated");
        navigate("/profile", { replace: true });
      } else {
        toast.error("Need Some Update");
      }
    });
  };

  return (
    <>
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <div className="hero">
          <div className="hero-content flex-col w-full lg:w-3/6">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-info">
                Edit Your Profile Now
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control grid grid-cols-4">
                  <label className="label">
                    <span className="label-text font-bold">
                      Select College
                      {errors.candidName && (
                        <span className="text-sm text-red-600">*</span>
                      )}
                    </span>
                  </label>
                  <select
                    {...register("clg", { required: true })}
                    className="select select-info w-full col-span-3"
                  >
                    <option disabled selected>
                      Select College
                    </option>
                    {clgInfo.map((clg) => (
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
                    defaultValue={candidName}
                    placeholder="Candidate Name"
                    className="input input-bordered col-span-3 setInput"
                    {...register("candidName")}
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
                    defaultValue={subject}
                    placeholder="Subject"
                    className="input input-bordered col-span-3 setInput"
                    {...register("subject")}
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
                    defaultValue={email}
                    placeholder="Email"
                    className="input input-bordered col-span-3 setInput"
                    {...register("email")}
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
                    defaultValue={phone}
                    placeholder="Phone number"
                    className="input input-bordered col-span-3 setInput"
                    {...register("phone")}
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
                    defaultValue={address}
                    placeholder="Address"
                    className="input input-bordered col-span-3 setInput"
                    {...register("address")}
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
                    defaultValue={birth}
                    placeholder="Date of birth"
                    className="input input-bordered col-span-3 setInput"
                    {...register("birth", { required: true })}
                  />
                </div>
                <div className="form-control grid grid-cols-4">
                  <label className="label">
                    <span className="label-text font-bold">
                      Image Url
                      {errors.img && (
                        <span className="text-sm text-red-600">*</span>
                      )}
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={img}
                    placeholder="Image"
                    className="input input-bordered col-span-3 setInput"
                    {...register("img")}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-bold ">
                      About You:
                      {errors.feedback?.type === "required" && (
                        <span className="mt-1 text-red-600">*</span>
                      )}
                    </span>
                  </label>
                  <textarea
                    defaultValue={about}
                    placeholder="About You (350 words)"
                    className="input input-bordered p-2 h-24 setInput"
                    {...register("about", {
                      minLength: 12,
                    })}
                  ></textarea>
                  {errors.about?.type === "minLength" && (
                    <span className="mt-1 text-red-600">
                      Must be at least 12 characters long
                    </span>
                  )}
                </div>

                <div className="text-right mt-6 me-14">
                  <button className="btn btn-info text-white w-fit">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default EditProfile;
