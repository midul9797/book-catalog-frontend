import { ChangeEvent, useEffect, useState } from "react";
const useLogin = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [admin, setAdmin] = useState(false);
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    const accessToken = document.cookie;
    console.log(accessToken);
  }, []);
  return {
    setUser,
    setError,
    handleEmail,
    handleName,
    handlePassword,

    setStatus,

    setIsLoading,
  };
};

export default useLogin;
