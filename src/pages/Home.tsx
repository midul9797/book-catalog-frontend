import { Button } from "@/components/ui/button";

import BookCard from "@/components/BookCard";
import { useBooksQuery } from "@/redux/api/booksApi";
import { IBook } from "@/types";

export default function Home() {
  const data = useBooksQuery({ limit: 12 });

  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] mx-auto mt-5 p-10 bg-[url('@/assets/images/banner.jpg')] bg-cover">
        <div>
          <h1 className="text-6xl font-black text-white mb-2">
            FIND YOUR <br /> BEST FRIEND
            <br />
          </h1>
          <p className="text-yellow-100 font-semibold text-xl pt-5">
            Best way to utilize your time &<br />
            Embrace your knowledge
          </p>

          <Button className="mt-5">Learn more</Button>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase m-10">
            Top 12 Recent Books
          </h1>
        </div>

        <div className="col-span-9 grid grid-cols-3 gap-10 px-20 py-10 justify-center">
          {data?.data?.data.map((book: IBook) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
