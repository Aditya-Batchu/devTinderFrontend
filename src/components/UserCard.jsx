const UserCard = ({user}) => {
  const {photoURL,firstName,lastName, about, age, gender} = user;
  return (
    <div className="flex items-center justify-center mx-10">
      <div className="card bg-base-100 w-96 h-120 shadow-sm">
      <figure>
        <img
          src={photoURL}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName+"  "+lastName}</h2>
        {age && gender && <p>{age}, {gender}</p>}
        <p>
          {about}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserCard;
