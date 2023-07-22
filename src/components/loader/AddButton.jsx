import { AiFillPlayCircle } from "react-icons/ai";
const AddButton = ({ button }) => {
  return (
    <div className="mx-auto text-center px-5 my-8">
      <button className="btn btn-primary hover:btn-info hover:text-white">
        {button}
        <AiFillPlayCircle />
      </button>
    </div>
  );
};

export default AddButton;
