import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  // const {error: errorMessage} = useSelector((state)=> state.user)
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username || username.trim() === "") {
      setErrorMessage("Please enter a name");
      return null;
    }
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => {setUsername(e.target.value); if(username){setErrorMessage("")}}}
        className="input w-72 mb-5"
      />
      {errorMessage && (
        <p className="text-xs sm:text-sm text-red-700 p-2 w-fit mx-auto mb-5 mt-0 bg-red-100 rounded-md">
          {errorMessage}
        </p>
      )}
      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
