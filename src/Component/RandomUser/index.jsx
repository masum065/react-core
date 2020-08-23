import React, { useState, useEffect } from "react";
import "./index.css";

class RandomUser extends React.Component {
  render() {
    return (
      <div className="row m-4 justify-content-center">
        <User />
      </div>
    );
  }
}
function User() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results));
  }, []);

  //   let refreshPage = () => window.location.reload(true);
  function refreshPage() {
    window.location.reload(false);
  }
  return users.map((user) => (
    <div className="col-4 m-auto">
      <SingleUser
        image={user.picture.large}
        name={`${user.name.first} ${user.name.last}`}
        age={user.dob.age}
        phone={user.phone}
        email={user.email}
        key={user.id.value}
      />
      <div className="w-100 justify-content-center d-flex">
        <button onClick={refreshPage}>Generator</button>
      </div>
    </div>
  ));
}
// function refreshPage() {
//   window.location.reload(false);
// }
function SingleUser(props) {
  return (
    // <div className="col-4">
    <div className="single-user">
      <img src={props.image} alt="" />
      <h2 className="userName">{props.name}</h2>
      <p className="contact-details">
        --Age--<span>{props.age}</span>
      </p>
      <p className="contact-details">
        --Phone--<span>{props.phone}</span>
      </p>
      <p className="contact-details">
        --Email--<span>{props.email}</span>
      </p>
    </div>
    // </div>
  );
}

export default RandomUser;
