import BookReview from "@/components/BookReview";
import { DeleteAlert } from "@/components/DeleteAlert";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBookQuery } from "@/redux/api/booksApi";
import {
  useAddToWishListMutation,
  useWishListQuery,
} from "@/redux/api/wishListApi";
import { useAppSelector } from "@/redux/hook";
import { isLoggedIn } from "@/service/authService";
import { IBook } from "@/types";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function BookDetails() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [bookData, setBookData] = useState<IBook>({});
  const [wished, setWished] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user) as any;
  const { id } = useParams();
  const book: any = useBookQuery(id);
  let wishList: any;
  if (user) wishList = useWishListQuery(user?.id);
  const [addToWishList] = useAddToWishListMutation();

  const handleWishList = async () => {
    const res: any = await addToWishList({
      userId: user.id,
      bookId: id,
    });
    if (res?.data) {
      setWished(true);
    }
  };
  useEffect(() => {
    setBookData(book?.data);
  }, [book]);
  useEffect(() => {
    wishList?.data?.books?.map((item: any) => {
      if (item._id === id) setWished(true);
    });
  }, [wishList]);
  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center mt-20">
        <div className="w-[50%]">
          <img src={bookData?.image} alt="" className="mx-auto w-[50%]" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{bookData?.title}</h1>
          <p className="text-xl">Author: {bookData?.author}</p>
          <p className="text-xl">Genre: {bookData?.genre}</p>
          <p className="text-xl">
            Publication Date: {bookData?.publication_date}
          </p>
          {loggedIn && (
            <>
              <div className="pb-5">
                <Select onValueChange={(e) => console.log(e)}>
                  <SelectTrigger className="w-[180px] bg-black text-white">
                    <SelectValue placeholder="Currently" defaultValue={""} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="interested">Interested</SelectItem>
                      <SelectItem value="reading">Reading</SelectItem>
                      <SelectItem value="finished">Finished</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {!wished && (
                <Button
                  variant="default"
                  className="mr-5"
                  asChild
                  onClick={() => handleWishList()}
                >
                  <span style={{ cursor: "pointer" }}>Add to Wish List</span>
                </Button>
              )}
              <Button variant="default" className="mr-5" asChild>
                <Link to={`/edit-book/${bookData?._id}`}>Edit</Link>
              </Button>
              <DeleteAlert id={id} />
            </>
          )}
        </div>
      </div>
      <BookReview reviews={bookData?.reviews} bookId={id} />
    </>
  );
}
