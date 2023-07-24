import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../provider/AuthProvider";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { signIn, handleGoogleSignIn } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setErr("");
    signIn(data.email, data.pwd)
      .then((userCredential) => {
        userCredential.user;
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });
  };

  const googleHandle = () => {
    handleGoogleSignIn(googleProvider).then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero min-h-[calc(100vh-300px)] text-black">
      <div className="hero-content flex-col w-full lg:w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-info">Login now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Email:
                  {errors.email && <span className="mt-1 text-red-600">*</span>}
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered setInput"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg font-bold">
                  Password:
                  {errors.pwd?.type === "required" && (
                    <span className="mt-1 text-red-600">*</span>
                  )}
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered setInput"
                {...register("pwd", {
                  required: true,
                })}
              />
              <label className="label">
                <Link to="/reset">
                  <span href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </Link>
              </label>
            </div>
            {err && <span className="text-sm text-red-600 mt-5">{err}</span>}
            <div className="form-control m-5">
              <button type="submit" className="btn btn-info text-white">
                Login
              </button>
            </div>
            <p className="text-sm">
              Create an account?
              <Link to="/signUp">
                <span className="ms-1 underline  hover:text-red-500">
                  Signup
                </span>
              </Link>
            </p>
          </form>
          <div className="divider">OR Go With</div>
          <div className=" text-center mb-10">
            <button
              onClick={googleHandle}
              className="btn btn-outline btn-info btn-md "
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
