import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  // const {firstName, lastName, gender, age, about, photoURL} = user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const updateProfile = async () => {
    setError("");
    try {
      const res = await axios.put(
        "http://localhost:3000/profile/edit",
        { firstName, lastName, age, gender, about, photoURL },
        { withCredentials: true },
      );
      // console.log("Profile updated Successfully");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      console.log(res.data.data);
      dispatch(addUser(res?.data?.data));
      setError("");
    } catch (err) {
      setError(err.response?.data || err.message || "Failed to update profile");
      console.log("Error:", err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="flex justify-center mx-10">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div className="flex flex-col">
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">First Name: </span>
                </div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-boarded w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">lastName</span>
                </div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-boarded w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">Photo Url: </span>
                </div>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-boarded w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">Age: </span>
                </div>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="input input-boarded w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">Gender: </span>
                </div>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="input input-boarded w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs py-4">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="input input-boarded w-full max-w-xs"
                />
              </label>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={updateProfile}>
                Update Profile{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, age, gender, about, photoURL }} />
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
