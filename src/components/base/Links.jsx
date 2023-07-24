import { useContext } from "react";
import Activelink from "./Activelink";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const from = "/";
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <li className="text-lg">
        <Activelink to="/">Home</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/colleges">Colleges</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/admission">Admission</Activelink>
      </li>

      {user ? (
        <>
          <li className="text-lg">
            <Activelink to="/my_college">My College</Activelink>
          </li>
          <li className="text-lg">
            <button
              className="btn-md btn-outline text-white hover:text-info"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </li>
          <li className="text-lg">
            <Activelink to="/profile">
              {user.displayName !== null && (
                <>
                  <span>{user.displayName}</span>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </>
              )}
            </Activelink>
          </li>
        </>
      ) : (
        <>
          <li className="text-lg">
            <Activelink to="/signin">Login</Activelink>
          </li>
          <li className="text-lg">
            <Activelink to="/signup">SignUp</Activelink>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
