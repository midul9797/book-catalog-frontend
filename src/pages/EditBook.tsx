import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useBookQuery, useUpdateBookMutation } from "@/redux/api/booksApi";

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function EditBook() {
  const { id } = useParams();
  const book: any = useBookQuery(id);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [image, setImage] = useState("");
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res: any = await updateBook({
      id,
      body: {
        title,
        genre,
        author,
        publication_date: publication,
        image,
      },
    });
    if (res?.data) {
      toast.success("Book updated Successfully!", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
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
          Edit Book
        </p>
        <form className="w-80" onSubmit={handleSubmit}>
          <Label htmlFor="title" className="font-bold font-mono text-[16px]">
            Book Name
          </Label>
          <Input
            type="text"
            defaultValue={book?.data?.title}
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
            defaultValue={book?.data?.author}
            onBlur={(e) => {
              setAuthor(e.target.defaultValue);
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
            defaultValue={book?.data?.genre}
            placeholder="Genre"
            onBlur={(e) => {
              setGenre(e.target.defaultValue);
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
            defaultValue={book?.data?.publication_date}
            onBlur={(e) => {
              setPublication(e.target.defaultValue);
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
            defaultValue={book?.data?.image}
            onBlur={(e) => {
              setImage(e.target.defaultValue);
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
