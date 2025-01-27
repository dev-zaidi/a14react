import React from "react";
import { userData } from "./userData";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
import Cards from './../../Cards/Cards';

const Users = () => {
  const navigate=useNavigate()
  return (
    <div className=" d-flex flex-wrap justify-content-around" >
    {userData && userData.map((e,i) => {
      return (
        <div key={i} className="m-1" style={{border:"1px solid grey", width:"240px", textAlign:"center"}}>
         <Cards key={i} name={e.name} username={e.username} email={e.email}/>
          <button className="m-3 btn btn-outline-secondary" onClick={()=>navigate( `/users/${e.id}`)}>View</button>
        </div>
      )
    })}
    </div>
  )
};

export default Users;
