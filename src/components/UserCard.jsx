import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { photoURL, firstName, lastName, about, age, gender, _id } = user;
  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,{},{withCredentials:true}
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      throw new Error("ERROR: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center mx-10">
      <div className="card bg-base-100 w-96 h-120 shadow-sm">
        <figure>
          <img src={photoURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + "  " + lastName}</h2>
          {age && gender && (
            <p>
              {age}, {gender}
            </p>
          )}
          <p>{about}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
