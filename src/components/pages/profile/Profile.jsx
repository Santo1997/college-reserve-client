import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="container my-4 bg-base-100 h-screen">
      <div className="bg-[#5e72e4] flex justify-center min-h-[calc(100vh-40vh)] relative">
        <div className=" card card-compact max-w-sm md:max-w-xl bg-base-100 shadow-xl absolute top-[40%] p-5">
          <div className="avatar mx-auto relative">
            <div className="w-32 rounded-full  ring ring-info ring-offset-base-100 ring-offset-2 absolute left-[50%] translate-x-[-50%] top-[-40px]">
              <img src="https://i.ibb.co/KWf42H4/1665540475120-2.jpg" />
            </div>
          </div>
          <div className="text-center mt-28">
            <h2 className="text-3xl">Candidate Name</h2>
            <h2 className="text-md mb-2">Dhaka, Bangladesh</h2>
            <div className="mb-5">
              <p>
                <strong>Email:</strong> email
              </p>
              <p>
                <strong>Phone:</strong> email
              </p>
              <p className="mb-5">
                <strong>Date of Birth:</strong> email
              </p>
              <p>
                <strong>Collage:</strong> university
              </p>
              <p>
                <strong>Subject:</strong> address
              </p>
            </div>
            <p className="font-bold underline">About</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quia minus labore dolorum quaerat eum, quos aliquam, sapiente vel
              voluptatibus quidem perspiciatis laudantium sed voluptate impedit
              ad hic aliquid, eius qui velit recusandae corrupti earum
              accusantium sunt! Recusandae quas neque minus, dignissimos, magnam
              ad, iusto amet culpa optio veniam sunt!
            </p>
            <div className="card-actions justify-center mt-5">
              <Link to={`/edit_profile`}>
                <button className="btn btn-info text-white">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
