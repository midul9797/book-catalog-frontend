import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { FiSend } from "react-icons/fi";
import { useGiveReviewMutation } from "@/redux/api/booksApi";
import { toast } from "react-toastify";

export default function BookReview({ reviews, bookId }: any) {
  const [review, setReview] = useState<string>("");
  const [giveReview] = useGiveReviewMutation();
  const handleReviewSubmit = async () => {
    const res = await giveReview({ id: bookId, message: review });
    setReview("");
    if (!res)
      toast.error("Something went wrong!", {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 ml-20 mt-20 items-center w-[70vw]">
        <Textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className="min-h-[30px]"
        />
        <Button
          onClick={() => handleReviewSubmit()}
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </div>
      <div className="m-20">
        {reviews?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>{" "}
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
