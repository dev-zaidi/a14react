import React from "react";
import { userData } from "./userData";
import { useParams } from "react-router-dom";
import SingleData from "./../../Cards/SingleData";

const User = () => {
  const { id } = useParams();
  const singleUser = userData.filter((e) => {
    return id == e.id;
  });
  return (
    <>
      {singleUser &&
        singleUser.map((e, i) => {
          return (
            <div className="m-1 p-3" key={i}>
              <SingleData
                name={e.name}
                username={e.username}
                email={e.email}
                address={e.address.city}
              />
            </div>
          );
        })}
    </>
  );
};

export default User;
