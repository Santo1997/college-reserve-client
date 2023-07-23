import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { signIn, handleGoogleSignIn } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    setErr("");
    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signIn(email, pass)
      .then((userCredential) => {
        userCredential.user;
        form.reset();
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
    <div className="hero min-h-[calc(100vh-300px)] ">
      <div className="hero-content flex-col w-full lg:w-3/6">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-10 text-info">Login now</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info text-lg font-bold">
                  Email:
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered setInput "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-info text-lg font-bold">
                  Password:
                </span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered setInput"
                required
              />
              <label className="label">
                <Link to="/reset">
                  <span href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </Link>
              </label>
            </div>
            {err && (
              <>
                <p className="text-sm text-red-600 mt-5">{err}</p>
              </>
            )}
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
