import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(res?.data?.data));
  };

  useEffect(() => {
    fetchConnections();
  }, []);
  if (!connections) return;

  if (connections.length == 0)
    return <h1 className="text-2xl text-center">No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, age, gender, about, photoURL } =
          connection;
        return (
          <div
            key={connection._id}
            className="flex flex-col sm:flex-row gap-6 p-6 m-4 rounded-xl bg-gradient-to-r from-base-200 to-base-300 shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-2xl mx-auto border border-base-300"
          >
            <div className="flex-shrink-0">
              <img
                src={
                  photoURL ||
                  "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=1060"
                }
                className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-base-100"
                alt={firstName}
              />
            </div>
            <div className="flex flex-col justify-center flex-grow">
              <h2 className="text-xl font-bold text-base-content">
                {firstName + " " + lastName}
              </h2>
              <p className="text-sm text-base-content/70 mb-2">
                {age && gender ? `${age} years • ${gender}` : ""}
              </p>
              <p className="text-base text-base-content/80 leading-relaxed">
                {about}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
