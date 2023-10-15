import { IBook } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
interface IProps {
  book: IBook;
}
export default function BookCard({ book }: IProps) {
  return (
    <>
      <div className="rounded-2xl flex flex-col h-[480px] items-start p-3 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-1">
        <Link to={`/book-details/${book._id}`} className="w-full">
          <img
            src={book?.image}
            className="w-50 mx-auto h-[270px]"
            alt="book"
          />

          <h1
            className="text-xl font-semibold mt-5 pl-6 w-[100%]"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {book?.title}
          </h1>
        </Link>
        <p>
          <span className="font-semibold pl-6">Author: </span>
          {book?.author}
        </p>
        <p className="text-sm">
          <span className="font-semibold pl-6">Genre: </span>
          {book?.genre}
        </p>
        <p className="text-sm">
          <span className="font-semibold pl-6">Publication Date: </span>
          {book?.publication_date}
        </p>
        <div className="flex w-full justify-center">
          <Button className="w-full mx-5 mt-3 " variant="default">
            <Link to={`/book-details/${book._id}`} className="w-full">
              Details
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
