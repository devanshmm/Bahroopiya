const backendUrl = import.meta.env.VITE_SIGNUP_API;
console.log(backendUrl);
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
//import useFetch from "@/hooks/usefetch";
import axios from "axios";
import { useState } from "react";

function Signup(){
    const [formdata , setformdata] = useState({
        email : '', 
        password : '',
        lastname : '', 
        firstname : ''
    })
    
    console.log(formdata)
    const handleChange = (e)=>{
        setformdata({...formdata , [e.target.name] : e.target.value});
    }
    const handleSubmit = async (e) => {
        const payload = {
            firstName: formdata.firstname,
            lastName: formdata.lastname,
            email: formdata.email,
            password: formdata.password,
          };
        console.log("submit clicked")
        e.preventDefault();
      
        try {
          const response = await axios.post(backendUrl, payload);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>SIGN UP</CardTitle>
              <CardDescription>
                Enter your credentials to continue.
              </CardDescription>
            </CardHeader>
    
            <CardContent>
              <input
                 type="text"
                name="firstname"
                placeholder="First Name "
                className="border p-2 rounded w-full mb-3"
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="border p-2 rounded w-full mb-3"
                onChange={handleChange}
              />
              <input
                type="email"
                name ="email"
                placeholder="Email"
                className="border p-2 rounded w-full mb-3"
                onChange={handleChange}
              />
    
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2 rounded w-full"
                onChange={handleChange}
              />
            </CardContent>
    
            <CardFooter>
              <button className="bg-black text-white px-4 py-2 rounded w-full"
              onClick={handleSubmit}>
                SIGN UP 
              </button>
            </CardFooter>
          </Card>
        </div>
      );
}
export default Signup;