import React from 'react'
import { useForm } from "react-hook-form";
import { useState } from "react";
function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      console.log("errors", errors);
    
      
      const [userInfo, setUserInfo] = useState();
      const onSubmit = (data) => {
        setUserInfo(data);
      };
    
    return (
        <div>
              <div>
      <div className="container">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Registration Form</h2>
          <div className="ui divider">
            <div className="ui form">
              <div className="field">
                <label>UserName</label>
                <input
                  type="text"
                  name="username"
                  placeholder="enter usrname"
                  {...register("username", { required: true })}
                />
                <p>
                  {errors.username?.type === "required" &&
                    "usename is required"}
                </p>
              </div>
              <div className="field">
                <label>Email </label>
                <input
                  type="text"
                  name="email"
                  placeholder="enter email"
                  {...register("email", { required: true})}
                />
                <p>
                  {errors.email?.type === "required" && "email is required" }
                </p>
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter password"
                  {...register("password", { required: true , maxLength:10, minLength: 4 })}
                />

                <p>
                  {errors.password?.type === "required" &&
                    "password is required"}
                     {errors.password?.type === "maxLength" &&
                    "max length exceeded"}
                      {errors.password?.type === "minLength" &&
                    "psw minimum length must be 4 digit"}
                </p>
              </div>
              <button type="submit" className="fluid ui button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
        </div>
    )
}

export default Register
