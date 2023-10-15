import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import { useAddBookMutation } from "@/redux/api/booksApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
export default function AddNewBook() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [image, setImage] = useState("");
  const [addBook] = useAddBookMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data }: any = await addBook({
      title,
      genre,
      author,
      publication_date: publication,
      image,
    });
    if (data) {
      toast.success("Book Added Successfully!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Something went wrong!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <div className="w-[50%] ml-10 mt-10">
        <Link className="pl-5 h-8 font-bold text-2xl" to="/">
          B O O K I S H
        </Link>
      </div>
      <div className="flex flex-col w-full items-center gap-3 justify-center h-[80vh]">
        <p className="text-gray-500 font-mono text-[30px] font-bold mb-5 mt-10">
          Add New Book
        </p>
        <form className="w-80" onSubmit={handleSubmit}>
          <Label htmlFor="title" className="font-bold font-mono text-[16px]">
            Book Name
          </Label>
          <Input
            type="text"
            id="title"
            onBlur={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Book Name"
            className="mt-2 mb-2"
          />
          <Label htmlFor="author" className="font-bold font-mono text-[16px]">
            Book Author
          </Label>
          <Input
            type="text"
            id="author"
            onBlur={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Author Name"
            className="mt-2 mb-2"
          />
          <Label htmlFor="genre" className="font-bold font-mono text-[16px]">
            Genre
          </Label>
          <Input
            type="text"
            id="genre"
            placeholder="Genre"
            onBlur={(e) => {
              setGenre(e.target.value);
            }}
            className="mt-2 mb-2"
          />
          <Label
            htmlFor="publication_date"
            className="font-bold font-mono text-[16px] "
          >
            Publication Date
          </Label>
          <Input
            type="date"
            id="publication_date"
            onBlur={(e) => {
              setPublication(e.target.value);
            }}
            placeholder="Publication Date"
            className="mt-2 mb-2"
          />
          <Label htmlFor="image" className="font-bold font-mono text-[16px] ">
            Image URL
          </Label>
          <Input
            type="url"
            id="image"
            onBlur={(e) => {
              setImage(e.target.value);
            }}
            placeholder="Image URL"
            className="mt-2 mb-2"
          />
          <Button
            variant="default"
            type="submit"
            className="font-mono text-xl px-10 py-5 mt-5"
          >
            Edit
          </Button>
        </form>
      </div>
    </>
  );
}
