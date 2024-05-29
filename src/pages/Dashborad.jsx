import React, { useEffect, useState } from "react";
import Axios from "../config/Axios";
import { nanoid } from "nanoid";
const Dashborad = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    Axios.get("auth/")
      .then((res) => {
        setUsers(res.data.users);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={nanoid()} className="hover py-2">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashborad;
