import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUserInfo } from "@/redux/slice/userSlice";
import { getUserInfo, isLoggedIn, removeUserInfo } from "@/service/authService";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user) as any;
  console.log(user);
  const data = getUserInfo();

  dispatch(
    setUserInfo({
      email: data?.data?.email,
      name: data?.data?.name,
      id: data?.data?._id,
    })
  );

  const logOut = async () => {
    removeUserInfo("accessToken");
    dispatch(
      setUserInfo({
        email: null,
        name: null,
        id: null,
      })
    );
    setLoggedIn(false);
    toast.success("LogOut Successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    navigate("/");
  };
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-white/60">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full">
          <div>
            <button
              className="pl-5 h-8 font-bold text-2xl"
              onClick={() => navigate("/")}
            >
              B O O K I S H
            </button>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/books">All Books</Link>
                </Button>
              </li>
              {!loggedIn && (
                <li className="mr-2">
                  <Button asChild>
                    <Link to="/login">LogIn</Link>
                  </Button>
                </li>
              )}
              {!loggedIn && (
                <li>
                  <Button variant="default" asChild>
                    <Link to="/signup">SignUp</Link>
                  </Button>
                </li>
              )}
              {loggedIn && (
                <li>
                  <Button variant="default" asChild>
                    <Link to="/add-new-book">Add Book</Link>
                  </Button>
                </li>
              )}

              {loggedIn && (
                <li className="ml-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>{user.name}</DropdownMenuItem>
                      <DropdownMenuItem>{user.email}</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer font-bold">
                        <Link to={`/wish-list/${user.id}`} className="w-full">
                          Wish List
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Button
                          onClick={() => logOut()}
                          variant="ghost"
                          size="sm"
                          style={{ padding: 0, color: "red" }}
                        >
                          Log Out
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
