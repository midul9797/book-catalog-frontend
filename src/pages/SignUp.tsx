import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateUserMutation } from "@/redux/api/userApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data }: any = await createUser({ name, mobile, email, password });
    if (data) {
      toast.success("SignUp Successful!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    }
  };
  return (
    <>
      <div className="w-[50%] ml-10 mt-10">
        <Link className="pl-5 h-8 font-bold text-2xl" to="/">
          B O O K I S H
        </Link>
      </div>
      <div className="flex flex-col w-full items-center gap-3 h-[70vh]">
        <p className="text-gray-500 font-mono text-[30px] font-bold mb-5 mt-10">
          Sign Up
        </p>
        <form className="w-80" onSubmit={handleSubmit}>
          <Label htmlFor="name" className="font-bold font-mono text-[16px]">
            Name
          </Label>
          <Input
            type="text"
            id="name"
            onBlur={(e) => {
              setName(e.target.value);
            }}
            placeholder="Full Name"
            className="mt-2 mb-2"
          />
          <Label htmlFor="mobile" className="font-bold font-mono text-[16px]">
            Mobile NO.
          </Label>
          <Input
            type="number"
            id="mobile"
            onBlur={(e) => {
              setMobile(e.target.value);
            }}
            placeholder="Mobile NO"
            className="mt-2 mb-2"
          />
          <Label htmlFor="email" className="font-bold font-mono text-[16px]">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-2 mb-2"
          />
          <Label
            htmlFor="password"
            className="font-bold font-mono text-[16px] "
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="mt-2 mb-2"
          />
          <Button
            variant="default"
            type="submit"
            className="font-mono text-xl px-10 py-5 mt-5"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}
