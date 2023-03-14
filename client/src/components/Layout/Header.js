import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
 
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };


  return (
   <>
   <nav className="navbar navbar-expand-lg py-2 navbar-dark bg-dark border-bottom border-dark">
     <div className="container-fluid">
        <img className='topImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
         <Link className="navbar-brand" to="/">
           Expense Management
         </Link>
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         
           <li className="nav-item">
           {" "}
           <h6 className="nav-link text-light">{loginUser && loginUser.name}</h6>{" "}
           </li>
           <li className="nav-item">
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
           
         </ul>
       </div>
     </div>
   </nav>
 </>
  )
}

export default Header
