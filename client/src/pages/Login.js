import React, { useEffect, useState } from 'react';
import { Form, Input,message } from "antd";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import Spinner from '../components/Spinner';

const Login = () => {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate()
   //from submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8080/api/v1/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem("user",JSON.stringify({ ...data.user, password: "" }));
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Invalid email or password");
    }
 };

 //prevent for login user
 useEffect(() => {
  if (localStorage.getItem("user")) {
    navigate("/");
  }
}, [navigate]);

  return (
    <>
    <div className="resgister-page ">
    {loading && <Spinner />}
    <Form layout="vertical" onFinish={submitHandler} >
      <h1>Login</h1>
      
      <Form.Item label="Email" name="email" >
        <Input type="email" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" />
      </Form.Item>
      <div className="m-2">
        <Link to="/login"></Link>
        <button className="btn btn-success">Login</button>
      </div>
      <div className="d-flex justify-content-end mx-2">
        
        <Link to="/register"><button className="btn btn-secondary">Register</button></Link>
        
      </div>
    </Form>
  </div>
    </>
  )
}

export default Login
