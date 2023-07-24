import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../../utilities/axiosAccess";
import { AuthContext } from "../../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    api.get(`getCandidate?user=${user.email}`).then((res) => {
      setProfile(res.data);
    });
  }, [user.email]);

  return (
    <div className="container my-4 bg-base-100 h-screen">
      <div className="bg-[#5e72e4] flex justify-center min-h-[calc(100vh-40vh)] relative">
        {profile.map((data) => (
          <div
            className=" card card-compact max-w-sm md:max-w-xl bg-base-100 shadow-xl absolute top-[40%] p-5"
            key={data._id}
          >
            <div className="avatar mx-auto relative">
              <div className="w-32 rounded-full  ring ring-info ring-offset-base-100 ring-offset-2 absolute left-[50%] translate-x-[-50%] top-[-40px]">
                <img src={data.img} />
              </div>
            </div>
            <div className="text-center mt-28">
              <h2 className="text-3xl">{data.candidName}</h2>
              <h2 className="text-md mb-2">{data.address}</h2>
              <div className="mb-5">
                <p>
                  <strong>Email:</strong> {data.email}
                </p>
                <p>
                  <strong>Phone:</strong> {data.phone}
                </p>
                <p className="mb-5">
                  <strong>Date of Birth:</strong> {data.birth}
                </p>
                <p>
                  <strong>Collage:</strong> {data.clgName}
                </p>
                <p>
                  <strong>Subject:</strong> {data.subject}
                </p>
              </div>
              <p className="font-bold underline">About</p>
              <p>{data.about?.substring(0, 350)}</p>
              <div className="card-actions justify-center mt-5">
                <Link to={`/edit_profile`}>
                  <button className="btn btn-info text-white">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
