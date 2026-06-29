const backendUrl = import.meta.env.LOGIN_API;
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import axios from "axios";
import { useState } from "react";
function Login() {
    const[formdata , setformdata] = useState({
        email : '',
        password : ''
    })
    console.log(formdata); 
    const handleChange= (e)=>{
        setformdata({...formdata , [e.target.name]: e.target.value}); 
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post(backendUrl, {
            email : formdata.email, 
            password : formdata.password
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to continue.
            </CardDescription>
          </CardHeader>
  
          <CardContent>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 rounded w-full mb-3"
                onChange={handleChange}
            />
  
            <input
              type="password"
              name ='password'
              placeholder="Password"
              className="border p-2 rounded w-full"
              onChange={handleChange}
            />
          </CardContent>
  
          <CardFooter>
            <button className="bg-black text-white px-4 py-2 rounded w-full"
            onClick={handleSubmit}>
              Login
            </button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  export default Login;