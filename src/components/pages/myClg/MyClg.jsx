import { useContext, useEffect, useState } from "react";
import SectionTitle from "../../utilities/SectionTitle";
import api from "../../utilities/axiosAccess";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useDataLoader from "../../../hooks/useDataLoader";

const MyClg = () => {
  const [, refetch] = useDataLoader("getAllClg");
  const { user } = useContext(AuthContext);
  const [myClg, setMyClg] = useState([]);
  const [clsID, setClsID] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    api.get(`getCandidateClg?user=${user.email}`).then((res) => {
      setMyClg(res.data);
    });
  }, [user.email, clsID]);

  const handleFeedbackClick = (id) => {
    setClsID(id);
    window.my_modal_5.showModal();
  };

  const onSubmit = (data) => {
    const setFeedback = {
      clsID,
      rating: data.rating,
      feedback: data.feedback,
    };
    console.log(setFeedback);

    api.put(`/updateClgFed/${clsID}`, setFeedback).then((response) => {
      if (response.data.modifiedCount > 0) {
        toast.success("Thanks For Your FeedBack");
      }
    });

    reset();
    refetch();
    setClsID(null);
    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <SectionTitle heading="My Colleges"></SectionTitle>

      <div className="md:grid md:grid-cols-4 gap-3 relative">
        {myClg.map((clg) => (
          <div
            className="card card-compact  bg-base-100 shadow-xl"
            key={clg._id}
          >
            <figure>
              <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{clg.college_name}</h2>
              <div className="badge badge-secondary badge-outline mb-4">
                Rating: {clg.rating}
              </div>
              <p>{clg.research_history}</p>
              <div className="card-actions justify-start mt-5">
                <button
                  onClick={() => handleFeedbackClick(clg._id)}
                  className="btn btn-info text-white"
                >
                  Add a Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_5" className="modal">
        <div method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              document.getElementById("my_modal_5").close();
            }}
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control grid grid-cols-4">
              <label className="label">
                <span className="label-text font-bold text-info">
                  Rating:
                  {errors.rating && (
                    <span className="text-sm text-red-600">*</span>
                  )}
                </span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered col-span-3 setInput"
                {...register("rating", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold text-info">
                  Send Your Feedback:
                  {errors.feedback?.type === "required" && (
                    <span className="mt-1 text-red-600">*</span>
                  )}
                </span>
              </label>
              <textarea
                placeholder="Your feedback"
                className="input input-bordered p-2 h-24 setInput"
                {...register("feedback", {
                  required: true,
                  minLength: 12,
                })}
              ></textarea>
              {errors.feedback?.type === "minLength" && (
                <span className="mt-1 text-red-600">
                  Feedback must be at least 12 characters long
                </span>
              )}
            </div>
            <div className="form-control m-5 items-end">
              <button className="btn btn-info text-white w-fit">Send</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyClg;
