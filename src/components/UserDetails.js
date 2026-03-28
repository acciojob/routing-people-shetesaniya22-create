import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;