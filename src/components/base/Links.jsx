import Activelink from "./Activelink";

const Links = () => {
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
      <li className="text-lg">
        <Activelink to="/my_college">My College</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/signin">Sign In</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/signup">Sign Up</Activelink>
      </li>
      <li className="text-lg">
        <Activelink to="/profile">Profile</Activelink>
      </li>
    </>
  );
};

export default Links;
