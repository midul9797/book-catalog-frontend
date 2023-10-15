import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/service/authService";

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  let navigate = useNavigate();
  const [userLogin] = useUserLoginMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data }: any = await userLogin({ email, password });
    if (data) {
      console.log(data);
      storeUserInfo(data);
      toast.success("LogIn Successful!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(from);
    }
  };
  return (
    <>
      <div className="w-[50%] m-10">
        <Link className="pl-5 h-8 font-bold text-2xl" to="/">
          B O O K I S H
        </Link>
      </div>
      <div className="flex flex-col w-full items-center gap-3 mt-5 h-[80vh]">
        <p className="text-gray-500 font-mono text-[35px] font-bold mb-10">
          Log In
        </p>
        <form className="w-80" onSubmit={handleSubmit}>
          <Label htmlFor="email" className="font-bold font-mono text-[18px]">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-3 mb-3"
          />
          <Label
            htmlFor="password"
            className="font-bold font-mono text-[18px] "
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-3 mb-3"
          />
          <Button
            variant="default"
            type="submit"
            className="font-mono text-xl px-10 py-5 mt-5"
            onClick={() => handleSubmit}
          >
            {" "}
            Log In
          </Button>
        </form>
      </div>
    </>
  );
}
