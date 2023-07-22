import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Reset = () => {
  const { resetPass } = useContext(AuthContext);
  const navigate = useNavigate();

  const from = "/signin";
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;

    resetPass(email).then(() => {
      navigate(from, { replace: true });
      toast.success("Password reset email sent!");
    });
  };

  return (
    <div className="hero min-h-[calc(100vh-300px)] ">
      <div className="hero-content flex-col w-full lg:w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10 text-info">Password Reset</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info text-lg font-bold">
                  Enter Your Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered setInput "
                required
              />
            </div>

            <div className="form-control m-5">
              <button type="submit" className="btn btn-info text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
