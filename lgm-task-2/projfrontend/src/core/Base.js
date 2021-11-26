import React, { useEffect, useState } from "react";
import "../styles.css";
import { Spinner } from "react-bootstrap";
import { getAllProduct } from "./helper/coreapicalls";

export default function Base() {

   const [users, setUser] = useState([]);

   const [loading, setLoading] = useState(false);
   
   const [buttonClick, setButtonClick] = useState(false);

   const preLoad = () => {
      setButtonClick(true);

      getAllProduct().then(data => {
         console.log("User", data);
         if (data && data.error) {
            console.log(data.error);
         }
         else {
            console.log("User", data);
            setUser(data.data);
         }
      })

      setInterval(() => {
         setLoading(true);
      }, 1500);
   }

   return (
      <div>
         <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
               <a className="navbar-brand">
                  <img src="https://img.favpng.com/16/6/22/user-computer-icons-logo-clip-art-png-favpng-wVurk7ctMguBduxcEZgRKcHn1.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
               </a>
               <div className="d-flex">
                  <button onClick={preLoad} className="btn btn-outline-danger rounded">
                     Get Users
                  </button>
               </div>
            </div>
         </nav>

         <div className="container-fluid">
            <div className="text-dark text-center ">
               <h2 className="display-4 mb-5">User's Page</h2>
               <p className="lead"></p>
            </div>


            {buttonClick ? (loading ? (

               <div className="row text-center">
                  <div className="row">

                     {users && users.map((user, index) => {
                        console.log("all users", user);
                        return (
                           <div key={index} className="col-3 mb-4">

                              <div className="card text-dark bg-light border border-info mb-3">
                                 <div className="card-header lead text-center">{user.first_name} {user.last_name}</div>

                                 <div className="card-body">
                                    <div className="rounded border p-2 image-center">
                                       <img
                                          src={user.avatar}
                                          alt="photo"
                                          style={{ maxHeight: "100%", maxWidth: "100%" }}
                                          className="rounded-circle mx-auto d-block"
                                       ></img>
                                    </div>

                                    <p className="lead bg-dark font-weight-normal text-light rounded text-center">{user.email}</p>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>

               </div>) : (
               <Spinner className="Spin" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            )) : (<div className="container-part text-center"><h3>Click on Get Users button!</h3></div>)
            }

         </div>

         <footer className="footer">
            <div className="container-fluid text-white text-center p-2 bg-dark">
               <span className="text-muted">© getusers.com, Inc. All rights reserved.</span>
            </div>
         </footer>
      </div>
   )
}
