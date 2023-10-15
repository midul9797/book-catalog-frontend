import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useWishListQuery } from "@/redux/api/wishListApi";
import { Link, useParams } from "react-router-dom";

export function WishList() {
  const { id } = useParams();
  const { data } = useWishListQuery(id);
  return (
    <>
      <h1 className="mt-10 mb-5 text-[35px] font-bold text-center">
        Wish List
      </h1>

      <Table className="mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Author</TableHead>
            <TableHead className="text-center">Genre</TableHead>
            <TableHead className="text-center">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.books?.map((book: any) => (
            <TableRow key={book._id}>
              <TableCell className="text-center font-medium">
                {book.title}
              </TableCell>
              <TableCell className="text-center">{book.author}</TableCell>
              <TableCell className="text-center">{book.genre}</TableCell>
              <TableCell className="text-center ">
                <Button>
                  <Link to={`/book-details/${book._id}`}>Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
